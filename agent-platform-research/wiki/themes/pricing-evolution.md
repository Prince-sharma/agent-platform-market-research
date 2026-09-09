# Pricing evolution: seats, per-agent, per-run, per-outcome (P3.4)

## Scope

How enterprise work-agent platforms price agent work - per seat, per agent, per run, per outcome, platform fee plus usage - the unit economics of each model, and what each implies for stickiness and for where value pools. Implements plan section 12 (P3.4); extends Phase 2 section 3.3 (by-layer divergence) with quantified distributions, a pricing-model × task-horizon cross-tab, a verified 2024-2026 repricing timeline, and per-model unit economics. Date: September 9, 2026.

## Method

1. **Dataset:** `data/companies-with-profiles.tsv` (1,328 rows). `pricing_model` distribution overall, by `layer`, `vertical`, and `profile_depth`; cross-tab `pricing_model` × `task_horizon`. All counts computed by python3 script over the TSV; the headline distribution matches the Phase 2 merge exactly (16 per-outcome, 89 usage, 24 per-seat, 31 platform+subscription, 1 per-agent, 18 other, 2 freemium, 1,147 unknown).
2. **Wiki extraction:** all 766 company pages parsed for the Facts-section `Pricing model:` line and build-decision 7 line; 98 pages carry explicit dollar figures and form the rate evidence base. Rates below cite the wiki page's profiling date (2026-09-09) where the vendor page was the source.
3. **Cluster pages:** pricing paragraphs from all 14 `wiki/clusters/` pages extracted and reconciled.
4. **Web verification (accessed 2026-09-09):** primary pricing pages for Intercom, Crescendo, Salesforce (pricing page; May 15 2025 press release; Jun 17 2026 Flex Credits rate card), HubSpot, Vapi, Zendesk, Atomicwork, Composio, Twin1; GitHub's Apr 27 2026 billing announcement; third-party rate reporting for Harvey, Abridge, Zendesk per-resolution. Every figure is date-stamped and labeled reported / estimated / inferred.
5. **Analysis:** unit economics per model, failure-cost allocation by model, switching-cost implications, and the AI-native-firm limit case.

## Findings

1. **Pricing is unknown for 86% of the census; the known minority is usage-based, and knowledge lives in the deep wiki.** 1,147 of 1,328 rows have `pricing_model: unknown`. Of the 181 known: usage 89 (49%), platform+subscription 31 (17%), per-seat 24 (13%), other 18 (10%), per-outcome 16 (9%), freemium 2, per-agent 1 (0.6%). Depth is the predictor: 172 of 303 deep pages (57%) have a known model versus 9 of 463 base pages (2%) and 0 of 562 census-only rows. The "unknowns" are mostly an artifact of profiling depth, but in the finance family they are structural (finding 9).

2. **Pricing stratifies cleanly by layer - quantified.** Among rows with known pricing: L1 runtime (43 known): usage 25 (58%), platform+subscription 11 (26%), zero per-outcome, zero per-seat, zero per-agent. X modalities (15 known): 100% usage. L2 build platforms (14 known): usage 10, per-outcome 2 (Ema, Yellow.ai). L3 verticals (94 known): usage 31 (33%), per-seat 22 (23%), platform+subscription 19 (20%), per-outcome 8, per-agent 1. L5 suites (12 known): usage 7, per-outcome 4 (Fin, Intercom Fin, Zendesk AI Agents, HubSpot Agent Hub), per-seat 1. L4 services (3 known): per-outcome 2 - both "exploring" or "transitioning," none publishing rates. Infrastructure sells metered inputs; verticals and suites sell work; services claim outcomes without publishing them.

3. **The customer-service resolution now has a market price: $0.50-$2.00.** Verified published or reported rates per resolution: HubSpot Customer Agent $0.50 (50 credits × $0.01, pay-on-completion; hubspot.com, accessed 2026-09-09); Intercom Fin from $0.99 per "Fin outcome," scaling with complexity to $9.99 (intercom.com/pricing, accessed 2026-09-09; reported); Crescendo $1.25 plus a managed-service fee from $2,900/mo (crescendo.ai/pricing, accessed 2026-09-09; published); Zendesk $1.50 committed / $2.00 pay-as-you-go per automated resolution, on top of a $55-$115/agent/mo base plan and a $50/agent/mo Advanced AI add-on (third-party analysis, Apr 2026; reported); Salesforce Help Agent resolutions at 400 Flex Credits = $2.00 (rate card Jun 17 2026; published); Ada $1.00-$3.50 (third-party reported). Sierra, Decagon, and Forethought are per-resolution but quote-only (Forethought median contract ~$59.5K/yr per Vendr, 2026; estimated). A fourfold spread across vendors on the same unit is convergence, not commodity - the outcome is standardized, the price is not.

4. **Per-outcome pricing does not correlate with long-horizon work.** Cross-tab of the 16 per-outcome rows by task horizon: 10 multi-step, 3 long-horizon (20%), 2 persistent, 1 unknown - versus 22% long-horizon among usage-priced rows (19 of 87) and 17% among per-seat. Per-outcome concentrates where the outcome is verifiable in minutes (a resolved ticket), not where the work runs for days or weeks. Long-horizon agents are still priced on inputs (metered runs, browser-hours, ACUs) because nobody has a unit for a weeks-long outcome; the plan's question "how are long-horizon agents priced" (§10) currently answers: they aren't - they're metered.

5. **Legal is the per-seat stronghold, with 10x price discrimination by firm size.** Harvey: $100-$200/user/mo at Am Law 100 scale versus $1,000-$2,000/user/mo mid-market, 25-50 seat minimums, 12-month commitments, and reported 10-25% renewal uplifts without caps (third-party reporting, Jul 2026; reported - Harvey publishes nothing). Ivo $6,000/user/yr flat (reported); Nooks ~$4-5K/user/yr (estimated); GC AI $500/mo individual (published); Supio est. $150-$400/user/mo (estimated). The seat prices the professional whose time bills at several hundred dollars an hour - one billed hour covers the monthly seat (inferred). Per-seat survives in legal because the output is unattributable and liability-bound: the buyer cannot transfer a filing's risk to the vendor, so the vendor cannot own the outcome.

6. **Healthcare prices the clinician, not the note.** Nabla $119-$239/clinician/mo (reported); Suki $299-$399/clinician/mo (reported); Abridge publishes nothing - third-party estimates run $2,500-$7,200/clinician/year (~$208-$600/mo) on 12-month minimums (Litmus review, Jul 2026; estimated), bracketing the ~$300-400/clinician/mo Phase 2 figure (estimated). The exception that proves the labor anchor: Hippocratic AI prices patient-facing agents at "as low as $9/hour" (published) - a wage, not a seat.

7. **Per-agent pricing emerged in 2025-2026 as a real but rare fourth model.** Twin1 (legal digital twins, $20M seed, Aug 2026): $50/mo per Single Twin, $150/mo Pro (reported; the company's pricing page is not live). Atomicwork (ITSM): platform from $25,000/yr including 25,000 credits and 2 AI Coworkers, additional Coworkers at $499/worker/month (atomicwork.com/pricing, accessed 2026-09-09; published) - a credit being "drawn each time an AI Coworker completes a job," scaling with steps, tools, output length, and reasoning complexity. Exactly one census row is normalized per-agent (Twin A1); Atomicwork is normalized usage. Priced against the FTE it shadows (~$5-7.5K/mo fully loaded for IT support; inferred), the agent at $50-499/mo is 1-10% of labor cost - but unlike per-outcome it is fixed recurring spend that transfers utilization risk to the buyer.

8. **The suites repriced twice in eighteen months, and the seat is dissolving into a credit bundle.** Verified timeline: Agentforce GA at $2 per conversation (Oct 2024, per Salesforce's May 2025 release); Flex Credits introduced May 15 2025 at $0.10 per action (20 credits; packs of 100,000 credits for $500), with the Flex Agreement making user licenses and Flex Credits contractually convertible - human and digital labor fungible in the same contract; Zendesk moved to auto-billed per-resolution overages in January 2026 (third-party reported); GitHub Copilot announced April 27 2026 that premium-request units become token-metered GitHub AI Credits on Jun 1 2026, with each seat including its own price in credits ($19 Business seat = $19 of credits, $39 Enterprise = $39) - GitHub's stated reason: "a quick chat question and a multi-hour autonomous coding session can cost the user the same amount," which the premium-request model could no longer absorb. The pattern: flat seats cannot carry agentic workloads, so seats become prepaid credit wallets with pooled org-wide usage and admin budget controls.

9. **Finance is both the opacity hole and the per-outcome absence.** Across the finance family (finance, finance/accounting, accounting, tax, fintech, financial services, insurance: 158 rows), 7 have known pricing (4.4%) and zero are per-outcome - despite the most outcome-shaped products in the census (close the books, clear the audit, place the submission). Legal (12 of 40 known) and customer service (~15 known, roughly half per-outcome) publish; finance does not. Insurance (0 of 28), logistics (0 of 36), real estate (0 of 24), and construction (0 of 22) - the AI-native-firm verticals - are fully opaque.

10. **Where verticals do publish, the unit is labor-shaped.** Humanly: pay-per-candidate and pay-per-hire (rates unpublished). Altrina: $0.10 per "Human Minute Equivalent" ($6/hour) for back-office work (published, base-depth page). Maive (home services): flat fee per sold project. Superunit (background checks): pay only when complete. Paradox: annual contracts with medians $142K (1-5K employees) to $920K (20K+). The agent is priced as a wage or a job, not as software - the offshore-labor rate card ($3-15/hr; inferred) is the competitive anchor, not the SaaS per-seat.

11. **L1 usage pricing is not static - it is repricing upward as agent workloads explode.** Composio's Aug 15 2026 repricing cut included volume at the $29 tier from 200K to 50K tool calls/mo and raised overage from ~$0.25-0.30 to $4 per 1K calls (a 13-16x overage increase; composio.dev/updated-pricing, accessed 2026-09-09; published), adding a $599/mo Business tier whose differentiator is credential custody. The same cost pressure that pushed GitHub to token metering is pushing tool-access and runtime vendors to raise effective per-call prices - the input layer is getting more expensive exactly as the outcome layer standardizes.

12. **Nobody prices verified business results; three barriers explain where per-outcome stops.** The closest approaches are CX resolution and per-case legal (EvenUp, hybrid per-case plus per-user, est. $200-$500/user/mo; estimated). Per-outcome requires (a) **verification** - the outcome must be binary, observable, and attributable (a ticket is resolved or reopened within Zendesk's 72-hour window; revenue, hires, and closed quarters are multi-causal); (b) **risk transfer** - the vendor must underwrite failure, which regulated domains will not permit a software vendor to do (an audit opinion or legal filing carries professional liability the vendor cannot hold); and (c) **a failure backstop** - capital or human capacity to absorb the unresolved tail. Crescendo is the only full-stack attempt: $1.25/resolution, a Total Outcome Guarantee (live in 30 days and outperform existing AI or clients withhold payment), and the acquisition of PartnerHero to own human labor capacity behind the guarantee.

13. **The AI-native firm is per-outcome pricing taken to its limit: the vendor internalizes the P&L.** Dwelly (15,000+ properties, GBP 350M rent roll under management), AGI ($70M rolling up independent insurance brokerages), OffDeal (AI-native investment bank), Denki (full-stack AI audit firm), Billow AI / Last Accounting Company / Rational / Cranston AI (agent-native accounting firms), Overdrive Health (acquiring billing agencies). None publishes agent pricing because none sells software: they take the fee, commission, or rent roll the outcome produces. This is the logical endpoint when outcomes are verifiable but liability-bound - the only way to price the outcome is to own the entity that sells it. Almost all are 2025-26 YC companies with no visible funding: capital-light, unproven, and structurally outside the software-margin frame.

14. **Stickiness is a function of the pricing model's risk allocation, not its unit.** Usage (L1/X): buyer bears all failure cost; spend is commodity and multi-homed (OpenRouter's 5.5% take-rate exists to arbitrage exactly this); stickiness must come from integrations and data gravity (Merge's per-linked-account $650/mo), not the meter. Credits (suites): wallet lock-in - prepaid, pooled, expiring (Salesforce permits no rollover), with budget consoles (Digital Wallet, GitHub budgets) that mirror cloud-spend management. Per-outcome: performance lock-in - the vendor's engine learns from every resolution (Zendesk's Resolution Learning Loop), and the buyer reorganizes headcount around the resolution price, making the vendor load-bearing; switching resets the learning curve. Per-seat: org-chart lock-in - seat minimums and renewal uplifts (Harvey's reported 10-25%) show pricing power once embedded, but the model caps upside at customer headcount. The AI-native firm is total lock-in: the vendor is the operation.

15. **Unit economics per model - what the same work costs under each unit (inferred from the rates above).** A CX resolution costs $0.50-$2.00; an agent action $0.10; a labor-shaped agent-hour $6-$9; a voice minute $0.05 in hosting plus at-cost models; a browser-hour $0.10-$0.12; an orchestration run ~$0.00001; a tool call $0.004-$0.30. An agent costs $50-$499/month; a professional seat $20-$2,000/month. The ratios are the finding: one $1.25 Crescendo resolution buys 25 Vapi voice-minutes, roughly ten Browserbase browser-hours, or 125,000 Hatchet runs - individual input units run one to five orders of magnitude below the outcome they produce, and a full resolution's input stack sits roughly 10-100x under its price (inferred), so the margin pool sits at the verification-and-liability layer, not the compute layer.

| Unit of work | Price range | Anchors (rate, date) |
|---|---|---|
| one CX resolution | $0.50-$2.00 | HubSpot $0.50; Fin $0.99; Crescendo $1.25; Zendesk $1.50-$2.00; Agentforce Help $2.00 (2026) |
| one agent action | $0.10 | Agentforce Flex Credits (2025-05) |
| one agent-hour (labor-shaped) | $6-$9 | Altrina $6/hr; Hippocratic from $9/hr (2026) |
| one voice minute | $0.05 + at-cost models | Vapi (2026-09) |
| one browser-hour | $0.10-$0.12 | Browserbase (2026-09) |
| one orchestration run | ~$0.00001 | Hatchet $10/1M (2026-09) |
| one tool call | $0.004-$0.30 | Composio $4/1K overage; Arcade $0.01 (2026) |
| one agent, per month | $50-$499 | Twin1 $50-$150; Atomicwork $499 (2026) |
| one professional seat, per month | $20-$2,000 | Cursor $20-$200; Nabla $119-$239; Suki $299-$399; Harvey $100-$2,000 (2026) |
| one human resolution (comparison) | ~$3-$6 | inferred: $20-$35/hr loaded, 4-6 resolutions/hr |

## Evidence table

| Model | Unit | Published rate | Company | Date | Label |
|---|---|---|---|---|---|
| per-outcome | per resolution ("Fin outcome") | from $0.99, to $9.99 by complexity; seats $29-$132/mo | Intercom Fin | 2026-09-09 | published |
| per-outcome | per resolution | $1.25 + service fee from $2,900/mo; Total Outcome Guarantee | Crescendo | 2026-09-09 | published |
| per-outcome | per automated resolution | $1.50 committed / $2.00 PAYG; + $55-$115/agent/mo base + $50/agent/mo AI add-on | Zendesk AI Agents | 2026-04 (3rd-party) | reported |
| per-outcome | per resolved conversation | $0.50 (50 credits × $0.01), pay-on-completion | HubSpot Agent Hub | 2026-09-09 | published |
| per-outcome | per Help Agent resolution | 400 Flex Credits = $2.00 | Salesforce (rate card) | 2026-06-17 | published |
| per-outcome | per resolution | $1.00-$3.50 + ~$30-80K/yr platform | Ada | 2026 (3rd-party) | reported |
| per-outcome | per resolution credit | $1.25 Start / $1.00 Scale; internal-agent actions 0.1-5 credits | Parahelp | 2026-09-09 | published |
| per-outcome | per ticket resolved | bundles from $850/mo (Shopify App Store) | Yuma | 2026-09-09 | published |
| per-outcome | per resolution | quote-only | Sierra, Decagon, Forethought | 2026 | reported |
| per-outcome | per Human Minute Equivalent | $0.10/HME ($6/hour) | Altrina | 2026-09-09 | published (base page) |
| per-outcome | per hire / per candidate | rates unpublished | Humanly | 2026 | reported |
| per-outcome | per sold project | flat fee, unpublished | Maive | 2026 | reported |
| per-action | per Agentforce action | $0.10 (20 Flex Credits; 100K credits = $500); voice action 30 credits | Salesforce Agentforce | 2025-05-15 | published |
| per-conversation | per conversation | $2 (GA pricing); Conversations now AU$2.80 / £1.60 | Salesforce Agentforce | 2024-10 / 2026-09-09 | published |
| per-credit | GitHub AI Credit | $0.01/credit, token-metered at API rates; $19 seat includes $19 credits | GitHub Copilot | 2026-04-27 | published |
| per-agent | per Twin (digital twin) | $50/mo Single, $150/mo Pro | Twin1 | 2026-08 | reported |
| per-agent | per AI Coworker | $499/worker/mo beyond 2 included; platform from $25K/yr incl. 25K credits | Atomicwork | 2026-09-09 | published |
| per-seat | per user/mo | $100-$200 (Am Law 100) / $1,000-$2,000 (mid-market); 25-50 seat minimums; $50K-$300K+ contracts | Harvey | 2026-07 (3rd-party) | reported |
| per-seat | per user/yr | $6,000 flat | Ivo | 2026 | reported |
| per-seat | per user/yr | ~$4-5K | Nooks | 2026 | estimated |
| per-seat | per clinician/mo | $119-$239 | Nabla | 2026 | reported |
| per-seat | per clinician/mo | $299-$399 | Suki | 2026 | reported |
| per-seat | per clinician/mo | ~$208-$600 ($2.5K-$7.2K/yr) | Abridge | 2026-07 (3rd-party) | estimated |
| per-seat | per seat/mo | $59-$139 + $50 AI add-on | Pylon | 2026-09-09 | published |
| per-seat | per user/yr | ~$150 (2-yr subscription, MS Marketplace) | Leena AI | 2026 | reported |
| per-seat | per dev/mo | $20-$200 (Cursor); $24-$72 (CodeRabbit) | Cursor, CodeRabbit | 2026 | published |
| per-hour | per agent-hour | from $9/hour | Hippocratic AI | 2026 | published |
| usage | per minute (voice) | $0.05/min hosting + at-cost model fees; HIPAA +$2K/mo | Vapi | 2026-09-09 | published |
| usage | per browser-hour | $0.10-$0.12 | Browserbase | 2026-09-09 | published |
| usage | per second (sandbox) | CPU $0.000014-$0.000112/s; RAM $0.0000045/GiB/s | E2B | 2026-09-09 | published |
| usage | per tool call | $4/1K overage (was ~$0.25-0.30/1K; included volume cut 200K→50K at $29) | Composio | 2026-08-15 | published |
| usage | per run | $10/1M beyond 100K free | Hatchet | 2026-09-09 | published |
| usage | per request / per agent run | search $7/1K; agent $0.012-$1.00/run | Exa | 2026-09-09 | published |
| usage | token pass-through | +5.5% platform fee (min $0.80); BYOK $25K/mo list | OpenRouter | 2026-09-09 | published |
| platform+usage | per linked account | $650/mo for 10 accounts + $65/extra | Merge | 2026-09 | published |
| platform+usage | platform + metered actions | $100-$500/mo + $50/first 5M actions | Temporal | 2026-09-09 | published |
| platform+usage | subscription + overage | ~$150K/yr for 125K chats; $1.20/chat, $1.50/call overage (AWS Marketplace) | Cresta | 2026 | published (marketplace) |
| hybrid | per case + per user | est. $200-$500/user/mo | EvenUp | 2026 | estimated |
| hybrid | per AI analyst | historically $36K/yr per analyst (4,000 investigations) | Dropzone | 2026 | reported |
| hybrid | per line of code | $0.10 ingested / $0.20 generated; platform $50K-$10M/yr | Blitzy | 2026 | published |
| hybrid | effort-based credits | credit packs $100-$950 | Replit | 2026 | published |

## Implications

- **A pricing model is a risk-allocation decision before it is a revenue decision.** Usage puts failure cost on the buyer (commodity spend, low stickiness); per-seat puts utilization risk on the buyer and liability stays with the buyer; per-outcome puts failure cost on the vendor and requires verification, a backstop, and the balance sheet to underwrite it. The choice of unit determines which of those a platform can credibly offer, and to whom.
- **Value pools where verification happens, not where computation happens.** A $1.25 resolution sits on roughly $0.01-$0.10 of metered infrastructure - a 10-100x margin stack over the runtime layer (inferred from the rates above). L1's take-rates are exchange-thin (OpenRouter 5.5%); the margin accrues to whoever holds the verified outcome and the liability. For an agent-building platform, this argues that the metering point (credits, wallets, resolution accounting) is a strategic surface, not a billing detail - Salesforce's Digital Wallet and license-credit convertibility is the most explicit attempt to become that point.
- **The seat is dissolving from two directions.** Suites convert seats into credit bundles because agentic workloads break flat pricing (GitHub, Agentforce); verticals abandon seats for labor-shaped units because the agent replaces a wage, not a tool (Hippocratic $9/hr, Altrina $6/hr, Humanly per-hire). What survives of per-seat is the professional-liability verticals (legal, healthcare documentation) - and even there the AI-native-firm pattern (finding 13) shows the exit: own the firm, take the revenue.
- **Per-outcome is a moat only with a learning loop and a failure backstop.** Priced alone, per-outcome is a margin trap - every failed attempt is vendor-funded compute. Paired with a resolution-learning loop (Zendesk) and human capacity (Crescendo-PartnerHero), it becomes performance lock-in: the buyer's cost structure and headcount reorganize around the vendor's resolution rate.
- **The unclaimed ground is the verified business result, and the finance close is its clearest instance.** CX proved outcomes can be priced when verification is binary and liability is absent. Finance has outcome-shaped products, zero per-outcome, and near-total opacity - whoever first publishes credible per-close or per-audit economics (or builds the AI-native firm that makes pricing unnecessary) defines the category's commercial model.
- **For the central question - what an agent platform must provide:** the pricing evidence says buyers are assembling digital-labor budgets that behave like cloud spend (prepaid, pooled, metered, governed by wallets and budget caps) rather than software procurement. A platform that wants to hold the account must meter work in units the buyer's CFO can compare - and today no such common unit exists across suites (action vs resolution vs credit vs conversation), which is itself the open strategic surface.

## Open questions

- Does per-agent pricing scale beyond two data points (Twin1, Atomicwork)? It transfers utilization risk to the buyer - the opposite bet from per-outcome - and has no learning-loop lock-in.
- Will the CX resolution commoditize downward? HubSpot's $0.50 already undercuts Fin's $0.99 by half; if resolution prices race to the bottom, per-outcome vendors must climb to business results (the unpriced layer) or absorb margin compression.
- Does token-metered billing (GitHub) reintroduce the meter anxiety that seats abolished, pushing developers back toward flat-rate competitors - or do budget controls and pooled credits solve it?
- Can the suites' credit units converge into an interoperable "agent dollar" (the AWS-compute moment for labor), or will they fragment further to prevent comparison? Salesforce's Flex Agreement convertibility is the leading indicator.
- Is finance opacity structural (liability cannot transfer to a software vendor) or merely early? The AI-native firm cohort is the test: if Dwelly/AGI/Denki economics work, the answer is structural and the software-only vendors in finance stay subscription-priced forever.
- What is the equilibrium take-rate for agent routing and marketplaces (OpenRouter's 5.5%) as the underlying compute commoditizes further?
- Nobody in the census prices on verified business results; the closest signals (Crescendo's guarantee, EvenUp per-case, Humanly per-hire) are unaudited or unpublished. What would a credible, audited per-outcome rate for a regulated outcome (an audit, a close, a filing) look like, and who bears the tail risk?

## Sources

- intercom.com/pricing (accessed 2026-09-09) - Fin from $0.99 per outcome; seat fees
- crescendo.ai/pricing, crescendo.ai Total Outcome Guarantee pages (accessed 2026-09-09) - per-resolution model, guarantee terms
- salesforce.com/agentforce/pricing/ (accessed 2026-09-09) - Flex Credits, Conversations, $125/user/mo licensing
- Salesforce press release, "Salesforce Introduces New Flexible Agentforce Pricing" (2025-05-15) - $2/conversation prior pricing; $0.10/action; 100K credits for $500; Flex Agreement
- Salesforce Flex Credits Rate Card (2026-06-17) - action multipliers; Help Agent resolution 400 credits
- hubspot.com/products/artificial-intelligence/credits (accessed 2026-09-09) - 50 credits ($0.50) per customer-agent resolution
- github.blog, "GitHub Copilot is moving to usage-based billing" (2026-04-27) - AI Credits, token metering, seat-includes-credits
- vapi.ai/pricing (accessed 2026-09-09) - $0.05/min hosting, at-cost models, add-ons
- zendesk.com/pricing, zendesk.com/service/ai/ai-agents/ (accessed 2026-09-09) - seat plans, resolution positioning
- CorePiper, "Zendesk AI Pricing Per Resolution" (2026-04-09) - $1.50/$2.00 per resolution; Jan 2026 auto-billing change (third-party)
- atomicwork.com/pricing (accessed 2026-09-09) - $499/worker/mo; $25K/yr platform; credit definition
- composio.dev/updated-pricing (accessed 2026-09-09) - Aug 15 2026 repricing, $4/1K overage
- twin1.ai (accessed 2026-09-09) - product; pricing page not live; rates per wiki profiling
- Inside Legal AI / The Legal Prompts (2026-07-18/21) - Harvey $100-$200 vs $1,000-$2,000/user/mo, minimums, uplifts (third-party)
- Litmus, "Abridge Review" (2026-07-02) - $2,500-$7,200/clinician/yr estimates (third-party)
- agent-platform-research/data/companies-with-profiles.tsv - distribution and cross-tab counts (script-verified)
- agent-platform-research/wiki/companies/ (766 pages, profiled 2026-09-09) - company rates: E2B, Browserbase, Composio, OpenRouter, Exa, Hatchet, Arcade, Merge, Temporal, Ada, Parahelp, Yuma, Sierra, Decagon, Forethought, Cresta, Pylon, Nabla, Suki, Ivo, Nooks, GC AI, Supio, EvenUp, Hippocratic, Humanly, Altrina, Maive, Superunit, Paradox, Leena, Cursor, CodeRabbit, Blitzy, Replit, Dropzone, Twin1, Deloitte, TCS, and others
- agent-platform-research/wiki/clusters/ (14 pages) - per-cluster pricing patterns
- agent-platform-phase2-landscape.md §3.3 - the by-layer divergence this theme extends
