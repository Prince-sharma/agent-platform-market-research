# Long-Horizon Agents (Theme P3.1)

## Scope

Implements plan section 10 (dedicated research thread, theme P3.1): long-horizon agents - verticalized, specialized agents that own a task for hours to weeks (a month-end close, a code change with review cycles, a legal work product, a claim adjudication), with intermediate state, checkpoints, and human approval gates - plus the related but distinct persistent agents (always-on: monitoring, triaging, inboxes). Answers the five research questions of §10: horizons productized, reliability stories, infrastructure choices, pricing, and what a build platform must provide. Date: 2026-09-09.

## Method

- **Dataset:** scripted analysis of `data/companies-with-profiles.tsv` (1,328 rows; `task_horizon` extracted in Phase 2 from the wiki pages, maximal horizon mentioned wins). Every count quoted here was verified by script on 2026-09-09, none by eye.
- **Wiki:** all 73 long-horizon and 81 persistent companies' pages read (57 + 61 deep, 16 + 20 base), plus the plan's named candidates regardless of label (Numeric, Rillet, EvenUp, Trunk Tools, HappyRobot, Lindy; Vooma has no wiki page), plus the 14 cluster pages' task-horizon sections. Extraction ran as 71 scripted LLM sub-calls over 136 wiki pages; every figure below traces to a wiki page or a primary web source.
- **Web:** targeted primary-source checks - METR time-horizon research (blog 2025-03-19; Time Horizon 1.1 page 2026-05-08), Answer.AI's month-with-Devin field study (2025-01-08), Factory's Terminal-Bench announcement (2025-09-25), Sierra's Horizon launch and Takeoff acquisition (2026-07-16 / 2026-07-23), Cognition's 2026 revenue reporting.
- **Labels:** figures are marked reported (vendor/primary), estimated, or inferred. Private ARR is "as reported/claimed" unless noted.

## Findings

### Q1: What task horizons are being productized, and where

1. **Long-horizon is real but rare, and it is a two-sided phenomenon: vertical products plus the infrastructure built to serve them.**
   - Of 1,328 census companies: 73 long-horizon (5.5%), 81 persistent (6.1%) - 154 together (11.6%); 254 multi-step, 8 single-turn, 912 unknown (mostly the 562 normal-priority entries without wiki pages, so 73 is a floor, not a ceiling).
   - Layer split (scripted): long-horizon = 37 L3 (51%), 21 L1 (29%), 8 L2, 5 L4, 2 L5; persistent = 40 L3 (49%), 28 L1 (35%), 7 L2, 4 L4, 2 L5.
   - Roughly a third of each cohort is infrastructure: durable-execution engines (Temporal, Inngest, Hatchet, Rivet), long-lived sandboxes (Daytona, E2B, Kernel, machine0), memory (Mem0, Zep), trajectory observability (LangSmith, Laminar, Raindrop, Patronus). The horizon demand is pulling a substrate into existence.

2. **The verticals where hours-to-weeks actually ships: SWE, accounting close, legal work products, claims/adjudication, and program-scale IT - plus a long tail of physical-world cycles.**
   - Long-horizon L3 by vertical (scripted): healthcare 6 (Anterior, Forus, Convexia, FurtherAI, Overdrive, Cenote - prior-auth and claims lifecycles); software engineering 5 (Cognition/Devin, Factory, OpenHands, Sourcegraph/Amp, Blitzy); customer service 4 (Sierra, Maven AGI, Uniphore); finance/accounting 3 (Basis, Fazeshift, Greenlite); legal 3 (Harvey, Legora, Luminance); singletons: construction (Flywheel AI), logistics (Peer), scientific research (Junction Bioscience), hardware (SigmanticAI, Adam), manufacturing (Tensr), background checks (Superunit), recruiting (Contrario), SAP migration (Nova).
   - Persistent concentrates in customer service (10 - the always-on support agents: Crescendo, Yuma, Parahelp, Wonderful, Observe.AI, 14.ai and others), healthcare (4), and IT/monitoring (Kestrel AI, Entangl, Geordie, Neo, Zenity, Validio) - plus the "coworker cohort" (Viktor, Tasklet, MadeThis, Booko, ion design) selling always-on digital workers.
   - Horizon claims stretch at the edges: Nova "compresses multi-month [SAP] programs into a single day" (reported); Temporal claims days-to-months; Sierra's Horizon agents "engage over days, weeks, or months" (2026-07-16, reported).

3. **The plan's candidate list partially mispredicted the labels - itself a finding.**
   - Numeric, Rillet, EvenUp, Trunk Tools, and HappyRobot all classify as multi-step on their own pages: Numeric's close automation runs "minutes to days" (per-seat from $30/user/mo); Rillet targets continuous processing toward a "zero-day close"; EvenUp spans intake-to-demand in minutes-to-days; Trunk Tools' page says multi-step minutes; HappyRobot's voice workflows resolve in minutes (70% autonomous resolution, reported, undated).
   - The genuine hours-to-weeks products: Devin ("one prompt to PR" across review cycles), Factory, OpenHands, Amp, Basis (month-end closes, partnership tax workbooks), Harvey (research-to-drafting-to-review legal work), Legora/Luminance (end-to-end legal execution), and the claims cohort.
   - Vooma has no wiki page; Lindy's base page leaves the horizon unknown - the plan's persistent-horizontal-agent candidate is unverified in the dataset.

4. **Sierra - the largest outcome-priced agent company - repositioned into long-horizon in July 2026.**
   - Horizon platform launched 2026-07-16 for agents that drive revenue outcomes over days-to-months; Takeoff acquired 2026-07-23 to accelerate it (both reported, Sierra blog).
   - Sierra was at $200M annualized ARR (May 2026, reported) off a $950M Series E at $15.8B. When the per-resolution leader extends to the longest horizons, long-horizon and per-outcome pricing converge on the same roadmap.

### Q2: Reliability stories

5. **Reliability is the binding constraint, and the honest numbers are stark.**
   - METR (2025-03-19, primary): the task length frontier models complete with 50% reliability has doubled roughly every 7 months for ~6 years; Claude 3.7 Sonnet's 50% horizon was ~1 hour (March 2025). By Time Horizon 1.1 (2026-05-08), METR notes measurements above 16 hours are unreliable with its current suite - the frontier is approaching the human workday at coin-flip reliability (inferred from that note).
   - 50% is not a shipping threshold: hours-to-weeks autonomy today is only viable with human review or tolerance for frequent failure.
   - Field evidence: Answer.AI's month with Devin (2025-01-08, primary): 20 real tasks, 3 successes, 14 failures, 3 inconclusive (15% success), with no pattern predicting which tasks would fail.
   - Benchmarks: Factory's Droid 58.8% on Terminal-Bench, #1 among agents (2025-09-25, reported) - the best agent still fails >40% of benchmark tasks; OpenHands ~53% SWE-bench Verified (reported, undated).
   - Yet Cognition scaled from that record to $492M ARR (May 2026, reported) and ~$900M run-rate at a $48B valuation ($2B Series E, 2026-09-08, reported) - commercial success coexisting with unpublished success rates.

6. **Vendor-claimed resolution rates cluster at 70-95% and are mostly unaudited; the candid outliers are telling.**
   - HappyRobot 70% autonomous resolution (reported, undated); Giga AI 90%+ on DoorDash live-delivery workflows (Sep-Oct 2025, reported); Maven AGI 90-93% (claimed); Minimal AI 80% of interactions (Aug 2025, claimed); NOSO LABS 95% automated (claimed); Moveworks 3-in-4 issues (reported); Yuma 91% accuracy on complex shipping tickets at Glossier (reported); Anterior 99.24% clinical accuracy, KLAS-verified (reported - the rare third-party-verified figure).
   - The most candid: Parahelp - 46% of Captions' tickets resolved within 7 days, 94% CSAT at Kit (reported).
   - These are measured on vendor-chosen distributions; none publishes a human-oversight ratio (e.g., human-minutes per agent-hour) as a standing metric. Where nothing is published, this report says so: no long-horizon vendor publishes audited success rates.

7. **Failure modes over long runs are specific and increasingly productized.**
   - Silent failures - hallucinations and infinite loops - are Raindrop's entire product premise (self-healing loop where coding agents fix detected failures; $15M seed, 2025-12-01); Patronus AI's Percival debugger targets 20+ failure modes; Laminar is built for 40+ minute runs with hundreds of steps.
   - Zep's temporal knowledge graphs degraded from 200ms to 2s retrieval under 30x load (Nov 2025, reported) - memory systems fail under scale, not just models.
   - Answer.AI's "no pattern to failures" and Basis's "high reliance on structured accounting data" (wiki) are the qualitative failure stories.
   - The oversight response is architectural: approval gates dominate the finance cluster (~20 of 25 known cases; only 2-3 claim full autonomy); Blitzy ships an explicit 80/20 agent-human split for production readiness (reported); Kestrel AI disables auto-remediation by default; Crescendo's Safe Action Framework and Giga's Scout gates require human sign-off for consequential actions. HITL is converging on sign-off-for-consequences, not review-everything.

### Q3: Infrastructure choices

8. **Every serious platform now ships durability primitives - but each layer is solved separately.**
   - Durable execution: Temporal is the reference ($300M Series D at $5B, 2026-02-17; 1T monthly actions, reported; 2,900+ customers) with checkpoint/resume and HITL via durable signals, updates, and timers; Inngest (durable sleeps, `waitForEvent`; $21M Series A, 2025-09-16); Hatchet (Postgres-backed durable tasks, pause/resume); Rivet (Rust + FoundationDB); Cloudflare Agents SDK (durable execution + scheduling; 500k weekly downloads, Apr 2026, reported); Microsoft Agent Framework (durability, restartability, checkpoints); Vercel Workflows (suspend/resume); LangGraph persistence; Mastra (agents that run for days).
   - Sandboxes and browser sessions: E2B sessions run minutes-to-24-hours and are explicitly not persistent (reported) - the 24h session cap is the current ceiling, with 88% of Fortune 100 claimed as customers (Jul 2025); Daytona targets "long-horizon stateful workloads" with ~90ms provisioning ($24M Series A, 2026-02-05); Kernel keeps persistent browser profiles with state/auth; Amp's remote "orbs" keep working after the laptop closes; Adam gives each user a persistent private Linux sandbox.
   - Memory: Mem0 ($24M raised; ~$1M ARR, Jun 2024, low-confidence estimate) and Zep (~$2.3M raised) are strategically central but commercially tiny; both ship OSS cores. Phase 2 found memory crowded with no enterprise standard.
   - Spend controls exist as scattered primitives: AutoGPT per-agent/run/day tracking; OpenRouter budgets and spend caps; Devin's org-level ACU limits; Legora spending controls; Google Agentspace spend caps; Blitzy's metered $0.10/line ingested and $0.20/line generated.

9. **The gap the choices reveal: no platform combines the six primitives long-horizon work needs, so vertical builders integrate vertically.**
   - Basis built its own connector library into ledgers/ERPs plus confidence scoring and immutable audit trails; Harvey built Vault for bulk analysis; Sierra built its own agent memory layer; Trunk Tools built Cortex over drawings and RFIs; Nova syncs the live SAP landscape.
   - The pattern repeats across the deep pages: durable substrate, long-lived environment, memory, gates, caps, and trajectory evals each exist somewhere, but the assembly is done per-vertical by application companies.
   - That is why Applied Compute (long-horizon eval harnesses for Cognition, Harvey, DoorDash; $1.3B valuation, 2026-09-09, reported) and Temporal ($5B) capture value at the ends while the middle layer (memory, HITL tooling) stays thin. Phase 2's finding holds and sharpens: approval gates are primitives, not products.

### Q4: Pricing

10. **Per-outcome pricing emerges exactly where long-horizon work meets verifiable outcomes - and almost nowhere else.**
    - Scripted cohort pricing: of 73 long-horizon companies, 36 have a known model - usage 19, platform+subscription 8, per-seat 4, per-outcome 3 (Deloitte, Sierra, Superunit), other 2; of 81 persistent, per-outcome 2 (Parahelp, Yuma). Infrastructure has zero per-outcome pricing (L1 cluster; Phase 2).
    - Where it appears, the outcome is countable and labor-comparable: customer-service resolution (Sierra per-resolution; Crescendo $1.25/resolution plus $2,900/mo - the only published rate, reported; Parahelp $1.00-1.25/resolution credits; Yuma per-ticket; Intercom Fin $0.99/resolution; Zendesk per-resolution; HubSpot pay-on-completion), background checks (Superunit per-outcome, FCRA-compliant), recruiting (Humanly pay-per-hire), legal matters (EvenUp per-case), workflow orchestration (Gumloop 8% fee), and services firms exploring it (Deloitte, TCS).
    - SWE long-horizon is priced per-seat plus compute (Devin $20-200/mo tiers plus ACUs; Factory $20-200; Amp $20-200) despite the merged PR being verifiable. Accounting close is platform-fee-plus-usage (Basis) or per-seat (Numeric). Hippocratic AI prices by agent-hour (as low as $9/hour) - a labor analog, not an outcome.
    - The industry cluster's verdict: per-outcome economics are "claimed but unpublished" almost everywhere (wiki). Phase 2's open-ground finding holds.

### Q5: The frontier

11. **The horizon frontier is moving from product claims into measured capability.**
    - METR's 7-month doubling, if sustained, takes the 50% horizon from ~1 hour (Mar 2025) past the 16-hour suite ceiling within 2026 (inferred from METR's 2026-05-08 note).
    - Idler and Vibrant Labs build RL environments specifically for long-horizon coding (Idler: $9M seed, 2026-08-19); Foundry builds expert-annotated long-horizon datasets.
    - The capability curve and the product claims are converging on the same territory - which makes trajectory-level evaluation (Applied Compute; Raindrop; Laminar; LangSmith's $16M ARR, 2025, reported) the durable need: a weeks-long task cannot be evaluated by inspecting only its final output.

## Evidence table

| Dimension | Companies / figures | Evidence (date, label) |
|---|---|---|
| Horizon census | 73 long-horizon, 81 persistent, 254 multi-step, 8 single-turn, 912 unknown of 1,328 | TSV script count, 2026-09-09 |
| Layer split | LH: 37 L3 / 21 L1 / 8 L2 / 5 L4 / 2 L5; PE: 40 L3 / 28 L1 / 7 L2 / 4 L4 / 2 L5 | TSV script count |
| Profile depth | LH 57 deep / 16 base; PE 61 deep / 20 base | TSV script count |
| Capability curve | 50% time horizon doubling ~7 months; Claude 3.7 Sonnet ~1h (Mar 2025); >16h measurements unreliable (May 2026) | METR blog 2025-03-19; time-horizons page 2026-05-08, reported |
| Devin field record | 3/20 tasks succeeded, 14 failed, 3 inconclusive; no failure pattern | Answer.AI 2025-01-08, primary |
| Devin commercial scale | $492M ARR (May 2026); ~$900M run-rate, $48B valuation, $2B Series E (Sep 8 2026) | Reported (ARR Club 2026-05-28; Phase 2-verified) |
| SWE benchmarks | Droid 58.8% Terminal-Bench #1 (Sep 2025); OpenHands ~53% SWE-bench Verified | Reported (Factory 2025-09-25; wiki) |
| Claimed resolution rates | HappyRobot 70%; Giga 90%+ (DoorDash); Maven 90-93%; Minimal 80%; NOSO 95%; Moveworks 75%; Yuma 91%; Anterior 99.24% (KLAS-verified); Parahelp 46% in 7 days | Vendor-claimed, various dates 2025-2026 |
| Long-horizon repositioning | Sierra Horizon launch 2026-07-16; Takeoff acquired 2026-07-23; $200M ARR (May 2026) | Sierra blog, reported |
| Durable execution | Temporal $5B (Feb 2026), 1T monthly actions, 2,900+ customers; Inngest $21M Series A; Hatchet pause/resume; Cloudflare Agents SDK 500k weekly downloads (Apr 2026) | Reported |
| Long-lived environments | E2B 24h session cap, 88% of Fortune 100 (Jul 2025); Daytona ~90ms provisioning, $24M Series A (Feb 2026); Kernel persistent browser profiles; Amp remote orbs | Reported |
| Memory | Mem0 $24M raised, ~$1M ARR (low confidence); Zep ~$2.3M raised; both OSS cores | Wiki, estimated/reported |
| Per-outcome rates | Crescendo $1.25/resolution + $2,900/mo; Parahelp $1.00-1.25; Fin $0.99/resolution; Agentforce $0.10/action; Gumloop 8%; Hippocratic $9/agent-hour; Superunit per-outcome | Reported, various dates |
| Oversight architecture | Finance cluster ~20/25 approval-gated; Blitzy 80/20; Kestrel auto-remediation off by default; Crescendo Safe Action Framework | Wiki cluster + company pages |
| Vertical exemplars | Close: Basis ($1.15B, Feb 2026), Rillet ($1B, Aug 2026); legal: Harvey ($11B, Mar 2026), Legora; claims: Anterior, Forus ($3B, Sep 2026); freight: HappyRobot ($1.2B, Aug 2026); property: Dwelly (15,000+ units, Jul 2026) | Reported |

## Implications

For the central question - what an agent-building platform must provide for long-horizon work agents to be constructible on it - the evidence converges on six load-bearing primitives, each today supplied separately:

1. **Durable execution as the default runtime**: checkpoint/resume, durable sleeps and timers, and approval interactions that survive process restarts (the Temporal/Inngest/Hatchet pattern). Every serious framework ships some form of it; a platform without it cannot host a weeks-long task.
2. **Long-lived stateful environments**: sandboxes and browser sessions that persist state and authentication across days, not the current 24-hour session ceiling (E2B's cap is the gap; Daytona, Kernel, and Amp's orbs are the pushes past it).
3. **Memory across sessions as a managed primitive**: Mem0 and Zep prove demand but are commercially tiny (~$1M ARR against $24M raised) - either a platform opportunity or a feature the model vendors absorb (Claude managed agents, Jun 2026, reported).
4. **Approval gates as a product, not a primitive**: routing, escalation, SLAs on human response, and audit trails. Phase 2 found HITL tooling missing as a product; long-horizon work makes it load-bearing, since the oversight ratio is the reliability story.
5. **Spend caps and per-task budget accounting**: weeks-long tasks make cost control existential; the scattered primitives (AutoGPT, OpenRouter, ACU limits, Agentspace caps) show the need, none owns it.
6. **Trajectory-level evaluation and monitoring**: silent-failure and loop detection, drift over long runs, replay. A month-end close cannot be evaluated from its final output alone; the eval harness is the quality gate (Applied Compute's $1.3B valuation on serving Cognition, Harvey, and DoorDash is the market's vote).

Structural read: value pools at the two ends - the durable substrate (Temporal $5B) and the outcome-priced verticals (Sierra $15.8B, Cognition $48B) - while the middle layer (memory, HITL, spend governance) remains strategically named but commercially thin. Vertical builders integrate deeply (Basis's connectors, Harvey's Vault, Trunk's Cortex) precisely because no platform provides the six primitives together; that repeated vertical integration is the strongest signal of what a complete long-horizon platform would displace. Per-outcome pricing, where it exists, rides on verifiable outcomes and labor-comparable costs; a platform that meters outcomes (not just tokens) would own the commercial mechanism the leaders are converging on. Neutral framing: these are observations about where the space is going, not a wedge recommendation.

## Open questions

- **True production success rates.** No long-horizon vendor publishes audited success rates or oversight ratios; Parahelp's 46%-in-7-days is the most candid figure in the dataset. Everything else is vendor-claimed on self-chosen distributions.
- **Does the 7-month doubling transfer?** METR's own caveats: horizons are measured on low-context software/ML/cyber tasks; high-context vertical work (a real month-end close, a live claim) may lag the curve by a large margin. No cross-domain horizon measurement exists yet.
- **The 912 unknowns.** Mostly normal-priority census entries without wiki pages; the long-horizon count of 73 is a floor. A targeted sweep of the unknowns would tighten every distribution above.
- **Per-outcome unit economics.** Crescendo is the only publisher ($1.25/resolution); whether outcome pricing survives scale - and what margin it leaves after human-in-the-loop costs - is unpublished everywhere else.
- **Memory independence.** Do Mem0/Zep stay independent, get absorbed by model vendors (Claude managed agents) or platforms, or does an enterprise standard emerge? Commercial signals currently point to absorption.
- **Who owns the approval-gate product**: build platforms, identity vendors (Okta Agent Identity Center, Entra Agent ID), or the workflow suites (ServiceNow, UiPath Maestro case management)?
- **Horizon inflation risk.** Several "long-horizon" claims (multi-month programs compressed to a day; days-to-months) are marketing until trajectory evidence exists; the dataset's label is the maximal horizon mentioned, not a verified one.

## Sources

- METR, "Measuring AI Ability to Complete Long Software Tasks" (blog + paper), 2025-03-19 - primary
- METR, "Task-Completion Time Horizons of Frontier AI Models" (Time Horizon 1.1), 2026-05-08 - primary
- Answer.AI (J. Whitaker), "Thoughts on a Month with Devin," 2025-01-08 - primary field study
- Factory.ai, "Droid: The #1 Software Development Agent on Terminal-Bench," 2025-09-25 - primary
- Sierra, "The next Horizon in agents," 2026-07-16 and "Sierra acquires Takeoff," 2026-07-23 - primary
- ARR Club / TechFastForward, Cognition ARR and raise reporting, 2026-05-28 / 2026-06-10; Phase 2-verified $2B Series E at $48B, 2026-09-08 - funding press, cross-checked
- Wiki company pages (deep unless noted): cognition--devin-, factory, openhands, basis, numeric, rillet, harvey, evenup, trunk-tools, happyrobot, lindy, temporal, e2b, mem0, zep, sierra, inngest, hatchet, daytona, kestrel-ai (base), entangl (base), sourcegraph--amp-, and all 73 + 81 cohort pages - 2026-09-09
- Wiki cluster pages: l1-runtime-and-tooling, l1-observability-and-security, l2-build-platforms, l3-customer-service, l3-healthcare, l3-finance-accounting, l3-legal-gtm, l3-swe-security, l3-industry-verticals, l3-other-verticals, l3-workplace-verticals, l4-services, l5-incumbent-suites, x-modalities - task-horizon sections
- data/companies-with-profiles.tsv - scripted counts, 2026-09-09
- agent-platform-phase2-landscape.md - established context (per-outcome gap, HITL gap, status corrections)
