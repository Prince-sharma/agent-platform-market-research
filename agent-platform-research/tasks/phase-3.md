# Phase 3 task record — thematic deep-dives

Dispatched 2026-09-09, after Phase 2 acceptance. Goal: seven thematic analyses (plan §7.3, P3.1-P3.7) drawing on the Phase 2 wiki (766 company pages, 14 cluster pages) and the merged dataset, each written as a theme report in `wiki/themes/`, then synthesized into `../agent-platform-phase3-thematic.md` with the app evolved to v3.

## Setup done before dispatch

- `data/companies-with-profiles.tsv` gained two columns extracted from the wiki's eleven-decision lines: `task_horizon` (normalized: single-turn / multi-step / long-horizon / persistent / unknown; maximal horizon wins) and `pricing_model` (normalized: per-outcome / per-agent / usage / per-seat / platform+subscription / freemium / other / unknown). Distribution: 73 long-horizon, 81 persistent, 254 multi-step, 8 single-turn, 912 unknown (unknown = no wiki page or page says unknown).
- `data/phase3-yc-cohort-stats.json`: per-batch counts, layer mix, status mix, deep counts, top verticals, long-horizon counts for all 14 batches W21-S26 (725 batch-entries total).
- `wiki/_theme-template.md`: the theme report structure (Scope, Method, Findings, Evidence table, Implications, Open questions, Sources).

## Assignments (7 agents)

| Agent | Theme | Plan ref | Output |
|---|---|---|---|
| p3_1_long_horizon | Long-horizon agents (the dedicated thread) | P3.1 / §10 | wiki/themes/long-horizon-agents.md |
| p3_2_sizing | Market sizing, three lenses | P3.2 / §4 | wiki/themes/market-sizing.md |
| p3_3_build_vs_buy | Build-vs-buy and the failure record | P3.3 / §12 | wiki/themes/build-vs-buy-failures.md |
| p3_4_pricing | Pricing evolution | P3.4 / §12 | wiki/themes/pricing-evolution.md |
| p3_5_moats_ma | Moats, M&A, consolidation | P3.5 / §12 | wiki/themes/moats-consolidation.md |
| p3_6_yc_cohort | YC cohort evolution | P3.6 / §8 | wiki/themes/yc-cohort-evolution.md |
| p3_7_platform_vs_app | Platform-vs-app structure | P3.7 / §12 | wiki/themes/platform-vs-app-structure.md |

## Completion checks for this phase

1. All 7 theme reports exist in `wiki/themes/` with the template sections (Scope, Method, Findings, Evidence table, Implications, Open questions, Sources)
2. Rigor standards hold: figures date-stamped, reported vs estimated labeled, public web only
3. Phase 3 report written (`../agent-platform-phase3-thematic.md`) synthesizing all 7 themes
4. App evolved to v3: themes tab, task-horizon filter, horizon-aware views; structural check passes
5. Dataset columns (`task_horizon`, `pricing_model`) present and used by the app

Status: complete. All 7 theme reports written and verified; phase 3 report delivered; app rebuilt as v6 with themes tab, wiki browser, task-horizon and pricing-model filters, and YC cohort stats. verify.py exits 0.
