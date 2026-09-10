#!/usr/bin/env node
/* Runtime verification for agent-platform-market-research.html (Phase 4 gate).
 *
 * 1. Extracts the inline <script> from the built app.
 * 2. Syntax-checks it (compiles without executing).
 * 3. Executes it under a minimal DOM shim and asserts the render counts:
 *    DATA companies, THEMES theme reports, COHORT batches, the overview
 *    stat cards, the universe table, the YC and VC tables, and the company
 *    drawer opening for a sample company.
 *
 * Run:   node agent-platform-research/scripts/verify_app.js
 * Exit:  0 if every check passes, 1 otherwise.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const APP = path.join(ROOT, 'agent-platform-market-research.html');

const failures = [];
function check(name, ok, detail) {
  console.log((ok ? 'PASS ' : 'FAIL ') + name.padEnd(52) + ' ' + detail);
  if (!ok) failures.push(name);
}

const html = fs.readFileSync(APP, 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
check('script blocks found', scripts.length >= 1, String(scripts.length));
const src = scripts[scripts.length - 1];

// 0. v4 browsability and accessibility features are present in the built app
check('app a11y roles', html.includes('role="tablist"') && html.includes('role="tabpanel"') &&
  html.includes('role="dialog"') && html.includes('aria-live="polite"'),
  'tablist, tabpanel, dialog, live regions');
check('app global search', html.includes('id="gq"') && html.includes('id="gres"'), 'header search present');
check('app deep links', src.includes('applyHash') && src.includes('hashchange') && src.includes('buildHash'),
  'hash routing present');
check('app csv export', src.includes('exportCsv'), 'exportCsv present');
check('app column sorting', html.includes('data-k="n"') && src.includes('sortKey'), 'sortable table heads');

// 1. syntax: compiles without running
let syntaxOk = true;
try { new Function(src); } catch (e) { syntaxOk = false; var syntaxErr = e.message; }
check('app js syntax', syntaxOk, syntaxOk ? 'compiles' : syntaxErr);

// 2. runtime under a DOM shim
const elements = {};
function fakeEl(selector) {
  if (!elements[selector]) {
    elements[selector] = {
      selector, innerHTML: '', textContent: '', value: '', style: {},
      dataset: {}, title: '',
      classList: { add() {}, remove() {}, contains() { return false; } },
      addEventListener() {}, closest() { return null; },
    };
  }
  return elements[selector];
}
global.document = {
  querySelector: s => fakeEl(s),
  querySelectorAll: () => [],
  addEventListener() {},
  getElementById: id => fakeEl('#' + id),
};
global.window = {};
global.event = undefined;

let DATA, THEMES, COHORT, openDrawer, runtimeErr = null;
try {
  const out = new Function(src + '\n;return {DATA, THEMES, COHORT, openDrawer: window.openDrawer};')();
  DATA = out.DATA; THEMES = out.THEMES; COHORT = out.COHORT; openDrawer = out.openDrawer;
} catch (e) { runtimeErr = e.message + '\n' + (e.stack || '').split('\n').slice(0, 4).join('\n'); }
check('app js runtime', runtimeErr === null, runtimeErr === null ? 'executes clean' : runtimeErr);

if (runtimeErr === null) {
  check('runtime DATA companies', DATA.length === 1328, String(DATA.length));
  check('runtime THEMES reports', THEMES.length === 8, String(THEMES.length));
  check('runtime theme refs', THEMES.map(t => t.ref).join(',') === 'P3.1,P3.2,P3.3,P3.4,P3.5,P3.6,P3.7,P3.8',
    THEMES.map(t => t.ref).join(','));
  check('runtime COHORT batches', Object.keys(COHORT.batches || {}).length === 14,
    String(Object.keys(COHORT.batches || {}).length));

  const withWiki = DATA.filter(c => c.w).length;
  const deep = DATA.filter(c => c.d === 'deep').length;
  const yc = DATA.filter(c => c.b && c.b.length).length;
  check('runtime wiki links', withWiki === 766, String(withWiki));
  check('runtime deep profiles', deep === 303, String(deep));
  check('runtime YC companies', yc >= 700, String(yc));

  const stat = elements['#statcards'] ? elements['#statcards'].innerHTML : '';
  check('runtime overview cards render', stat.includes('Companies') && stat.includes('Theme reports'),
    stat ? 'rendered' : 'empty');

  const uni = elements['#ubody'] ? elements['#ubody'].innerHTML : '';
  const uniRows = uni.split('<tr').length - 1;
  check('runtime universe rows', uniRows === 1328, uniRows + ' rows');

  const ycb = elements['#ycbody'] ? elements['#ycbody'].innerHTML : '';
  const ycRows = ycb.split('<tr').length - 1;
  check('runtime yc rows', ycRows === yc, ycRows + ' rows (all ' + yc + ' YC companies rendered; v4 removed the 600 cap)');

  const vcb = elements['#vcbody'] ? elements['#vcbody'].innerHTML : '';
  const vcRows = vcb.split('<tr').length - 1;
  check('runtime vc rows', vcRows >= 100, vcRows + ' rows');

  const cohort = elements['#cohortbody'] ? elements['#cohortbody'].innerHTML : '';
  const cohortRows = cohort.split('<tr').length - 1;
  check('runtime cohort table rows', cohortRows === 14, cohortRows + ' rows');

  if (typeof openDrawer === 'function') {
    openDrawer('Sierra');
    const d = elements['#dcontent'] ? elements['#dcontent'].innerHTML : '';
    check('runtime drawer opens', d.includes('Sierra') && d.includes('wiki page'),
      d ? 'rendered' : 'empty');
  } else {
    check('runtime drawer opens', false, 'openDrawer not exported');
  }
}

console.log();
if (failures.length) {
  console.log('%d CHECK(S) FAILED: %s', failures.length, failures.join(', '));
  process.exit(1);
}
console.log('ALL APP CHECKS PASSED');
