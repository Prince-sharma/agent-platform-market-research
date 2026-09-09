const LAYERS = ['L1','L2','L3','L4','L5','X'];
const LNAME = {L1:'L1 Infrastructure',L2:'L2 Build platforms',L3:'L3 Vertical agents',L4:'L4 Services',L5:'L5 Suite products',X:'X Modalities'};
const BATCHES = ['W21','S21','W22','S22','W23','S23','W24','S24','F24','W25','S25','F25','W26','S26'];
const TABS = ['overview','universe','themes','wiki','sizing','yc','vc','verticals','about'];
const THEME_TOTAL = 7;
const THEME_ORDER = ['P3.1','P3.2','P3.3','P3.4','P3.5','P3.6','P3.7'];

// ---------- helpers ----------
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const esc = s => String(s||'').replace(/&/g,'&'+'amp;').replace(/</g,'&'+'lt;').replace(/>/g,'&'+'gt;');
const pill = (v,cls) => '<span class="pill '+(cls||v)+'">'+esc(v)+'</span>';
function safeFocus(el){ try{ if(el && typeof el.focus === 'function') el.focus(); }catch(e){} }
function setAria(el,k,v){ try{ el.setAttribute(k,v); }catch(e){ try{ el[k]=v; }catch(e2){} } }
function tally(arr, key){ const m={}; arr.forEach(x=>{const k=key(x); m[k]=(m[k]||0)+1;}); return m; }
function sortedEntries(m){ return Object.entries(m).sort((a,b)=>b[1]-a[1]); }
function barChart(el, pairs, opts){
  opts = opts || {};
  const max = Math.max(...pairs.map(p=>p[2]), 1);
  el.innerHTML = pairs.map(p=>'<div class="bar'+(opts.onClick?' clickable':'')+'" data-k="'+esc(p[0])+'"'+(opts.onClick?' title="Click to filter"':'')+'><div class="lbl" title="'+esc(p[1])+'">'+esc(p[1])+'</div><div class="track"><div class="fill" style="width:'+(100*p[2]/max)+'%'+(opts.color?';background:'+opts.color:'')+'"></div></div><div class="num">'+p[2]+'</div></div>').join('');
  if(opts.onClick){
    el.addEventListener('click', e=>{
      const b = e.target.closest('.bar'); if(!b) return;
      opts.onClick(b.dataset.k);
    });
  }
}
const LCOLOR = {L1:'#6366f1',L2:'#10b981',L3:'#f97316',L4:'#d946ef',L5:'#3b82f6',X:'#ef4444'};
const SCOLOR = {active:'#10b981',acquired:'#8b5cf6',pivoted:'#f59e0b',dead:'#ef4444',unknown:'#94a3b8'};
function stackBar(el, pairs, opts){
  opts = opts || {};
  const total = pairs.reduce((s,p)=>s+p[2],0) || 1;
  el.innerHTML = '<div class="stackbar" role="img" aria-label="Share of the universe by layer">'
    + pairs.map(p=>'<button type="button" class="seg" data-k="'+esc(p[0])+'" style="flex-grow:'+Math.max(p[2],0.6)+';background:'+LCOLOR[p[0]]+'" title="'+esc(p[1])+': '+p[2]+' ('+(100*p[2]/total).toFixed(1)+'%)">'+((100*p[2]/total)>=7?p[2]:'')+'</button>').join('')
    + '</div><div class="stackleg">'
    + pairs.map(p=>'<button type="button" class="lg" data-k="'+esc(p[0])+'" title="Open the universe filtered to '+esc(p[1])+'"><span class="dot" style="background:'+LCOLOR[p[0]]+'"></span><span class="nm">'+esc(p[1])+'</span><span class="ct">'+p[2]+' &middot; '+(100*p[2]/total).toFixed(0)+'%</span></button>').join('')
    + '</div>';
  if(opts.onClick){
    el.addEventListener('click', e=>{ const b = e.target.closest('[data-k]'); if(b) opts.onClick(b.dataset.k); });
  }
}
function donutChart(el, pairs, opts){
  opts = opts || {};
  const total = pairs.reduce((s,p)=>s+p[2],0) || 1;
  let cum = 0;
  const segs = pairs.map(p=>{
    const pct = 100*p[2]/total;
    const off = ((25 - cum) % 100 + 100) % 100;
    cum += pct;
    if(p[2] <= 0) return '';
    return '<circle class="dseg" data-k="'+esc(p[0])+'" cx="100" cy="100" r="80" fill="none" stroke="'+p[3]+'" stroke-width="26" pathLength="100" stroke-dasharray="'+pct+' '+(100-pct)+'" stroke-dashoffset="'+off+'" tabindex="0" role="button" aria-label="'+esc(p[1])+': '+p[2]+' companies"><title>'+esc(p[1])+': '+p[2]+'</title></circle>';
  }).join('');
  el.innerHTML = '<div class="donutwrap">'
    + '<svg class="donut" viewBox="0 0 200 200" role="img" aria-label="Status distribution">'
    + segs
    + '<text x="100" y="97" text-anchor="middle" font-size="36" font-weight="700" fill="#0f172a">'+total+'</text>'
    + '<text x="100" y="119" text-anchor="middle" font-size="12.5" fill="#64748b">companies</text>'
    + '</svg>'
    + '<div class="dleg">'
    + pairs.map(p=>'<button type="button" class="lg" data-k="'+esc(p[0])+'" title="Open the universe filtered to '+esc(p[1])+'"><span class="dot" style="background:'+p[3]+'"></span><span class="nm">'+esc(p[1])+'</span><span class="ct">'+p[2]+' &middot; '+(100*p[2]/total).toFixed(1)+'%</span></button>').join('')
    + '</div></div>';
  if(opts.onClick){
    el.addEventListener('click', e=>{ const b = e.target.closest('[data-k]'); if(b) opts.onClick(b.dataset.k); });
    el.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ const b = e.target.closest('[data-k]'); if(b){ e.preventDefault(); opts.onClick(b.dataset.k); } } });
  }
}
function colChart(el, pairs, opts){
  opts = opts || {};
  const W=780, H=224, padL=34, padR=8, padT=16, padB=46;
  const max = Math.max(...pairs.map(p=>p[2]), 1);
  const step = Math.max(1, Math.ceil(max/4));
  const top = step*4;
  const iw = (W-padL-padR)/pairs.length;
  const ih = H-padT-padB;
  let s = '<svg class="colchart" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Companies per YC batch">';
  for(let g=0; g<=4; g++){
    const y = padT + ih*(1-g*step/top);
    s += '<line x1="'+padL+'" y1="'+y+'" x2="'+(W-padR)+'" y2="'+y+'" stroke="#e2e8f0" stroke-width="1"/>'
       + '<text x="'+(padL-7)+'" y="'+(y+3.5)+'" text-anchor="end" font-size="10.5" fill="#64748b">'+(g*step)+'</text>';
  }
  pairs.forEach((p,i)=>{
    const h = ih*p[2]/top;
    const x = padL + i*iw + iw*0.16, w = iw*0.68;
    const y = H-padB-h;
    s += '<g class="col clickable" data-k="'+esc(p[0])+'" tabindex="0" role="button" aria-label="'+esc(p[1])+': '+p[2]+' companies">'
       + '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+Math.max(h,1.5)+'" rx="3.5" fill="#4f46e5"><title>'+esc(p[1])+': '+p[2]+'</title></rect>'
       + (p[2] ? '<text x="'+(x+w/2)+'" y="'+(y-5)+'" text-anchor="middle" font-size="10.5" fill="#64748b">'+p[2]+'</text>' : '')
       + '<text x="'+(x+w/2)+'" y="'+(H-padB+15)+'" text-anchor="middle" font-size="10.5" font-weight="600" fill="#0f172a">'+esc(p[0])+'</text>'
       + '</g>';
  });
  let ys = null, start = 0;
  const groups = [];
  pairs.forEach((p,i)=>{
    const yr = '20'+p[0].slice(1);
    if(ys === null){ ys = yr; start = i; }
    else if(yr !== ys){ groups.push([start, i-1, ys]); ys = yr; start = i; }
  });
  groups.push([start, pairs.length-1, ys]);
  groups.forEach(g=>{
    const x1 = padL + g[0]*iw, x2 = padL + (g[1]+1)*iw;
    s += '<line x1="'+(x1+iw*0.06)+'" y1="'+(H-padB+24)+'" x2="'+(x2-iw*0.06)+'" y2="'+(H-padB+24)+'" stroke="#cbd5e1" stroke-width="1"/>';
    s += '<text x="'+((x1+x2)/2)+'" y="'+(H-padB+38)+'" text-anchor="middle" font-size="11" fill="#64748b">'+g[2]+'</text>';
  });
  s += '</svg>';
  el.innerHTML = s;
  if(opts.onClick){
    el.addEventListener('click', e=>{ const b = e.target.closest('.col'); if(b) opts.onClick(b.dataset.k); });
    el.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ const b = e.target.closest('.col'); if(b){ e.preventDefault(); opts.onClick(b.dataset.k); } } });
  }
}
function rowAttr(name){
  const n = esc(name).replace(/'/g,"\\'");
  return ' tabindex="0" onclick="openDrawer(\''+n+'\')" onkeydown="rowKey(event,\''+n+'\')" title="Open company profile"';
}

// ---------- state ----------
let activeTab = 'overview';
let layerFilter = '';
let sortKey = 'n', sortDir = 1;
let themeIdx = 0;
let drawerOpen = false, drawerCompany = null, lastFocus = null;
let wikiSlug = '';
const HAS_LOC = typeof location !== 'undefined';

// ---------- hash deep links ----------
function buildHash(){
  const p = new URLSearchParams();
  if(activeTab !== 'overview') p.set('t', activeTab);
  const q = $('#q').value; if(q) p.set('q', q);
  if(layerFilter) p.set('layer', layerFilter);
  [['scope','f-scope'],['status','f-status'],['prio','f-prio'],['vert','f-vert'],['depth','f-depth'],['horizon','f-horizon'],['pricing','f-pricing']].forEach(pair=>{
    const v = $('#'+pair[1]).value; if(v) p.set(pair[0], v);
  });
  // Per-column filters
  [['cfn','n'],['cfl','l'],['cfv','v'],['cfst','st'],['cfp','p'],['cfo','o']].forEach(pair=>{
    const el = $('#utable .col-filter[data-col="'+pair[1]+'"]');
    if(el && el.value) p.set(pair[0], el.value);
  });
  if(sortKey !== 'n' || sortDir !== 1) p.set('srt', (sortDir<0?'-':'')+sortKey);
  const ycb = $('#yc-batch').value; if(ycb) p.set('ycb', ycb);
  const vv = $('#v-vert').value; if(vv) p.set('vv', vv);
  if(themeIdx) p.set('th', themeIdx);
  if(drawerCompany) p.set('c', drawerCompany);
  if(wikiSlug) p.set('w', wikiSlug);
  return '#'+p.toString();
}
function pushHash(){ if(!HAS_LOC) return; const h = buildHash(); if(location.hash !== h) location.hash = h; }
function replaceHash(){ if(!HAS_LOC) return; const h = buildHash(); if(window.history && window.history.replaceState) window.history.replaceState(null, '', h); }
function applyHash(){
  const p = new URLSearchParams(HAS_LOC && location.hash.length > 1 ? location.hash.slice(1) : '');
  const t = p.get('t') || 'overview';
  activateTab(TABS.indexOf(t) >= 0 ? t : 'overview', false);
  $('#q').value = p.get('q') || '';
  layerFilter = p.get('layer') || '';
  syncLayerChips();
  $('#f-scope').value = p.get('scope') || '';
  $('#f-status').value = p.get('status') || '';
  $('#f-prio').value = p.get('prio') || '';
  $('#f-vert').value = p.get('vert') || '';
  $('#f-depth').value = p.get('depth') || '';
  $('#f-horizon').value = p.get('horizon') || '';
  $('#f-pricing').value = p.get('pricing') || '';
  // Per-column filters
  [['cfn','n'],['cfl','l'],['cfv','v'],['cfst','st'],['cfp','p'],['cfo','o']].forEach(pair=>{
    const el = $('#utable .col-filter[data-col="'+pair[1]+'"]');
    if(el) el.value = p.get(pair[0]) || '';
  });
  syncColFilterActive();
  const srt = p.get('srt');
  sortKey = 'n'; sortDir = 1;
  if(srt){ if(srt[0] === '-'){ sortDir = -1; sortKey = srt.slice(1); } else { sortKey = srt; } }
  renderUniverse(false);
  $('#yc-batch').value = p.get('ycb') || '';
  renderYc(false);
  $('#v-vert').value = p.get('vv') || '';
  renderV(false);
  selectTheme(parseInt(p.get('th') || '0', 10) || 0, false);
  const c = p.get('c');
  if(c && DATA.some(x=>x.n === c)) window.openDrawer(c, false);
  else window.closeDrawer(false);
  const w = p.get('w');
  if(w && WIKI[w]) selectWiki(w, false);
}

// ---------- tabs ----------
function activateTab(t, sync){
  activeTab = t;
  document.body.dataset.tab = t;
  $$('#nav button').forEach(b=>{
    const on = b.dataset.t === t;
    b.classList[on ? 'add' : 'remove']('on');
    setAria(b, 'aria-selected', on ? 'true' : 'false');
  });
  $$('main section').forEach(s=>s.classList.remove('on'));
  const sec = $('#t-'+t); if(sec) sec.classList.add('on');
  if(sync !== false) pushHash();
}
$('#nav').addEventListener('click', e=>{
  const b = e.target.closest('button'); if(!b) return;
  activateTab(b.dataset.t);
});
function goUniverse(mut){
  mut();
  activateTab('universe', false);
  pushHash();
}

// ---------- overview ----------
(function(){
  $('.nc').textContent = DATA.length;
  const byLayer = tally(DATA, c=>c.l);
  const hi = DATA.filter(c=>c.p==='high').length;
  const acq = DATA.filter(c=>c.st==='acquired').length;
  const yc = DATA.filter(c=>c.b.length).length;
  const wiki = DATA.filter(c=>c.w).length;
  const deep = DATA.filter(c=>c.d==='deep').length;
  const lh = DATA.filter(c=>c.h==='long-horizon'||c.h==='persistent').length;
  $('.pw').textContent = wiki;
  $('.pd').textContent = deep;
  $('.nt').textContent = THEMES.length;
  const cards = [
    ['Companies', DATA.length, 'after dedup, 16 sweeps'],
    ['High priority', hi, 'recent batch or real adoption'],
    ['Wiki pages', wiki, 'Phase 2, one per profiled company'],
    ['Deep profiles', deep, 'eleven build decisions researched'],
    ['Theme reports', THEMES.length, 'of 7 planned; Phase 3 thematic deep-dives'],
    ['Vertical agents', byLayer.L3||0, 'layer 3, the center of gravity'],
    ['Infrastructure', byLayer.L1||0, 'layer 1, arrived after the apps'],
    ['Long+persistent', lh, 'hours-to-weeks plus always-on agents'],
    ['YC cohort', yc, 'across 14 batches W21-S26'],
    ['Acquired', acq, 'suites are buying proven agents'],
  ];
  $('#statcards').innerHTML = cards.map((c,i)=>'<div class="card'+(i===0?' hero':'')+'"><div class="k">'+c[0]+'</div><div class="v">'+c[1]+'</div><div class="sub">'+c[2]+'</div></div>').join('');
  stackBar($('#ch-layer'), LAYERS.map(l=>[l, LNAME[l], byLayer[l]||0]), {onClick:k=>goUniverse(()=>{ layerFilter=k; syncLayerChips(); })});
  const vm = tally(DATA.filter(c=>c.sc==='vertical'), c=>c.v);
  barChart($('#ch-vert'), sortedEntries(vm).slice(0,18).map(([k,v])=>[k,k,v]), {onClick:k=>goUniverse(()=>{ $('#f-vert').value=k; })});
  const sm = tally(DATA, c=>c.st);
  donutChart($('#ch-status'), sortedEntries(sm).map(([k,v])=>[k,k,v,SCOLOR[k]||'#94a3b8']), {onClick:k=>goUniverse(()=>{ $('#f-status').value=k; })});
})();

// ---------- universe ----------
const colFilters = {};
function getColFilterVal(col){
  const el = $('#utable .col-filter[data-col="'+col+'"]');
  return el ? el.value.toLowerCase() : '';
}
function getFiltered(){
  const q = $('#q').value.toLowerCase();
  const sc = $('#f-scope').value, st = $('#f-status').value, pr = $('#f-prio').value, vt = $('#f-vert').value;
  const dp = $('#f-depth').value, hz = $('#f-horizon').value, pc = $('#f-pricing').value;
  const cfN = getColFilterVal('n'), cfL = getColFilterVal('l'), cfV = getColFilterVal('v'),
        cfSt = getColFilterVal('st'), cfP = getColFilterVal('p'), cfO = getColFilterVal('o');
  return DATA.filter(c =>
    (!layerFilter || c.l===layerFilter) &&
    (!sc || c.sc===sc) && (!st || c.st===st) && (!pr || c.p===pr) && (!vt || c.v===vt) &&
    (!dp || (dp==='none' ? !c.d : c.d===dp)) &&
    (!hz || c.h===hz) && (!pc || c.pr===pc) &&
    (!q || (c.n+' '+c.o+' '+c.t+' '+c.s).toLowerCase().includes(q)) &&
    (!cfN || c.n.toLowerCase().includes(cfN)) &&
    (!cfL || c.l===cfL.toUpperCase()) &&
    (!cfV || c.v===cfV || c.v.toLowerCase().includes(cfV)) &&
    (!cfSt || c.st===cfSt) &&
    (!cfP || c.p===cfP) &&
    (!cfO || c.o.toLowerCase().includes(cfO)));
}
function sortRows(rows){
  rows.sort((a,b)=>{
    let x = a[sortKey] || '', y = b[sortKey] || '';
    if(sortKey === 'p'){ x = x==='high' ? 0 : 1; y = y==='high' ? 0 : 1; }
    const c = String(x).localeCompare(String(y));
    return (c * sortDir) || a.n.localeCompare(b.n);
  });
}
function rowHtml(c){
  return '<tr'+rowAttr(c.n)+'><td><b>'+esc(c.n)+'</b>'+(c.d==='deep'?' <span class="pill deep">deep</span>':'')+(c.w?' <a href="#t=wiki&w=companies/'+c.w+'" onclick="event.stopPropagation();activateTab(\'wiki\',false);selectWiki(\'companies/'+c.w+'\')" onkeydown="event.stopPropagation()" title="wiki page">🔗</a>':'')+'</td><td>'+pill(c.l)+'</td><td>'+esc(c.v)+'</td><td>'+pill(c.st)+'</td><td>'+pill(c.p)+'</td><td style="color:var(--mut)">'+esc(c.o)+'</td></tr>';
}
function updateSortHeads(){
  $$('#utable thead tr:first-child th').forEach(th=>{
    const on = th.dataset.k === sortKey;
    th.classList.remove('sort-asc','sort-desc');
    if(on) th.classList.add(sortDir>0 ? 'sort-asc' : 'sort-desc');
    setAria(th, 'aria-sort', on ? (sortDir>0?'ascending':'descending') : 'none');
  });
}
function renderUniverse(sync){
  const rows = getFiltered();
  sortRows(rows);
  const cap = 2000, shown = Math.min(rows.length, cap);
  $('#ucount').textContent = rows.length + ' of ' + DATA.length + ' companies' + (rows.length > cap ? ' (showing the first ' + cap + ')' : '');
  $('#ubody').innerHTML = rows.slice(0, cap).map(rowHtml).join('');
  $('#uempty').style.display = rows.length ? 'none' : 'block';
  updateSortHeads();
  syncColFilterActive();
  if(sync !== false) replaceHash();
}
function syncLayerChips(){
  $$('#layerchips .chip').forEach(ch=>{
    const on = ch.dataset.l === layerFilter;
    ch.classList[on ? 'add' : 'remove']('on');
    setAria(ch, 'aria-pressed', on ? 'true' : 'false');
  });
}
$('#layerchips').innerHTML = '<button class="chip on" data-l="" aria-pressed="true">All layers</button>' + LAYERS.map(l=>'<button class="chip" data-l="'+l+'" aria-pressed="false">'+LNAME[l]+'</button>').join('');
$('#layerchips').addEventListener('click', e=>{
  const b = e.target.closest('.chip'); if(!b) return;
  layerFilter = b.dataset.l;
  syncLayerChips();
  renderUniverse();
});
(function(){
  const vm = tally(DATA.filter(c=>c.sc==='vertical'), c=>c.v);
  const opts = sortedEntries(vm).map(([k])=>'<option>'+esc(k)+'</option>').join('');
  $('#f-vert').innerHTML = '<option value="">Vertical: all</option>' + opts;
  const cfv = $('#utable .col-filter[data-col="v"]');
  if(cfv) cfv.innerHTML = '<option value="">All</option>' + opts;
})();
function syncColFilterActive(){
  $$('#utable .col-filter').forEach(el=>{
    el.classList[el.value ? 'add' : 'remove']('active');
  });
}
['#q','#f-scope','#f-status','#f-prio','#f-depth','#f-vert','#f-horizon','#f-pricing'].forEach(s=>$(s).addEventListener('input', renderUniverse));
$$('#utable .col-filter').forEach(el=>el.addEventListener('input', ()=>{ syncColFilterActive(); renderUniverse(); }));
window.clearAllFilters = function(){
  $('#q').value = '';
  $('#f-scope').value = ''; $('#f-status').value = ''; $('#f-prio').value = '';
  $('#f-depth').value = ''; $('#f-vert').value = ''; $('#f-horizon').value = ''; $('#f-pricing').value = '';
  layerFilter = ''; syncLayerChips();
  $$('#utable .col-filter').forEach(el=>el.value='');
  syncColFilterActive();
  sortKey = 'n'; sortDir = 1;
  renderUniverse();
};
$('#utable').addEventListener('click', e=>{
  const th = e.target.closest('th'); if(!th || !th.dataset.k) return;
  if(sortKey === th.dataset.k) sortDir = -sortDir; else { sortKey = th.dataset.k; sortDir = 1; }
  renderUniverse();
});
renderUniverse(false);

window.exportCsv = function(){
  const rows = getFiltered();
  sortRows(rows);
  const cols = [['name','n'],['layer','l'],['scope','sc'],['vertical','v'],['status','st'],['priority','p'],['profile_depth','d'],['task_horizon','h'],['pricing_model','pr'],['yc_batches','b'],['backers','f'],['one_liner','o'],['traction','t'],['sources','s']];
  const q = v => '"'+String(v==null?'':v).replace(/"/g,'""')+'"';
  let csv = cols.map(c=>c[0]).join(',')+'\n';
  rows.forEach(r=>{
    csv += cols.map(c=>{
      let v = r[c[1]];
      if(c[1]==='b'||c[1]==='f') v = (v||[]).join('; ');
      return q(v);
    }).join(',')+'\n';
  });
  const blob = new Blob([csv],{type:'text/csv;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'agent-platform-universe-'+rows.length+'-companies.csv';
  document.body.appendChild(a); a.click(); a.remove();
};

// ---------- themes ----------
const THEMES_SORTED = THEMES.slice().sort((a,b)=>THEME_ORDER.indexOf(a.ref)-THEME_ORDER.indexOf(b.ref));
function selectTheme(i, sync){
  const t = THEMES_SORTED[i]; if(!t) return;
  themeIdx = i;
  $$('#themechips .chip').forEach((ch,j)=>ch.classList[j===i?'add':'remove']('on'));
  let html = '<div class="panel">'
    + '<div class="trefline">'+esc(t.ref)+' &middot; Phase 3 theme</div>'
    + '<h2 style="font-size:19px">'+esc(t.title)+'</h2>'
    + '<p class="tscope">'+esc(t.scope)+'</p>'
    + '<div class="grid cards tstats">' + (t.stats||[]).map(s=>'<div class="card"><div class="k">'+esc(s.label)+'</div><div class="v" style="font-size:19px">'+esc(s.value)+'</div><div class="sub">'+esc(s.note||'')+'</div></div>').join('') + '</div>'
    + '<h3 style="margin-top:18px">Headline</h3><p class="theadline">'+esc(t.headline)+'</p>'
    + '<h3 style="margin-top:18px">Findings</h3><ol class="tlist">'+(t.findings||[]).map(f=>'<li>'+esc(f)+'</li>').join('')+'</ol>'
    + '<h3 style="margin-top:18px">Implications for the platform question</h3><ul class="tbul">'+(t.implications||[]).map(f=>'<li>'+esc(f)+'</li>').join('')+'</ul>'
    + '<h3 style="margin-top:18px">Open questions</h3><ul class="tbul">'+(t.open_questions||[]).map(f=>'<li>'+esc(f)+'</li>').join('')+'</ul>'
    + '<p style="margin-top:18px"><a href="#t=wiki&w='+t.file.replace(/^wiki\//,'')+'" onclick="event.preventDefault();activateTab(\'wiki\',false);selectWiki(\''+t.file.replace(/^wiki\//,'')+'\')">Read the full theme report &rarr;</a></p></div>';
  $('#themedetail').innerHTML = html;
  if(sync !== false) replaceHash();
}
$('#themechips').innerHTML = THEMES_SORTED.map((t,i)=>'<button type="button" class="chip'+(i===0?' on':'')+'" data-i="'+i+'"><span class="tref">'+esc(t.ref)+'</span><span class="ttitle">'+esc(t.title)+'</span></button>').join('')
  + THEME_ORDER.filter(r=>!THEMES.some(t=>t.ref===r)).map(r=>'<button type="button" class="chip missing" disabled><span class="tref">'+r+'</span><span class="ttitle">In flight</span></button>').join('');
(function(){
  const missing = THEME_ORDER.filter(r=>!THEMES.some(t=>t.ref===r));
  $('#themecount').textContent = THEMES.length + ' of ' + THEME_TOTAL + ' theme reports from Phase 3, each with scripted counts and primary-source checks' + (missing.length ? '. In flight: ' + missing.join(', ') + '.' : '');
})();
$('#themechips').addEventListener('click', e=>{
  const b = e.target.closest('.chip'); if(!b) return;
  selectTheme(+b.dataset.i);
});
selectTheme(0, false);

// ---------- wiki ----------
const WIKI_ENTRIES = Object.keys(WIKI).map(slug=>{
  const p = WIKI[slug];
  const kind = slug.split('/')[0];
  const kindLabel = {companies:'Company',clusters:'Cluster',themes:'Theme',reports:'Report'}[kind] || kind;
  return {slug, title:p.t, kind, kindLabel, raw:p.r, meta:p.m};
}).sort((a,b)=>{
  const order = {reports:0,themes:1,clusters:2,companies:3};
  const oa = order[a.kind]!==undefined?order[a.kind]:9;
  const ob = order[b.kind]!==undefined?order[b.kind]:9;
  return oa-ob || a.title.localeCompare(b.title);
});
function renderWikiList(){
  const q = ($('#wq').value||'').toLowerCase().trim();
  const filtered = q ? WIKI_ENTRIES.filter(e=>(e.title+' '+e.slug).toLowerCase().includes(q)) : WIKI_ENTRIES;
  $('#wlist').innerHTML = filtered.map(e=>
    '<button type="button" class="witem'+(e.slug===wikiSlug?' on':'')+'" data-w="'+esc(e.slug)+'"><span class="wk">'+esc(e.kindLabel)+'</span><span class="wt">'+esc(e.title)+'</span></button>'
  ).join('') || '<div style="padding:12px;color:var(--mut);font-size:12.5px">No pages match.</div>';
}
function selectWiki(slug, sync){
  const p = WIKI[slug]; if(!p) return;
  wikiSlug = slug;
  const entry = WIKI_ENTRIES.find(e=>e.slug===slug);
  let html = '<div class="wpage">';
  if(entry) html += '<div class="wmeta">'+esc(entry.kindLabel)+'</div>';
  html += p.h;
  html += '<div class="wraw">Raw markdown: <a href="'+esc(p.r)+'" target="_blank" rel="noopener">'+esc(p.r)+'</a></div>';
  html += '</div>';
  $('#wcontent').innerHTML = html;
  renderWikiList();
  if(sync !== false) pushHash();
  try{ $('#wcontent').scrollTo(0,0); }catch(e){}
  try{ $('#wcontent').focus({preventScroll:true}); }catch(e){}
}
$('#wq').addEventListener('input', renderWikiList);
$('#wlist').addEventListener('click', e=>{
  const b = e.target.closest('.witem'); if(!b) return;
  selectWiki(b.dataset.w);
});
$('#wcontent').addEventListener('click', e=>{
  const a = e.target.closest('a.wl'); if(!a) return;
  e.preventDefault();
  const w = a.dataset.w; if(w && WIKI[w]) selectWiki(w);
});
renderWikiList();
if(WIKI_ENTRIES.length) selectWiki(WIKI_ENTRIES[0].slug, false);

// ---------- sizing ----------
(function(){
  const cards = [
    ['2030 TAM', '$50-120B', 'work-agent software, estimate; high end assumes per-outcome pricing spreads'],
    ['2026 revenue', '$8-15B', 'scaled work-agent software; $5.0-5.5B visible across 64 disclosing companies'],
    ['Platform SAM 2026', '$2-6B', 'bracketed by Menlo $750M and Gartner $9.5B AI App Dev Platforms'],
    ['L3 funding share', '$20.4B / 72%', 'vertical agents of $28.3B total visible funding'],
    ['M&A 2024-26', '$13-18B', 'estimated total; $10.4B disclosed across 8 priced deals'],
  ];
  $('#sizingcards').innerHTML = cards.map(c=>'<div class="card"><div class="k">'+c[0]+'</div><div class="v" style="font-size:22px">'+c[1]+'</div><div class="sub">'+c[2]+'</div></div>').join('');
  const lenses = [
    ['Lens A: top-down', 'Labor budgets are the ceiling. If work agents capture a growing slice of the service budgets they substitute for, the 2030 TAM lands near the high end ($120B); if they stay software-line-item purchases, near the low end ($50B). The estimate is sensitive to per-outcome pricing adoption because that is what moves spend from software budgets to labor-comparable budgets.'],
    ['Lens B: bottom-up', 'Summing disclosed and estimated revenue across the census: $5.0-5.5B visible across 64 disclosing companies (Cognition ~$900M, Salesforce Agentforce $800M, Cursor $500M+ lead), scaled to $8-15B for the non-disclosing majority. Confidence: medium; private ARR is as-reported.'],
    ['Lens C: deal flow', 'Funding and M&A as a signal: $28.3B total visible funding with L3 at $20.4B (72%); $13-18B estimated M&A 2024-26 with $10.4B disclosed across 8 priced deals (Salesforce-Fin ~$3.6B, ServiceNow-Moveworks $2.85B, NICE-Cognigy ~$955M).'],
  ];
  $('#sizinglenses').innerHTML = lenses.map(l=>'<h3>'+l[0]+'</h3><p style="font-size:13.5px;line-height:1.6">'+l[1]+'</p>').join('');
  const ctx = [
    ['86% of enterprises have deployed agents', 'Forrester/Boomi survey, 2026-07-20, reported'],
    ['34% trust their agents&rsquo; actions', 'Forrester/Boomi survey, 2026-07-20, reported'],
    ['40%+ of agentic AI projects canceled by end-2027', 'Gartner forecast, 2025-06-25, reported'],
    ['$37B enterprise genAI spend in 2025', 'Menlo Ventures, 2025-12-09, reported; platforms ~2% of it'],
  ];
  $('#sizingcontext').innerHTML = ctx.map(c=>'<div class="srow"><div class="sl">'+c[0]+'</div><div class="sn">'+c[1]+'</div></div>').join('');
  const anchors = [['Cognition','~$900M ARR (2026, reported)'],['Salesforce Agentforce','$800M AI ARR (2026-09, reported)'],['Cursor','$500M+ ARR (2026, reported)'],['Sierra','$15B valuation (2026)'],['Harvey','$11B valuation (2026)'],['Abridge','$5.3B valuation (2026)']];
  $('#sizinganchors').innerHTML = anchors.map(a=>'<div class="srow"><div class="sl"><b>'+a[0]+'</b></div><div class="sn">'+a[1]+'</div></div>').join('');
})();

// ---------- drawer ----------
window.openDrawer = function(name, sync){
  const c = DATA.find(x=>x.n===name); if(!c) return;
  if(!drawerOpen) lastFocus = (typeof document !== 'undefined' && document.activeElement) || null;
  drawerOpen = true; drawerCompany = name;
  try{ $('#drawer').style.borderTopColor = LCOLOR[c.l] || '#4f46e5'; }catch(e){}
  const rows = [
    ['Layer', pill(c.l)+' '+LNAME[c.l]],
    ['Scope', esc(c.sc)],
    ['Vertical', esc(c.v)],
    ['Status', pill(c.st)],
    ['Priority', pill(c.p)],
    ['Profile', c.d==='deep' ? '<span class="pill deep">deep profile</span> eleven build decisions' : c.d==='base' ? '<span class="pill base">base profile</span>' : 'census only'],
    ['Task horizon', c.h && c.h!=='unknown' ? esc(c.h) : 'unknown'],
    ['Pricing model', c.pr && c.pr!=='unknown' ? esc(c.pr) : 'unknown'],
    ['YC batch', c.b.length ? c.b.join(', ') : 'none'],
    ['Backer signal', c.f.length ? esc(c.f.join(', ')) : 'none identified'],
    ['Sources', esc(c.s)],
  ];
  let html = '<h2>'+esc(c.n)+'</h2><div class="thesis">'+esc(c.o)+'</div><dl class="kv">'+rows.map(r=>'<dt>'+r[0]+'</dt><dd>'+r[1]+'</dd>').join('')+'</dl>';
  html += '<h4>Traction</h4><div style="font-size:13px">'+esc(c.t)+'</div>';
  if(c.w) html += '<p style="margin-top:14px"><a href="#t=wiki&w=companies/'+c.w+'" onclick="event.preventDefault();activateTab(\'wiki\',false);selectWiki(\'companies/'+c.w+'\')" title="Open wiki page">Open wiki page ↗</a>'+(c.d==='deep'?' <span style="color:var(--mut);font-size:12px">(deep profile: eleven build decisions)</span>':'')+'</p>';
  else html += '<div class="note">No wiki page. Phase 2 profiled the 766 high-priority entries; this entry was outside that set and carries census-level data only.</div>';
  let rel = DATA.filter(x=>x.n!==c.n && x.sc==='vertical' && x.v===c.v)
    .sort((a,b)=>((b.p==='high')-(a.p==='high')) || ((b.d==='deep')-(a.d==='deep')) || a.n.localeCompare(b.n));
  if(rel.length < 4) rel = DATA.filter(x=>x.n!==c.n && x.l===c.l)
    .sort((a,b)=>((b.p==='high')-(a.p==='high')) || ((b.d==='deep')-(a.d==='deep')) || a.n.localeCompare(b.n));
  rel = rel.slice(0,6);
  if(rel.length){
    html += '<h4>Related companies</h4><div class="relgrid">'+rel.map(x=>'<button type="button" class="relcard"'+rowAttr(x.n).replace('title="Open company profile"','')+'><b>'+esc(x.n)+'</b> '+pill(x.l)+'<span class="rol">'+esc(x.o)+'</span></button>').join('')+'</div>';
  }
  $('#dcontent').innerHTML = html;
  $('#drawer').classList.add('open');
  $('#dback').classList.add('open');
  setAria($('#dback'), 'aria-hidden', 'false');
  setAria($('#drawer'), 'aria-hidden', 'false');
  setAria($('#drawer'), 'aria-label', c.n + ' profile');
  safeFocus($('#drawer .close'));
  if(sync !== false) pushHash();
};
window.closeDrawer = function(sync){
  drawerOpen = false; drawerCompany = null;
  $('#drawer').classList.remove('open');
  $('#dback').classList.remove('open');
  setAria($('#drawer'), 'aria-hidden', 'true');
  setAria($('#dback'), 'aria-hidden', 'true');
  safeFocus(lastFocus); lastFocus = null;
  if(sync !== false) pushHash();
};
$('#dback').addEventListener('click', ()=>{ window.closeDrawer(); });
window.rowKey = function(e, name){
  if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openDrawer(name); }
};

// ---------- generic table filter + sort system ----------
const tableSort = {};
function getTcf(tableId, col){
  const el = document.querySelector('#'+tableId+' .col-filter[data-col="'+col+'"]');
  return el ? el.value.toLowerCase() : '';
}
function syncTcf(tableId){
  document.querySelectorAll('#'+tableId+' .col-filter').forEach(el=>{
    el.classList[el.value ? 'add' : 'remove']('active');
  });
}
function clearTcf(tableId){
  document.querySelectorAll('#'+tableId+' .col-filter').forEach(el=>el.value='');
  syncTcf(tableId);
  if(tableSort[tableId]){ tableSort[tableId].key = tableSort[tableId].def || 'n'; tableSort[tableId].dir = 1; }
}
function updateTsh(tableId){
  const s = tableSort[tableId]; if(!s) return;
  document.querySelectorAll('#'+tableId+' thead tr:first-child th').forEach(th=>{
    const on = th.dataset.k === s.key;
    th.classList.remove('sort-asc','sort-desc');
    if(on) th.classList.add(s.dir>0 ? 'sort-asc' : 'sort-desc');
    setAria(th, 'aria-sort', on ? (s.dir>0?'ascending':'descending') : 'none');
  });
}
function setupTable(tableId, defaultSort, renderFn){
  tableSort[tableId] = { key: defaultSort || 'n', dir: 1, def: defaultSort || 'n' };
  const table = document.getElementById(tableId);
  if(!table) return;
  table.querySelectorAll('.col-filter').forEach(el=>{
    el.addEventListener('input', ()=>{ syncTcf(tableId); renderFn(); });
  });
  table.addEventListener('click', e=>{
    const th = e.target.closest('th'); if(!th || !th.dataset.k) return;
    const s = tableSort[tableId];
    if(s.key === th.dataset.k) s.dir = -s.dir; else { s.key = th.dataset.k; s.dir = 1; }
    renderFn();
  });
}
function genericSort(rows, tableId, valFn){
  const s = tableSort[tableId]; if(!s) return;
  rows.sort((a,b)=>{
    let x = valFn(s.key, a) || '', y = valFn(s.key, b) || '';
    if(typeof x === 'number' && typeof y === 'number') return (x-y)*s.dir;
    const c = String(x).localeCompare(String(y));
    return (c * s.dir) || (a.n||'').localeCompare(b.n||'');
  });
}

// ---------- yc ----------
let cohortData = [];
function renderYc(sync){
  const b = $('#yc-batch').value;
  const cfN = getTcf('yctable','n'), cfB = getTcf('yctable','b'), cfL = getTcf('yctable','l'),
        cfO = getTcf('yctable','o'), cfT = getTcf('yctable','t');
  let rows = DATA.filter(c=>c.b.length && (!b||c.b.includes(b)) &&
    (!cfN || c.n.toLowerCase().includes(cfN)) &&
    (!cfB || c.b.join(',').toLowerCase().includes(cfB)) &&
    (!cfL || c.l===cfL.toUpperCase()) &&
    (!cfO || c.o.toLowerCase().includes(cfO)) &&
    (!cfT || c.t.toLowerCase().includes(cfT)));
  genericSort(rows, 'yctable', (k,c)=>{
    if(k==='b') return c.b.join(', ');
    if(k==='t') return c.t;
    return c[k];
  });
  const cap = 2000, shown = Math.min(rows.length, cap);
  $('#ycount').textContent = rows.length + ' YC companies' + (b?' in '+b:'') + (rows.length > cap ? ' (showing the first ' + cap + ')' : '');
  $('#ycbody').innerHTML = rows.slice(0,cap).map(c=>'<tr'+rowAttr(c.n)+'><td><b>'+esc(c.n)+'</b></td><td>'+c.b.join(', ')+'</td><td>'+pill(c.l)+'</td><td style="color:var(--mut)">'+esc(c.o)+'</td><td>'+esc(c.t)+'</td></tr>').join('');
  updateTsh('yctable');
  syncTcf('yctable');
  if(sync !== false) replaceHash();
}
function renderCohort(){
  const cfB = getTcf('ctable','batch'), cfL = getTcf('ctable','layers'),
        cfS = getTcf('ctable','status'), cfV = getTcf('ctable','verts');
  let rows = cohortData.filter(r =>
    (!cfB || r.batch.toLowerCase().includes(cfB)) &&
    (!cfL || r.layers.toLowerCase().includes(cfL)) &&
    (!cfS || r.status.toLowerCase().includes(cfS)) &&
    (!cfV || r.verts.toLowerCase().includes(cfV)));
  genericSort(rows, 'ctable', (k,r)=> r[k]);
  $('#cohortbody').innerHTML = rows.map(r=>'<tr><td><b>'+r.batch+'</b></td><td>'+r.count+'</td><td style="font-size:12.5px">'+esc(r.layers)+'</td><td style="font-size:12.5px">'+esc(r.status)+'</td><td>'+r.lh+'</td><td style="font-size:12.5px;color:var(--mut)">'+esc(r.verts)+'</td></tr>').join('');
  updateTsh('ctable');
  syncTcf('ctable');
}
window.clearYcFilters = function(){
  $('#yc-batch').value = '';
  clearTcf('yctable');
  clearTcf('ctable');
  renderYc();
  renderCohort();
};
(function(){
  const bm = {};
  DATA.forEach(c=>c.b.forEach(b=>bm[b]=(bm[b]||0)+1));
  colChart($('#ch-batch'), BATCHES.map(b=>[b,b,bm[b]||0]), {onClick:k=>{ $('#yc-batch').value=k; renderYc(); }});
  const cb = COHORT.batches || {};
  cohortData = BATCHES.filter(b=>cb[b]).map(b=>{
    const s = cb[b];
    const layers = Object.entries(s.layers||{}).sort((a,b2)=>b2[1]-a[1]).map(([k,v])=>k+' '+v).join(', ') || '-';
    const status = Object.entries(s.status||{}).sort((a,b2)=>b2[1]-a[1]).map(([k,v])=>k+' '+v).join(', ') || '-';
    const verts = (s.top_verticals||[]).slice(0,3).map(v=>v[0]+' '+v[1]).join(', ') || '-';
    return { batch:b, count:s.count, layers, status, lh:(s.long_horizon||0), verts };
  });
  renderCohort();
  $('#yc-batch').innerHTML = '<option value="">All batches</option>' + BATCHES.map(b=>'<option>'+b+'</option>').join('');
  const ycBf = $('#yctable .col-filter[data-col="b"]');
  if(ycBf) ycBf.innerHTML = '<option value="">All</option>' + BATCHES.map(b=>'<option>'+b+'</option>').join('');
  $('#yc-batch').addEventListener('change', renderYc);
  setupTable('yctable', 'n', renderYc);
  setupTable('ctable', 'batch', renderCohort);
  renderYc(false);
})();

// ---------- vc ----------
function renderVc(){
  const q = $('#vq').value.toLowerCase();
  const cfN = getTcf('vctable','n'), cfF = getTcf('vctable','f'),
        cfL = getTcf('vctable','l'), cfO = getTcf('vctable','o');
  let rows = DATA.filter(c=>c.f.length && (!q || (c.n+' '+c.f.join(' ')).toLowerCase().includes(q)) &&
    (!cfN || c.n.toLowerCase().includes(cfN)) &&
    (!cfF || c.f.join(' ').toLowerCase().includes(cfF)) &&
    (!cfL || c.l===cfL.toUpperCase()) &&
    (!cfO || c.o.toLowerCase().includes(cfO)));
  const s = tableSort['vctable'];
  if(s){
    rows.sort((a,b)=>{
      let x, y;
      if(s.key==='f'){ x=a.f.length; y=b.f.length; }
      else { x=a[s.key]||''; y=b[s.key]||''; }
      if(typeof x === 'number' && typeof y === 'number') return (x-y)*s.dir;
      const c = String(x).localeCompare(String(y));
      return (c * s.dir) || a.n.localeCompare(b.n);
    });
  }
  const cap = 600, shown = Math.min(rows.length, cap);
  $('#vcount').textContent = rows.length + ' companies with a backer signal' + (rows.length > cap ? ' (showing the first ' + cap + ')' : '');
  $('#vcbody').innerHTML = rows.slice(0,cap).map(c=>'<tr'+rowAttr(c.n)+'><td><b>'+esc(c.n)+'</b></td><td>'+esc(c.f.join(', '))+'</td><td>'+pill(c.l)+'</td><td style="color:var(--mut)">'+esc(c.o)+'</td></tr>').join('');
  updateTsh('vctable');
  syncTcf('vctable');
}
window.clearVcFilters = function(){
  $('#vq').value = '';
  clearTcf('vctable');
  renderVc();
};
(function(){
  $('#vq').addEventListener('input', renderVc);
  setupTable('vctable', 'f', renderVc);
  renderVc();
})();

// ---------- verticals ----------
function renderV(sync){
  const v = $('#v-vert').value;
  const cfN = getTcf('vtable','n'), cfL = getTcf('vtable','l'),
        cfSt = getTcf('vtable','st'), cfO = getTcf('vtable','o');
  let rows = v ? DATA.filter(c=>c.v===v &&
    (!cfN || c.n.toLowerCase().includes(cfN)) &&
    (!cfL || c.l===cfL.toUpperCase()) &&
    (!cfSt || c.st===cfSt) &&
    (!cfO || c.o.toLowerCase().includes(cfO))) : [];
  genericSort(rows, 'vtable', (k,c)=> c[k]);
  $('#vcount2').textContent = v ? rows.length + ' companies in ' + v : 'Pick a vertical to list its companies';
  $('#vbody').innerHTML = rows.map(c=>'<tr'+rowAttr(c.n)+'><td><b>'+esc(c.n)+'</b></td><td>'+pill(c.l)+'</td><td>'+pill(c.st)+'</td><td style="color:var(--mut)">'+esc(c.o)+'</td></tr>').join('');
  updateTsh('vtable');
  syncTcf('vtable');
  if(sync !== false) replaceHash();
}
window.clearVertFilters = function(){
  clearTcf('vtable');
  renderV();
};
(function(){
  const vm = tally(DATA.filter(c=>c.sc==='vertical'), c=>c.v);
  barChart($('#ch-vert2'), sortedEntries(vm).slice(0,30).map(([k,v])=>[k,k,v]), {onClick:k=>{ $('#v-vert').value=k; renderV(); }});
  $('#v-vert').innerHTML = '<option value="">Choose a vertical</option>' + sortedEntries(vm).map(([k])=>'<option>'+esc(k)+'</option>').join('');
  $('#v-vert').addEventListener('change', renderV);
  setupTable('vtable', 'n', renderV);
  renderV(false);
})();

// ---------- global search ----------
(function(){
  const inp = $('#gq'), box = $('#gres');
  let sel = -1;
  function find(q){
    q = q.trim().toLowerCase(); if(!q) return [];
    const starts = [], incl = [], ol = [];
    for(const c of DATA){
      const n = c.n.toLowerCase();
      if(n.startsWith(q)) starts.push(c);
      else if(n.includes(q)) incl.push(c);
      else if((c.o+' '+c.v).toLowerCase().includes(q)) ol.push(c);
    }
    return starts.concat(incl, ol).slice(0, 8);
  }
  function hide(){ box.style.display = 'none'; sel = -1; }
  function pick(name){ hide(); inp.value = ''; openDrawer(name); }
  inp.addEventListener('input', ()=>{
    const q = inp.value;
    if(!q){ hide(); return; }
    const m = find(q);
    box.innerHTML = m.length
      ? m.map(c=>'<button class="gr" data-n="'+esc(c.n)+'" role="option"><b>'+esc(c.n)+'</b> '+pill(c.l)+' <span style="color:var(--mut)">'+esc(c.v)+'</span></button>').join('')
      : '<div class="gr none">No matches</div>';
    box.style.display = 'block';
    sel = -1;
  });
  inp.addEventListener('keydown', e=>{
    const items = Array.prototype.slice.call(box.querySelectorAll('.gr[data-n]'));
    if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
      e.preventDefault();
      if(!items.length) return;
      sel = e.key === 'ArrowDown' ? (sel+1) % items.length : (sel<=0 ? items.length-1 : sel-1);
      items.forEach((it,i)=>it.classList[i===sel?'add':'remove']('sel'));
      try{ items[sel].scrollIntoView({block:'nearest'}); }catch(err){}
    } else if(e.key === 'Enter'){
      e.preventDefault();
      if(sel >= 0 && items[sel]) pick(items[sel].dataset.n);
      else { const m = find(inp.value); if(m.length) pick(m[0].n); }
    } else if(e.key === 'Escape'){
      hide(); inp.value = '';
    }
  });
  box.addEventListener('click', e=>{
    const b = e.target.closest('.gr[data-n]'); if(!b) return;
    pick(b.dataset.n);
  });
  document.addEventListener('click', e=>{
    if(box.style.display === 'block' && !e.target.closest('.gwrap')) hide();
  });
})();

// ---------- keyboard shortcuts ----------
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape' && drawerOpen){ closeDrawer(); return; }
  if(e.key === 'Tab' && drawerOpen){
    const f = $$('#drawer a, #drawer button').filter(el=>el.offsetWidth !== 0);
    if(f.length){
      const first = f[0], last = f[f.length-1];
      if(e.shiftKey && document.activeElement === first){ e.preventDefault(); safeFocus(last); }
      else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); safeFocus(first); }
    }
  }
  const tag = (e.target && e.target.tagName) || '';
  if((e.key === '/' || ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K'))) && !/INPUT|SELECT|TEXTAREA/.test(tag)){
    e.preventDefault(); safeFocus($('#gq'));
  }
});

// ---------- init ----------
if(typeof window !== 'undefined' && typeof window.addEventListener === 'function'){
  window.addEventListener('hashchange', applyHash);
}
applyHash();
