# AI Agent Market Research App

React + Vite + Tailwind CSS 3 + shadcn/ui-style components. Analyzes 1,328
AI agent companies across layers, verticals, marketplaces, and YC cohorts.

## Views

- **Overview** — agent-centric census stats: layer structure, status, top verticals
- **Agent Universe** — all 1,328 companies, every column filterable (faceted filters), sortable, searchable
- **Marketplaces** — 1,261 agents across 8 cloud marketplaces, filterable by marketplace, category, signal, pricing
- **Themes** — 8 Phase 3 thematic deep-dives with findings, stats, implications, open questions
- **Wiki** — 788 research pages (companies, themes, clusters) in a tree with search, rendered markdown
- **Sizing** — market sizing through three lenses
- **YC Cohort** — per-batch stats, every column filterable
- **VC Backers** — 42 firms with portfolio drill-downs
- **Verticals** — pick a vertical, browse its agents with filtering

## Setup

```bash
cd app
npm install
```

## Data

Static JSON data lives in `public/data/`. Regenerate it from the research
workspace with:

```bash
python3 app/scripts/prepare_data.py
```

Sources (do not re-fetch; all in this repo):
- `agent-platform-research/data/companies-with-profiles.tsv` (1,328 rows)
- `agent-platform-research/data/marketplace-agents.json` (1,261 agents)
- `agent-platform-research/data/phase3-themes.json` (8 themes)
- `agent-platform-research/data/phase3-yc-cohort-stats.json` (14 batches)
- `agent-platform-research/wiki/` (788 markdown pages)

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

Production build goes to `dist/`. The base path is
`/agent-platform-market-research/` for GitHub Pages.

## Deployment

A GitHub Actions workflow (`.github/workflows/deploy-app.yml`) builds the app
and deploys `dist/` to GitHub Pages on every push to `main` that touches
`app/`. The site is served at
https://prince-sharma.github.io/agent-platform-market-research/.

The Pages source must be set to "GitHub Actions" (repo Settings → Pages).
