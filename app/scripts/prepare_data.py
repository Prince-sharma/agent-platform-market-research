#!/usr/bin/env python3
"""Prepare static JSON data for the React app.

Reads the campaign's research data (TSV + JSON + wiki markdown) from
agent-platform-research/ and writes app/public/data/*.json.

Outputs:
  companies.json        - 1,328 census companies (TSV converted, with derived
                          yc_batch, backers, and website fields; websites come
                          from the curated company-websites.json override,
                          falling back to wiki-source extraction)
  marketplace-agents.json - 1,261 marketplace agents (with pricing_bucket and
                          u listing URL from curated marketplace-agent-urls.json)
  themes.json           - Phase 3 theme reports (P3.1-P3.8)
  yc-cohort.json        - Per-batch YC cohort stats
  wiki.json             - All wiki pages (companies, themes, clusters) with
                          frontmatter parsed and markdown body
  vc-backers.json       - VC backer aggregation derived from the sources column
  sizing.json           - Market sizing content (cards, lenses, context, anchors)

Usage: python3 app/scripts/prepare_data.py  (from repo root or app/)
"""

import csv
import json
import os
import re
import sys
from collections import Counter, defaultdict

REPO_ROOT = os.path.normpath(
    os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..')
)
DATA_DIR = os.path.join(REPO_ROOT, 'agent-platform-research', 'data')
WIKI_DIR = os.path.join(REPO_ROOT, 'agent-platform-research', 'wiki')
OUT_DIR = os.path.join(
    os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'data'
)

YC_RE = re.compile(r'^YC\s+([WFS]\d{2})$')


def parse_frontmatter(text):
    """Parse simple YAML frontmatter (flat key: value pairs)."""
    m = re.match(r'^---\s*\n(.*?)\n---\s*\n?', text, re.S)
    if not m:
        return {}, text
    meta = {}
    for line in m.group(1).split('\n'):
        if ':' in line:
            k, _, v = line.partition(':')
            meta[k.strip()] = v.strip()
    return meta, text[m.end():]


def split_sources(sources):
    """Split the sources column into (yc_batch, backers, sweeps).

    Tokens are ';'-separated. YC batches look like 'YC W24'. Sweep codes
    contain ':' (ext:L3, seed:L2, gtm:rfp). Everything else is a VC firm
    name, possibly comma-separated within one token ('Z47, Blume').
    """
    yc_batch = ''
    backers = []
    sweeps = []
    for token in sources.split(';'):
        token = token.strip()
        if not token:
            continue
        m = YC_RE.match(token)
        if m:
            yc_batch = m.group(1)
        elif ':' in token:
            sweeps.append(token)
        else:
            for part in token.split(','):
                part = part.strip()
                if part:
                    backers.append(part)
    return yc_batch, backers, sweeps


def pricing_bucket(pr):
    """Coarse pricing bucket for faceted filtering (raw value is displayed)."""
    p = (pr or '').strip().lower()
    if not p or p == 'unknown':
        return 'unknown'
    if 'freemium' in p or 'free tier' in p or 'free trial' in p:
        return 'freemium'
    if 'hardware' in p:
        return 'hardware'
    if 'professional services' in p or 'service engagement' in p:
        return 'professional services'
    if (
        'included with' in p
        or 'included in' in p
        or p.startswith('included')
        or 'part of the agentforce' in p
    ):
        return 'platform-included'
    if 'subscription' in p or '/mo' in p or 'user/month' in p or 'byol' in p or 'paid' in p:
        return 'subscription'
    if (
        'pay-as-you-go' in p
        or 'pay-per-use' in p
        or 'usage-based' in p
        or 'usage based' in p
        or 'token-based' in p
    ):
        return 'usage-based'
    if 'enterprise' in p or 'contact vendor' in p or 'not publicly listed' in p:
        return 'enterprise'
    if (
        'free' in p
        or 'open source' in p
        or 'oss' in p
        or 'apache' in p
        or 'cc-by' in p
        or 'github' in p
    ):
        return 'free / oss'
    return 'other'


# ---------------------------------------------------------------------------
# Company website extraction
#
# Wiki pages cite their sources as bare URLs and domain mentions. The
# company's own site is recovered by scoring candidate domains: citation
# frequency plus a bonus when the domain echoes the company name, with
# news/VC/hosting domains blocked unless they name-match. Obvious
# subdomains (docs.foo.ai) reduce to their root (foo.ai).

WEBSITE_BLOCK = {
    # news, media, research
    'ycombinator.com', 'news.ycombinator.com', 'techcrunch.com', 'fortune.com',
    'reuters.com', 'bloomberg.com', 'forbes.com', 'wsj.com', 'nytimes.com',
    'cnbc.com', 'aibizinsider.com', 'theinformation.com',
    'businessinsider.com', 'venturebeat.com', 'sifted.eu', 'tech.eu',
    'inc.com', 'fastcompany.com', 'wired.com', 'theverge.com', 'zdnet.com',
    'computerworld.com', 'infoworld.com', 'arstechnica.com', 'wikipedia.org',
    'arxiv.org',
    # analyst / data platforms
    'gartner.com', 'forrester.com', 'mckinsey.com', 'crunchbase.com',
    'pitchbook.com', 'glassdoor.com', 'indeed.com', 'g2.com', 'capterra.com',
    'producthunt.com',
    # social / hosted
    'linkedin.com', 'twitter.com', 'x.com', 'github.com', 'github.io',
    'youtube.com', 'medium.com', 'substack.com', 'reddit.com', 'discord.com',
    'slack.com', 'wordpress.com', 'blogspot.com', 'vercel.app',
    'netlify.app', 'heroku.com',
    # big-tech clouds (cited by products built on them; the companies
    # themselves still match by name when they are the census entry)
    'google.com', 'microsoft.com', 'amazon.com', 'apple.com', 'openai.com',
    'anthropic.com', 'huggingface.co', 'salesforce.com', 'servicenow.com',
    'nvidia.com', 'oracle.com', 'ibm.com', 'adobe.com', 'sap.com',
    'zoho.com', 'hubspot.com',
    # VC firms
    'sequoiacap.com', 'a16z.com', 'benchmarkcap.com', 'greylock.com',
    'lightspeedvp.com', 'foundersfund.com', 'khoslaventures.com',
    'insightpartners.com', 'bessemervp.com', 'menlovc.com',
    'batterypartners.com', 'indexventures.com', 'coatue.com',
    'generalcatalyst.com', 'nea.com', 'ivp.com', 'felicis.com',
    'luxcapital.com', '8vc.com', 'madrona.com', 'craftventures.com',
    'iconiqcapital.com', 'thrivcap.com', 'conviction.com', 'radical.vc',
    'aifund.vc', 'amplifypartners.com', 'signalfire.com', 'mayfield.com',
    'foundationcap.com',
}

WEBSITE_HOSTED_SUFFIXES = (
    '.github.io', '.vercel.app', '.netlify.app', '.blogspot.com',
    '.wordpress.com', '.substack.com',
)

URL_RE = re.compile(r'https?://([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})')
BARE_DOM_RE = re.compile(
    r'(?<![\w./@-])((?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+'
    r'(?:com|ai|io|dev|app|co|net|org|xyz|so|tech|health|finance|me|eu|us'
    r'|info|biz|cloud|studio|gg|sh|to|link|page|site|online|life|world'
    r'|space|care|team|works|tools|systems|labs))\b',
    re.I,
)


def _norm_domain(d):
    d = d.lower().strip('.')
    return d[4:] if d.startswith('www.') else d


def _name_match(dom, name, slug):
    """True when a label of the domain echoes the company name or slug."""
    labels = dom.split('.')[:-1]
    core = ''.join(labels)
    n = re.sub(r'[^a-z0-9]', '', (name or '').lower())
    s = re.sub(r'[^a-z0-9]', '', (slug or '').lower())
    for label in labels:
        if len(label) >= 3 and (label == s or label == n or label in n):
            return True
    return bool(core) and (core == n or core == s)


def _blocked(dom, name, slug):
    if dom.endswith(WEBSITE_HOSTED_SUFFIXES):
        return not _name_match(dom, name, slug)
    return dom in WEBSITE_BLOCK and not _name_match(dom, name, slug)


def extract_website(name, slug, markdown):
    """Best-effort company website from a wiki page. '' when untrustworthy."""
    m = re.search(r'^## Sources\s*$(.*)', markdown, re.M | re.S)
    src = m.group(1) if m else ''
    freq = Counter()
    for d in URL_RE.findall(src):
        freq[_norm_domain(d)] += 1
    for d in BARE_DOM_RE.findall(src):
        freq[_norm_domain(d)] += 1
    # Whole-text pass: outside the Sources section a domain is only
    # trustworthy when it echoes the company's own name.
    for d in URL_RE.findall(markdown) + BARE_DOM_RE.findall(markdown):
        d = _norm_domain(d)
        if _name_match(d, name, slug):
            freq[d] += 1

    best, best_score = None, 0
    for dom, count in freq.items():
        if _blocked(dom, name, slug):
            continue
        score = count + (3 if _name_match(dom, name, slug) else 0)
        if score > best_score or (
            score == best_score
            and best
            and dom.count('.') < best.count('.')
        ):
            best, best_score = dom, score
    if not best or not (_name_match(best, name, slug) or freq[best] >= 2):
        return ''
    # Reduce obvious subdomains to their root when the root also echoes
    # the name (support.atlassian.com -> atlassian.com).
    labels = best.split('.')
    if len(labels) > 2:
        root = labels[-2] + '.' + labels[-1]
        if _name_match(root, name, slug) and not _blocked(root, name, slug):
            best = root
    return 'https://' + best


def write_json(name, obj):
    path = os.path.join(OUT_DIR, name)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(obj, f, ensure_ascii=False, separators=(',', ':'))
    size = os.path.getsize(path)
    print(f'  {name}: {os.path.getsize(path) / 1024:.0f} KB')


def load_curated(name):
    """Load a curated JSON map from the research data dir, skipping _ keys."""
    path = os.path.join(DATA_DIR, name)
    if not os.path.exists(path):
        return {}
    with open(path, encoding='utf-8') as f:
        return {k: v for k, v in json.load(f).items() if not k.startswith('_')}


def prepare_companies():
    website_override = load_curated('company-websites.json')
    with open(
        os.path.join(DATA_DIR, 'companies-with-profiles.tsv'),
        encoding='utf-8',
    ) as f:
        rows = list(csv.DictReader(f, delimiter='\t'))
    companies = []
    with_website = 0
    for r in rows:
        yc_batch, backers, sweeps = split_sources(r.get('sources', ''))
        slug = r.get('wiki_slug', '')
        website = website_override.get(r['name'], '')
        if not website and slug:
            wiki_path = os.path.join(WIKI_DIR, 'companies', slug + '.md')
            if os.path.exists(wiki_path):
                with open(wiki_path, encoding='utf-8') as f:
                    website = extract_website(r['name'], slug, f.read())
        if website:
            with_website += 1
        companies.append(
            {
                'name': r['name'],
                'one_liner': r.get('one_liner', ''),
                'layer': r.get('layer', ''),
                'scope': r.get('scope', ''),
                'vertical': r.get('vertical', ''),
                'status': r.get('status', ''),
                'traction': r.get('traction', ''),
                'priority': r.get('priority', ''),
                'profile_depth': r.get('profile_depth', ''),
                'wiki_slug': r.get('wiki_slug', ''),
                'task_horizon': r.get('task_horizon', ''),
                'pricing_model': r.get('pricing_model', ''),
                'sources': r.get('sources', ''),
                'yc_batch': yc_batch,
                'backers': backers,
                'sweeps': sweeps,
                'website': website,
            }
        )
    print(
        f'companies: {len(companies)} rows, {with_website} with websites '
        f'({len(website_override)} curated overrides)'
    )
    write_json('companies.json', companies)
    return companies


def prepare_marketplace():
    agent_urls = load_curated('marketplace-agent-urls.json')
    with open(
        os.path.join(DATA_DIR, 'marketplace-agents.json'), encoding='utf-8'
    ) as f:
        agents = json.load(f)
    with_url = 0
    for a in agents:
        a['pricing_bucket'] = pricing_bucket(a.get('pr', ''))
        a['u'] = agent_urls.get(f"{a.get('m', '')}|{a.get('n', '')}", '')
        if a['u']:
            with_url += 1
    print(f'marketplace agents: {len(agents)} rows, {with_url} with urls')
    write_json('marketplace-agents.json', agents)
    return agents


def prepare_themes():
    with open(
        os.path.join(DATA_DIR, 'phase3-themes.json'), encoding='utf-8'
    ) as f:
        themes = json.load(f)
    print(f"themes: {len(themes['themes'])}")
    write_json('themes.json', themes)
    return themes


def prepare_yc():
    with open(
        os.path.join(DATA_DIR, 'phase3-yc-cohort-stats.json'), encoding='utf-8'
    ) as f:
        cohort = json.load(f)
    print(f"yc batches: {len(cohort['batches'])}")
    write_json('yc-cohort.json', cohort)
    return cohort


def prepare_wiki():
    kinds = [
        ('companies', 'company'),
        ('themes', 'theme'),
        ('clusters', 'cluster'),
    ]
    pages = []
    for dirname, kind in kinds:
        d = os.path.join(WIKI_DIR, dirname)
        for fname in sorted(os.listdir(d)):
            if not fname.endswith('.md') or fname.startswith('_'):
                continue
            slug = f'{dirname}/{fname[:-3]}'
            with open(os.path.join(d, fname), encoding='utf-8') as f:
                text = f.read()
            meta, body = parse_frontmatter(text)
            title = meta.get('name', '')
            if not title:
                # Fall back to first markdown heading
                m = re.match(r'^#\s+(.+)', body)
                title = m.group(1) if m else fname[:-3]
            pages.append(
                {
                    'slug': slug,
                    'kind': kind,
                    'title': title,
                    'markdown': body,
                    'layer': meta.get('layer', ''),
                    'scope': meta.get('scope', ''),
                    'vertical': meta.get('vertical', ''),
                    'status': meta.get('status', ''),
                    'priority': meta.get('priority', ''),
                    'profile_depth': meta.get('profile_depth', ''),
                    'updated': meta.get('updated', ''),
                }
            )
    print(f'wiki pages: {len(pages)}')
    write_json('wiki.json', {'pages': pages})
    return pages


def prepare_vc_backers(companies):
    """Aggregate VC backer signal from the sources column."""
    by_backer = defaultdict(list)
    for c in companies:
        for b in c['backers']:
            by_backer[b].append(c)
    backers = []
    for name, cos in by_backer.items():
        layers = Counter(c['layer'] for c in cos)
        statuses = Counter(c['status'] for c in cos)
        verticals = Counter(
            c['vertical'] for c in cos if c['vertical'] and c['vertical'] != 'general'
        )
        backers.append(
            {
                'backer': name,
                'count': len(cos),
                'active': statuses.get('active', 0),
                'acquired': statuses.get('acquired', 0),
                'dead': statuses.get('dead', 0) + statuses.get('pivoted', 0),
                'layers': dict(layers),
                'top_verticals': [v for v, _ in verticals.most_common(3)],
                'companies': [
                    {
                        'name': c['name'],
                        'layer': c['layer'],
                        'vertical': c['vertical'],
                        'status': c['status'],
                        'one_liner': c['one_liner'],
                        'wiki_slug': c['wiki_slug'],
                    }
                    for c in sorted(cos, key=lambda x: x['name'].lower())
                ],
            }
        )
    backers.sort(key=lambda b: (-b['count'], b['backer'].lower()))
    print(f'vc backers: {len(backers)} firms, {sum(b["count"] for b in backers)} links')
    write_json('vc-backers.json', backers)
    return backers


SIZING = {
    'cards': [
        {
            'label': '2030 TAM',
            'value': '$50-120B',
            'note': 'work-agent software, estimate; high end assumes per-outcome pricing spreads',
        },
        {
            'label': '2026 revenue',
            'value': '$8-15B',
            'note': 'scaled work-agent software; $5.0-5.5B visible across 64 disclosing companies',
        },
        {
            'label': 'Platform SAM 2026',
            'value': '$2-6B',
            'note': 'bracketed by Menlo $750M and Gartner $9.5B AI App Dev Platforms',
        },
        {
            'label': 'L3 funding share',
            'value': '$20.4B / 72%',
            'note': 'vertical agents of $28.3B total visible funding',
        },
        {
            'label': 'M&A 2024-26',
            'value': '$13-18B',
            'note': 'estimated total; $10.4B disclosed across 8 priced deals',
        },
    ],
    'lenses': [
        {
            'name': 'Lens A: top-down',
            'body': 'Labor budgets are the ceiling. If work agents capture a growing slice of the service budgets they substitute for, the 2030 TAM lands near the high end ($120B); if they stay software-line-item purchases, near the low end ($50B). The estimate is sensitive to per-outcome pricing adoption because that is what moves spend from software budgets to labor-comparable budgets.',
        },
        {
            'name': 'Lens B: bottom-up',
            'body': 'Summing disclosed and estimated revenue across the census: $5.0-5.5B visible across 64 disclosing companies (Cognition ~$900M, Salesforce Agentforce $800M, Cursor $500M+ lead), scaled to $8-15B for the non-disclosing majority. Confidence: medium; private ARR is as-reported.',
        },
        {
            'name': 'Lens C: deal flow',
            'body': 'Funding and M&A as a signal: $28.3B total visible funding with L3 at $20.4B (72%); $13-18B estimated M&A 2024-26 with $10.4B disclosed across 8 priced deals (Salesforce-Fin ~$3.6B, ServiceNow-Moveworks $2.85B, NICE-Cognigy ~$955M).',
        },
    ],
    'context': [
        {
            'label': '86% of enterprises have deployed agents',
            'note': 'Forrester/Boomi survey, 2026-07-20, reported',
        },
        {
            'label': "34% trust their agents' actions",
            'note': 'Forrester/Boomi survey, 2026-07-20, reported',
        },
        {
            'label': '40%+ of agentic AI projects canceled by end-2027',
            'note': 'Gartner forecast, 2025-06-25, reported',
        },
        {
            'label': '$37B enterprise genAI spend in 2025',
            'note': 'Menlo Ventures, 2025-12-09, reported; platforms ~2% of it',
        },
    ],
    'anchors': [
        {'company': 'Cognition', 'note': '~$900M ARR (2026, reported)'},
        {'company': 'Salesforce Agentforce', 'note': '$800M AI ARR (2026-09, reported)'},
        {'company': 'Cursor', 'note': '$500M+ ARR (2026, reported)'},
        {'company': 'Sierra', 'note': '$15B valuation (2026)'},
        {'company': 'Harvey', 'note': '$11B valuation (2026)'},
        {'company': 'Abridge', 'note': '$5.3B valuation (2026)'},
    ],
    'takeaways': [
        'Value pools in vertical agents and suite-embedded agents today — the horizontal platform layer is ~2% of enterprise genAI spend; L3 captured $20.4B (72%) of visible funding against L2\'s $2.5B.',
        'The platform share question is the biggest open uncertainty — whether independent platforms hold ~2% of AI spend or converge toward AI app-dev\'s ~15% decides the size of the opportunity.',
        'Per-outcome pricing is the TAM unlock — moving from per-seat software budgets to labor-comparable outcome budgets is what stretches the 2030 estimate from the low to the high end.',
        'The trust gap gates the revenue — 86% deployment but 34% trust means the constraint is governance and reliability, not capability.',
    ],
    'theme_ref': 'P3.2',
    'theme_wiki': 'themes/market-sizing',
}


def prepare_sizing():
    print('sizing: ported content')
    write_json('sizing.json', SIZING)


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    print(f'Writing to {OUT_DIR}')
    companies = prepare_companies()
    prepare_marketplace()
    prepare_themes()
    prepare_yc()
    prepare_wiki()
    prepare_vc_backers(companies)
    prepare_sizing()
    print('Done.')


if __name__ == '__main__':
    sys.exit(main())
