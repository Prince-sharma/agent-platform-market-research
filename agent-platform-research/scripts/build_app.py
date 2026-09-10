#!/usr/bin/env python3
"""Build agent-platform-market-research.html from the merged company TSV.

v6: embedded wiki. Every markdown page in the research workspace — 766
company profiles, 14 cluster syntheses, 6 theme reports, and the root
phase reports — is rendered to HTML at build time and embedded in the
app as a WIKI blob. A new Wiki tab browses it: searchable rail, rendered
page pane, clickable cross-references (theme reports cite each other by
filename), and hash deep links (#t=wiki&w=companies/sierra). All app
links that used to open raw .md files now open the in-app viewer; the
raw file remains a secondary "View raw markdown" action. v5's design
system and v4's browsability behaviors are unchanged.
"""
import csv
import html as _htmlmod
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
RESEARCH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TSV = os.path.join(ROOT, 'agent-platform-research/data/companies-with-profiles.tsv')
THEMES_JSON = os.path.join(RESEARCH, 'data', 'phase3-themes.json')
COHORT_JSON = os.path.join(RESEARCH, 'data', 'phase3-yc-cohort-stats.json')
OUT = os.path.join(ROOT, 'agent-platform-market-research.html')

BATCH_RE = re.compile(r'\b([WSF]2[1-6])\b')

VC_FIRM_FILES = {
    'vc-us-a.md': ['Sequoia', 'a16z', 'Benchmark', 'Accel', 'Greylock', 'Lightspeed', 'Founders Fund', 'Khosla'],
    'vc-us-b.md': ['Insight', 'Bessemer', 'Menlo', 'Battery', 'Index', 'Coatue', 'General Catalyst', 'NEA'],
    'vc-us-c.md': ['IVP', 'Felicis', 'Lux', '8VC', 'Madrona', 'Craft', 'ICONIQ', 'Thrive'],
    'vc-ai.md': ['Conviction', 'Radical', 'AI Fund', 'Amplify', 'SignalFire', 'Mayfield', 'Foundation'],
    'vc-eu.md': ['Northzone', 'Cherry', 'Point Nine', 'EQT', 'Balderton', 'Plural', 'Seedcamp'],
    'vc-in.md': ['Peak XV', 'Accel India', 'Elevation', 'Blume', 'Lightspeed India', 'Z47'],
}
VC_FILE_LABEL = {'vc-us-a.md': 'US generalist A', 'vc-us-b.md': 'US generalist B',
                 'vc-us-c.md': 'US generalist C', 'vc-ai.md': 'AI-specialist',
                 'vc-eu.md': 'Europe', 'vc-in.md': 'India'}

ALL_THEME_REFS = ['P3.1', 'P3.2', 'P3.3', 'P3.4', 'P3.5', 'P3.6', 'P3.7', 'P3.8']

WIKI_DIRS = [
    ('companies', 'Company profile'),
    ('clusters', 'Cluster synthesis'),
    ('themes', 'Theme report'),
]
ROOT_REPORTS = [
    ('reports/plan', 'Research plan', 'agent-platform-research-plan.md'),
    ('reports/phase1-census', 'Phase 1 census', 'agent-platform-phase1-census.md'),
    ('reports/phase2-landscape', 'Phase 2 landscape', 'agent-platform-phase2-landscape.md'),
    ('reports/phase3-thematic', 'Phase 3 thematic report', 'agent-platform-phase3-thematic.md'),
]


# ---------- markdown -> HTML (for the embedded wiki) ----------

def esc_html(s):
    return _htmlmod.escape(s, quote=True)


def parse_frontmatter(text):
    lines = text.split('\n')
    if lines and lines[0].strip() == '---':
        meta = {}
        i = 1
        while i < len(lines) and lines[i].strip() != '---':
            line = lines[i]
            if ':' in line:
                k, v = line.split(':', 1)
                meta[k.strip()] = v.strip()
            i += 1
        if i < len(lines):
            return meta, '\n'.join(lines[i + 1:])
    return {}, text


def first_heading(body):
    for line in body.split('\n'):
        m = re.match(r'^#\s+(.*)$', line.strip())
        if m:
            return m.group(1).strip()
    return None


def strip_first_heading(body):
    lines = body.split('\n')
    for i, line in enumerate(lines):
        s = line.strip()
        if not s:
            continue
        if s.startswith('# '):
            return '\n'.join(lines[i + 1:])
        return body
    return body


def make_wiki_linker(wiki_files):
    """Return f(s) that rewrites wiki filenames into in-app links."""
    if not wiki_files:
        return lambda s: s
    names = sorted(wiki_files, key=len, reverse=True)
    rx = re.compile(r'(?<![\w/.-])(' + '|'.join(re.escape(n) for n in names)
                    + r')(?![\w-])')

    def link(s):
        if '.md' not in s:
            return s
        return rx.sub(lambda m: '<a class="wl" data-w="%s">%s</a>'
                      % (wiki_files[m.group(1)], m.group(1)), s)
    return link


def render_inline(s, link):
    s = esc_html(s)
    codes = []

    def stash(m):
        codes.append(m.group(1))
        return '\x00%d\x00' % (len(codes) - 1)

    s = re.sub(r'`([^`]+)`', stash, s)
    s = re.sub(r'\*\*([^*]+)\*\*', r'<b>\1</b>', s)
    s = re.sub(r'(?<![\w*])\*([^*\s][^*]*?)\*(?![\w*])', r'<i>\1</i>', s)
    s = re.sub(r'(https?://[^\s<]+)',
               r'<a href="\1" target="_blank" rel="noopener">\1</a>', s)
    s = link(s)
    for i, c in enumerate(codes):
        s = s.replace('\x00%d\x00' % i, '<code>%s</code>' % c)
    return s


def render_markdown(text, link):
    lines = text.split('\n')
    out = []
    i, n = 0, len(lines)
    while i < n:
        stripped = lines[i].strip()
        m = re.match(r'^(#{1,6})\s+(.*)$', stripped)
        if m:
            lvl = min(len(m.group(1)) + 1, 6)
            out.append('<h%d>%s</h%d>'
                       % (lvl, render_inline(m.group(2), link), lvl))
            i += 1
            continue
        if stripped in ('---', '***', '___'):
            out.append('<hr>')
            i += 1
            continue
        if (stripped.startswith('|') and i + 1 < n
                and re.match(r'^\|[\s:|-]+\|?$', lines[i + 1].strip())):
            header = [c.strip() for c in stripped.strip('|').split('|')]
            i += 2
            rows = []
            while i < n and lines[i].strip().startswith('|'):
                rows.append([c.strip()
                             for c in lines[i].strip().strip('|').split('|')])
                i += 1
            t = ['<div class="wtable"><table><thead><tr>',
                 ''.join('<th>%s</th>' % render_inline(c, link)
                         for c in header),
                 '</tr></thead><tbody>']
            for r in rows:
                t.append('<tr>' + ''.join('<td>%s</td>' % render_inline(c, link)
                                           for c in r) + '</tr>')
            t.append('</tbody></table></div>')
            out.append(''.join(t))
            continue
        if re.match(r'^[-*]\s+', stripped):
            items = []
            while i < n and re.match(r'^[-*]\s+', lines[i].strip()):
                items.append('<li>%s</li>' % render_inline(
                    re.sub(r'^[-*]\s+', '', lines[i].strip()), link))
                i += 1
            out.append('<ul>%s</ul>' % ''.join(items))
            continue
        if re.match(r'^\d+\.\s+', stripped):
            items = []
            while i < n and re.match(r'^\d+\.\s+', lines[i].strip()):
                items.append('<li>%s</li>' % render_inline(
                    re.sub(r'^\d+\.\s+', '', lines[i].strip()), link))
                i += 1
            out.append('<ol>%s</ol>' % ''.join(items))
            continue
        if not stripped:
            i += 1
            continue
        para = [stripped]
        i += 1
        while (i < n and lines[i].strip()
               and not re.match(r'^(#{1,6}\s|[-*]\s|\d+\.\s|\||---$)',
                                lines[i].strip())):
            para.append(lines[i].strip())
            i += 1
        out.append('<p>%s</p>' % render_inline(' '.join(para), link))
    return '\n'.join(out)


def load_wiki():
    """Read every wiki page and root report; return {slug: page dict}.

    Page dict: t=title, m=frontmatter meta (or None), h=rendered HTML,
    r=path to the raw .md relative to the app HTML.
    """
    wiki_files = {}
    for kind, _label in WIKI_DIRS:
        d = os.path.join(RESEARCH, 'wiki', kind)
        if not os.path.isdir(d):
            continue
        for f in sorted(os.listdir(d)):
            if f.endswith('.md'):
                wiki_files[f] = '%s/%s' % (kind, f[:-3])

    wiki = {}
    link = make_wiki_linker(wiki_files)
    for kind, _label in WIKI_DIRS:
        d = os.path.join(RESEARCH, 'wiki', kind)
        if not os.path.isdir(d):
            continue
        for f in sorted(os.listdir(d)):
            if not f.endswith('.md'):
                continue
            slug = '%s/%s' % (kind, f[:-3])
            text = open(os.path.join(d, f), encoding='utf-8').read()
            meta, body = parse_frontmatter(text)
            title = meta.get('name')
            if title:
                body = strip_first_heading(body)
            else:
                title = first_heading(body) or f[:-3]
                body = strip_first_heading(body)
            wiki[slug] = {
                't': title,
                'm': meta or None,
                'h': render_markdown(body, link),
                'r': 'agent-platform-research/wiki/%s/%s' % (kind, f),
            }
    for slug, title, rel in ROOT_REPORTS:
        p = os.path.join(ROOT, rel)
        if not os.path.exists(p):
            continue
        text = open(p, encoding='utf-8').read()
        _meta, body = parse_frontmatter(text)
        wiki[slug] = {
            't': title,
            'm': None,
            'h': render_markdown(body, link),
            'r': rel,
        }
    return wiki


def main():
    rows = list(csv.DictReader(open(TSV), delimiter='\t'))

    companies = []
    for r in rows:
        text = (r['sources'] + ' ' + r['one_liner'] + ' ' + r['traction']).lower()
        batches = sorted(set(BATCH_RE.findall((r['sources'] + ' ' + r['one_liner'] + ' ' + r['traction']))))
        firms = []
        for f in r['files'].split(';'):
            for firm in VC_FIRM_FILES.get(f.strip(), []):
                if firm.lower().replace(' ', '') in text.replace(' ', ''):
                    firms.append(firm)
        c = {
            'n': r['name'],
            's': r['sources'],
            'o': r['one_liner'],
            'l': r['layer'],
            'sc': r['scope'],
            'v': r['vertical'],
            'st': r['status'],
            't': r['traction'],
            'p': r['priority'],
            'b': batches,
            'f': sorted(set(firms)),
            'd': r['profile_depth'],
            'w': r['wiki_slug'],
            'h': r['task_horizon'],
            'pr': r['pricing_model'],
        }
        companies.append(c)

    themes = json.load(open(THEMES_JSON))
    cohort = json.load(open(COHORT_JSON))
    wiki = load_wiki()

    # About tab: honest Phase 3 status derived from the data, not hardcoded.
    have_refs = [t.get('ref') for t in themes['themes']]
    missing = [r for r in ALL_THEME_REFS if r not in have_refs]
    p3_themes_listed = ('long-horizon agents, market sizing, build-vs-buy failures, pricing evolution, '
                        'moats and consolidation, YC cohort evolution, and platform-vs-app structure')
    if missing:
        p3line = ('Phase 3 (September 2026) ran seven thematic deep-dives over the wiki and merged dataset: '
                  + p3_themes_listed + '. ' + str(len(have_refs)) + ' of the seven reports are complete and '
                  'embedded in this app; ' + ' and '.join(missing) + ' is in flight. Each completed report '
                  'lives in the wiki with scripted counts and primary-source checks.')
    else:
        p3line = ('Phase 3 (September 2026) ran seven thematic deep-dives over the wiki and merged dataset: '
                  + p3_themes_listed + '. All seven reports are complete and embedded in this app; each '
                  'lives in the wiki with scripted counts and primary-source checks.')

    artifacts = [
        ('Research plan', 'agent-platform-research-plan.md', 'reports/plan'),
        ('Phase 1 census (full tables)', 'agent-platform-phase1-census.md', 'reports/phase1-census'),
        ('Phase 2 landscape (cluster syntheses)', 'agent-platform-phase2-landscape.md', 'reports/phase2-landscape'),
        ('Phase 3 thematic report (seven themes)', 'agent-platform-phase3-thematic.md', 'reports/phase3-thematic'),
        ('Phase 3 theme reports (wiki)', 'agent-platform-research/wiki/themes/', None),
        ('Research workspace: wiki, data, tasks', 'agent-platform-research/', None),
    ]
    art_items = []
    for label, p, wslug in artifacts:
        if not os.path.exists(os.path.join(ROOT, p)):
            art_items.append('<li>%s <span style="color:var(--mut)">(in flight; not yet written)</span></li>' % label)
        elif wslug:
            art_items.append('<li><a href="#t=wiki&w=%s">%s</a></li>' % (wslug, label))
        elif p.endswith('/'):
            art_items.append('<li><a href="#t=wiki">%s</a></li>' % label)
        else:
            art_items.append('<li><a href="%s">%s</a></li>' % (p, label))

    data_js = json.dumps(companies, ensure_ascii=False, separators=(',', ':'))
    themes_js = json.dumps(themes['themes'], ensure_ascii=False, separators=(',', ':'))
    cohort_js = json.dumps(cohort, ensure_ascii=False, separators=(',', ':'))
    wiki_js = json.dumps(wiki, ensure_ascii=False, separators=(',', ':'))
    html = HTML.replace('__DATA__', data_js)
    html = html.replace('__THEMES__', themes_js)
    html = html.replace('__COHORT__', cohort_js)
    html = html.replace('__WIKI__', wiki_js)
    html = html.replace('__COUNT__', str(len(companies)))
    html = html.replace('__P3LINE__', p3line)
    html = html.replace('__ARTIFACTS__', '\n        '.join(art_items))
    with open(OUT, 'w') as f:
        f.write(html)
    print('wrote %s (v6: %d bytes, %d companies, %d wiki pages linked, %d deep profiles, %d of 8 themes, %d wiki pages embedded)'
          % (OUT, os.path.getsize(OUT), len(companies),
             sum(1 for c in companies if c['w']),
             sum(1 for c in companies if c['d'] == 'deep'),
             len(themes['themes']),
             len(wiki)))


HTML = r'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Enterprise Work-Agent Platform Market Research</title>
<style>
:root{--bg:#f3f5f9;--card:#ffffff;--ink:#0f172a;--mut:#64748b;--line:#e2e8f0;--acc:#4f46e5;--acc2:#eef2ff;--ok:#059669;--warn:#d97706;--bad:#dc2626;--sh:0 1px 2px rgba(15,23,42,.04),0 1px 3px rgba(15,23,42,.05);--sh2:0 6px 20px rgba(15,23,42,.09);--r:12px}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;background:var(--bg);color:var(--ink);font-size:14px;line-height:1.5;-webkit-font-smoothing:antialiased}
header{background:rgba(255,255,255,.94);backdrop-filter:saturate(1.4) blur(10px);-webkit-backdrop-filter:saturate(1.4) blur(10px);border-bottom:1px solid var(--line);padding:16px 28px 0;position:sticky;top:0;z-index:20}
header::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#4f46e5,#8b5cf6,#3b82f6)}
h1{font-size:20px;font-weight:750;letter-spacing:-.015em}
.meta{color:var(--mut);font-size:12.5px;margin-top:3px}
.hrow{display:flex;gap:18px;align-items:flex-start;justify-content:space-between;flex-wrap:wrap}
.gwrap{position:relative;min-width:300px;flex:0 0 auto}
#gq{width:100%;padding:9px 14px;border:1px solid var(--line);border-radius:10px;font-size:13px;background:var(--card);color:var(--ink);box-shadow:var(--sh)}
#gq:focus{border-color:var(--acc);outline:none;box-shadow:0 0 0 3px var(--acc2)}
#gres{position:absolute;top:calc(100% + 6px);left:0;right:0;background:var(--card);border:1px solid var(--line);border-radius:12px;box-shadow:0 16px 44px rgba(15,23,42,.18);z-index:60;display:none;max-height:380px;overflow-y:auto}
#gres .gr{display:block;width:100%;text-align:left;padding:10px 14px;border:none;background:none;cursor:pointer;font-size:13px;border-bottom:1px solid var(--line);color:var(--ink)}
#gres .gr:last-child{border-bottom:none}
#gres .gr:hover,#gres .gr.sel{background:var(--acc2)}
#gres .gr.none{color:var(--mut);cursor:default}
.skip{position:absolute;left:-9999px;top:0;background:var(--acc);color:#fff;padding:8px 14px;border-radius:0 0 8px 0;z-index:100;font-weight:600;text-decoration:none}
.skip:focus{left:0}
:focus-visible{outline:2px solid var(--acc);outline-offset:2px}
nav{display:flex;gap:2px;margin-top:14px;flex-wrap:wrap}
nav button{border:none;background:none;padding:9px 14px 11px;font-size:13.5px;color:var(--mut);cursor:pointer;border-bottom:2.5px solid transparent;font-weight:550;transition:color .12s}
nav button:hover{color:var(--ink)}
nav button.on{color:var(--acc);border-bottom-color:var(--acc);font-weight:650}
main{max-width:1280px;margin:0 auto;padding:24px 28px 90px}
main:focus{outline:none}
section{display:none}
section.on{display:block;animation:fadein .18s ease}
@keyframes fadein{from{opacity:.4;transform:translateY(3px)}to{opacity:1;transform:none}}
.grid{display:grid;gap:14px}
.cards{grid-template-columns:repeat(auto-fit,minmax(176px,1fr));margin-bottom:18px}
.card{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:15px 17px;box-shadow:var(--sh);transition:box-shadow .15s,transform .15s}
.card:hover{box-shadow:var(--sh2);transform:translateY(-1px)}
.card .k{font-size:11px;color:var(--mut);text-transform:uppercase;letter-spacing:.05em;font-weight:650}
.card .v{font-size:27px;font-weight:750;margin-top:3px;letter-spacing:-.01em;font-variant-numeric:tabular-nums}
.card .sub{font-size:11.5px;color:var(--mut);margin-top:2px;line-height:1.45}
.card.hero{background:linear-gradient(135deg,#4338ca,#6366f1);border:none;color:#fff}
.card.hero .k{color:rgba(255,255,255,.72)}
.card.hero .sub{color:rgba(255,255,255,.78)}
.panel{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:18px 20px;margin-bottom:16px;box-shadow:var(--sh)}
.panel h2{font-size:15px;font-weight:700;margin-bottom:4px;letter-spacing:-.01em}
.panel h3{font-size:13px;font-weight:650;color:var(--mut);margin:16px 0 6px}
.ovgrid{display:grid;grid-template-columns:1fr;gap:16px}
@media(min-width:980px){.ovgrid{grid-template-columns:7fr 5fr}}
.insights ul{list-style:none;padding:0;margin-top:8px}
.insights li{padding:8px 2px;font-size:13.5px;line-height:1.62}
.insights li+li{border-top:1px solid var(--line)}
.prose p{font-size:13.5px;line-height:1.65;margin-top:10px}
.bar{display:flex;align-items:center;gap:10px;margin:6px 0}
.bar .lbl{width:190px;font-size:12.5px;color:var(--ink);text-align:right;flex-shrink:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bar .track{flex:1;background:var(--bg);border-radius:5px;height:20px;position:relative;overflow:hidden}
.bar .fill{height:100%;border-radius:5px;background:linear-gradient(90deg,#6366f1,#818cf8);transition:width .25s ease}
.bar .num{width:46px;font-size:12px;color:var(--mut);flex-shrink:0;font-variant-numeric:tabular-nums}
.bar.clickable{cursor:pointer;border-radius:6px;padding:0 2px}
.bar.clickable:hover .lbl{color:var(--acc);font-weight:600}
.bar.clickable:hover .fill{background:linear-gradient(90deg,#4338ca,#6366f1)}
.stackbar{display:flex;height:46px;border-radius:10px;overflow:hidden;margin-top:10px}
.stackbar .seg{display:flex;align-items:center;justify-content:center;color:#fff;font-weight:650;font-size:12.5px;cursor:pointer;min-width:6px;border:none;padding:0;font-variant-numeric:tabular-nums;transition:filter .12s}
.stackbar .seg:hover{filter:brightness(1.12) saturate(1.1)}
.stackleg{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:4px 14px;margin-top:12px}
.lg{display:flex;align-items:center;gap:8px;background:none;border:none;padding:5px 8px;margin:0 -8px;border-radius:8px;cursor:pointer;text-align:left;font-size:12.5px;color:var(--ink)}
.lg:hover{background:var(--acc2)}
.lg .dot{width:9px;height:9px;border-radius:3px;flex-shrink:0}
.lg .nm{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.lg .ct{color:var(--mut);font-variant-numeric:tabular-nums;white-space:nowrap}
.donutwrap{display:flex;gap:24px;align-items:center;flex-wrap:wrap;margin-top:8px}
.donut{width:190px;height:190px;flex:0 0 auto}
.donut .dseg{cursor:pointer;transition:stroke-width .15s}
.donut .dseg:hover,.donut .dseg:focus-visible{stroke-width:32}
.dleg{flex:1;min-width:230px;display:flex;flex-direction:column;gap:2px}
.colchart{width:100%;height:auto;display:block;margin-top:8px}
.colchart .col.clickable{cursor:pointer}
.colchart .col.clickable rect{transition:fill .12s}
.colchart .col.clickable:hover rect,.colchart .col.clickable:focus-visible rect{fill:#4338ca}
.controls{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px}
.controls input[type=search]{flex:1;min-width:240px;padding:9px 13px;border:1px solid var(--line);border-radius:9px;font-size:13.5px;background:var(--card);color:var(--ink);box-shadow:var(--sh)}
.controls input[type=search]:focus{border-color:var(--acc);outline:none;box-shadow:0 0 0 3px var(--acc2)}
.controls select{padding:8px 10px;border:1px solid var(--line);border-radius:9px;font-size:13px;background:var(--card);color:var(--ink);box-shadow:var(--sh);cursor:pointer}
.controls select:focus{border-color:var(--acc);outline:none;box-shadow:0 0 0 3px var(--acc2)}
.btn{padding:8px 13px;border:1px solid var(--line);border-radius:9px;background:var(--card);font-size:12.5px;cursor:pointer;color:var(--ink);font-weight:550;box-shadow:var(--sh);transition:border-color .12s,color .12s}
.btn:hover{border-color:var(--acc);color:var(--acc)}
.chips{display:flex;gap:6px;flex-wrap:wrap}
.chip{padding:5px 13px;border-radius:999px;border:1px solid var(--line);background:var(--card);font-size:12.5px;cursor:pointer;color:var(--mut);font-weight:550;transition:border-color .12s,color .12s}
.chip:hover{border-color:var(--acc);color:var(--acc)}
.chip.on{background:var(--acc);border-color:var(--acc);color:#fff;font-weight:650}
.fbar{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:14px 16px 12px;margin-bottom:14px;box-shadow:var(--sh)}
.fbar .controls{margin-bottom:10px}
table{width:100%;border-collapse:separate;border-spacing:0;background:var(--card)}
th{font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:var(--mut);text-align:left;padding:10px 13px;border-bottom:1px solid var(--line);background:#f8fafc;cursor:pointer;user-select:none;white-space:nowrap;position:sticky;top:0;z-index:3}
th:hover{color:var(--acc)}
th[data-k].sort-asc::after{content:" \2191";color:var(--acc)}
th[data-k].sort-desc::after{content:" \2193";color:var(--acc)}
td{padding:8.5px 13px;border-bottom:1px solid var(--line);vertical-align:top}
tbody tr:nth-child(even) td{background:#fbfcfe}
tr:last-child td{border-bottom:none}
tbody tr{cursor:pointer}
tbody tr:hover td{background:var(--acc2)}
.tscroll{overflow:auto;max-height:calc(100vh - 150px);border:1px solid var(--line);border-radius:var(--r);box-shadow:var(--sh);margin-bottom:4px}
.tscroll table{min-width:680px}
.pill{display:inline-block;padding:2px 9px;border-radius:999px;font-size:10.5px;font-weight:650;letter-spacing:.01em}
.pill.L1{background:#eef2ff;color:#4338ca}.pill.L2{background:#ecfdf5;color:#047857}.pill.L3{background:#fff7ed;color:#c2410c}.pill.L4{background:#fdf4ff;color:#a21caf}.pill.L5{background:#eff6ff;color:#1d4ed8}.pill.X{background:#fef2f2;color:#b91c1c}
.pill.high{background:#fef3c7;color:#b45309}.pill.normal{background:#f1f5f9;color:#64748b}
.pill.active{background:#ecfdf5;color:#059669}.pill.acquired{background:#ede9fe;color:#6d28d9}.pill.pivoted{background:#ffedd5;color:#c2410c}.pill.dead{background:#fee2e2;color:#b91c1c}.pill.unknown{background:#f1f5f9;color:#64748b}.pill.deep{background:#f0fdfa;color:#0f766e}.pill.base{background:#eff6ff;color:#1d4ed8}
.count{color:var(--mut);font-size:12.5px;margin:0 0 10px}
#dback{position:fixed;inset:0;background:rgba(15,23,42,.42);opacity:0;pointer-events:none;transition:opacity .2s;z-index:40}
#dback.open{opacity:1;pointer-events:auto}
#drawer{position:fixed;top:0;right:-540px;width:520px;max-width:94vw;height:100vh;background:var(--card);border-left:1px solid var(--line);border-top:4px solid var(--acc);box-shadow:-16px 0 48px rgba(15,23,42,.18);z-index:50;transition:right .24s ease,visibility .24s;overflow-y:auto;padding:20px 26px 30px;visibility:hidden}
#drawer.open{right:0;visibility:visible}
#drawer h2{font-size:18px;margin-bottom:3px;padding-right:32px;letter-spacing:-.01em}
#drawer .close{position:absolute;top:16px;right:16px;border:none;background:var(--bg);border-radius:8px;width:30px;height:30px;cursor:pointer;font-size:14px;color:var(--mut);transition:background .12s,color .12s}
#drawer .close:hover{background:#fee2e2;color:#b91c1c}
#drawer .thesis{color:var(--ink);font-size:13.5px;margin:10px 0 14px;line-height:1.55}
#drawer .kv{display:grid;grid-template-columns:118px 1fr;gap:5px 10px;font-size:13px;margin-bottom:6px}
#drawer .kv dt{color:var(--mut)}
#drawer .kv dd{font-weight:550}
#drawer h4{font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:var(--mut);margin:18px 0 7px;font-weight:650}
#drawer .note{font-size:12.5px;color:var(--mut);margin-top:16px;padding-top:12px;border-top:1px solid var(--line)}
#drawer .chips{margin-top:6px}
.relgrid{display:flex;flex-direction:column;gap:8px}
.relcard{display:block;text-align:left;background:var(--bg);border:1px solid var(--line);border-radius:10px;padding:9px 12px;cursor:pointer;font-size:12.5px;color:var(--ink);transition:border-color .12s,background .12s;width:100%}
.relcard:hover{border-color:var(--acc);background:var(--acc2)}
.relcard .rol{display:block;color:var(--mut);font-size:11.5px;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
a{color:var(--acc)}
a:hover{text-decoration:underline}
.empty{padding:34px;text-align:center;color:var(--mut)}
.footer{color:var(--mut);font-size:12px;margin-top:26px;text-align:center}
.tlayout{display:grid;grid-template-columns:1fr;gap:16px}
@media(min-width:980px){.tlayout{grid-template-columns:300px 1fr;align-items:start}}
.trail{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:14px;box-shadow:var(--sh)}
@media(min-width:980px){.trail{position:sticky;top:126px}}
.trailhead{font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:var(--mut);font-weight:650;padding:2px 8px 10px}
.trailist{display:flex;flex-direction:column;gap:4px}
.trailist .chip{display:flex;flex-direction:column;align-items:flex-start;gap:2px;border-radius:10px;padding:9px 12px;text-align:left}
.trailist .chip .tref{font-size:10.5px;font-weight:650;color:var(--mut);letter-spacing:.03em}
.trailist .chip .ttitle{font-size:13px;font-weight:600;color:var(--ink);line-height:1.35}
.trailist .chip.on{background:var(--acc2);border-color:var(--acc)}
.trailist .chip.on .tref{color:var(--acc)}
.trailist .chip.on .ttitle{color:var(--acc)}
.trailist .chip.missing{opacity:.7;border-style:dashed;background:transparent;cursor:default}
.trailist .chip.missing:hover{border-color:var(--line);color:var(--mut)}
.trailist .chip.missing .ttitle{color:var(--mut);font-weight:500}
.trail .count{margin:10px 4px 0;font-size:11.5px;line-height:1.5}
.treport{min-width:0}
.treport .panel{margin-bottom:0}
.trefline{font-size:11px;font-weight:700;letter-spacing:.08em;color:var(--acc);text-transform:uppercase;margin-bottom:4px}
.tscope{font-size:13.5px;color:var(--mut);line-height:1.6;margin-top:6px}
.theadline{font-size:14px;line-height:1.6;background:var(--acc2);border-left:3px solid var(--acc);padding:12px 16px;border-radius:0 10px 10px 0;margin-top:8px}
.tlist{list-style:none;counter-reset:fn;margin:8px 0 0;padding:0}
.tlist li{counter-increment:fn;position:relative;padding:8px 0 8px 36px;font-size:13.5px;line-height:1.62}
.tlist li::before{content:counter(fn);position:absolute;left:0;top:9px;width:23px;height:23px;border-radius:7px;background:var(--acc2);color:var(--acc);font-size:11.5px;font-weight:650;display:flex;align-items:center;justify-content:center}
.tbul{margin:8px 0 0;padding-left:18px;font-size:13.5px;line-height:1.62}
.tbul li{margin:4px 0}
.srow{display:flex;justify-content:space-between;gap:16px;padding:9px 0;border-bottom:1px solid var(--line);font-size:13px}
.srow:last-child{border-bottom:none}
.srow .sl{color:var(--ink);min-width:0}
.srow .sn{color:var(--mut);text-align:right;flex-shrink:0;font-size:12.5px;max-width:60%}
.wlayout{display:grid;grid-template-columns:1fr;gap:16px}
@media(min-width:980px){.wlayout{grid-template-columns:280px 1fr;align-items:start}}
.wrail{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:14px;box-shadow:var(--sh);max-height:calc(100vh - 150px);overflow-y:auto}
@media(min-width:980px){.wrail{position:sticky;top:126px}}
.wsearch{margin-bottom:10px}
.wsearch input{width:100%;box-sizing:border-box;padding:8px 10px;border:1px solid var(--line);border-radius:8px;font-size:13px;font-family:inherit;background:var(--bg)}
.wsearch input:focus{outline:2px solid var(--acc);outline-offset:-1px;border-color:var(--acc)}
.wlist{display:flex;flex-direction:column;gap:2px}
.witem{display:flex;flex-direction:column;align-items:flex-start;gap:1px;border:1px solid transparent;border-radius:8px;padding:7px 10px;text-align:left;cursor:pointer;background:transparent;font-family:inherit;font-size:13px;color:var(--ink);line-height:1.35;transition:background .12s,border-color .12s}
.witem:hover{background:var(--acc2)}
.witem.on{background:var(--acc2);border-color:var(--acc)}
.witem .wk{font-size:10px;font-weight:650;color:var(--mut);letter-spacing:.04em;text-transform:uppercase}
.witem .wt{font-weight:600}
.witem.on .wk{color:var(--acc)}
.witem.on .wt{color:var(--acc)}
.wmain{min-width:0}
.wpage{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:24px 28px;box-shadow:var(--sh)}
.wpage .wmeta{font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:var(--mut);font-weight:650;margin-bottom:4px}
.wpage h2{font-size:22px;margin:0 0 14px}
.wpage h3{font-size:16px;margin:20px 0 8px}
.wpage h4{font-size:14px;margin:16px 0 6px}
.wpage p{font-size:13.5px;line-height:1.65;margin:8px 0}
.wpage ul,.wpage ol{font-size:13.5px;line-height:1.65;margin:8px 0;padding-left:20px}
.wpage li{margin:3px 0}
.wpage code{background:var(--acc2);padding:1px 5px;border-radius:4px;font-size:12.5px;font-family:'SF Mono',Monaco,monospace}
.wpage hr{border:none;border-top:1px solid var(--line);margin:18px 0}
.wpage a.wl{color:var(--acc);cursor:pointer;text-decoration:none;border-bottom:1px dotted var(--acc)}
.wpage a.wl:hover{text-decoration:underline}
.wpage .wraw{margin-top:18px;padding-top:14px;border-top:1px solid var(--line);font-size:12px;color:var(--mut)}
.wpage .wraw a{font-size:12px}
.wpage .wtable{overflow-x:auto;margin:12px 0}
.wpage .wtable table{border-collapse:collapse;width:100%;font-size:12.5px}
.wpage .wtable th{background:var(--acc2);color:var(--acc);font-weight:650;text-align:left;padding:7px 10px;border:1px solid var(--line);white-space:nowrap}
.wpage .wtable td{padding:6px 10px;border:1px solid var(--line);vertical-align:top}
.wpage .wtable tr:nth-child(even) td{background:rgba(0,0,0,.015)}
@media(max-width:800px){.wrail{position:static;max-height:none}}
@media(max-width:800px){.bar .lbl{width:120px}.gwrap{min-width:200px}main{padding:16px 14px 60px}header{padding:12px 14px 0}.trail{position:static}.donut{width:150px;height:150px}.tscroll{max-height:60vh}}
@media print{
header{position:static}
header::before,nav,.skip,#dback,#drawer,.btn{display:none !important}
body{background:#fff}
main{padding:0;max-width:none}
section{display:none !important}
section.on{display:block !important}
.tscroll{max-height:none;overflow:visible;box-shadow:none}
.card,.panel,.trail{box-shadow:none;break-inside:avoid}
}
</style>
</head>
<body>
<a class="skip" href="#main" onclick="event.preventDefault();document.querySelector('main').focus()">Skip to content</a>
<header>
  <div class="hrow">
    <div>
      <h1>Enterprise Work-Agent Platform Market Research</h1>
      <div class="meta">Phase 3 thematic deep-dives &middot; <span class="nc"></span> companies &middot; <span class="pw"></span> wiki pages &middot; <span class="pd"></span> deep profiles &middot; <span class="nt"></span> of 8 theme reports &middot; September 2026 &middot; evolves each phase</div>
    </div>
    <div class="gwrap">
      <input id="gq" type="search" placeholder="Search companies... ( / )" aria-label="Search companies" autocomplete="off">
      <div id="gres" role="listbox" aria-label="Company search results"></div>
    </div>
  </div>
  <nav id="nav" role="tablist" aria-label="Report sections">
    <button data-t="overview" class="on" role="tab" aria-selected="true" id="tab-overview">Overview</button>
    <button data-t="universe" role="tab" aria-selected="false" id="tab-universe">Universe</button>
    <button data-t="themes" role="tab" aria-selected="false" id="tab-themes">Themes</button>
    <button data-t="wiki" role="tab" aria-selected="false" id="tab-wiki">Wiki</button>
    <button data-t="sizing" role="tab" aria-selected="false" id="tab-sizing">Sizing</button>
    <button data-t="yc" role="tab" aria-selected="false" id="tab-yc">YC cohort</button>
    <button data-t="vc" role="tab" aria-selected="false" id="tab-vc">VC backers</button>
    <button data-t="verticals" role="tab" aria-selected="false" id="tab-verticals">Verticals</button>
    <button data-t="about" role="tab" aria-selected="false" id="tab-about">Method</button>
  </nav>
</header>
<main id="main" tabindex="-1">
  <section id="t-overview" class="on" role="tabpanel" aria-labelledby="tab-overview">
    <div class="grid cards" id="statcards"></div>
    <div class="ovgrid">
      <div class="panel"><h2>Market structure by layer</h2>
        <p class="count" style="margin:6px 0 0">Share of the universe. Click a segment or legend row to open the universe filtered to that layer.</p>
        <div id="ch-layer"></div></div>
      <div class="panel"><h2>Status</h2>
        <p class="count" style="margin:6px 0 0">Operating status across the census. Click a slice or legend row to filter the universe.</p>
        <div id="ch-status"></div></div>
    </div>
    <div class="panel"><h2>Top verticals</h2>
      <p class="count" style="margin:6px 0 0">Vertical-scope companies only. Click a bar to open the universe filtered to that vertical.</p>
      <div id="ch-vert"></div></div>
    <div class="ovgrid">
      <div class="panel insights"><h2>What the census says</h2>
      <ul>
        <li><b>Vertical work agents are the center of gravity</b> — 59% of the universe is L3. Horizontal build platforms are only 10%. The space is an applications market with platforms forming underneath it.</li>
        <li><b>The stack built back-to-front</b> — infrastructure (L1) barely existed before 2023 and is now 201 companies; the picks-and-shovels arrived two years after the apps.</li>
        <li><b>Healthcare is the deepest vertical</b> (101), then GTM/sales (95) and software engineering (95). Construction (22) and logistics (36) remain thin relative to their workflow volume.</li>
        <li><b>Consolidation has started from the top</b> — 29 acquired; ServiceNow took Moveworks ($2.85B), NICE took Cognigy ($955M), Workday took Sana, Zendesk took Forethought, Amazon absorbed Adept.</li>
        <li><b>Every incumbent suite ships the same pattern</b> — low-code agent studio plus prebuilt role agents, with heavy product churn (Breeze became Agent Hub, Agentspace folded into Gemini Enterprise).</li>
        <li><b>Voice is the best-funded modality</b> — Parloa ($3B), LiveKit and Deepgram ($1B+ each), Vapi ($500M) — and the default interface inside logistics, healthcare, and collections verticals.</li>
        <li><b>Agent security is the most crowded new infrastructure category</b> — Zenity ($125M C), Neo ($100M), AIR ($50M), plus Okta and Microsoft shipping agent identity.</li>
        <li><b>Traction is sharply bimodal</b> — mega-rounds (Sierra $15B, Cognition reported $48B, Harvey $11B, Abridge $5.3B) versus a long seed tail with no visible follow-on; 11x is the cautionary tale.</li>
      </ul>
      </div>
      <div class="panel insights"><h2>What Phase 2 profiling adds</h2>
      <ul>
        <li><b>766 wiki pages, 303 deep profiles</b> — every high-priority company now has a page; the deep ones carry the eleven build decisions (build interface, runtime, integrations, knowledge, autonomy, governance, pricing, GTM, moat, OSS posture, task horizon).</li>
        <li><b>Consolidation accelerated</b> — profiling surfaced seven more acquisitions the census missed, including Langfuse&rarr;ClickHouse, Arize&rarr;Dynatrace ($915M), Pipedream&rarr;Workday, and Smithery&rarr;Arcade.</li>
        <li><b>Pricing splits three ways</b> — usage metering dominates infrastructure, customer service converged on per-outcome (per-resolution) pricing, and per-seat survives mainly inside incumbent suites.</li>
        <li><b>MCP is the default integration substrate in L1</b>, while vertical agents still ship proprietary connectors; governance is the weakest build dimension cluster-wide.</li>
        <li><b>The AI-native firm pattern emerged</b> — agent companies buying their own service delivery: Dwelly acquiring UK lettings agencies, OffDeal building an AI-native investment bank, Convexia running pharma trials.</li>
      </ul>
      </div>
    </div>
    <div class="panel insights"><h2>What Phase 3 themes add</h2>
      <ul>
        <li><b>The market is real and mid-sized now</b> — 2026 scaled work-agent revenue estimated $8-15B ($5.0-5.5B visible across 64 disclosing companies); 2030 TAM estimated $50-120B depending on per-outcome pricing adoption.</li>
        <li><b>The platform layer is a fraction, not the market</b> — 2026 SAM for platforms and infrastructure estimated $2-6B, bracketed by Menlo's $750M and Gartner's $9.5B; platforms are ~2% of enterprise genAI spend while vertical agents took $20.4B (72%) of visible funding.</li>
        <li><b>Per-outcome pricing is the contested frontier</b> — it emerges exactly where long-horizon work meets verifiable outcomes (CX resolutions at $0.99-1.25 each); usage metering dominates infrastructure; per-seat survives mainly inside suites.</li>
        <li><b>Moats sit at the ends, not the middle</b> — switching costs concentrate in L3 verticals (workflow lock-in 37%, data gravity 32%) and L5 suites (distribution 100%); the middle layer's exit wave (Sana, Flowise, Langflow, Aisera, Yellow.ai) confirms instability.</li>
        <li><b>Consolidation is accelerating with a shape</b> — ~60 verified transactions 2021-2026, $10.4B disclosed across 8 priced deals; suites buy proven agents, infrastructure buys agent-era capability, and L2 is the most-bought layer (5.8%).</li>
        <li><b>Build-vs-buy fails on trust, not capability</b> — 86% of enterprises have deployed agents but only 34% trust their actions; Gartner forecasts 40%+ of agentic projects canceled by end-2027; the failure record shows governance and evals as the recurring gaps.</li>
        <li><b>Long-horizon agents are rare but pulling a substrate into existence</b> — 73 long-horizon plus 81 persistent companies (11.6% of the census); every durability primitive exists somewhere but no platform combines them, so verticals integrate their own.</li>
      </ul>
    </div>
  </section>

  <section id="t-universe" role="tabpanel" aria-labelledby="tab-universe">
    <div class="fbar">
      <div class="controls">
        <input type="search" id="q" placeholder="Search name, one-liner, traction, sources..." aria-label="Search the universe">
        <select id="f-scope" aria-label="Filter by scope"><option value="">Scope: all</option><option>horizontal</option><option>vertical</option></select>
        <select id="f-status" aria-label="Filter by status"><option value="">Status: all</option><option>active</option><option>acquired</option><option>pivoted</option><option>dead</option><option>unknown</option></select>
        <select id="f-prio" aria-label="Filter by priority"><option value="">Priority: all</option><option>high</option><option>normal</option></select>
        <select id="f-depth" aria-label="Filter by profile depth"><option value="">Profile: all</option><option value="deep">deep</option><option value="base">base</option><option value="none">census only</option></select>
        <select id="f-vert" aria-label="Filter by vertical"><option value="">Vertical: all</option></select>
        <select id="f-horizon" aria-label="Filter by task horizon"><option value="">Horizon: all</option><option>single-turn</option><option>multi-step</option><option>long-horizon</option><option>persistent</option><option>unknown</option></select>
        <select id="f-pricing" aria-label="Filter by pricing model"><option value="">Pricing: all</option><option>per-outcome</option><option>per-agent</option><option>usage</option><option>per-seat</option><option>platform+subscription</option><option>freemium</option><option>other</option><option>unknown</option></select>
        <button class="btn" id="exportcsv" onclick="exportCsv()" title="Download the filtered companies as CSV">Export CSV</button>
      </div>
      <div class="chips" id="layerchips" role="group" aria-label="Filter by layer"></div>
      <p class="count" id="ucount" aria-live="polite" style="margin:10px 2px 0"></p>
    </div>
    <div class="tscroll"><table id="utable">
      <thead><tr>
        <th data-k="n" aria-sort="ascending" scope="col" title="Click to sort">Company</th>
        <th data-k="l" scope="col" title="Click to sort">Layer</th>
        <th data-k="v" scope="col" title="Click to sort">Vertical</th>
        <th data-k="st" scope="col" title="Click to sort">Status</th>
        <th data-k="p" scope="col" title="Click to sort">Priority</th>
        <th data-k="o" scope="col" title="Click to sort">One-liner</th>
      </tr></thead><tbody id="ubody"></tbody>
    </table></div>
    <div class="empty" id="uempty" style="display:none">No companies match the current filters.</div>
  </section>

  <section id="t-themes" role="tabpanel" aria-labelledby="tab-themes">
    <div class="tlayout">
      <aside class="trail" aria-label="Theme reports">
        <div class="trailhead">Phase 3 theme reports</div>
        <div id="themechips" class="trailist" role="group" aria-label="Choose a theme report"></div>
        <p class="count" id="themecount" aria-live="polite"></p>
      </aside>
      <div class="treport"><div id="themedetail"></div></div>
    </div>
  </section>

  <section id="t-wiki" role="tabpanel" aria-labelledby="tab-wiki">
    <div class="wlayout">
      <aside class="wrail" aria-label="Wiki pages">
        <div class="wsearch"><input type="search" id="wq" placeholder="Filter wiki pages..." aria-label="Filter wiki pages" autocomplete="off"></div>
        <div id="wlist"></div>
      </aside>
      <div class="wmain"><div id="wcontent"></div></div>
    </div>
  </section>

  <section id="t-sizing" role="tabpanel" aria-labelledby="tab-sizing">
    <div class="grid cards" id="sizingcards"></div>
    <div class="panel"><h2>The three lenses</h2>
      <div id="sizinglenses"></div>
    </div>
    <div class="panel"><h2>Adoption, trust, and execution risk</h2>
      <div id="sizingcontext"></div>
    </div>
    <div class="panel"><h2>Revenue anchors (2026, as reported)</h2>
      <div id="sizinganchors"></div>
    </div>
    <div class="panel"><h2>What the sizing means</h2>
      <ul style="font-size:13.5px;line-height:1.65;padding-left:18px">
        <li><b>Value pools in vertical agents and suite-embedded agents today</b> — the horizontal platform layer is ~2% of enterprise genAI spend; L3 captured $20.4B (72%) of visible funding against L2's $2.5B.</li>
        <li><b>The platform share question is the biggest open uncertainty</b> — whether independent platforms hold ~2% of AI spend or converge toward AI app-dev's ~15% decides the size of the opportunity.</li>
        <li><b>Per-outcome pricing is the TAM unlock</b> — moving from per-seat software budgets to labor-comparable outcome budgets is what stretches the 2030 estimate from the low to the high end.</li>
        <li><b>The trust gap gates the revenue</b> — 86% deployment but 34% trust means the constraint is governance and reliability, not capability.</li>
      </ul>
      <p style="font-size:12.5px;color:var(--mut);margin-top:10px">Full analysis with method and sources: <a href="#t=wiki&w=themes/market-sizing">market-sizing.md</a>. Figures are estimates with stated confidence unless marked reported.</p>
    </div>
  </section>

  <section id="t-yc" role="tabpanel" aria-labelledby="tab-yc">
    <div class="panel"><h2>Agentic companies per YC batch</h2><div id="ch-batch"></div>
    <p class="count" style="margin-top:8px">The agentic share of YC batches roughly quadrupled from 2021-22 (~9%) to 2025 (~39%). F23 never ran; the first Fall batch was F24. Click a batch bar to list its companies below.</p></div>
    <div class="panel"><h2>Per-batch cohort stats</h2>
      <p class="count">Layer mix, status mix, and long-horizon counts per batch, from the scripted cohort analysis. Statuses mature with age: early batches show the deaths and acquisitions; the newest batches are almost all active.</p>
      <div class="tscroll"><table><thead><tr><th>Batch</th><th>Companies</th><th>Layer mix</th><th>Status</th><th>Long-horizon</th><th>Top verticals</th></tr></thead><tbody id="cohortbody"></tbody></table></div>
    </div>
    <div class="controls"><select id="yc-batch" aria-label="Filter by YC batch"><option value="">All batches</option></select></div>
    <p class="count" id="ycount" aria-live="polite"></p>
    <div class="tscroll"><table><thead><tr><th>Company</th><th>Batch</th><th>Layer</th><th>One-liner</th><th>Traction</th></tr></thead><tbody id="ycbody"></tbody></table></div>
  </section>

  <section id="t-vc" role="tabpanel" aria-labelledby="tab-vc">
    <p class="count">Companies surfaced by the six VC portfolio sweeps, with the backer signal extracted from sweep attribution. Coverage is asymmetric: only some firms publish crawlable portfolios, so absence here is not absence of backing.</p>
    <div class="controls"><input type="search" id="vq" placeholder="Search company or backer..." aria-label="Search VC-backed companies"></div>
    <p class="count" id="vcount" aria-live="polite"></p>
    <div class="tscroll"><table><thead><tr><th>Company</th><th>Backer signal</th><th>Layer</th><th>One-liner</th></tr></thead><tbody id="vcbody"></tbody></table></div>
  </section>

  <section id="t-verticals" role="tabpanel" aria-labelledby="tab-verticals">
    <div class="panel"><h2>Companies per vertical</h2><div id="ch-vert2"></div>
      <p class="count" style="margin-top:8px">Click a vertical bar to list its companies below.</p></div>
    <div class="controls"><select id="v-vert" aria-label="Choose a vertical"><option value="">Choose a vertical</option></select></div>
    <p class="count" id="vcount2" aria-live="polite"></p>
    <div class="tscroll"><table><thead><tr><th>Company</th><th>Layer</th><th>Status</th><th>One-liner</th></tr></thead><tbody id="vbody"></tbody></table></div>
  </section>

  <section id="t-about" role="tabpanel" aria-labelledby="tab-about">
    <div class="panel prose"><h2>Method</h2>
      <p>Phase 1 (September 2026) enumerated every company findable publicly whose primary product is agentic: 16 parallel research sweeps — five YC era sweeps (every batch W21 through S26), six VC portfolio sweeps (43 firms), five known-player layer sweeps — plus a carry-over from prior GTM research. Roughly 6,300 companies examined; 1,546 raw rows deduplicated to <span class="nc"></span> unique entries. Every entry carries a base classification: layer (L1 infrastructure, L2 build platform, L3 vertical agent, L4 services, L5 suite product, X modality), scope, vertical, status, traction evidence, and priority.</p>
      <p>Phase 2 (complete) profiled all 766 high-priority entries into a durable wiki: one page per company, 303 of them deep profiles carrying the eleven build decisions (build interface, runtime, integrations, knowledge, autonomy, governance, pricing, GTM, moat, OSS posture, task horizon). Every profiled company links to its wiki page from this app; cluster syntheses live in the research workspace.</p>
      <p>__P3LINE__</p>
      <h3>Artifacts</h3>
      <ul class="insights" style="margin-top:6px">
        __ARTIFACTS__
      </ul>
      <h3>Using this app</h3>
      <ul class="insights">
        <li>Every view is linkable: the URL hash carries the tab, filters, sort, and open company, so any slice can be bookmarked or shared.</li>
        <li>The header search (or the / key) finds any company from any tab; rows, bars, and chart segments are keyboard reachable, and Enter opens a company.</li>
        <li>Export CSV downloads exactly the filtered set currently shown in the universe table.</li>
        <li>Print (or Save as PDF) prints the tab you are on with tables fully expanded.</li>
      </ul>
    </div>
  </section>
</main>

<div id="dback" aria-hidden="true"></div>
<div id="drawer" role="dialog" aria-modal="true" aria-label="Company profile" aria-hidden="true">
  <button class="close" onclick="closeDrawer()" aria-label="Close profile">✕</button>
  <div id="dcontent"></div>
</div>

<script>
const DATA = __DATA__;
const THEMES = __THEMES__;
const COHORT = __COHORT__;
const WIKI = __WIKI__;
const LAYERS = ['L1','L2','L3','L4','L5','X'];
const LNAME = {L1:'L1 Infrastructure',L2:'L2 Build platforms',L3:'L3 Vertical agents',L4:'L4 Services',L5:'L5 Suite products',X:'X Modalities'};
const BATCHES = ['W21','S21','W22','S22','W23','S23','W24','S24','F24','W25','S25','F25','W26','S26'];
const TABS = ['overview','universe','themes','wiki','sizing','yc','vc','verticals','about'];
const THEME_TOTAL = 7;
const THEME_ORDER = ['P3.1','P3.2','P3.3','P3.4','P3.5','P3.6','P3.7','P3.8'];

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
    ['Theme reports', THEMES.length, 'of 8 planned; Phase 3 thematic deep-dives'],
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
function getFiltered(){
  const q = $('#q').value.toLowerCase();
  const sc = $('#f-scope').value, st = $('#f-status').value, pr = $('#f-prio').value, vt = $('#f-vert').value;
  const dp = $('#f-depth').value, hz = $('#f-horizon').value, pc = $('#f-pricing').value;
  return DATA.filter(c =>
    (!layerFilter || c.l===layerFilter) &&
    (!sc || c.sc===sc) && (!st || c.st===st) && (!pr || c.p===pr) && (!vt || c.v===vt) &&
    (!dp || (dp==='none' ? !c.d : c.d===dp)) &&
    (!hz || c.h===hz) && (!pc || c.pr===pc) &&
    (!q || (c.n+' '+c.o+' '+c.t+' '+c.s).toLowerCase().includes(q)));
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
  $$('#utable th').forEach(th=>{
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
  $('#f-vert').innerHTML = '<option value="">Vertical: all</option>' + sortedEntries(vm).map(([k])=>'<option>'+esc(k)+'</option>').join('');
})();
['#q','#f-scope','#f-status','#f-prio','#f-depth','#f-vert','#f-horizon','#f-pricing'].forEach(s=>$(s).addEventListener('input', renderUniverse));
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

// ---------- yc ----------
function renderYc(sync){
  const b = $('#yc-batch').value;
  const rows = DATA.filter(c=>c.b.length && (!b||c.b.includes(b))).sort((a,b2)=>a.n.localeCompare(b2.n));
  const cap = 2000, shown = Math.min(rows.length, cap);
  $('#ycount').textContent = rows.length + ' YC companies' + (b?' in '+b:'') + (rows.length > cap ? ' (showing the first ' + cap + ')' : '');
  $('#ycbody').innerHTML = rows.slice(0,cap).map(c=>'<tr'+rowAttr(c.n)+'><td><b>'+esc(c.n)+'</b></td><td>'+c.b.join(', ')+'</td><td>'+pill(c.l)+'</td><td style="color:var(--mut)">'+esc(c.o)+'</td><td>'+esc(c.t)+'</td></tr>').join('');
  if(sync !== false) replaceHash();
}
(function(){
  const bm = {};
  DATA.forEach(c=>c.b.forEach(b=>bm[b]=(bm[b]||0)+1));
  colChart($('#ch-batch'), BATCHES.map(b=>[b,b,bm[b]||0]), {onClick:k=>{ $('#yc-batch').value=k; renderYc(); }});
  const cb = COHORT.batches || {};
  $('#cohortbody').innerHTML = BATCHES.filter(b=>cb[b]).map(b=>{
    const s = cb[b];
    const layers = Object.entries(s.layers||{}).sort((a,b2)=>b2[1]-a[1]).map(([k,v])=>k+' '+v).join(', ') || '-';
    const status = Object.entries(s.status||{}).sort((a,b2)=>b2[1]-a[1]).map(([k,v])=>k+' '+v).join(', ') || '-';
    const verts = (s.top_verticals||[]).slice(0,3).map(v=>v[0]+' '+v[1]).join(', ') || '-';
    return '<tr><td><b>'+b+'</b></td><td>'+s.count+'</td><td style="font-size:12.5px">'+esc(layers)+'</td><td style="font-size:12.5px">'+esc(status)+'</td><td>'+(s.long_horizon||0)+'</td><td style="font-size:12.5px;color:var(--mut)">'+esc(verts)+'</td></tr>';
  }).join('');
  $('#yc-batch').innerHTML = '<option value="">All batches</option>' + BATCHES.map(b=>'<option>'+b+'</option>').join('');
  $('#yc-batch').addEventListener('change', renderYc);
  renderYc(false);
})();

// ---------- vc ----------
(function(){
  function renderVc(){
    const q = $('#vq').value.toLowerCase();
    const rows = DATA.filter(c=>c.f.length && (!q || (c.n+' '+c.f.join(' ')).toLowerCase().includes(q)))
      .sort((a,b)=> b.f.length-a.f.length || a.n.localeCompare(b.n));
    const cap = 600, shown = Math.min(rows.length, cap);
    $('#vcount').textContent = rows.length + ' companies with a backer signal' + (rows.length > cap ? ' (showing the first ' + cap + ')' : '');
    $('#vcbody').innerHTML = rows.slice(0,cap).map(c=>'<tr'+rowAttr(c.n)+'><td><b>'+esc(c.n)+'</b></td><td>'+esc(c.f.join(', '))+'</td><td>'+pill(c.l)+'</td><td style="color:var(--mut)">'+esc(c.o)+'</td></tr>').join('');
  }
  $('#vq').addEventListener('input', renderVc);
  renderVc();
})();

// ---------- verticals ----------
function renderV(sync){
  const v = $('#v-vert').value;
  const rows = v ? DATA.filter(c=>c.v===v).sort((a,b)=>a.n.localeCompare(b.n)) : [];
  $('#vcount2').textContent = v ? rows.length + ' companies in ' + v : 'Pick a vertical to list its companies';
  $('#vbody').innerHTML = rows.map(c=>'<tr'+rowAttr(c.n)+'><td><b>'+esc(c.n)+'</b></td><td>'+pill(c.l)+'</td><td>'+pill(c.st)+'</td><td style="color:var(--mut)">'+esc(c.o)+'</td></tr>').join('');
  if(sync !== false) replaceHash();
}
(function(){
  const vm = tally(DATA.filter(c=>c.sc==='vertical'), c=>c.v);
  barChart($('#ch-vert2'), sortedEntries(vm).slice(0,30).map(([k,v])=>[k,k,v]), {onClick:k=>{ $('#v-vert').value=k; renderV(); }});
  $('#v-vert').innerHTML = '<option value="">Choose a vertical</option>' + sortedEntries(vm).map(([k])=>'<option>'+esc(k)+'</option>').join('');
  $('#v-vert').addEventListener('change', renderV);
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
</script>
</body>
</html>
'''

if __name__ == '__main__':
    main()
