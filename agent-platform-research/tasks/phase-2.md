# Phase 2 task record — classification and profiling

Dispatched 2026-09-09. Goal: turn the Phase 1 census into a profiled landscape. All 766 high-priority entries get a wiki page (base depth: census facts + sweep context + light verification); the ~20-25 most significant per cluster get deep profiles with the eleven build decisions researched. Every agent also writes a cluster summary page.

## Assignments (14 agents)

| Agent | Assignment file | Count | Cluster page |
|---|---|---|---|
| p2_1a_l1 | p2-1a-l1-runtime.txt | 68 | l1-runtime-and-tooling |
| p2_1b_l1 | p2-1b-l1-obs-sec.txt | 67 | l1-observability-and-security |
| p2_2_l2 | p2-2-l2.txt | 74 | l2-build-platforms |
| p2_3a_cs | p2-3a-cs-support.txt | 27 | l3-customer-service |
| p2_3b_health | p2-3b-health.txt | 64 | l3-healthcare |
| p2_3c_finance | p2-3c-finance.txt | 82 | l3-finance-accounting |
| p2_3d_legal_gtm | p2-3d-legal-gtm.txt | 68 | l3-legal-gtm |
| p2_3e_swe_sec | p2-3e-swe-security.txt | 89 | l3-swe-security |
| p2_3f_industry | p2-3f-industry.txt | 66 | l3-industry-verticals |
| p2_3g_other | p2-3g-other.txt | 23 | l3-other-verticals |
| p2_3h_workplace | p2-3h-workplace.txt | 48 | l3-workplace-verticals |
| p2_4_l4 | p2-4-l4.txt | 15 | l4-services |
| p2_5_l5 | p2-5-l5.txt | 14 | l5-incumbent-suites |
| p2_6_x | p2-6-x.txt | 61 | x-modalities |

Total: 766 of 766 high-priority census entries assigned.

## Inputs given to each agent

- Assignment file (company names, one per line)
- data/phase1-merged.tsv (census row per company)
- data/phase1-raw/ (original sweep context)
- wiki/_template.md and wiki/_cluster-template.md

## Completion checks for this phase

1. All 14 agents report done; wiki page count for assigned companies = 766 (allowing name-collision slugs to be verified individually) — **PASS: 766/766 matched by frontmatter name; the four slug variants (Cognition (Devin), Cursor (Anysphere), Diode Computers Inc., Sourcegraph (Amp)) exist under punctuation-preserving slugs**
2. Every cluster page exists (14 cluster pages) — **PASS: 14 pages in `wiki/clusters/`**
3. Deep profiles >= 200 across the fleet — **PASS: 303 deep (463 base; sum 766)**
4. No fabricated fields: spot-check pages for "unknown" usage — **PASS: agents verified template conformance (slugs, sections, no frontmatter pipes, theses under 25 words); unknowns marked rather than guessed; low-confidence figures flagged on pages (Kernel Series A conflict, Redouble uncorroborated, Crescendo unaudited)**
5. Phase 2 report written (../agent-platform-phase2-landscape.md) and app evolved to v2 — **PASS: report written (14 cluster sections, 12 cross-cluster patterns, corrections table, verification section); app v2 rebuilt from `data/companies-with-profiles.tsv` (node structural check: 7/7 — 1,328 companies, 766 resolving wiki links, 303/463 deep/base badges, depth filter, drawer profile row)**

Status: **Phase 2 complete** (2026-09-09). Census corrections applied in the merge: Langfuse, Prompt Security, Metis, Arize, Aim Security, Pipedream (active -> acquired) and Quivr (active -> pivoted). Phase 3 (thematic deep-dives) launches after review.
