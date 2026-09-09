# Market Sizing (P3.2)

## Scope

Implements plan section 4 (theme P3.2): triangulate the size of the enterprise work-agent platform market through three lenses - top-down analyst and VC theses (Lens A), bottom-up census aggregation (Lens B), and capital flows (Lens C) - and derive TAM / SAM / SOM as ranges with explicit assumptions, a platform-share sensitivity table, and a build-vs-buy split estimate. Date: 2026-09-09. Every figure is date-stamped and labeled **reported** (company or analyst stated), **estimated** (third-party or inference from partial data), or **inferred** (derived here from stated assumptions). No point estimate is presented as fact.

## Method

- **Lens A:** public web research on 2025-2026 publications: Gartner and IDC press releases (used via press release or labeled secondary citation, per plan section 14), Forrester-cited survey data, McKinsey, and the VC framing pieces (Menlo Ventures, Sequoia, a16z, Battery, Bessemer). Market-research firms (MarketsandMarkets, Grand View, Precedence) appear only to show the spread of published estimates, never as a primary number.
- **Lens B:** programmatic extraction (python3) over `data/companies-with-profiles.tsv` (1,328 rows) and the 766 `wiki/companies/` pages - the structured `Funding`, `Valuation`, and `Revenue/ARR` Facts fields - plus the traction sections of the 14 `wiki/clusters/` pages. Aggregation rule: maximum revenue figure per company; valuation figures excluded from funding totals; four false positives removed manually (ServiceNow's $2.96B total subscription revenue, Forethought's "$1B cumulative customer ROI," Palantir's company-wide revenue, OpenRouter's GMV-like inference-spend run-rate).
- **Lens C:** the same extraction for funding by layer and year (dated rounds only, a subset); the M&A set is the census `status=acquired` rows (35) plus the deals verified in the Phase 2 report.
- **Coverage caveat that governs Lens B and C:** only 64 of 766 profiled companies disclose any revenue figure and 309 of 1,328 show visible funding. The bottom-up is a floor built on the disclosing minority, then scaled with labeled assumptions.

## Findings

### 1. Known biases, stated up front

1. **Analyst forecasts extrapolate the current hype cycle.** Gartner itself forecasts that over 40% of agentic AI projects will be canceled by end-2027 and counts only about 130 genuinely agentic vendors among thousands of "agent-washed" claims (Gartner press release, 2025-06-25, reported).
2. **Private ARR is unverified.** Crescendo's >$100M ARR is unaudited; Harvey's ~$100M is an estimate; several figures are GetLatka or Sacra third-party estimates (labeled "estimated, low/medium confidence" on their wiki pages).
3. **"Agent" is applied opportunistically.** Published "AI agents market" forecasts span $50B to $236B+ on comparable horizons - a 4-5x definitional spread, not an informational one.
4. **Census coverage is partial.** 64/766 revenue disclosers; 309/1,328 with visible funding; the 562 normal-priority census entries carry no profile data.
5. **Extraction heuristics.** Max-figure-per-company aggregation; funding-vs-valuation confusion reduced by context filtering but not eliminated; Palantir counted as company revenue, not agent-platform revenue.
6. **Double-counting risk.** Fin's ARR sits inside Intercom and now inside Salesforce post-acquisition; "AI ARR" is each suite's self-defined metric.
7. **Vintage mixing.** Cited figures span December 2024 to September 2026; growth rates between vintages are not restated.

### 2. Lens A - top-down anchors (all reported, press-release or survey sourced)

- **Gartner, worldwide AI spending:** $2.527T in 2026, +44% YoY (press release 2026-01-15); segments include AI software $452.5B, AI services $588.6B, AI infrastructure ~$1.37T (the largest). Revised to ~$2.59T / +47% in May 2026 (CIO Dive, 2026-05-19).
- **Gartner, worldwide genAI spending:** $644B in 2025, +76.4% (press release 2025-03-31); breakdown: devices $398.3B, servers $180.6B, software $37.2B, services $27.8B - genAI software plus services is ~$65B (2025).
- **Gartner, AI platforms and models:** $64.3B in 2026, +63.4% from $39.3B in 2025 (press release 2026-07-20). Within it, **AI Application Development Platforms - the closest analyst segment to agent-building platforms - $9.5B in 2026, up from $6.9B in 2025 (+38.6%)**.
- **Gartner, agentic AI:** by 2028, 15% of day-to-day work decisions made autonomously and 33% of enterprise software applications including agentic AI (from under 1% in 2024); a January 2025 Gartner poll found only 19% of organizations had made significant agentic AI investments (press release 2025-06-25).
- **IDC:** AI IT spending reaching $1.3T in 2029 (31.9% CAGR 2025-2029), with agentic AI exceeding 26% of worldwide IT spending (press release, 2025); AI to contribute $19.9T to the global economy through 2030, 3.5% of 2030 GDP (press release 2024-09-17); earlier guide: worldwide AI spending $632B in 2028 (2024-08-19).
- **McKinsey:** generative AI economic potential of $2.6-4.4T annually (2023-06-14) - a value-created ceiling, not revenue.
- **Menlo Ventures (2025-12-09), the sharpest enterprise-spend anchor:** enterprise genAI spend **$37B in 2025, 3.2x from $11.5B in 2024**. Application layer $19B, of which horizontal AI $8.4B (copilots $7.2B, **agent platforms ~$750M**, personal productivity ~$450M); infrastructure $18B (foundation model APIs $12.5B, model training $4.0B, data/orchestration $1.5B). Excludes chips, inference serving, and AI features embedded in existing software. Enterprise LLM share: Anthropic ~40%, OpenAI ~27%, Google ~21%.
- **Adoption surveys:** Forrester Consulting for Boomi (2026-07-20, n=409, vendor-commissioned): **86% of enterprises have deployed AI agents; only 34% trust their agents' actions**. Battery survey (2025-12-03): 33% of enterprises running agentic AI in production, 48% planning within 12 months, ~60% expecting fully autonomous workflows within two years, 65% expecting AI budget increases.
- **VC framing:** Sequoia, "Services: The New Software" (2026-03-06): every $1 of software spend faces ~$6 of services spend - outcome-delivering agents (autopilots) expand the addressable budget from software into labor. a16z, "Good News: AI Will Eat Application Software" (2026-03-02): AI restructures application software with per-outcome pricing replacing per-seat. Battery, State of AI (2025-12-18): hyperscaler AI-driven run-rate revenue ~$285B in Q3 2025 (+29% YoY) against ~$1.2T of backlog - the compute substrate is being built ahead of the software layer that will consume it. Bessemer, State of AI (2025-08-13): trust, evals, and data lineage as the gating factors for enterprise adoption.
- **Market-research spread (shown only to bound the range):** MarketsandMarkets $52.62B by 2030 at 46.3% CAGR (2026-08-20); Grand View Research $50.31B by 2030 at 45.8% CAGR (2025-05-06); Precedence Research $236B by 2034 (2025-07-02). The ~4-5x spread on comparable horizons is definitional.

### 3. Lens B - bottom-up aggregation from the census

- **Census-visible agent revenue: ~$5.0-5.5B (2026, mixed reported/estimated)** - the sum of maximum revenue figures across the 64 disclosing companies of 766 profiled, after removing the four false positives. The named anchors, by layer (vintages Dec 2024 - Sept 2026):
  - **L5 suites, ~$1.1B:** Salesforce Agentforce $800M AI ARR (Sept 2026, reported); ServiceNow ~$200M ACV for the Pro Plus AI tier (Dec 2024, reported); Fin agent nearing $100M ARR (Aug 2026, estimated). Microsoft discloses no agent split (claims 80% of the Fortune 500 run active agents).
  - **L2 platforms, ~$450M agent-specific:** Glean $200M ARR (Sept 2026, reported); Aisera ~$250M (2026, estimated; acquired by Automation Anywhere 2025). Palantir's $1B+ quarterly revenue (2026, reported) is company-wide and AIP-driven - it annualizes to $4B+ but is not agent-platform-specific revenue.
  - **L3 verticals, ~$2.9-3.0B:** Cognition ~$900M run-rate (Sept 2026, reported); Cursor $500M+ (Sept 2026, reported); Sierra $200M annualized (May 2026, reported); Replit $150M annualized (Sept 2025, reported); Emergent $120M (Jul 2026, reported); Paradox ~$116M (2023, estimated); a $100M tier - Abridge (Aug 2026), Decagon (Aug 2026), EliseAI (early 2025), Cresta (Apr 2026), Crescendo (unaudited claim), Harvey (estimated); Ada ~$70M (estimated).
  - **L1 infrastructure, ~$60-80M visible:** Merge ~$20M (2023, Sacra estimate), LangSmith $16M (2025, GetLatka estimate), LiteLLM $10M+ (2026, reported), Paragon $9M (2024, Sacra estimate) - plus OpenRouter's $100M+ inference-spend run-rate (May 2025, reported), which is throughput, not revenue.
  - **X modalities, ~$540M:** ElevenLabs $500M ARR (2026, reported); Retell AI $40M annualized (Nov 2025, reported).

  The top of the distribution, for auditability (figure = maximum disclosed, $M):

  | Company | Layer | Revenue ($M) | As of | Label |
  |---|---|---|---|---|
  | Cognition (Devin) | L3 | ~900 | 2026-09 | reported |
  | Salesforce Agentforce | L5 | 800 | 2026-09 | reported |
  | Cursor (Anysphere) | L3 | 500+ | 2026-09 | reported |
  | ElevenLabs | X | 500 | 2026 | reported |
  | Glean | L2 | 200 | 2026-09 | reported |
  | Sierra | L3 | 200 | 2026-05 | reported |
  | ServiceNow (Pro Plus AI ACV) | L5 | ~200 | 2024-12 | reported |
  | Replit | L3 | 150 | 2025-09 | reported |
  | Emergent | L3 | 120 | 2026-07 | reported |
  | Paradox | L3 | ~116 | 2023 | estimated |
  | Abridge / Decagon / EliseAI / Cresta / Crescendo / Harvey | L3 | ~100 each | 2025-2026 | mixed |
  | Fin (agent portion) | L5 | ~100 | 2026-08 | estimated |
  | Aisera | L2 | ~250 | 2026 | estimated |
  | Ada | L3 | ~70 | 2026 | estimated |
  | Observe.AI | L3 | ~44 | 2024 | estimated |
  | Retell AI | X | 40 | 2025-11 | reported |
  | Luminance | L3 | 30 | 2024 | reported |
  | Salient | L3 | 25 | 2025-12 | reported |
  | Merge / LangSmith / LiteLLM / Paragon | L1 | 9-20 each | 2023-2026 | estimated |
- **Scaled estimate: 2026 work-agent software revenue of $8-15B (estimated).** Adjustment: 702 profiled non-disclosers, 562 census-only entries, and suite agent products booked inside broader SKUs. Cross-check: Menlo's agent-specific 2025 spend (agent platforms $750M plus the agent share of departmental applications) implies ~$6-9B for 2025 - consistent after a year at observed 2-3x growth.
- **The platform + infrastructure layer (the SAM core): $0.5-0.7B census-visible; $2-4B scaled for 2026 (estimated)** - bracketed below by Menlo's agent-platforms figure ($750M in 2025, narrow definition) and above by Gartner's AI Application Development Platforms ($9.5B in 2026, broader than agents).
- **Pricing benchmarks per model (unit economics; from wiki pages and their dated sources):**
  - Per seat: Harvey $100-$2,000/user/month; Google Gemini Enterprise $30/seat/month.
  - Per action: Salesforce Agentforce Flex Credits $0.10/action.
  - Per outcome: Fin $0.99/resolution; Crescendo $1.25/resolution; HubSpot Agent Hub pay-on-completion; EvenUp per-case (legal).
  - Usage-based: E2B per-second sandboxes; Browserbase per-browser-hour; Composio and Arcade per-call; OpenRouter and Exa per-token; Vapi ~$0.05/minute voice; Hatchet per-run.
  - Implied volumes (inferred): Agentforce's $800M AI ARR at $0.10/action implies roughly 8B actions/year if fully consumption-based; a $100M outcome-priced CX agent at ~$1/resolution implies ~100M resolutions/year. Per-outcome pricing converts agent revenue from seat-count arithmetic to work-volume arithmetic - the mechanism of the service-as-software expansion.

### 4. Lens C - capital flows

- **Visible funding: $28.3B across 309 of 1,328 census companies (estimated; census-visible only, valuations excluded).** By layer: L3 $20.4B (183 companies), L1 $2.7B (65), L2 $2.5B (27), X $2.3B (30), L5 $250M (1), L4 $43M (3). Capital is betting on vertical agents over platforms roughly 8:1.

  | Layer | Companies with visible funding | Visible funding ($M) | Share |
  |---|---:|---:|---:|
  | L3 vertical agents | 183 | 20,424 | 72% |
  | L1 infrastructure | 65 | 2,717 | 10% |
  | L2 build platforms | 27 | 2,531 | 9% |
  | X modalities | 30 | 2,344 | 8% |
  | L5 suites | 1 | 250 | 1% |
  | L4 services | 3 | 43 | <1% |
  | **Total** | **309** | **28,309** | 100% |

- **Dated rounds (subset with parseable dates; coverage improves in later years, so treat as a lower bound with upward coverage bias):** 2023 $0.24B (9 rounds) → 2024 $1.6B (39) → 2025 $8.2B (95) → 2026 through September $14.2B (112). The 2026 year-to-date already exceeds full-year 2025 by ~72%.
- **Largest programs:** Cognition $3B+ total (Series E $2B at $48B, Sept 2026); Cursor $2.3B (Series D, Nov 2025); Sierra $1B+ (Series E $950M at $15.8B, May 2026); Uniphore ~$980M; Replit $922M; Wonderful $834M; Legora $680M; Temporal $650M; Parloa $560M; ElevenLabs $500M Series D (Feb 2026).
- **M&A: 35 census companies acquired.** Disclosed prices (Phase 2-verified plus census): ServiceNow-Moveworks $2.85B (Mar 2025); Salesforce-Fin ~$3.6B agreed (Jun 2026); Workday-Sana $1.1B; NICE-Cognigy ~$955M; Dynatrace-Arize $915M (Aug 2026); Palo Alto Networks-Console ~$500M; Cato-Aim Security ~$350M (Sep 2025); SoundHound-Amelia $80M (Aug 2024) - **$10.4B disclosed across 8 deals**. Verified but undisclosed: IBM-DataStax/Langflow, ClickHouse-Langfuse, SentinelOne-Prompt Security, DoorDash-Metis, Workday-Pipedream and Flowise, Zendesk-Ultimate and Forethought, HubSpot-Dashworks, Cognition-Windsurf, Arcade-Smithery, Salesforce-Respell and Moonhub, Amazon-Adept, Snowflake-TruEra, Automation Anywhere-Aisera, plus startup-to-startup consolidation (Sierra x4, Uniphore 7+, Crescendo-PartnerHero, Rox-Quilt, CodeRabbit-FluxNinja). **Estimated total 2024-26 agent M&A: $13-18B (estimated).**

### 5. TAM / SAM / SOM (ranges, explicit assumptions)

**TAM - 2030 work-agent software spend (platforms + infrastructure + vertical agents + suite agent products + modalities; excludes model APIs, hardware, SI services): $50-120B (estimated range).**

Four routes, triangulated:
1. Market-research cluster: $50-53B by 2030 (narrow, software-only definition; spread evidence only).
2. Menlo trajectory: enterprise genAI $37B (2025) growing to $150-300B by 2030 (30-45% CAGR, in line with observed 2024-25 growth), with the agent share rising from ~10-20% to 40-60% → $60-180B.
3. Bottom-up: 2026 revenue of $8-15B at 40-50% CAGR → $35-100B by 2030.
4. Gartner agentic logic: 33% of enterprise software applications including agentic AI by 2028, applied to AI software of $452.5B (2026) → $150B+ of agentic-inclusive software (broadest definition; overlaps categories 1-3).

The service-as-software ceiling - Sequoia's $1 software : $6 services ratio, McKinsey's $2.6-4.4T annual value potential - is a theoretical expansion into labor budgets, not a forecast; it materializes only if per-outcome pricing becomes the norm.

**SAM - the platform + infrastructure layer an agent-building platform sells into:**
- **2026: $2-6B (estimated).** Lower bound: Menlo's agent platforms $750M (2025) at 2-3x growth, and census-visible L1+L2 of $0.5-0.7B scaled to $2-4B. Upper bound: Gartner's AI Application Development Platforms $9.5B (2026, a broader definition including non-agent AI app dev).
- **2030: $10-35B (estimated)** - the platform layer holding 20-30% of the $50-120B TAM. Today the platform layer is ~2% of enterprise genAI spend (Menlo, 2025); suite agent consumption (Agentforce's $800M) counts as platform revenue in this definition.

**SOM - a new horizontal platform entrant, 2030: $150M-1B ARR (illustrative, inferred).** Assumptions: 1-3% of the 2030 platform SAM, against an expected 10-20 credible horizontal platforms by then (today: 5 incumbent suites, Glean/Writer/n8n/LangChain-class independents, model-vendor SDKs, and ~30 funded L2 startups). Base case $300-500M ARR. Sustaining above $1B requires the service-as-software expansion - outcome pricing into labor budgets - rather than platform-software share alone.

### 6. Sensitivity: platform spend as 5% / 10% / 20% of enterprise AI spend

| Enterprise AI spend base (date-stamped) | Platform spend @ 5% | @ 10% | @ 20% |
|---|---|---|---|
| 2025 actual: $37B (Menlo, 2025-12-09) | $1.9B | $3.7B | $7.4B |
| 2026E: $60-75B (Menlo trajectory at ~2x; Gartner genAI software+services ~$65B in 2025) | $3.0-3.8B | $6.0-7.5B | $12-15B |
| 2030E: $150-300B (30-45% CAGR) | $7.5-15B | $15-30B | $30-60B |

Observed anchors inside the bands: Menlo's actual 2025 platform share is ~2% ($750M / $37B - below the 5% band: platforms are a small slice of enterprise AI spend today); Gartner's AI Application Development Platforms are ~15% of 2025 genAI software+services ($9.5B 2026 against ~$65B 2025, cross-vintage - inside the 10-20% band). The 5-20% band therefore brackets "platforms stay a niche slice" to "platforms capture a data-science-platform-like share of the AI stack."

### 7. Build-vs-buy split (2026, estimated)

- **Spend evidence:** in Menlo's 2025 horizontal AI numbers, bought products (copilots, $7.2B) outweigh build platforms ($750M) roughly 10:1. Gartner (2025-06-25): over 40% of agentic AI projects - disproportionately self-built - canceled by end-2027. Battery (2025-12-03): 33% running agentic AI in production, 69% piloting agentic workflows. Forrester/Boomi (2026-07-20): 86% deployed, 34% trust.
- **Census evidence:** 35 acquisitions - suites buying proven agents rather than building (Phase 2 section 3.2); L4 SIs wrapping custom builds for enterprises that will not self-serve.
- **Estimate: of enterprise agent deployments in 2026, ~60-75% run on bought products (vertical agents plus suite agents) and ~25-40% are built (on platforms, frameworks, or suite studios), with a high failure rate on the build side (Gartner's 40% cancellation forecast). Direction: the buy share rises through 2028 as failed builds convert to purchases, while absolute build activity keeps growing because every suite now bundles a builder (Copilot Studio, Agentforce, Agent 365).**
- **Agent-delivery services (L4):** not separately disclosed by any SI; bounded above by Gartner's $588.6B AI services (2026, all AI, worldwide); an agent-attributable slice of $3-10B (inferred, low confidence).

## Evidence table

| Dimension | Lens A (top-down) | Lens B (bottom-up census) | Lens C (capital flows) |
|---|---|---|---|
| Enterprise genAI spend 2025 | $37B, 3.2x YoY (Menlo 2025-12-09, reported) | - | - |
| Work-agent software revenue 2026 | - | $8-15B scaled; $5.0-5.5B census-visible across 64 disclosers (estimated) | - |
| Platform + infrastructure layer 2026 | Menlo agent platforms $750M (2025); Gartner AI App Dev Platforms $9.5B (2026) | L1+L2 visible $0.5-0.7B; scaled $2-4B (estimated) | L1+L2 visible funding $5.2B of $28.3B total |
| TAM 2030 (work-agent software) | $50-120B across four routes (estimated) | $35-100B at 40-50% CAGR from 2026 base (estimated) | - |
| Adoption and execution risk | 86% deployed / 34% trust (Forrester-Boomi 2026-07-20); >40% project cancellation by 2027 (Gartner 2025-06-25) | Traction bimodal in every cluster; 35 of 1,328 acquired | $28.3B visible funding; $13-18B M&A 2024-26 (estimated) |
| Unit economics | - | Per-outcome: $0.99-1.25/resolution; per-action $0.10; per-seat $30-2,000/mo; usage-metered infra | Outcome-priced agents are the M&A premium cohort |

## Implications

- **The market supports multiple independent winners even at the low band.** A $50B 2030 TAM (the market-research floor) with a $10-35B platform layer leaves room for several $1B-revenue platforms; the census's 1,328 entrants are competing for a real budget, not a narrative.
- **Value is pooling in vertical agents first; platforms monetize later.** The platform layer is ~2% of enterprise genAI spend today (Menlo 2025), while L3 captures 72% of visible funding. Gartner's AI Application Development Platforms growing 38.6% (2026) is the leading indicator that the platform layer's share rises from here.
- **Capital and M&A validate both exit paths.** $28.3B of visible funding and $13-18B of M&A mean an independent scale-up and an acquisition are both live outcomes; the acquired cohort is overwhelmingly outcome-priced CX and employee-support agents - the premium accrues to proven work delivery, not builder tooling.
- **Per-outcome pricing is the TAM expansion mechanism.** The service-as-software thesis (Sequoia's $1:$6) only becomes revenue if per-outcome pricing generalizes beyond customer service; the census shows it converged in CX (Fin $0.99, Crescendo $1.25, Agentforce $0.10/action) and almost nowhere else.
- **The bear case is quantified, not hypothetical.** 40% project cancellation by 2027, 34% agent trust, and agent-washing mean the low band of every range is the planning base; the sensitivity table's 5% column is the conservative scenario.
- **For what an agent-building platform must provide (the central question):** the buyer's budget exists (86% deployed), the binding constraint is trust and governance (34% trust; suites ahead on control planes per Phase 2), and the revenue model is migrating from seats to consumption and outcomes - pricing architecture is a sizing decision, not just a monetization one.

## Open questions

- **The build-vs-buy deployment split is triangulated, not observed.** No surveyed metric directly measures it; the 60-75 / 25-40 estimate rests on spend ratios and cancellation forecasts.
- **Private ARR verification.** Crescendo unaudited, Harvey estimated, GetLatka/Sacra figures unverifiable; the $8-15B scaled estimate inherits that noise.
- **Platform-vs-app value split over time.** Whether the platform layer stays ~2% of enterprise AI spend (Menlo 2025) or climbs toward Gartner's ~15% app-dev share is an 8x spread - the single biggest uncertainty in the SAM.
- **Suite bundling risk to the SAM.** If Copilot Studio / Agentforce marginal pricing approaches zero, the standalone platform SAM compresses regardless of TAM growth.
- **Services-layer sizing.** No SI discloses agent-delivery revenue; the $3-10B inferred slice could be off by multiples in either direction.
- **Geography.** The census carries an India voice sub-cluster but no separate sizing; regional splits would shift the SAM for any non-US-first platform.

## Sources

- Gartner press releases (primary for forecasts): 2025-03-31 (worldwide genAI spending $644B in 2025); 2025-06-25 (over 40% of agentic AI projects canceled by end-2027); 2026-01-15 (worldwide AI spending $2.5T in 2026); 2026-07-20 (AI platforms and models market $64.3B in 2026).
- IDC press releases: 2024-08-19 (worldwide AI spending $632B in 2028); 2024-09-17 (AI to contribute $19.9T through 2030); 2025, doc prUS53765225 (agentic AI to exceed 26% of worldwide IT spending, $1.3T in 2029).
- McKinsey Global Institute, 2023-06-14: The economic potential of generative AI ($2.6-4.4T annually).
- Menlo Ventures, 2025-12-09: 2025 State of Generative AI in the Enterprise ($37B enterprise genAI spend; agent platforms ~$750M).
- Sequoia Capital, 2026-03-06: Services: The New Software ($1 software : $6 services).
- Andreessen Horowitz, 2026-03-02: Good News: AI Will Eat Application Software.
- Battery Ventures, 2025-12-03 (enterprise AI survey: 33% agentic in production) and 2025-12-18 (State of AI: ~$285B hyperscaler AI run-rate, ~$1.2T backlog).
- Bessemer Venture Partners, 2025-08-13: The State of AI 2025.
- Forrester Consulting (commissioned by Boomi), 2026-07-20: 86% of enterprises deployed AI agents, 34% trust (vendor-commissioned; labeled).
- Market-research spread only: MarketsandMarkets 2026-08-20 ($52.62B by 2030); Grand View Research 2025-05-06 ($50.31B by 2030); Precedence Research 2025-07-02 ($236B by 2034).
- Census artifacts: `data/companies-with-profiles.tsv` (1,328 rows); `wiki/companies/` (766 pages, each carrying its own dated sources); `wiki/clusters/` (14 traction sections); `agent-platform-phase2-landscape.md` (verified M&A and traction); `agent-platform-phase1-census.md`.
