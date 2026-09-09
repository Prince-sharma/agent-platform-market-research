# Agent Platform Research

Durable research workspace for the enterprise work-agent platform study. Everything here survives between sessions and is meant to be built on: the wiki is the knowledge base, data holds the structured datasets, tasks holds the per-phase execution records.

Opening this in a new session? Read `STATE.md` first (where the campaign stands, next actions), then `HARNESS.md` (the protocol).

The master plan lives one level up: `../agent-platform-research-plan.md`. Phase reports also live one level up (`../agent-platform-phase1-census.md`, etc.) and feed the central interactive app (`../agent-platform-market-research.html`), which is rebuilt after every phase.

## Layout

- `STATE.md` — campaign state: phase snapshot, current focus, next actions, open decisions. Read first.
- `HARNESS.md` — the harness: bootstrap, unit of work, phase protocol, gates, improvement loop.
- `wiki/` — the knowledge base. One markdown page per company (`wiki/companies/<slug>.md`), one per cluster (`wiki/clusters/<slug>.md`). Templates: `wiki/_template.md`, `wiki/_cluster-template.md`.
- `data/` — structured datasets. `phase1-merged.tsv` is the census (1,328 companies, 10 columns: name, sources, files, one_liner, layer, scope, vertical, status, traction, priority). `companies-with-profiles.tsv` is the census plus Phase 2 profile fields (`profile_depth`, `wiki_slug`) with verified status corrections — the app builds from this. `phase1-raw/` holds the 17 original sweep outputs. `phase2-assignments/` holds the per-agent company lists for Phase 2.
- `tasks/` — per-phase task files recording what was dispatched and what completed.
- `sessions/` — append-only session log: what each session did, verifier results, retros.

## Wiki conventions

- Company page slug: lowercase, non-alphanumeric characters to dashes (`Sierra` -> `sierra.md`, `11x` -> `11x.md`, `Copy.ai` -> `copy-ai.md`).
- Frontmatter carries the classification vector so pages are machine-parseable; the body carries the research.
- `profile_depth: base` means census facts plus light verification; `deep` means the eleven build decisions were researched individually.
- Mark anything unverified as `unknown` rather than guessing. Every claim in the body should have a source in the Sources section.
- Pages are updated in place in later phases; `updated:` records the last touch.

## Phase history

- Phase 1 (2026-09-09): census. 16 sweeps, 1,546 raw rows, 1,328 unique companies, 766 high-priority. Report: `../agent-platform-phase1-census.md`.
- Phase 2 (2026-09-09, complete): profiling. 14 sub-agents profiled all 766 high-priority entries into this wiki — 303 deep profiles (target ~200), 463 base, 14 cluster pages. Seven census status corrections verified (six acquisitions plus the Quivr pivot) and merged into `data/companies-with-profiles.tsv`; the app was rebuilt as v2 with profile-depth filters and wiki links. Report: `../agent-platform-phase2-landscape.md`.
- Phase 3 (2026-09-09, complete): thematic deep-dives. Seven theme reports written in `wiki/themes/` (long-horizon agents, market sizing, build-vs-buy, pricing evolution, moats and M&A, YC cohort evolution, platform-vs-app structure). Two new dataset columns extracted (`task_horizon`, `pricing_model`). Cohort stats scripted into `phase3-yc-cohort-stats.json`. App rebuilt as v6 with themes tab, embedded wiki browser (791 pages rendered as HTML), task-horizon and pricing-model filters, YC cohort tab, and sizing tab. Report: `../agent-platform-phase3-thematic.md`.
- Phase 4 (2026-09-09, complete): final verification and handover. App audited against plan section 13 deliverable spec (company modal, sector filters, nuance filters, cohort tabs, thematic tabs). Both gates green: `verify.py` 42/42, `verify_app.js` 22/22. Campaign complete.
