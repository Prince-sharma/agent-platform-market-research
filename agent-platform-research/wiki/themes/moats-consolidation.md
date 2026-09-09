# Moats, M&A, and consolidation (P3.5)

## Scope

Which layers of the enterprise work-agent stack carry real switching costs versus commodity spend; the full acquisition map (buyer, target, price, date, what was bought); and which consolidators and targets are most likely next. Implements plan section 12 (theme P3.5); extends Phase 2 section 3.2's three consolidation patterns into six verified buyer logics. Date: 2026-09-09. Read alongside the four sibling Phase 3 themes, especially market-sizing.md Lens C (capital flows) and pricing-evolution.md (stickiness).

## Method

1. **Wiki extraction:** all 766 company pages parsed for build-decision 9 (moat thesis) and the Analysis-section M&A line, with frontmatter layer, scope, vertical, status. 443 theses are substantive (294 deep, 149 base); 323 read "unknown" (314 base, 9 deep).
2. **Moat classification:** each substantive thesis multi-label classified into the plan's eight moat types (integrations, data gravity, workflow lock-in, evals, distribution, price, OSS, hardware) plus five residual categories the data itself surfaced (model/IP, compliance, labor economics, network effects, unclear). Classification was machine-assisted over nine batches against a fixed label set with keyword spot-checks; tallies computed by script; multi-label, so shares sum above 100%.
3. **Census:** `data/companies-with-profiles.tsv` (1,328 rows); the 35 `status=acquired` rows cross-referenced against wiki M&A lines and acquirer pages to identify a buyer for every one.
4. **Cluster pages:** all 14 "Consolidation and M&A" sections extracted and reconciled with the wiki deal set.
5. **Web verification (accessed 2026-09-09):** press releases or dated funding press for every price-bearing deal and all major undisclosed ones: ServiceNow, Salesforce, Workday (x3), NICE, Dynatrace, Cato, Palo Alto Networks, SoundHound, Zendesk (x2), HubSpot, IBM, ClickHouse, SentinelOne, Snowflake, Automation Anywhere, Cognition, Arcade, Uniphore, Crescendo, New Mountain Capital, Conversica, Dwelly, AGI, Rox, Aircall, Vantaca, Coinbase, G2, SafeBase, LeaseQuery, NVIDIA/Solver, Yellow.ai SPAC. Reported versus estimated labeled throughout.
6. **Sibling themes:** market-sizing.md Lens C ($28.3B visible funding; $10.4B disclosed M&A across 8 deals); pricing-evolution.md (usage = commodity multi-homing; per-outcome = performance lock-in); build-vs-buy-failures.md (suites build the studio, buy the proven agents); long-horizon-agents.md (memory commercially tiny).

## Findings

1. **Moat theses form a switching-cost stack that only the vertical and suite layers actually hold.** Across 443 substantive theses: workflow lock-in 166 (37%), data gravity 142 (32%), integrations 117 (26%), distribution 97 (22%), model/IP 75 (17%), evals 44 (10%), compliance 29 (7%), OSS 21 (5%), price 17 (4%), network effects 6, labor 5, hardware 5 (multi-label; 33 unclear). By layer (share of that layer's substantive theses): L3 verticals claim workflow lock-in 52%, data gravity 43%, integrations 34%; the switching-cost stack of deep connectors into systems of record, process embedding, and compounding domain data. L5 suites claim distribution 100%, data gravity 79%, workflow lock-in 57%; the bundle plus the install base. L1 infrastructure claims evals 22% and data gravity 20%. L2 build platforms claim distribution 51%. X modalities claim model/IP 39%, the highest model-share of any layer.

2. **The pricing model is the true moat test, and it splits the market into commodity spend and performance lock-in.** The pricing theme established that usage-based pricing is commodity multi-homing while per-outcome pricing is performance lock-in. The moat tally confirms the split from the vendor side: L1, where usage pricing is universal (58% of known-priced rows; zero per-outcome), claims evals and data gravity but cannot point to a pricing mechanism that holds a customer; sandboxes, routers, and connectors are metered inputs a buyer can reroute at will (OpenRouter's 5.5% take rate is the clearest commodity signal; pricing-evolution.md). The CX verticals, where per-resolution pricing converged at $0.50-$2.00, reorganize the buyer's cost structure and headcount around the vendor's resolution rate; the strongest switching cost in the census, and the only one created by the pricing model itself.

3. **Two moat classes survive contact with the M&A market; the rest do not.** What got bought, at disclosed premiums: (a) outcome-priced work delivery with compounding training data; Fin (~$3.6B), Moveworks ($2.85B), Forethought ("seven years of CX training data... outcome pricing" per its wiki page), Cognigy (~$955M); (b) OSS community plus trace data gravity; Langfuse (34k stars) to ClickHouse, Langflow to IBM via DataStax, Arize ("OSS Phoenix distribution plus eval depth; trace data gravity") to Dynatrace for $915M; (c) integration depth; Moveworks, Pipedream (3,000+ APIs) to Workday; (d) registry network effects; Smithery ("registry network effects") to Arcade. What drew no visible premium anywhere: model/IP claims (75 theses), price advantage (17), hardware (5). The acquired cohort's own decision-9 lines read as the M&A market's shopping list, not the census's.

4. **The acquisition map: roughly 60 verified transactions 2021-2026, across six buyer logics; Phase 2's three patterns hold and three more are visible.** The 35 census-status acquisitions plus about 25 wiki-documented deals where target or buyer sits outside the census. Deal tempo roughly doubled from 2024 (~8 dated deals) to 2025 (~21), and 2026 through September (~17) is tracking at or above full-year 2025. The six logics, each verified against primary sources:

   - **P1, suites buy proven agents (17 deals):** ServiceNow (Moveworks $2.85B; Logik.ai; Cuein), Salesforce (Fin ~$3.6B; Respell; Moonhub; Truva), Zendesk (Ultimate; Forethought, its largest deal ever), Workday (Sana $1.1B; Paradox ~$1.06B; Pipedream; Flowise), NICE (Cognigy ~$955M), HubSpot (Dashworks), Automation Anywhere (Aisera), SoundHound (Amelia $80M). The acquired are overwhelmingly CX and employee-support agents with outcome-based pricing; Phase 2's finding, now with Workday-Paradox added.
   - **P2, incumbent infrastructure buys agent-era capability (11 deals):** observability into data infrastructure (Dynatrace-Arize $915M; ClickHouse-Langfuse; Snowflake-TruEra); agent security into security platforms (SentinelOne-Prompt Security; Cato-Aim ~$350M; Palo Alto Networks-Console ~$500M reported); connectivity and builders into suites (Workday-Pipedream and Flowise; IBM-DataStax/Langflow); operators buying labs (DoorDash-Metis); talent-and-license deals (Amazon-Adept; Google-mutable.ai; NVIDIA-Solver).
   - **P3, startup consolidators (19 deals):** Sierra x4 in 18 months (Receptive AI, Opera Tech Japan, Fragment, Takeoff; buying long-horizon capability and international reach); Uniphore x8 since 2021 (Emotion Research Lab, Jacada, Red Box, Hexagone, ActionIQ, Infoworks, Orby AI, Autonom8); Cognition-Windsurf (2025-07-14, after Windsurf's $2.4B talent/licensing deal with Google, reported); Arcade-Smithery (authorization plus registry plus distribution in one MCP stack); CodeRabbit-FluxNinja; Rox-Quilt; Unframe-Swish; Observe.AI-Scope.AI; Deepgram-OfOne.
   - **P4, vertical incumbents buy vertical agents (9 deals):** Vantaca-HOAi (2024-11), LeaseQuery-Stackshine (2023-08), Coinbase-Agara (2021-11, >$40M), Aircall-Vogent (2026-05), G2-unSurvey (2026-06), Upwork-Nara (2024), Standard Fleet-Bytebot, Optro-Midship, SafeBase-Stacksi (2023-09). A pattern Phase 2 did not name: the system-of-record vendor in a non-software industry buys the agent built on top of it.
   - **P5, private equity and capital markets (3 events):** New Mountain Capital combined SmarterDx, Thoughtful.ai, and Access Healthcare into Smarter Technologies (2025-05-19); a PE platform roll-up of AI revenue-cycle management; Conversica's Morgan Stanley Expansion Capital majority recapitalization (2026-07-26); PE consolidating the first-generation revenue assistant; Yellow.ai's $550M SPAC merger with Bluerock Acquisition Corp (announced 2026-08-03).
   - **P6, AI-native firms buy the underlying business (4+ events):** Dwelly ($170M Series B, 2026-07-28) rolling up UK lettings agencies; AGI / American Growth Insurance ($70M, 2026-07) acquiring independent US insurance brokerages; Overdrive Health acquiring an ambulance billing agency (~$50M+ claims/yr); Crescendo-PartnerHero (2024-10-02) buying a human CX workforce to underwrite its outcome guarantees. The M&A direction inverts: the agent company buys the labor, not the reverse.

5. **L2 is the most-bought layer; L5 and L4 are pure buyers; the zero-acquirer clusters are the young verticals.** Census acquisition rate by layer: L2 build platforms 8 of 139 (5.8%), L1 infrastructure 9 of 201 (4.5%), X modalities 3 of 107 (2.8%), L3 verticals 15 of 787 (1.9%), L4 services 0 of 18, L5 suites 0 of 76. Build platforms without distribution are features, not companies: Aisera, Sana, Flowise, Langflow, Respell, and mutable.ai all sold, while the independents that stayed independent hold the layer's only real gravity (n8n $5.2B with SAP's strategic investment; Glean $7.2B at $200M ARR on enterprise context; Zapier's 9,000+ integrations). Zero-acquirer clusters: industry verticals (66 companies, none acquired) and other verticals (23, none), where the natural acquirers (construction, logistics, real estate incumbents) are not software buyers; the exit path there is the AI-native roll-up (Dwelly) or strategic capital (Digs' Builders FirstSource-led round), not suite M&A. Legal shows zero M&A despite the census's largest valuations (Harvey $11B, Legora $5.55B): the leaders are too expensive to buy and the legal publishers have not started buying.

6. **Suites buy rather than build because the moat sits in the deployed agent, not the builder.** The build-vs-buy theme's finding (suites build the studio, buy the proven agents) is explained by the moat distribution: workflow lock-in and data gravity accrue to the agent in production, not to the tooling. All 14 suites converged on the same studio shape (natural language plus low-code plus prebuilt role agents) within roughly a year; a studio is rebuildable; seven years of CX training data (Forethought) or an installed per-resolution engine (Fin at $0.99/outcome) is not. Salesforce's ~$3.6B Fin agreement (2026-06-15) is the cleanest statement: the suite with the largest agent push bought the outcome-pricing leader rather than compete with it.

7. **Likely consolidators, by demonstrated capital and motive.** (a) Suites already transacting: ServiceNow (3 deals), Salesforce (4), Workday (4), Zendesk (2), HubSpot, NICE, Automation Anywhere; every one has bought within 20 months. (b) Security platforms: SentinelOne, Cato, and Palo Alto Networks bought three agent-security companies in 13 months (2025-08 to 2026-09); CrowdStrike and Zscaler have the same motive and have not yet transacted in the census. (c) Data infrastructure: Dynatrace, ClickHouse, Snowflake, IBM bought observability and evals; Databricks led Uniphore's Series F (2026). (d) CCaaS and telephony: NICE, Aircall (Vogent), SoundHound (Amelia); Genesys holds a strategic stake in Scaled Cognition. (e) Startup consolidators with capital: Sierra ($1B+ raised, $15.8B valuation, four deals), Cognition ($2B Series E at $48B, 2026-09-08), Uniphore (~$980M raised, eight deals). (f) Private equity: New Mountain Capital, Morgan Stanley Expansion Capital. (g) SIs: none has bought software yet (Quantiphi-Candyspace is the only intra-cluster deal), but the L4 cluster page expects them to acquire delivery boutiques as outcome pricing matures. (h) The AI-native firms themselves: Dwelly and AGI are the named acquirers in their own industries.

8. **Likely targets: the over-crowded categories, each with a named buyer logic.** Memory: 9-11 startups (Mem0, Zep, Letta, CORE, Engram, Glen, Hyperspell, Shepherd, Zaro), no enterprise standard, and commercially tiny (~$1M ARR against $24M raised for Mem0 and Zep, per the long-horizon theme); the L1 runtime cluster page names memory the next category to consolidate; buyers would be suites, data infrastructure, or model vendors (Claude managed agents, 2026-06, reported). Voice testing: six funded entrants (Coval $31M, Hamming, Cekura, fixa, Roark, Dialogus); explicitly flagged by the L1 observability cluster page as the next consolidation target, following the observability exits. Computer-use evals: six pre-seed startups (hud, Halluminate, AgentHub, Abundant, Anchorhead, Ashr); "a category formed faster than demand can support" (L1 runtime cluster page). AI SDRs: roughly 18 census companies, a dozen direct variants; 11x's 2025 scandal and Conversica's PE recap bracket the category, with Roger, Topo, Clodo, and FuseAI named consolidation candidates (legal-GTM cluster page). Month-end close: 15+ companies; insurance submissions: 13; AML/KYC: 5 (Greenlite, Arva, Sphinx, Rulebase, Shiboleth); the finance cluster page's verdict: "the seed tail here will consolidate or die." Agent identity: Microsoft (Entra Agent ID) and Okta built natively rather than buying; "bad news for standalone identity startups" (L1 observability cluster page). L4 seed boutiques (Callback, Luthor, Refactor) are the SI-acquisition candidates.

9. **Strategic capital is the leading indicator of the next acquisitions.** Minority positions preceded or accompanied several deals: SAP's strategic investment in n8n; Genesys in Scaled Cognition; Salesforce in Wonderful; Accenture in Cresta; NVIDIA, AMD, Snowflake, and Databricks leading Uniphore's Series F; Amex in Traversal; Builders FirstSource in Digs. Where a strategic has taken a position inside an agent company, the full acquisition follows the pattern the suites set.

## Evidence table

### The acquisition map (verified deals, 2021-2026)

| # | Buyer | Target | Price | Announced | What was bought | Logic |
|---|---|---|---|---|---|---|
| 1 | ServiceNow | Moveworks | $2.85B (reported) | 2025-03-10 | Outcome-priced employee-support agent; distribution into install base | P1 |
| 2 | Salesforce | Fin (Intercom) | ~$3.6B (reported) | 2026-06-15 | Per-resolution CX engine ($0.99/outcome); the outcome-pricing commercial model | P1 |
| 3 | Workday | Sana | $1.1B (reported) | 2025-09-16 | Enterprise knowledge/agent platform | P1 |
| 4 | Workday | Paradox | ~$1.06B (PitchBook-listed, estimated) | 2025-08-21 | Frontline hiring agents (~$116M ARR est.) | P1 |
| 5 | NICE | Cognigy | ~$955M (reported) | 2025-07-28 | Voice-agent platform; CCaaS distribution | P1 |
| 6 | Dynatrace | Arize | $915M (reported) | 2026-08-13 | AI observability/evals; Phoenix OSS; trace data | P2 |
| 7 | Palo Alto Networks | Console | ~$500M (reported, sources) | 2026-09-01 | Agent security/identity | P2 |
| 8 | Cato Networks | Aim Security | ~$350M (reported) | 2025-09-03 | Agent security; SASE extension | P2 |
| 9 | SoundHound | Amelia | $80M (reported) | 2024-08-08 | Enterprise conversational AI; brand base | P1 |
| 10 | Coinbase | Agara | >$40M (reported) | 2021-11-01 | Voice AI for support | P4 |
| 11 | Zendesk | Forethought | Undisclosed (all-cash; largest Zendesk deal ever) | 2026-03-11 | Per-resolution CX agent; 7 years CX training data | P1 |
| 12 | Zendesk | Ultimate | Undisclosed | 2024-03-13 | CX agent capability | P1 |
| 13 | HubSpot | Dashworks | Undisclosed | 2025-04-16 | GTM knowledge assistant | P1 |
| 14 | ServiceNow | Logik.ai | Undisclosed | 2025-04-03 | AI-powered CPQ | P1 |
| 15 | ServiceNow | Cuein | Undisclosed | 2025-01-17 | Conversation data analysis | P1 |
| 16 | Salesforce | Respell | Undisclosed | 2025-01-19 | Team (no-code agent builder) | P1 |
| 17 | Salesforce | Moonhub | Undisclosed | 2025-06-02 | Team (recruiting agents) | P1 |
| 18 | Salesforce | Truva | Undisclosed | 2025-07 | Team (GTM agents) | P1 |
| 19 | Workday | Pipedream | Undisclosed | 2025-11-19 | Connectivity: 3,000+ APIs for agent integrations | P2 |
| 20 | Workday | Flowise | Undisclosed | 2025 | OSS visual agent builder | P2 |
| 21 | IBM (via DataStax) | Langflow | Undisclosed | 2025-02-25 | OSS agent builder; watsonx data stack | P2 |
| 22 | ClickHouse | Langfuse | Undisclosed | 2026-01-16 | OSS observability (34k stars); trace data; bundled with ClickHouse Cloud | P2 |
| 23 | Snowflake | TruEra | Undisclosed | 2024-05-22 | AI observability/evals | P2 |
| 24 | SentinelOne | Prompt Security | Undisclosed | 2025-08-05 | Agent security (MCP gateway) | P2 |
| 25 | DoorDash | Metis | Undisclosed | 2026-03-18 | Applied-research lab: post-training, continuous learning | P2 |
| 26 | Amazon | Adept AI | Undisclosed (talent + license) | 2024-06-28 | Founders and team; tech license | P2 |
| 27 | Google | mutable.ai | Undisclosed | 2024 | Team and tech (became Code Wiki) | P2 |
| 28 | NVIDIA | Solver | Undisclosed | 2025-09-03 | Coding-agent capability | P2 |
| 29 | Cognition | Windsurf | Undisclosed (post-$2.4B Google talent/licensing deal, reported) | 2025-07-14 | Agentic IDE; engineering team; users | P3 |
| 30 | Arcade | Smithery | Undisclosed | 2026-08-05 | MCP registry network effects; distribution | P3 |
| 31 | Sierra | Receptive AI / Opera Tech / Fragment / Takeoff | Undisclosed (x4) | 2025-03 to 2026-07 | Long-horizon capability; Japan and France entry | P3 |
| 32 | Uniphore | 8 targets (2021-2025) | Undisclosed | 2021-2025 | Emotion Research Lab, Jacada, Red Box, Hexagone, ActionIQ, Infoworks, Orby AI, Autonom8: capability stack assembly | P3 |
| 33 | Crescendo | PartnerHero | Undisclosed ($500M Crescendo valuation at time, reported) | 2024-10-02 | Human CX labor underwriting outcome guarantees | P6 |
| 34 | CodeRabbit | FluxNinja | Undisclosed | 2025 | Scaling/rate-limiting capability | P3 |
| 35 | Rox | Quilt | Undisclosed | 2025-09-23 | Presales/RFP knowledge | P3 |
| 36 | Deepgram | OfOne | Undisclosed | 2026-01 | Restaurant voice automation | P3 |
| 37 | Observe.AI | Scope.AI | Undisclosed | 2021-08 | Omnichannel capability | P3 |
| 38 | Unframe AI | Swish AI | Undisclosed | 2025 | Capability | P3 |
| 39 | Vantaca | HOAi | Undisclosed | 2024-11-19 | HOA-management vertical AI | P4 |
| 40 | LeaseQuery | Stackshine | Undisclosed | 2023-08-08 | SaaS spend management | P4 |
| 41 | Aircall | Vogent | Undisclosed | 2026-05-06 | Voice agents into business telephony | P4 |
| 42 | G2 | unSurvey | Undisclosed | 2026-06 | AI research interviews | P4 |
| 43 | Upwork | Nara | Undisclosed | 2024 | AI work-matching | P4 |
| 44 | Standard Fleet | Bytebot | Undisclosed | 2024 | Computer-use agents | P4 |
| 45 | Optro | Midship | Undisclosed | 2025 | SOX-testing agents | P4 |
| 46 | SafeBase | Stacksi | Undisclosed | 2023-09-06 | Security-questionnaire automation | P3 |
| 47 | New Mountain Capital | SmarterDx (+ Thoughtful.ai, Access Healthcare) | Undisclosed | 2025-05-19 | PE platform roll-up: AI revenue-cycle management | P5 |
| 48 | Morgan Stanley Exp. Capital | Conversica (majority recap) | Undisclosed | 2026-07-26 | PE consolidation of first-gen revenue assistant | P5 |
| 49 | Bluerock Acquisition Corp | Yellow.ai (SPAC) | $550M merger (reported) | 2026-08-03 | Public listing | P5 |
| 50 | Dwelly | UK lettings agencies (roll-up, ongoing) | $170M raised to fund | 2026-07-28 | The business itself: labor plus revenue | P6 |
| 51 | AGI (American Growth Insurance) | Independent insurance brokerages (ongoing) | $70M committed | 2026-07 | The business itself | P6 |
| 52 | Overdrive Health | Ambulance billing agency | Undisclosed | 2025 | Billing labor and claims flow | P6 |

Disclosed-price total: $10.4B across the eight price-bearing deals (Moveworks, Fin, Sana, Cognigy, Arize, Console, Aim, Amelia; rows 1-3 and 5-9), consistent with market-sizing.md Lens C. Adding Workday-Paradox (~$1.06B, PitchBook-listed) and the Yellow.ai SPAC merger value brings reported deal value to roughly $12B; Coinbase-Agara (2021, >$40M) predates the 2024-26 window. Estimated total 2024-26 agent M&A including undisclosed deals: $13-18B (estimated, market-sizing.md).

### Moat theses by layer (443 substantive theses, multi-label)

| Moat type | L1 (n=123) | L2 (n=35) | L3 (n=223) | L4 (n=15) | L5 (n=14) | X (n=33) | All |
|---|---|---|---|---|---|---|---|
| Workflow lock-in | 17% | 37% | 52% | 20% | 57% | 18% | 166 |
| Data gravity | 20% | 20% | 43% | 7% | 79% | 6% | 142 |
| Integrations | 15% | 37% | 34% | 20% | 0% | 21% | 117 |
| Distribution | 17% | 51% | 13% | 67% | 100% | 12% | 97 |
| Model/IP | 8% | 11% | 19% | 40% | 0% | 39% | 75 |
| Evals | 22% | 3% | 6% | 7% | 0% | 3% | 44 |
| Compliance | 4% | 0% | 9% | 20% | 7% | 3% | 29 |
| OSS | 9% | 11% | 1% | 0% | 0% | 12% | 21 |
| Price | 7% | 0% | 3% | 0% | 0% | 9% | 17 |
| Network / labor / hardware | 2% / 0% / 0% | 3% / 0% / 0% | 1% / 2% / 2% | 0% / 0% / 0% | 0% / 0% / 0% | 0% / 0% / 0% | 6 / 5 / 5 |

## Implications

- **Value pools where switching costs are verifiable: the deployed vertical agent and the suite bundle.** The moat evidence and the M&A evidence agree: workflow lock-in, data gravity, and integration depth (L3's stack) plus distribution (L5's bundle) are what buyers pay for. The platform layer holds durable pricing power only where it accumulates gravity its tenants cannot replicate: OSS community, trace and eval data, connector depth, registry network effects.
- **Metered inputs are commodity spend, and the exit market has priced that.** No sandbox, router, or connector company has produced a large exit; the L1 companies that sold carried OSS communities or trace gravity (Langfuse, Arize, Langflow, Pipedream's connector library). A platform whose defensibility story is metering usage is in the commodity tier by its own pricing model.
- **Per-outcome pricing is the only pricing mechanism that creates a moat, and the acquirers know it.** The premium cohort of the M&A map (Fin, Moveworks, Forethought, Cognigy, Paradox) is the per-outcome or outcome-adjacent cohort; the pricing theme's performance-lock-in finding and the acquisition map are two views of the same fact.
- **For the central question, what an agent-building platform must provide:** the exit map says buyers of platforms want proven work delivery, not builder tooling; L2's 5.8% acquisition rate is an exit wave of feature-companies. A platform that wants to be durable rather than acquired must own what accumulates on it (traces, evals, connectors, memory, registry) rather than what flows through it (tokens, runs, browser-hours).
- **Consolidation pressure is highest exactly where the census is most crowded and the moats weakest:** memory, voice testing, computer-use evals, AI SDRs, month-end close, insurance submissions. The zero-acquirer verticals (industry, other) will consolidate through AI-native roll-ups and strategic capital rather than software M&A; the first legal-publisher acquisition would open the richest untouched vertical.

## Open questions

- **Price opacity:** 45+ of the ~60 deals are undisclosed; the $13-18B estimated total (market-sizing.md) could move materially with any single disclosure; Cognition-Windsurf's terms were never confirmed.
- **Memory's consolidator identity:** a suite, a model vendor (Claude managed agents), or data infrastructure; each implies a different consequence for the platform layer, and the L1 cluster's prediction has not yet resolved.
- **Does the vertical-incumbent pattern generalize?** Vantaca-HOAi, Aircall-Vogent, and Coinbase-Agara suggest every industry's system-of-record vendor is a potential acquirer; only CCaaS/telephony has transacted repeatedly.
- **Does private equity move up-market?** New Mountain and Morgan Stanley have so far bought platforms and recapped first-generation vendors, not scaled agent companies.
- **Legal's zero-M&A anomaly:** whether the first Thomson Reuters or LexisNexis acquisition of an agent startup opens the vertical, or whether Harvey ($11B) and Legora ($5.55B) simply outgrow any acquirer.
- **Depth limits of the moat map:** 323 of 766 theses are unknown and 33 classified unclear; the seed tail's actual moats are unobservable until those companies surface traction or die. The tally is weighted toward the 303 deep profiles by design.

## Sources

- servicenow.com press room, "ServiceNow to acquire Moveworks" (2025-03-10); $2.85B, announced
- salesforce.com/news, "Salesforce Signs Definitive Agreement to Acquire Fin" (2026-06-15); intercom.com blog (2026-06-15); ~$3.6B agreed
- newsroom.workday.com, "Workday Signs Definitive Agreement to Acquire Sana" (2025-09-16); $1.1B; Reuters (2025-09-16)
- newsroom.workday.com, "Workday Signs Definitive Agreement to Acquire Paradox" (2025-08-21); investor.workday.com completion release (2025-10-01); PitchBook profile (~$1.06B, estimated)
- nice.com press release, "NiCE to Acquire Cognigy" (2025-07-28); ~$955M; Forbes (2025-07-29)
- dynatrace.com news, "Dynatrace to Acquire AI Observability Leader Arize" (2026-08-13); $915M
- paloaltonetworks.com press, "Palo Alto Networks Acquires Console" (2026-09-01); TechCrunch (2026-09-02); ~$500M, sources
- catonetworks.com news; Reuters; Calcalist (2025-09-03); Aim Security ~$350M
- soundhound.com newsroom (2024-08-08); TechCrunch; Amelia $80M
- techcrunch.com (2021-11-01); Coinbase-Agara >$40M
- zendesk.com newsroom, Forethought completion (2026-03); TechCrunch (2026-03-11); largest Zendesk deal, undisclosed
- zendesk.com newsroom (2024-03-13); Ultimate
- hubspot.com company news (2025-04-16); Dashworks
- newsroom.servicenow.com; Cuein (2025-01-17), Logik.ai (2025-04-03)
- Respell blog (2025-01-19); TechCrunch (2025-06-02); Salesforce-Respell, -Moonhub; Entrepreneur India (2025-07-15); Salesforce-Truva
- investor.workday.com (2025-11-19); Pipedream
- newsroom.ibm.com (2025-02-25); DataStax (Langflow)
- clickhouse.com blog; langfuse.com blog (2026-01-16); Langfuse
- snowflake.com blog (2024-05-22); TruEra
- sentinelone.com press (2025-08-05); Prompt Security
- tbpndigest.com; fenwick.com (2026-03-18); DoorDash-Metis
- Reuters, Bloomberg, TechCrunch, CNBC (2024-06-28); Amazon-Adept talent and license
- techstartups.com (2025-09-03); NVIDIA-Solver
- cognition.com blog; Reuters (2025-07-14); Windsurf
- arcade.dev blog; Forbes (2026-08-10); Smithery
- sierra.ai blog; Receptive (2025-03-26), Opera Tech (2026-03-27), Fragment (2026-04-23), Takeoff (2026-07-23)
- uniphore.com press (2025-08-28); Orby AI and Autonom8; prior deals per wiki
- crescendo.ai news; GlobeNewswire; Bloomberg (2024-10-02); PartnerHero
- rox.com (2025-09-23); Quilt
- newmountaincapital.com; BusinessWire (2025-05-19); SmarterDx combination
- BusinessWire (2026-07-26); Conversica recapitalization
- prnewswire.com (2026-08-03); Yellow.ai $550M SPAC merger
- dwelly.group blog (2026-07-28); Bisnow; Dwelly $170M
- insurancejournal.com; insurtechanalyst.com (2026-07); AGI $70M
- businesswire.com (2026-05-06); Aircall-Vogent
- prnewswire.com (2024-11-20); Vantaca-HOAi
- finquery.com (2023-08-08); LeaseQuery-Stackshine
- company.g2.com news (2026-06); G2-unSurvey
- businesswire.com (2023-09-06); SafeBase-Stacksi
- agent-platform-research/data/companies-with-profiles.tsv; 35 acquired rows; layer counts (script-verified)
- agent-platform-research/wiki/companies/ (766 pages, profiled 2026-09-09); decision-9 moat theses and M&A lines
- agent-platform-research/wiki/clusters/ (14 pages); Consolidation and M&A sections; crowded-category counts
- agent-platform-phase2-landscape.md §3.2; the three consolidation patterns this theme extends
- wiki/themes/market-sizing.md; Lens C capital flows ($28.3B funding; $10.4B disclosed M&A)
- wiki/themes/pricing-evolution.md; usage vs per-outcome stickiness; resolution price points
- wiki/themes/build-vs-buy-failures.md; suites build the studio, buy the proven agents
- wiki/themes/long-horizon-agents.md; memory commercial size; six long-horizon primitives
