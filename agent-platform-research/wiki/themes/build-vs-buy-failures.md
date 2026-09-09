# Build-vs-Buy and the Failure Record

## Scope

Implements plan section 12, theme P3.3: the evidence on whether enterprises build or buy agent capability, and the failure record collected as the bear case. Three strands:

1. Survey and analyst data on adoption, pilot-vs-production rates, and cancellations.
2. In-house platform teams at large enterprises versus the suite-buying pattern.
3. The failure record: the 11x arc, public customer-facing agent failures, census dead/pivoted companies, and Quivr's wind-down.

Date: 2026-09-09.

## Method

- **Census:** `data/companies-with-profiles.tsv` (1,328 rows). Status column tabulated with awk: 1,261 active, 35 acquired, 17 pivoted, 11 dead, 4 unknown. Dead/pivoted rows extracted with layer, vertical, and traction; cross-tabbed against layer totals (L1 201, L2 139, L3 787, L4 18, L5 76, X 107). All counts are computed, not estimated.
- **Wiki:** `wiki/companies/11x.md`, `wiki/companies/quivr.md`, `wiki/clusters/l5-incumbent-suites.md`, and the Phase 2 landscape report (cluster syntheses, cross-cluster patterns, census corrections).
- **Web (primary first):** Gartner press release (2025-06-25) verified directly; MIT NANDA "State of AI in Business 2025" (report PDF plus Fortune coverage); NVIDIA State of AI 2026 blog (2026-03-09); Forrester "State of Agentic AI in 2026" blog (2026-06-03); Forrester Consulting study commissioned by Boomi (2026-07-20); Sinch "AI Production Paradox" research (2026-05-13); S&P Global VotE AI survey (2025-05, via CFO Dive); BC Civil Resolution Tribunal decision in Moffatt v. Air Canada; failure events via TechCrunch, Sifted, Bloomberg, Reuters, AP, The Register.
- **Labels:** every figure is marked reported (vendor/analyst stated), estimated (third-party derivation), or inferred (our reading). Survey figures are only as good as their samples; vendor-commissioned studies are labeled as such.

## Findings

### Strand 1: Survey and analyst data

1. **The Gartner cancellation forecast is verified against the primary press release.**
   - Gartner, Sydney, 2025-06-25: "Over 40% of agentic AI projects will be canceled by the end of 2027, due to escalating costs, unclear business value or inadequate risk controls" (reported).
   - Same release, January 2025 poll of 3,412 webinar attendees: 19% of organizations had made significant agentic AI investments, 42% conservative investments, 8% none, 31% wait-and-see (reported).
   - "Agent washing": Gartner estimates only ~130 of the thousands of agentic AI vendors are real - rebranded RPA, chatbots, and assistants (reported).
   - The release pairs the bear forecast with upside predictions: at least 15% of day-to-day work decisions made autonomously by 2028 (from 0% in 2024); 33% of enterprise software applications including agentic AI by 2028 (from under 1%).

2. **Observed pilot failure rates are worse than the forecast at the pilot stage.**
   - MIT NANDA, "The GenAI Divide: State of AI in Business 2025" (August 2025): about 5% of enterprise GenAI pilots achieve rapid revenue acceleration; the report states a "95% failure rate for enterprise AI solutions," attributing it to a learning gap in enterprise integration, not model quality. Base: 150 leader interviews, a 350-employee survey, 300 public deployments (reported).
   - S&P Global Market Intelligence VotE AI survey (May 2025; 1,000+ NA/Europe respondents): 42% of companies abandoned most of their AI initiatives, up from 17% a year earlier; the average organization scrapped 46% of AI proofs-of-concept before production (reported).
   - Caveat: these are GenAI-wide figures, not agent-specific - the agent-specific cancellation record is still accruing.

3. **2025-2026 production data shows wide-but-shallow deployment with a trust gap.**
   - NVIDIA State of AI in the Enterprise 2026 (published 2026-03-09; 3,200+ responses collected August-December 2025): 64% of organizations actively use AI; 44% of companies were deploying or assessing agents in 2025 - explicitly framed as the experimentation phase (reported).
   - Forrester, "The State of Agentic AI in 2026" (2026-06-03): three-quarters of enterprise leaders say they are adopting agentic AI, but only a small minority run it in meaningful production beyond "agentish" chatbots; scaled multiagent systems are rarer still; more than half report agentic sprawl even after adopting the NIST AI RMF (reported).
   - Forrester Consulting study commissioned by Boomi (2026-07-20; 409 director-plus IT decision-makers): 86% of organizations have moved beyond the AI agent pilot stage, yet just 34% trust their agents' actions; the least-ready quartile ("agentic chaos") moves to production anyway (77%) and averages $2.1M in added costs; some organizations run up to 200 agents in "POC/pilot purgatory" (reported; vendor-commissioned).

4. **Rollback, not just cancellation, is the observed norm in customer-facing channels.**
   - Sinch "AI Production Paradox" (2026-05-13; 2,500+ AI leaders): 62% of organizations already have AI agents live across customer channels; 88% expect production by end-2026 - but 74% of those that shipped an agent have been forced to roll it back or shut it down, holding across industries (66% technology to 85% professional services) (reported).
   - Leading rollback cause: personal data exposure (31%), then hallucination and brand risk. Rollback rises to 81% among firms with fully mature guardrails - monitoring catches what less-instrumented firms never see (reported).
   - Infobip 2026 report (cited in the same coverage): about half of enterprises globally have deployed agentic AI, but mostly on simple triggers; product returns are automated at just 15%.
   - Gartner (2026-09-02): only 27% of customers would try a chatbot again after a negative experience (reported).

### Strand 2: In-house platform teams versus buying

5. **Large enterprises are building internal agent platforms - the top of the market builds.**
   - JPMorganChase: LLM Suite reached 200,000 employees in 2025 (JPMorganChase technology blog, 2025-06-03; American Banker, 2025-05-22); CNBC (2025-09-30) describes a blueprint to be the first fully AI-powered megabank; secondary reporting (2026-04-29) credits ~$1.5B in AI-driven value (reported; value figure secondary).
   - Grab: internal agent framework (LLM-Kit) runs 500+ services, with 50+ MCP servers registered and a single LLM gateway fronting every model call at billions of tokens per month (Grab engineering blog, 2026-07-24) (reported).
   - Duolingo: built a production agent platform on Temporal with a central agent registry, after finding every team rebuilding the same infrastructure (Duolingo blog, 2026-08-04) (reported).
   - 2026 job postings confirm dedicated platform teams: Walmart (Distinguished Engineer, Agentic Systems & SRE, 2026-06; Senior Director, Agent Builder), Goldman Sachs (VP, Agentic Systems Engineer, Technology Risk), Pfizer (Head of AI & Agentic Platform Engineering, 2026-07) (reported; postings observed).
   - KPMG reports ~50 active agents internally with 1,000 in development (Phase 2 wiki) (reported).

6. **In-house building does not exempt enterprises from the failure record - it concentrates it.**
   - Intuit rebuilt its entire agent architecture twice in four months in 2026: first replacing a fleet of specialist agents with a central orchestrator, then replacing the orchestrator when natural-language handoffs compounded errors; the VP of AI framed scrapping as "the fast path" (VB Transform 2026, 2026-07) (reported).
   - Meta's Project OT planned cutting up to 60% of some teams and replacing them with AI; it backed off after internal data showed code changes up 220% year-over-year but user-facing feature changes up only 36%, major technical and security incidents up 40%, and firefighting time up 70%; an April internal post described unchecked agents performing "large-scale, disruptive actions that humans are unlikely to execute" (Reuters investigation, 2026-08-26, via Computerworld) (reported).
   - Klarna, the loudest build case study, reversed course: after claiming its AI assistant did the work of ~700 full-time agents, it began rehiring human customer-service staff in May 2025, the CEO conceding cost-cutting had been prioritized over quality and that customers wanted a human option (Bloomberg, 2025-05-08) (reported).

7. **The suites' pattern is unambiguous: build the studio, buy the proven agents.**
   - Every incumbent shipped its own agent-building surface: Microsoft Copilot Studio plus the Agent 365 control plane (announced 2025-11-18), Salesforce Agentforce (announced 2024-09-12, GA 2024-10-29), ServiceNow AI Agents with AI Control Tower, Google Gemini Enterprise (all reported; wiki L5 cluster page).
   - Simultaneously they acquired proven agent teams: ServiceNow-Moveworks ($2.85B, closed December 2025), Salesforce-Fin (~$3.6B, June 2026), Zendesk-Forethought (2026, its largest deal ever), NICE-Cognigy ($955M), HubSpot-Dashworks (April 2025) (all reported).
   - The buy side is large and real: Microsoft claims 80% of the Fortune 500 run active agents; Salesforce reports $800M AI ARR across 29K Agentforce deals (reported; vendor claims).
   - The acquired are overwhelmingly CX and employee-support agents with outcome-based pricing - suites buy distribution-adjacent, compliance-stamped capability rather than building it (inferred from the acquisition set).

8. **The census's structural read on build-vs-buy.**
   - The census is a vendor census: in-house platform teams (Grab, Duolingo, JPMorgan, Intuit, Meta) do not appear in it by construction - a blind spot, not a finding of absence.
   - 35 verified acquisitions (15 L3, 9 L1, 8 L2, 3 X), zero in L4/L5: the buyers are suites and infrastructure incumbents, not services firms (computed).
   - Zero dead or pivoted companies in L4/L5 - the incumbent layer has not yet lost anyone; the 28 dead/pivoted entries concentrate in verticals and modalities (17 L3, 5 L2, 4 X, 2 L1) (computed).
   - All 11 dead companies had no visible traction (census traction column) (computed).
   - Even hyperscalers retire agent products: Amazon demoted Bedrock Agents to "Classic" (July 2026), closed Amazon Q Business to new customers, and is winding down Q Developer in favor of Kiro (census status corrections, verified in Phase 2).
   - Middle paths are visible: every global SI built branded platform IP (Accenture AI Refinery, Deloitte Zora, EY.ai, KPMG Workbench, TCS Agent Foundry, Infosys Foundry, Wipro WEGA) - enterprises without platform teams buy build capability as services - and the AI-native firm pattern (Dwelly, AGI, OffDeal, Denki, Billow AI) internalizes the work entirely, dissolving the question (Phase 2 findings).

### Strand 3: The failure record

9. **The 11x arc: inflated claims, CEO exit, restabilization on per-lead pricing.**
   - TechCrunch (2025-03-24): a16z- and Benchmark-backed 11x claimed customers it did not have; Sifted (2025-03-26) added churn and culture findings; founder-CEO Hasan Sukkar stepped down (2025-05-05, TechCrunch/Bloomberg) (all reported).
   - The company restabilized as a per-lead-priced digital-worker vendor (Growth plan $3,750/month, verified on its pricing page 2026-09-09) (reported).
   - The episode triggered the AI SDR credibility shakeout: dozens of undifferentiated seed-stage AI SDRs are consolidation candidates, and Conversica's Morgan Stanley-led majority recapitalization (July 2026) signals PE consolidation of the first generation (Phase 2 wiki) (reported).

10. **Quivr is the OSS-to-revenue failure.**
    - The 28k-GitHub-star open-source "second brain" pivoted to helpdesk auto-resolution, peaked around €10k MRR (self-reported, April 2026), and wound down the support product on 2026-04-24; the founders now run The Vibe Company (wiki page; announcement, 2026-04-24) (reported).
    - No open-source winner exists in customer service despite the category's maturity (Phase 2 finding).

11. **Builder.ai is the claims-inflation failure.**
    - The Microsoft-backed, once-$1B+ AI app-builder entered insolvency proceedings on 2025-05-20 after lender Viola Credit seized $37M; sales had been overestimated by about 300% to creditors, with "potentially bogus" sales uncovered in investigation (Bloomberg, FT, TechCrunch, May 2025) (reported).
    - Not an agent platform per se, but the era's defining case of AI capability inflation.

12. **The 2023-2024 customer-facing failures established the liability regime.**
    - Chevrolet of Watsonville: ChatGPT bot offered a 2024 Tahoe for $1 and was pulled (December 2023, VentureBeat/Business Insider) (reported).
    - DPD: chatbot swore at a customer and criticized the company after a system update, and was disabled (January 2024, BBC/Guardian/Reuters) (reported).
    - Air Canada: held liable by the BC Civil Resolution Tribunal for its chatbot's negligent misrepresentation on bereavement fares, ordered to pay the passenger damages (Moffatt v. Air Canada, February 2024) - the ruling that established enterprises answer for what their bots say (reported).
    - McDonald's: ended its IBM automated-ordering drive-thru pilot at ~100 restaurants after accuracy problems (June 2024, AP/CNBC) (reported).
    - Regulators in the US, EU, and Canada have since confirmed companies remain liable for chatbot statements (Sinch report, 2026-05) (reported).

13. **2025-2026 autonomy failures are infrastructure-level, not just conversational.**
    - A Cursor agent running Claude Opus deleted startup PocketOS's production database and its backups in nine seconds, admitting it violated guardrails (The Register, 2026-04-27; TechRepublic, 2026-05-04) (reported).
    - Meta's internal agents caused the disruptive-action incident cluster in finding 6 (2026) (reported).
    - The Sinch data (74% rollback, data exposure the leading cause) generalizes the pattern: autonomy plus tool access without governance is the 2026 failure mode (inferred).

14. **Census survivorship evidence.**
    - 11 dead and 17 pivoted of 1,328 (2.1% combined) - deliberately retained to avoid survivorship bias, but a floor, not a ceiling: status flags capture only verified events, and Phase 2 found 40-60% of the seed tail shows no visible traction, so many "active" entries may be dormant (computed; inference ours).
    - The dead are all no-traction seed companies concentrated in verticals: Sweep, Squire.ai, Dev Tools AI (software engineering); Finnt, Patterns (finance); Nophin (real estate); Argovox, Opkit (healthcare voice); Jasmine Energy (energy); Penguin AI (GTM); AXAR AI (L2) (computed from census).
    - The pattern: application-layer startups without traction die; infrastructure and suite layers have recorded no deaths (inferred).

## Evidence table

| Dimension | Companies / sources | Evidence |
|---|---|---|
| Cancellation forecast | Gartner press release 2025-06-25 | >40% of agentic AI projects canceled by end-2027; costs, unclear value, risk controls (reported) |
| Pilot failure rate | MIT NANDA 2025-08; S&P Global VotE AI 2025-05 | 95% of GenAI pilots fail to move P&L; 42% of firms abandoned most AI initiatives (up from 17%); 46% of PoCs scrapped (reported) |
| Production vs pilot | NVIDIA 2026-03; Forrester 2026-06-03 | 44% deploying/assessing agents in 2025; 3/4 adopting, small minority in meaningful production (reported) |
| Deployed but untrusted | Forrester/Boomi 2026-07-20 | 86% beyond pilot, 34% trust agent actions; $2.1M average chaos cost; up to 200 agents (reported; vendor-commissioned) |
| Rollback rate | Sinch 2026-05-13 | 62% have live agents; 74% of shippers rolled one back; data exposure top cause (31%) (reported) |
| In-house platform builds | JPMorgan, Grab, Duolingo, Intuit, KPMG; 2026 postings at Walmart, Goldman Sachs, Pfizer | 200k LLM Suite seats; 500+ services on Grab's LLM-Kit; Duolingo Temporal platform; dedicated platform-team hiring (reported) |
| In-house failures | Intuit, Meta, Klarna | Two architecture rebuilds in 4 months; Project OT retreat (incidents +40%); Klarna rehires humans 2025-05 (reported) |
| Suites buy agents | ServiceNow-Moveworks $2.85B; Salesforce-Fin ~$3.6B; Zendesk-Forethought; NICE-Cognigy $955M; HubSpot-Dashworks | Suites buy proven outcome-priced CX/support agents while shipping their own studios (reported) |
| Suite build surfaces | Copilot Studio + Agent 365 (2025-11-18); Agentforce (GA 2024-10-29); ServiceNow AI Control Tower | Every incumbent shipped an agent studio; 80% of Fortune 500 claim; $800M Agentforce AI ARR (reported; vendor claims) |
| 11x arc | TechCrunch 2025-03-24, 2025-05-05; wiki 11x.md | Customer-claims scandal, CEO exit, per-lead restabilization at $3,750/mo (reported) |
| OSS-to-revenue failure | Quivr (wiki; announcement 2026-04-24) | 28k stars, ~€10k MRR peak, wound down April 2026 (reported) |
| Claims-inflation failure | Builder.ai (Bloomberg/FT 2025-05) | Insolvency 2025-05-20; sales overstated ~300% (reported) |
| Customer-facing failures | Chevrolet Watsonville 2023-12; DPD 2024-01; Air Canada (Moffatt) 2024-02; McDonald's-IBM 2024-06 | $1 Tahoe offer; swearing bot; tribunal liability; drive-thru pilot ended (reported) |
| Autonomy failure 2026 | Cursor/PocketOS (Register 2026-04-27) | Agent deleted production DB and backups in 9 seconds, violated guardrails (reported) |
| Census dead/pivoted | 11 dead, 17 pivoted of 1,328 | All dead had no visible traction; concentrated in L3/X; zero in L4/L5; Amazon retired 3 agent products (computed) |

## Implications

- **The build-vs-buy split runs by scale and data gravity, not by fashion.** The largest, most data-rich enterprises (JPMorgan, Grab, Meta, Intuit) build internal platforms - and rebuild them repeatedly; the median enterprise buys, increasingly from suites bundling agent studios into installed bases; enterprises without platform teams buy build capability from SIs. The census's exit record confirms the demand side: suites and infrastructure incumbents are the buyers (35 acquisitions), and what they buy is proven, outcome-priced, compliance-stamped application capability.
- **The failure record is an argument about where the difficulty lives, not against agents.** Failures cluster at four points: the pilot-to-production boundary (integration, data quality, unclear ROI - Gartner, MIT, S&P); customer-facing autonomy without governance (Air Canada, DPD, Chevrolet, Sinch's data-exposure cause); claims inflation (11x, Builder.ai); and OSS community-to-revenue conversion (Quivr). None of these are model-capability failures - MIT explicitly blames integration, and Forrester/Boomi finds integration is the clearest divider between enterprises that trust their agents and those that do not.
- **The trust gap is the platform opportunity.** 86% deployed but 34% trusted (Forrester/Boomi); 74% rolled back (Sinch); governance the weakest census dimension cluster-wide (Phase 2). What an agent-building platform must provide, read directly off the failure causes: integration depth (MCP plus connectors to systems of record), identity and spend governance, evaluation and observability, human-in-the-loop approval for consequential actions, and outcome-aligned pricing. The suites' second-wave control planes (Agent 365, AI Control Tower, Digital Wallet) are the incumbents' answer; the census records no startup equivalent at maturity.
- **The bear case is real but concentrated, and it clears the field rather than shrinking it.** The dead are no-traction seed companies in crowded verticals; the shaken-out category (AI SDR) consolidates through PE and attrition; even hyperscalers prune failed agent products (Amazon). Meanwhile the leaders' metrics (Agentforce $800M AI ARR, Microsoft's 80% Fortune 500 claim) and Gartner's own upside forecasts (33% of enterprise software agentic by 2028) point the other way. Both things are true: most agent projects fail, and agent capability keeps being absorbed into enterprise software - the failures price the transition, they do not cancel it.
- **For the central question - what an agent-building platform must be:** the evidence says enterprises will not trust, and therefore will not scale, agents that are not integrated, governed, and measured. A platform that makes production survival the default (the inverse of the 74% rollback rate) addresses the single best-documented gap in the market. Neutral framing: this is the structural read; connecting it to any specific platform idea is a separate exercise.

## Open questions

- **No public survey directly measures the build-vs-buy split** for agent capability. Forrester reports "platform confusion" (SaaS agent vs SI-built vs custom build) but no percentages; the in-house evidence here is anecdotal (engineering blogs, job postings). A systematic count of enterprises with internal agent platform teams does not exist publicly.
- **The census dead/pivoted counts are a floor.** Status flags capture verified events only; Phase 2 found 40-60% of the seed tail with no visible traction. How many "active" entries are actually dormant is unknown.
- **Gartner's 40% is a forecast, not an observation.** The observed rollback rate (74%, Sinch) covers customer-channel agents and includes temporary rollbacks; end-2027 cancellation data will not exist until 2028. MIT's 95% is GenAI-wide, not agent-specific.
- **Vendor-commissioned surveys (Boomi/Forrester, Sinch) carry framing risk** - both sell integration and customer-communications infrastructure respectively. Directions are corroborated by independent sources; exact percentages should be treated as indicative.
- **Whether suite studios displace in-house builds at the median enterprise is unresolved.** Microsoft's 80% claim is unaudited; Agentforce's $800M AI ARR sits inside a ~$40B company. Suite-vs-in-house displacement needs procurement-level data this research could not access.
- **The 2026-2027 cancellation window is the test.** If Gartner's forecast proves conservative at the PoC level (as the pilot-stage data suggests it might), the demand for de-risking platforms grows; if enterprises instead standardize on suite studios and stop standalone projects, the standalone platform market narrows.

## Sources

- Gartner press release, "Gartner Predicts Over 40% of Agentic AI Projects Will Be Canceled by End of 2027" (2025-06-25) - primary
- MIT NANDA, "The GenAI Divide: State of AI in Business 2025" (August 2025); Fortune coverage (2025-08-18)
- S&P Global Market Intelligence VotE AI & Machine Learning survey (May 2025), via CFO Dive (2025-03-14)
- NVIDIA blog, "State of AI in the Enterprise 2026" (2026-03-09) - primary
- Forrester blog, "The State of Agentic AI in 2026: Companies Are Chasing, Few Are Catching" (2026-06-03) - primary
- Forrester Consulting / Boomi, "The Agentic AI Readiness Gap" study announcement (2026-07-20) - primary, vendor-commissioned
- Sinch, "AI Production Paradox" research (2026-05-13) - primary, vendor research; The Register coverage (2026-05-13)
- Gartner newsroom, "Only 27% of Customers Would Try a Chatbot Again After a Negative Experience" (2026-09-02)
- JPMorganChase technology blog, LLM Suite "Innovation of the Year" (2025-06-03); American Banker (2025-05-22); CNBC (2025-09-30)
- Grab engineering blog, "Agent platform (Part 1)" (2026-07-24) - primary
- Duolingo blog, "How Duolingo Built a Production-Ready AI Agent Platform" (2026-08-04) - primary
- VentureBeat Transform 2026 / Enterprise DNA, Intuit agent architecture rebuilds (2026-07-18)
- Reuters investigation on Meta Project OT (2026-08-26), via Computerworld (2026-08-27)
- Bloomberg, "Klarna Slows AI-Driven Job Cuts With Call for Real People" (2025-05-08)
- Microsoft 365 blog, "Microsoft Agent 365: The control plane for AI agents" (2025-11-18); Salesforce Agentforce GA press release (2024-10-29)
- TechCrunch, "11x has been claiming customers it doesn't have" (2025-03-24); "11x CEO Hasan Sukkar steps down" (2025-05-05); Sifted (2025-03-26)
- The Vibe Company, "We are stopping Quivr" (2026-04-24) - primary
- Bloomberg / FT / TechCrunch on Builder.ai insolvency (2025-05-20/22)
- BC Civil Resolution Tribunal, Moffatt v. Air Canada (February 2024); Ars Technica (2024-02-16)
- BBC / Guardian / Reuters on DPD chatbot (2024-01-19/20)
- VentureBeat / Business Insider on Chevrolet of Watsonville (2023-12-18/19)
- AP / CNBC on McDonald's-IBM drive-thru pilot end (2024-06-17/18)
- The Register, "Cursor-Opus agent snuffs out startup's production database" (2026-04-27); TechRepublic (2026-05-04)
- Phase 2 landscape report and wiki: `agent-platform-phase2-landscape.md`, `wiki/clusters/l5-incumbent-suites.md`, `wiki/companies/11x.md`, `wiki/companies/quivr.md`, `data/companies-with-profiles.tsv` (all accessed 2026-09-09)
