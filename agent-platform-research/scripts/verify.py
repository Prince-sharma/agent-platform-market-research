#!/usr/bin/env python3
"""Structural verification for the agent-platform research workspace.

Checks the invariants that must hold after every phase:
  1. data/    TSV schema, row counts, wiki_slug -> file correspondence,
              normalized vocabularies, cohort stats JSON.
  2. wiki/    company pages parse (frontmatter + name), cluster pages,
              theme reports follow the template, no em dashes.
  3. app/     the built HTML exists, embeds every TSV company, links the
              wiki pages, and carries the expected tabs.
  4. reports  phase reports and the plan exist at the ideas root.

Run:  python3 agent-platform-research/scripts/verify.py
Exit: 0 if every check passes, 1 otherwise. Each check prints PASS/FAIL
with the observed value so failures are self-describing.
"""
import csv
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
RESEARCH = os.path.dirname(HERE)
ROOT = os.path.dirname(RESEARCH)

TSV = os.path.join(RESEARCH, 'data', 'companies-with-profiles.tsv')
COHORT_STATS = os.path.join(RESEARCH, 'data', 'phase3-yc-cohort-stats.json')
WIKI_COMPANIES = os.path.join(RESEARCH, 'wiki', 'companies')
WIKI_CLUSTERS = os.path.join(RESEARCH, 'wiki', 'clusters')
WIKI_THEMES = os.path.join(RESEARCH, 'wiki', 'themes')
APP = os.path.join(ROOT, 'agent-platform-market-research.html')

EXPECTED_COLUMNS = ['name', 'sources', 'files', 'one_liner', 'layer', 'scope',
                    'vertical', 'status', 'traction', 'priority',
                    'profile_depth', 'wiki_slug', 'task_horizon', 'pricing_model']
LAYERS = {'L1', 'L2', 'L3', 'L4', 'L5', 'X'}
STATUSES = {'active', 'acquired', 'pivoted', 'dead', 'unknown'}
PRIORITIES = {'high', 'normal'}
DEPTHS = {'deep', 'base', ''}
HORIZONS = {'single-turn', 'multi-step', 'long-horizon', 'persistent', 'unknown', ''}
PRICING = {'per-outcome', 'per-agent', 'usage', 'per-seat', 'platform+subscription',
           'freemium', 'other', 'unknown', ''}
BATCHES = ['W21', 'S21', 'W22', 'S22', 'W23', 'S23', 'W24', 'S24', 'F24',
           'W25', 'S25', 'F25', 'W26', 'S26']
THEME_SECTIONS = ['## Scope', '## Method', '## Findings', '## Evidence table',
                  '## Implications', '## Open questions', '## Sources']
EMDASH = '\u2014'

failures = []


def check(name, ok, detail):
    print('%s %-58s %s' % ('PASS' if ok else 'FAIL', name, detail))
    if not ok:
        failures.append(name)


def main():
    # ---------- data ----------
    rows = list(csv.DictReader(open(TSV), delimiter='\t'))
    with open(TSV) as f:
        header = f.readline().rstrip('\n').split('\t')
    check('tsv columns', header == EXPECTED_COLUMNS, 'got %d cols' % len(header))
    check('tsv row count', len(rows) >= 1300, '%d rows' % len(rows))
    check('tsv unique names', len(set(r['name'] for r in rows)) == len(rows),
          '%d unique' % len(set(r['name'] for r in rows)))

    bad_layer = sorted(set(r['layer'] for r in rows) - LAYERS)
    check('layer vocabulary', not bad_layer, 'unexpected: %s' % bad_layer or 'clean')
    bad_status = sorted(set(r['status'] for r in rows) - STATUSES)
    check('status vocabulary', not bad_status, 'unexpected: %s' % bad_status or 'clean')
    bad_prio = sorted(set(r['priority'] for r in rows) - PRIORITIES)
    check('priority vocabulary', not bad_prio, 'unexpected: %s' % bad_prio or 'clean')
    bad_depth = sorted(set(r['profile_depth'] for r in rows) - DEPTHS)
    check('profile_depth vocabulary', not bad_depth, 'unexpected: %s' % bad_depth or 'clean')
    bad_horizon = sorted(set(r['task_horizon'] for r in rows) - HORIZONS)
    check('task_horizon vocabulary', not bad_horizon, 'unexpected: %s' % bad_horizon or 'clean')
    bad_pricing = sorted(set(r['pricing_model'] for r in rows) - PRICING)
    check('pricing_model vocabulary', not bad_pricing, 'unexpected: %s' % bad_pricing or 'clean')

    slugs = [r['wiki_slug'] for r in rows if r['wiki_slug']]
    on_disk = {f[:-3] for f in os.listdir(WIKI_COMPANIES) if f.endswith('.md')}
    missing_pages = sorted(s for s in set(slugs) if s not in on_disk)
    check('wiki_slug -> page exists', not missing_pages,
          '%d slugs, %d pages, missing: %s' % (len(set(slugs)), len(on_disk),
                                               (missing_pages[:5] or 'none')))
    orphan_pages = sorted(on_disk - set(slugs))
    check('no orphan wiki pages', not orphan_pages,
          'orphans: %s' % (orphan_pages[:5] or 'none'))

    # every company page parses: frontmatter present with a name key
    bad_pages = []
    for f in sorted(os.listdir(WIKI_COMPANIES)):
        if not f.endswith('.md'):
            continue
        text = open(os.path.join(WIKI_COMPANIES, f)).read()
        if not text.startswith('---') or '\nname:' not in text.split('---')[1]:
            bad_pages.append(f)
    check('company pages parse', not bad_pages, 'bad: %s' % (bad_pages[:5] or 'none'))

    clusters = [f for f in os.listdir(WIKI_CLUSTERS) if f.endswith('.md')]
    check('cluster pages', len(clusters) == 14, '%d cluster pages' % len(clusters))

    # ---------- themes ----------
    themes = sorted(f for f in os.listdir(WIKI_THEMES) if f.endswith('.md')
                    and not f.startswith('_'))
    check('theme reports present', len(themes) == 7, '%d of 7: %s' % (len(themes), ', '.join(themes)))
    for t in themes:
        text = open(os.path.join(WIKI_THEMES, t)).read()
        missing = [s for s in THEME_SECTIONS if s not in text]
        check('theme template: %s' % t, not missing, 'missing: %s' % (missing if missing else 'none'))
        check('no em dash: %s' % t, EMDASH not in text,
              '%d occurrences' % text.count(EMDASH) if EMDASH in text else 'clean')

    # ---------- cohort stats ----------
    stats = json.load(open(COHORT_STATS))
    stat_batches = sorted(stats.get('batches', {}).keys())
    check('cohort stats batches', stat_batches == sorted(BATCHES),
          '%d batches' % len(stat_batches))

    # ---------- app ----------
    html = open(APP).read()
    check('app exists and non-trivial', len(html) > 200000, '%d bytes' % len(html))
    absent = [r['name'] for r in rows if r['name'] not in html]
    check('app embeds every company', not absent, 'missing: %s' % (absent[:5] or 'none'))
    for tab in ['overview', 'universe', 'themes', 'sizing', 'yc', 'vc', 'verticals', 'about']:
        check('app tab: %s' % tab, ('id="t-%s"' % tab) in html, 'present' if ('id="t-%s"' % tab) in html else 'absent')
    linked = html.count('agent-platform-research/wiki/companies/')
    data_match = re.search(r'const DATA = (\[.*?\]);\n', html, re.S)
    data_w = 0
    if data_match:
        try:
            data_w = sum(1 for c in json.loads(data_match.group(1)) if c.get('w'))
        except ValueError:
            data_w = -1
    check('app embeds wiki links', linked >= 1 and data_w >= len(set(slugs)) - 2,
          '%d link templates, %d DATA wiki slugs vs %d on disk' % (linked, data_w, len(set(slugs))))

    # ---------- reports ----------
    for rep, min_lines in [('agent-platform-research-plan.md', 100),
                           ('agent-platform-phase1-census.md', 200),
                           ('agent-platform-phase2-landscape.md', 100),
                           ('agent-platform-phase3-thematic.md', 100)]:
        p = os.path.join(ROOT, rep)
        ok = os.path.exists(p) and sum(1 for _ in open(p)) >= min_lines
        check('report: %s' % rep, ok, 'exists' if ok else 'missing or short')

    # ---------- harness state ----------
    state_path = os.path.join(RESEARCH, 'STATE.md')
    state_ok = os.path.exists(state_path)
    state_detail = 'exists' if state_ok else 'missing'
    if state_ok:
        state_text = open(state_path).read()
        missing_state = [h for h in ['## Campaign snapshot', '## Current focus',
                                     '## Next actions', 'Last updated:']
                         if h not in state_text]
        state_ok = not missing_state
        state_detail = 'missing sections: %s' % (missing_state or 'none')
    check('state file', state_ok, state_detail)

    print()
    if failures:
        print('%d CHECK(S) FAILED: %s' % (len(failures), ', '.join(failures)))
        return 1
    print('ALL CHECKS PASSED')
    return 0


if __name__ == '__main__':
    sys.exit(main())
