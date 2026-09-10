# Campaign state

The single source of truth for where this research stands. A session opening
this workspace reads this file first, runs the verifier, and picks up the top
next action. It is updated at the close of every session and must never drift
from what the verifier actually reports.

Last updated: 2026-09-10, repo reorganization (app / research / archive zones)

## Campaign snapshot

| Phase | Scope | Status | Closing gate |
|---|---|---|---|
| 1 | Census (YC, VC portfolios, known players, prior research) | complete | report delivered; 1,328 unique companies, 766 high-priority |
| 2 | Profiling (wiki pages, clusters, app v2) | complete | report delivered; 766 pages, 303 deep, 14 clusters |
| 3 | Thematic deep-dives (7 themes) | complete | report delivered; 7 theme reports, app v6 with wiki browser |
| 4 | Central app final pass + verification + handover | complete | verify.py 42/42, verify_app.js 22/22, section 13 audit pass |

Verifier right now: all checks pass. verify.py: 44 of 44. (verify_app.js gated the legacy single-file app, removed 2026-09-10.)

## Current focus

The campaign is complete. All four phases are closed. The deliverable is the
React app in `../app/` (9 views, 1,328 companies, 788 wiki pages, 8 theme
reports, marketplace censuses, YC cohort stats, sizing analysis, VC backers),
deployed to GitHub Pages at
https://prince-sharma.github.io/agent-platform-market-research/. Its data
JSONs are regenerated from this workspace by `app/scripts/prepare_data.py`;
pushing to main deploys via GitHub Actions. The old single-file HTML app was
removed in the 2026-09-10 reorganization and remains regenerable via
`scripts/build_app.py`.

## Next actions

None. The campaign is done. If the user wants to extend the research, the
natural next steps would be: (1) a written strategy doc connecting findings
to a specific platform idea (plan section 13, item 3, explicitly out of scope
here), (2) refreshing the census with newer YC batches or VC portfolios, or
(3) deepening specific theme reports with additional primary-source checks.

## Open decisions

All five decisions from plan section 16.2 are settled:

1. India and global inclusion: include.
2. Voice and browser-use modalities: include.
3. Phase gating: pauses after each phase (completed all four).
4. YC window: W21 through S26 including fall batches F24/F25.
5. Coverage beyond the anchors: the seven themes cover the landscape.

## Known gaps and cleanup

- None open. The repo is organized into `app/` (the React app),
  `agent-platform-research/` (this workspace), and `archive/` (the superseded
  GTM OS sibling project).

## Updating this file

At session close: refresh Last updated, the snapshot table, the verifier line,
and Next actions (an empty list means blocked on the user or done). Never
record a phase complete unless the verifier exits 0 for it.
