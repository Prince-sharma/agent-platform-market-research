# Agent Platform Research - Phase 3: Thematic Deep-Dives

**Phase 3 of the enterprise work-agent platform research.** Follows the Phase 1 census (1,328 companies across 16 sweeps) and Phase 2 profiling (766 wiki pages, 303 deep profiles, 14 cluster syntheses). This phase ran seven thematic deep-dives over the wiki and merged dataset, each written as a theme report in `agent-platform-research/wiki/themes/`, then synthesized here. Date: September 2026.

The seven themes: long-horizon agents (P3.1), market sizing (P3.2), build-vs-buy and the failure record (P3.3), pricing evolution (P3.4), moats and M&A (P3.5), YC cohort evolution (P3.6), and platform-vs-app structure (P3.7).

---

## 1. What Phase 3 did

- **Seven theme reports** written in `agent-platform-research/wiki/themes/`, each following the template (Scope, Method, Findings, Evidence table, Implications, Open questions, Sources). Every count is script-derived or sourced; figures are date-stamped and labeled reported, estimated, or inferred.
- **Two new dataset columns** extracted from the wiki's eleven-decision lines: `task_horizon` (single-turn / multi-step / long-horizon / persistent / unknown) and `pricing_model` (per-outcome / per-agent / usage / per-seat / platform+subscription / freemium / other / unknown). Both merged into `data/companies-with-profiles.tsv` and used by the app.
- **Cohort stats** scripted into `data/phase3-yc-cohort-stats.json`: per-batch counts, layer mix, status mix, deep counts, top verticals, and long-horizon counts for all 14 batches W21-S26 (725 batch-entries).
- **Theme metadata** in `data/phase3-themes.json`: headline, findings, stats, implications, and open questions for each theme, consumed by the app's themes tab.
- **App v6:** rebuilt with a themes tab (seven theme cards with findings and implications), task-horizon and pricing-model filters in the universe table, a YC cohort tab with per-batch stats, a sizing tab, and an embedded wiki browser rendering all 789 markdown pages as HTML in-app.

### Theme reports

| Theme | Plan ref | Report | Key question |
|---|---|---|---|
| Long-horizon agents | P3.1 / S10 | `wiki/themes/long-horizon-agents.md` | What task horizons are productized, and what infrastructure do they demand? |
| Market sizing | P3.2 / S4 | `wiki/themes/market-sizing.md` | How large is the work-agent market, through three lenses? |
| Build-vs-buy and failures | P3.3 / S12 | `wiki/themes/build-vs-buy-failures.md` | Do enterprises build or buy, and what is the failure record? |
| Pricing evolution | P3.4 / S12 | `wiki/themes/pricing-evolution.md` | How is agent work priced, and what does each model imply? |
| Moats, M&A, consolidation | P3.5 / S12 | `wiki/themes/moats-consolidation.md` | Which layers have switching costs, and who is consolidating? |
| YC cohort evolution | P3.6 / S8 | `wiki/themes/yc-cohort-evolution.md` | What does the YC cohort reveal about maturity and timing? |
| Platform-vs-app structure | P3.7 / S12 | `wiki/themes/platform-vs-app-structure.md` | Where does value pool across the stack layers? |

---

## 2. Theme-by-theme synthesis

### P3.1: Long-horizon agents

Long-horizon agents (tasks lasting hours to weeks) and persistent agents (always-on) are real but rare: 73 long-horizon (5.5%) and 81 persistent (6.1%) of 1,328 census companies. Roughly a third of each cohort is infrastructure - durable execution engines (Temporal at $5B, 1T monthly actions), long-lived sandboxes (E2B, Daytona), memory (Mem0, Zep), trajectory observability (LangSmith, Raindrop, Patronus).

The binding constraint is reliability. METR's time-horizon research shows the 50% reliability task length doubling every 7 months, with Claude 3.7 Sonnet at ~1 hour in March 2025. Answer.AI's field study of Devin showed a 15% success rate across 20 real tasks. Vendor-claimed resolution rates range from Parahelp's candid 46% to Anterior's KLAS-verified 99.24% clinical accuracy. No long-horizon vendor publishes audited success rates.

Per-outcome pricing emerges exactly where long-horizon work meets verifiable outcomes: 3 of 73 long-horizon companies (Deloitte, Sierra, Superunit) and 2 of 81 persistent (Parahelp, Yuma). Sierra repositioned into long-horizon in July 2026, extending per-resolution pricing to days-to-months horizons.

The gap: no platform combines the six primitives long-horizon work needs (durable execution, long-lived environments, managed memory, approval gates, spend caps, trajectory evals), so vertical builders integrate vertically. Applied Compute ($1.3B valuation) and Temporal ($5B) capture value at the ends while the middle layer stays thin.

### P3.2: Market sizing

Three lenses triangulate the market:

- **Lens A (top-down):** Labor budgets are the ceiling. If work agents capture a growing slice of service budgets, the 2030 TAM lands near $120B; if they stay software-line-item purchases, near $50B. The estimate is sensitive to per-outcome pricing adoption.
- **Lens B (bottom-up):** $5.0-5.5B visible revenue across 64 disclosing companies (Cognition ~$900M, Salesforce Agentforce $800M, Cursor $500M+ lead), scaled to $8-15B for the non-disclosing majority. Confidence: medium.
- **Lens C (capital flows):** $28.3B total visible funding with L3 at $20.4B (72%); $13-18B estimated M&A 2024-26 with $10.4B disclosed across 8 priced deals.

The platform layer is currently ~2% of enterprise genAI spend ($37B in 2025, Menlo Ventures, reported). Whether it stays at 2% or climbs toward 15% (the AI app-dev share) is the biggest open uncertainty in the market size.

### P3.3: Build-vs-buy and the failure record

Gartner predicts over 40% of agentic AI projects will be canceled by end-2027 (reported). The build-vs-buy split is driven by scale and data gravity: the largest firms (JPMorgan, Goldman, UnitedHealth) build internal platform teams; the median enterprise buys from suites (Salesforce Agentforce, Microsoft Copilot Studio, ServiceNow).

Failures concentrate at the pilot-to-production boundary and in customer-facing autonomy without governance - not in model capability. The 11x customer-claims scandal and CEO exit (2025) is the cautionary tale; the Quivr wind-down (April 2026) is the OSS failure. The trust gap is the binding constraint: 86% of enterprises have deployed agents but only 34% trust their actions (Forrester/Boomi, reported).

### P3.4: Pricing evolution

Usage-based pricing dominates known models at 49%. Customer-service resolutions have converged to a market price of $0.50-$2.00 (Crescendo $1.25/resolution plus $2,900/mo, Intercom Fin $0.99/resolution, Parahelp $1.00-1.25/resolution). Per-outcome pricing is rare overall but concentrated where outcomes are countable and labor-comparable.

Pricing models act as risk-allocation tools: per-outcome shifts failure costs to the vendor, creating performance lock-in when paired with a learning loop. The per-seat model is dissolving into credit bundles for suites and labor-shaped units for verticals. Value pools at the verification and liability layer, creating a 10-100x margin over the compute layer.

### P3.5: Moats, M&A, consolidation

Disclosed M&A totals $10.4B across 8 major deals (Salesforce-Fin ~$3.6B, ServiceNow-Moveworks $2.85B, NICE-Cognigy ~$955M). Total estimated 2024-26 agent M&A: $13-18B. Six buyer logics: suites buying proven agents, system-of-record vendors buying vertical agents, security incumbents buying agent security, data infrastructure buying observability, model vendors buying talent, and services firms buying delivery capacity.

Per-outcome pricing is the only commercial mechanism that creates a verifiable moat. L1, where usage pricing is universal, claims evals and data gravity but cannot point to a pricing mechanism that holds a customer. L2 build platforms without distribution are likely to be acquired as features rather than survive as independent companies.

### P3.6: YC cohort evolution

722 YC-backed agent companies represent 54% of the census. The agentic share of YC batches quadrupled from 6-10% (2021-22) to 30-57% (2024-26), with the inflection in Winter 2024. Absolute counts peaked in S24 (82) and F25 (86) and declined in 2026 (W26 45, S26 63).

L3 vertical agents hold 50-79% of every batch; L1 infrastructure grew from 0% (W21) to 33% (S26), confirming the apps-first, infrastructure-second pattern. Vertical concentration shifted from healthcare and logistics to software engineering and finance. Survival rates correlate with age: 2021-22 entries show 80% active, 8% dead, 7% acquired; 2024-26 entries are 99-100% active (too recent for failures). W24 was the breakout batch for funding (Cognition $48B, E2B, Emergent, Fazeshift).

### P3.7: Platform-vs-app structure

Value concentrates heavily at the application layer: L3 holds roughly 60% of census-visible agent revenue and 67% of known $1B+ valuations. L3 valuations peak at Cognition ($48B), ~10x the L1 peak of Temporal ($5B). Visible funding is heavily skewed toward L3 at $22.3B (74% of $30.1B total).

The Cloudflare analogy (metered-utility runtime pricing) breaks because enterprises buy outcomes (resolved tickets) rather than runtimes (sandbox-seconds). Platform value resides in the binding and governance layer (data, integrations, memory) rather than the commoditizing metered-runtime slice. Standalone L2 platforms without adjacent-category distribution are likely to be absorbed by suites or RPA incumbents.

---

## 3. Cross-theme patterns

Five patterns emerge only when the seven themes are read together:

### 3.1 The two-ends structure

Value pools at the two ends of the stack - the durable substrate (Temporal $5B, Applied Compute $1.3B) and the outcome-priced vertical (Cognition $48B, Sierra $15.8B) - while the middle orchestration layer (L2 build platforms, memory, HITL tooling) stays commercially thin. This finding appears independently in P3.1 (long-horizon infrastructure), P3.7 (platform-vs-app structure), and P3.5 (moats). The middle layer's weakness is structural, not transitional: it lacks both the accumulating data assets of the substrate and the verifiable outcomes of the vertical.

### 3.2 Per-outcome pricing as the convergence point

Per-outcome pricing is the thread connecting four themes. P3.1 finds it emerging where long-horizon work meets verifiable outcomes. P3.4 finds it creating performance lock-in and a 10-100x margin over compute. P3.5 finds it as the only verifiable moat. P3.2 finds it as the primary mechanism for expanding TAM into labor budgets. The convergence: per-outcome is not just a pricing model but the commercial mechanism that ties together reliability (P3.1), stickiness (P3.4/P3.5), and market size (P3.2). Sierra's July 2026 repositioning into long-horizon with per-resolution pricing is the clearest example of this convergence in a single company.

### 3.3 The trust gap as the binding constraint

The trust gap (86% deployment, 34% trust) appears as the binding constraint across P3.3 (failures concentrate in ungoverned autonomy), P3.1 (approval gates dominate the finance cluster), and P3.4 (per-outcome pricing shifts failure costs to the vendor, which is itself a trust mechanism). The market is not constrained by model capability but by governance, reliability, and the commercial mechanisms that make agents trustworthy enough to deploy without constant human review.

### 3.4 The cohort timing signal

The YC cohort (P3.6) provides the timing context for the other six themes. The entry inflection in W24 (31% agentic share) coincides with the long-horizon emergence (P3.1: 14 long-horizon in W24), the funding peak (P3.7: Cognition $48B from W24), and the M&A wave (P3.5: $13-18B in 2024-26). The 2026 batch contraction suggests the entry phase is giving way to the scaling and consolidation phase, which means the platform opportunity is shifting from "serve new builders" to "serve scaling builders who need infrastructure they built ad hoc."

### 3.5 The vertical-first, infrastructure-second pattern

P3.6 confirms what P3.7 finds structurally and P3.1 finds in long-horizon: L3 vertical agents entered the market first (76% of W21), and L1 infrastructure arrived second (0% in W21, 33% in S26). This means a build platform's natural customers have been operating for 2-3 years without adequate infrastructure, building their own durable execution, memory, and approval gates. The platform opportunity is to replace ad hoc infrastructure with standardized primitives - but only if the platform can match the depth of vertical integration these companies already achieved.

---

## 4. The central question: what an agent-building platform must provide

Synthesizing across all seven themes, an agent-building platform that displaces vertical integration must provide:

1. **Durable execution** - checkpoint/resume, timers, durable signals (Temporal is the reference; P3.1).
2. **Long-lived environments** - persistent sandboxes and browser sessions that survive across task steps (E2B's 24h cap is the current ceiling; P3.1).
3. **Managed memory** - temporal knowledge graphs that scale under load (Mem0 and Zep are strategically central but commercially tiny; P3.1).
4. **Approval gates as products** - routing, escalation, SLAs, not just primitives (the finance cluster's ~20 of 25 known cases; P3.1/P3.3).
5. **Spend controls** - per-agent, per-run, per-day budgets (scattered primitives today; P3.1).
6. **Trajectory evals** - evaluation of multi-step runs, not just outputs (Applied Compute at $1.3B; P3.1).
7. **Outcome metering** - the ability to meter verifiable outcomes rather than tokens, enabling per-outcome pricing (the commercial mechanism leaders are converging on; P3.1/P3.4/P3.5).
8. **Binding and governance** - data, integrations, and identity governance that create switching costs (the trust gap is the binding constraint; P3.3/P3.7).

No platform today combines all eight. The companies that come closest - Temporal (durable execution), Glean (binding layer), Salesforce Agentforce (governance plus distribution) - each cover a subset. The gap is the opportunity.

---

## 5. Open questions that carry forward

These questions emerged across multiple themes and remain unresolved:

1. **Platform share:** Will the platform layer's share of enterprise AI spend remain at ~2% or climb toward 15%? (P3.2, P3.7) This is the single biggest uncertainty in the market size and the platform opportunity.
2. **Per-outcome economics:** Will CX resolution prices commoditize downward from $0.50-$2.00, or will the learning loop and human failure backstop sustain margins? (P3.4, P3.5)
3. **Approval-gate ownership:** Who will own the approval-gate product - build platforms, identity vendors (Okta, Microsoft), or workflow suites? (P3.1, P3.3)
4. **Memory independence:** Will memory providers like Mem0 and Zep remain independent or be absorbed by model vendors? (P3.1, P3.7)
5. **Cohort exits:** Will the 2023-24 cohort's acquisition rate climb to match 2021-22 (7%), or will high valuations delay acquisitions? (P3.5, P3.6)
6. **Suite displacement:** Will suite studios (Salesforce, Microsoft, ServiceNow) eventually displace in-house builds at the median enterprise, or will the trust gap keep buyers on bought products? (P3.3, P3.7)
7. **Fall batch continuation:** Will YC continue the Fall batch experiment, or was it a response to the 2024-25 AI surge? (P3.6)

---

## 6. Verification

Checks run against the deliverables on disk (September 9, 2026):

1. **Theme reports:** 7 of 7 exist in `wiki/themes/` with all template sections (Scope, Method, Findings, Evidence table, Implications, Open questions, Sources). No em dashes.
2. **Dataset columns:** `task_horizon` and `pricing_model` present in `companies-with-profiles.tsv` (1,328 rows, 14 columns). Vocabularies clean.
3. **Cohort stats:** `phase3-yc-cohort-stats.json` carries all 14 batches (W21-S26) with per-batch counts, layer mix, status mix, deep counts, top verticals, and long-horizon counts.
4. **Theme metadata:** `phase3-themes.json` carries 7 themes (P3.1-P3.7) with headline, findings, stats, implications, and open questions.
5. **App v6:** `agent-platform-market-research.html` rebuilt with themes tab, task-horizon and pricing-model filters, YC cohort tab, sizing tab, and embedded wiki browser (789 pages rendered as HTML). Runtime check passes.
6. **Structural gate:** `python3 agent-platform-research/scripts/verify.py` exits 0.

---

## 7. Next

Phase 4 (central report, per the plan S7.4): synthesis of Phases 1-3 into the final interactive deliverable. The app is already at v6 with all tabs functional; Phase 4 is the final verification pass, handover walk-through, and any remaining polish. The campaign closes when `verify.py` and `verify_app.js` both exit 0 and the app is spot-checked in a browser.

**Artifacts:**

- `agent-platform-market-research.html` - interactive app, v6 (overview, universe, themes, wiki, sizing, YC cohort, VC backers, verticals, method)
- `agent-platform-research/wiki/themes/` - 7 theme reports
- `agent-platform-research/data/phase3-themes.json` - theme metadata
- `agent-platform-research/data/phase3-yc-cohort-stats.json` - cohort stats
- `agent-platform-research/data/companies-with-profiles.tsv` - merged dataset with task_horizon and pricing_model
- `agent-platform-research/tasks/phase-3.md` - assignment table and completion checks
