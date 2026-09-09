# Campaign state

The single source of truth for where this research stands. A session opening
this workspace reads this file first, runs the verifier, and picks up the top
next action. It is updated at the close of every session and must never drift
from what the verifier actually reports.

Last updated: 2026-09-09, Phase 4 close (campaign complete)

## Campaign snapshot

| Phase | Scope | Status | Closing gate |
|---|---|---|---|
| 1 | Census (YC, VC portfolios, known players, prior research) | complete | report delivered; 1,328 unique companies, 766 high-priority |
| 2 | Profiling (wiki pages, clusters, app v2) | complete | report delivered; 766 pages, 303 deep, 14 clusters |
| 3 | Thematic deep-dives (7 themes) | complete | report delivered; 7 theme reports, app v6 with wiki browser |
| 4 | Central app final pass + verification + handover | complete | verify.py 42/42, verify_app.js 22/22, section 13 audit pass |

Verifier right now: all checks pass. verify.py: 42 of 42. verify_app.js: 22 of 22.

## Current focus

The campaign is complete. All four phases are closed. The deliverable is
`agent-platform-market-research.html` (v6), a single-file interactive app with
9 tabs, 1,328 companies, 791 embedded wiki pages, 7 theme reports, YC cohort
stats, sizing analysis, and a searchable wiki browser.

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

- Git: everything since the baseline commit (39ec86a) is untracked. A git
  checkpoint should be committed when the user is ready.

## Updating this file

At session close: refresh Last updated, the snapshot table, the verifier line,
and Next actions (an empty list means blocked on the user or done). Never
record a phase complete unless the verifier exits 0 for it.
