# Agent Platform Market Research

Research campaign on the enterprise work-agent platform market: a census of
1,328 companies, 766 wiki profiles, 14 cluster syntheses, 8 theme reports,
and marketplace agent censuses across eight platforms, browsable in an
interactive React app.

Live app: https://prince-sharma.github.io/agent-platform-market-research/

## Layout

- `app/` - the React app (Vite + TypeScript + Tailwind). Source in `app/src`,
  committed generated data in `app/public/data`, data pipeline in
  `app/scripts/prepare_data.py`.
- `agent-platform-research/` - the research workspace: the wiki (788 markdown
  pages), the TSV datasets and raw marketplace JSONs in `data/`, the plan and
  phase reports in `reports/`, task and session records, and the campaign
  scripts (`verify.py` is the structural gate; `build_app.py` is the legacy
  single-file-app builder kept for history).
- `archive/` - superseded material from a sibling project: the GTM OS market
  research HTML and its product notes.
- `.github/workflows/deploy-app.yml` - builds `app/` and deploys it to GitHub
  Pages on changes under `app/`.

## Commands

```bash
# Regenerate the app's data JSONs from the research workspace
python3 app/scripts/prepare_data.py

# Dev server
cd app && npm run dev

# Production build (typecheck + vite)
cd app && npm run build

# Lint
cd app && npm run lint

# Research verification gate
python3 agent-platform-research/scripts/verify.py
```

Pushing to `main` deploys the app via GitHub Actions; the workflow triggers
on changes under `app/` and to the workflow file itself.

## Data flow

`agent-platform-research/data/companies-with-profiles.tsv` is the single
source of truth for structured facts; `agent-platform-research/wiki/` holds
the researched detail. `app/scripts/prepare_data.py` turns both into the JSON
files under `app/public/data/`, which the React app fetches at runtime. After
editing research data, regenerate the JSONs and commit them alongside the
source change.
