# Agent Platform Research — Phase 2: Company Landscape

**Phase 2 of the enterprise work-agent platform research.** Follows the Phase 1 census (1,328 unique companies across 16 sweeps). This phase profiled every high-priority company into a durable wiki, researched the eleven build decisions for the leaders, and produced this synthesis. Date: September 2026.

**The eleven build decisions** (from the research plan §6): build interface, runtime and tenancy, integrations, knowledge and data, autonomy and HITL, governance, pricing, GTM motion, moat, open-source posture, task horizon.

---

## 1. What Phase 2 did

- **Profiled all 766 high-priority census entries** into `agent-platform-research/wiki/companies/` — one page per company, written by 14 parallel profiling agents organized by cluster.
- **Two-tier depth:** every assigned company got at least a base page (census data plus sweep context plus light verification); the top ~20-25 per cluster got deep profiles with the eleven build decisions researched against primary sources. Small clusters (L4, L5, customer service, other verticals) went all- or mostly-deep.
- **Cluster syntheses:** each agent wrote a cluster page in `agent-platform-research/wiki/clusters/` covering patterns across the eleven decisions, consolidation, traction distribution, and open ground.
- **Merged dataset:** `agent-platform-research/data/companies-with-profiles.tsv` — the 1,328-row census plus `profile_depth`, `wiki_slug`, and status corrections verified during profiling.
- **App v2:** `agent-platform-market-research.html` rebuilt from the merged dataset — profile-depth filter, deep-profile badges, wiki-page links for all 766 profiled companies, and a Phase 2 findings panel.

### Coverage by cluster

| Cluster | Assignment file | Companies | Deep | Base |
|---|---|---:|---:|---:|
| L1 Runtime and tooling | p2-1a-l1-runtime | 68 | 25 | 43 |
| L1 Observability and security | p2-1b-l1-obs-sec | 67 | 25 | 42 |
| L2 Build platforms | p2-2-l2 | 74 | 32 | 42 |
| L3 Customer service | p2-3a-cs-support | 27 | 16 | 11 |
| L3 Healthcare | p2-3b-health | 64 | 23 | 41 |
| L3 Finance and accounting | p2-3c-finance | 82 | 25 | 57 |
| L3 Legal and GTM | p2-3d-legal-gtm | 68 | 24 | 44 |
| L3 Software engineering and security | p2-3e-swe-security | 89 | 25 | 64 |
| L3 Industry verticals | p2-3f-industry | 66 | 22 | 44 |
| L3 Other verticals | p2-3g-other | 23 | 22 | 1 |
| L3 Workplace verticals | p2-3h-workplace | 48 | 15 | 33 |
| L4 Services (SIs and boutiques) | p2-4-l4 | 15 | 15 | 0 |
| L5 Incumbent suites | p2-5-l5 | 14 | 14 | 0 |
| X Modalities (voice, browser) | p2-6-x | 61 | 20 | 41 |
| **Total** | | **766** | **303** | **463** |

The deep-profile target was ~200; 303 landed. The remaining 562 census entries (normal priority) carry census-level data only and are filterable as "census only" in the app.

---

## 2. Cluster-by-cluster synthesis

Each subsection condenses the full cluster page; the wiki carries the detail and the company-level evidence.

### L1 Runtime and tooling (68 companies, 25 deep)

Agent infrastructure: sandboxes and runtimes, browser and computer-use environments, tool access and MCP, memory, durable execution. Four companies at $800M+ (Temporal $5B, Exa $2.2B, OpenRouter $1.3B, Braintrust $800M) against 40+ pre-seed entrants. Code-first SDKs dominate the build interface; vendor multi-tenant SaaS is the default runtime with self-host as the OSS differentiator (Temporal, E2B, Hatchet, Mem0). MCP became the standard substrate for tool access — nearly every tool-access company supports it. Usage-based pricing is universal (per-second sandboxes, per-browser-hour, per-call, per-token); per-seat is nearly absent and per-outcome does not exist. Roughly 40% ship an OSS core. Four acquisitions hit the cluster in twelve months (Aim Security to Cato ~$350M, Pipedream to Workday, Smithery to Arcade, Arize to Dynatrace $915M) — incumbents buying observability, security, and connectivity rather than building. Open ground: agent identity and authorization (contested between Okta/Microsoft and startups), memory (crowded, no enterprise standard), human-in-the-loop tooling, agent-native payments.

### L1 Observability and security (67 companies, 25 deep)

Observability and evals, testing and simulation, LLM gateways, agent security, agent identity, agent payments. The most crowded new category is agent security: Zenity $125M Series C, Neo $100M launch, plus Microsoft Entra Agent ID and Okta Agent Identity Center shipping agent identity into incumbent installs. Open-core is the signature posture (Langfuse 34k stars, LiteLLM 40k stars). Three acquisitions the census missed were verified here: Prompt Security to SentinelOne (Aug 2025), Langfuse to ClickHouse (Jan 2026), Metis to DoorDash (Mar 2026) — security incumbents buy agent security, data infrastructure buys observability. OpenTelemetry and MCP are the interop standards. A new continuous-improvement segment (Lemma, Moda, TrainLoop, Osmosis) closes the loop from production traces to fine-tuning. With Langfuse inside ClickHouse, independent observability is shrinking; the voice-testing micro-segment (six funded entrants) looks like the next consolidation target.

### L2 Build platforms (74 companies, 32 deep)

The horizontal builder layer: model-vendor SDKs (OpenAI AgentKit, Anthropic Agent SDK, Vercel AI SDK, AWS Strands), open frameworks (LangChain ~$1.3B, CrewAI, LangGraph), workflow automation (n8n $5.2B, Zapier with 9,000+ integrations, Make), enterprise platforms (Glean $7.2B at $200M ARR, Palantir AIP with $1B+ quarterly revenue), and app builders (Lovable $2.8B). The build interface splits between pro-code SDKs and no-code canvases with hybrids emerging. MCP adoption is heavy across new SDKs; proprietary connector libraries remain the incumbents' differentiator. The exit wave is the story: Aisera into Automation Anywhere, Sana ($1.1B) and Flowise into Workday, Langflow into IBM via DataStax, Yellow.ai SPAC at ~$550M, SAP's strategic investment in n8n. Open ground: governance as a primary infrastructure layer rather than a feature, and platforms optimized for the AI-native firm that sells outcomes rather than seats.

### L3 Customer service (27 companies, 16 deep)

The most mature vertical and the only one with three $100M+ ARR startups: Sierra ($200M ARR, $15.8B), Decagon ($100M, $4.5B), Cresta ($100M+, ~$1.1B), with Crescendo claiming the same unaudited. Pricing converged on outcomes — per-resolution or per-conversation at Sierra, Decagon, Ada, Forethought, Parahelp, Yuma, Crescendo; Pylon's per-seat is the lone holdout and reads as a vulnerability. Only Crescendo publishes rates ($1.25/resolution with a Total Outcome Guarantee). A meta-agent pattern is emerging: an internal agent builds and manages the customer-facing agent. Sierra is the startup consolidator (four acquisitions in 18 months, extending to long-horizon agents); Zendesk acquired Forethought (its largest deal ever, Mar 2026); Crescendo bought PartnerHero to own human labor capacity. Strategic capital is positioning for the next wave (Genesys in Scaled Cognition, Salesforce in Wonderful, Accenture in Cresta). Quivr is the negative exit: a 28k-star OSS community that wound down its support product in April 2026 — no open-source winner exists here. Everyone is outgrowing support: customer service is the wedge, not the boundary.

### L3 Healthcare (64 companies, 23 deep)

Ambient clinical documentation is the battleground: Abridge ($5.3B, $100M+ ARR, ~$300-400/clinician/month), Ambience (unicorn), Nabla (large health-system deployments including Permanente), Suki (voice-first with bidirectional EHR write-back). Around it: Forus at $3B automating pharma market access, Hippocratic AI at $3.5B in patient outreach, Tennr at $605M in intake and referrals orchestration, Anterior FHIR-native in prior authorization. Integrations are the primary moat — proprietary connectors into Epic, Cerner, Athena; FHIR-native APIs where possible. Autonomy varies by risk: clinician review gates for documentation and prior auth, full autonomy emerging in patient access and billing. Pricing is fragmented: per-seat subscriptions (Nabla, Freed), hourly rates (Hippocratic), platform fees. Life-sciences agents are thin relative to clinical documentation. Long-horizon agents appear in pharma diligence (Convexia) and trial oversight (Phases).

### L3 Finance and accounting (82 companies, 25 deep)

The largest vertical cluster, 68 of 82 YC-backed and dominated by 2024-2026 batches. Four unicorns: Rogo ($2B, investment banking), Norm Ai ($1.2B, regulatory compliance), Basis ($1.15B, accounting close), Rillet ($1B, AI-native ERP attacking NetSuite). Salient is the strongest reported revenue at $25M ARR (voice agents for loan servicing). The distinctive pattern is the **AI-native firm**: software that does not just automate a finance function but *is* the firm selling the regulated outcome — agent-native accounting firms (Billow AI, Last Accounting Company, Rational, Cranston AI), a full-stack AI audit firm (Denki), AI-native insurance brokerages (Fernstone, Harper, Panta, and AGI's $70M roll-up acquiring independent agencies), an AI-native investment bank (OffDeal). Most are 2025-26 YC companies with no visible funding — early, capital-light, unproven. Zero OSS, zero self-host, zero per-outcome pricing despite outcome-shaped products. Crowded sub-areas facing consolidation: month-end close (15+ companies), insurance submissions (13), AML/KYC (5).

### L3 Legal and GTM (68 companies, 24 deep)

Legal carries the cluster's valuations: Harvey at $11B (per-seat $100-$2,000/user/mo, $50K-$300K+ annual contracts), Legora at $5.55B seeking $10B+, EvenUp at $2B+, Eve at $1B. GTM is the cautionary side: 11x's 2025 customer-claims scandal and CEO exit triggered the AI SDR credibility shakeout, and dozens of undifferentiated seed-stage AI SDRs are consolidation candidates; Conversica's Morgan Stanley-led majority recap (Jul 2026) signals PE consolidation of the first generation. Pricing splits cleanly: per-seat dominates legal, usage and credits dominate GTM, outcome-based is rare (EvenUp per-case, Twin A1 per-agent). Autonomy diverges by vertical: GTM agents run fully autonomous with guardrails, legal agents are approval-gated. No self-host anywhere — an opening for regulated buyers. Data gravity is the stated moat more often than model quality.

### L3 Software engineering and security (89 companies, 25 deep)

The largest cluster by count and the heaviest top: Cursor ($500M+ ARR, $9.9B), Cognition/Devin ($10.2B, acquirer of Windsurf, $2B Series E at $48B announced Sep 8 2026 with ~$900M run-rate revenue), Replit ($9B). Below them: Horizon3.ai ($2B+), CodeRabbit ($1.5B), Blitzy ($1.4B), XBOW ($120M Series C), 7ai ($130M Series A). PLG dominates GTM. Autonomy splits between fully autonomous agents (15) and approval gates (6). Consolidation is active: Cognition acquired Windsurf (after Windsurf's $2.4B talent/licensing deal with Google), CodeRabbit acquired FluxNinja. Unknown rates are the cluster's weakness — 60-69 unknowns across most decisions, reflecting 47 companies with no visible traction. Open ground: broader hardware/systems engineering beyond software (the "engineering" vertical holds only 6 companies).

### L3 Industry verticals (66 companies, 22 deep)

Logistics (22), real estate (13), construction (13), manufacturing (5), and single bets in energy, automotive, defense, commodities, agriculture. EliseAI is the anchor ($100M+ ARR, ~10% of US apartment market, $2.2B reportedly rising to $3.7B). HappyRobot hit $1.2B on voice AI for freight. Dwelly is the boldest thesis: $170M to buy UK lettings agencies and run them with AI — the clearest agents-enable-services-roll-ups example. Trunk Tools ($40M, construction) and Synera ($40M, on-prem agentic CAx orchestration for BMW, Airbus, NASA) lead the middle. Integrations are deep and proprietary — ERPs, TMS, Yardi, Bluebeam/Revit — with no MCP adoption visible. Autonomy claims are maximal (the cluster tilts hard toward full autonomy; approval gates appear only where regulation forces them). Pricing is universally opaque, but the strategic direction is visible: away from seats toward absorbing the work. No acquisitions into this cluster yet; Dwelly and Digs' Builders FirstSource-led round show agents enabling the M&A instead.

### L3 Other verticals (23 companies, 22 deep)

Research, data, media, design, hardware-engineering, and uncategorized agents. Viktor is the traction leader: $75M Accel-led Series A on a $15M revenue run rate across 2,000+ organizations — the closest thing to a horizontal general-agent play. Tasklet is Shortwave recycled into a cloud agent OS ($175M valuation, ~$5M ARR). Bridgetown ($19M at $250M) automates primary research for PE/VC. The cluster splits three ways: agents that operate existing professional tools (Viktor, Tasklet, MinusX, Adam), agents that produce research or creative artifacts (Bridgetown, Undermind, Semiotic), and autonomous-science loops (Junction, Sciloop). Governance is the weakest cluster-wide dimension here — SOC 2 is the ceiling. No M&A has started; expect consolidation pressure on the AI-coworker cohort first.

### L3 Workplace verticals (48 companies, 15 deep)

HR and recruiting (12), IT and employee service (13), government (9), restaurants (5), home services (4), education (3). The defining exit: ServiceNow acquired Moveworks for $2.85B (closed Dec 2025) — the clearest evidence that suites buy rather than build. Paradox is the revenue leader (~$116M ARR est., with a PitchBook-listed ~$1.06B 2025 acquisition event). Capital is consolidating in AI SRE instead, where no suite owns the workflow: Resolve at $1B valuation ($125M Series A), Traversal with Sequoia, Kleiner, and an Amex strategic. Pricing is the sharpest divergence in any cluster: per-seat (Leena AI ~$150/user/yr), platform-plus-credits (Atomicwork), annual contracts (Paradox medians $142K-$920K), and per-outcome in labor-replacement verticals (Humanly pay-per-hire, Altrina's "Human Minute Equivalent"). No OSS, no self-host, no MCP-first strategy anywhere — all three are open positioning moves. Government is crowded at intake but empty in benefits administration and case management; education is three graders and nothing else.

### L4 Services (15 companies, 15 deep)

Global SIs and AI-native boutiques. Every SI launched branded platform IP — Accenture AI Refinery, Deloitte Zora, EY.ai Agentic Platform, KPMG Workbench (~50 active agents internally, 1,000 in development), TCS Agent Foundry, Infosys Foundry, Wipro WEGA. The cluster's defining move is wrapping services in software to escape headcount pricing; NVIDIA is the default alliance (seven of ten SIs co-engineer). Runtime converges on deployment flexibility — public cloud, VPC, on-prem, sovereign — because data sovereignty, not SaaS efficiency, drives architecture. Pricing is the big unknown: 12 of 15 pages report unknown pricing, and every outcome-pricing signal is "exploring" or "transitioning" — no SI publishes outcome-priced agent delivery at scale. Mid-market is unserved; no OSS-core services firm exists; the seed-stage boutiques (Callback, Luthor, Refactor) are natural acquisition targets as the model matures.

### L5 Incumbent suites (14 companies, 14 deep)

Salesforce Agentforce is the traction leader: $800M AI ARR across 29K deals, Flex Credits per-action pricing at $0.10, and the cluster's largest move — agreeing to acquire Fin for ~$3.6B (June 2026) to buy the outcome-pricing CX leader rather than compete with it. Microsoft claims 80% of the Fortune 500 run active agents; ServiceNow bought Moveworks, Logik.ai, and Cuein; Zendesk absorbed Ultimate and Forethought; HubSpot acquired Dashworks. The pattern is unambiguous: suites buy proven agent teams, and the acquired are overwhelmingly CX and employee-support agents with outcome-based pricing. Build interface converged on natural language plus a low-code studio with prebuilt role agents — no pro-code-first suite offering. All 14 are vendor multi-tenant SaaS with no self-host. Pricing is the most experimental decision anywhere in the census: per-action, per-outcome (Fin $0.99/resolution, HubSpot pay-on-completion), prepaid credits, per-seat ($30 Gemini Enterprise), or bundled into suite tiers — with no common unit, so buyers cannot compare agent economics across suites. Second-wave governance control planes just launched (Microsoft Agent 365, ServiceNow AI Control Tower, Salesforce Digital Wallet).

### X Modalities (61 companies, 20 deep)

Voice and browser/computer-use. ElevenLabs is the modality layer's biggest business ($500M ARR, $11B). Parloa leads enterprise voice CX ($3B); Vapi is the developer-first orchestration API ($500M, 1B calls, ~$0.05/minute); Deepgram ($1.3B) and LiveKit ($1B, OSS WebRTC) are the infrastructure pair. Cognigy's ~$955M acquisition by NICE is the cluster's defining exit — a CCaaS incumbent buying voice-agent capability. Browser Use is the default OSS browser-agent library (50k+ stars); H Company raised a $220M seed for computer-use agents. MCP is the standard substrate for browser/computer-use tool access. Usage-based per-minute pricing is the voice norm. India forms a distinct funded sub-cluster (Bolna, Ringg, GreyLabs AI) building voice for BFSI collections and support. Open ground: reliability engineering for browser agents (the newest entrants' direct attack), voice-model routing (one entrant), on-prem voice, video as an agent modality (nearly empty).

---

## 3. Cross-cluster patterns

These are the findings that hold across clusters, drawn from the 14 cluster pages.

### 3.1 Traction is bimodal everywhere — and YC supplies the tail, not the head

Every cluster reports the same shape: a handful of funded leaders, many at $1B+ valuations, against a seed tail where 40-60% of companies show no visible funding at all. The L1 runtime cluster states it most precisely: 53 of 68 companies are YC-backed, but the funded leaders are mostly non-YC (Temporal, E2B, Browserbase, Merge, OpenRouter, Arize, Braintrust, Arcade). YC batches 2024-2026 supply the long tail; the heads of each cluster are overwhelmingly companies founded earlier or outside YC. The consequence for the landscape: the census's 1,328 companies overstate the number of durable businesses — the realistic count of companies with proven traction or institutional follow-on is perhaps 300-400, concentrated in the deep-profiled set.

### 3.2 The consolidation wave is real and has a shape

Verified acquisitions now number 35 in the census (29 from Phase 1 plus 6 verified in Phase 2). Three patterns:

1. **Suites buy proven agents rather than building** — ServiceNow-Moveworks ($2.85B), Salesforce-Fin (~$3.6B), Zendesk-Forethought, NICE-Cognigy ($955M), HubSpot-Dashworks. The acquired are overwhelmingly CX and employee-support agents with outcome-based pricing. Intercom renamed itself Fin and then agreed to sell: standalone agents adjacent to suites get absorbed, not funded.
2. **Incumbent infrastructure buys agent-era capability** — Dynatrace-Arize ($915M), ClickHouse-Langfuse, SentinelOne-Prompt Security, Cato-Aim Security (~$350M), Workday-Pipedream/Sana/Flowise, IBM-Langflow, DoorDash-Metis. Observability gets absorbed into data infrastructure; agent security gets absorbed into security platforms.
3. **Startups consolidate too** — Sierra (four acquisitions in 18 months), Uniphore (seven-plus), Cognition-Windsurf, Arcade-Smithery (authorization plus registry plus distribution in one MCP stack), CodeRabbit-FluxNinja, Rox-Quilt, Crescendo-PartnerHero (buying human labor to underwrite outcome guarantees).

The buyers' logic is consistent: buy distribution-adjacent, outcome-priced, compliance-stamped capability; build the platform layer. Expect memory, evals, and the voice-testing micro-segment to consolidate next.

### 3.3 Pricing has diverged by layer, and per-outcome is the contested frontier

- **L1 infrastructure and X modalities:** usage-based is universal — per-second (E2B), per-browser-hour (Browserbase), per-call (Composio, Arcade), per-token (OpenRouter, Exa), per-minute voice (Vapi ~$0.05), per-run (Hatchet). Per-seat is nearly absent. Per-outcome does not exist.
- **Customer service and suites:** per-outcome converged — Fin $0.99/resolution, Crescendo $1.25/resolution, Zendesk per-resolution, HubSpot pay-on-completion, Agentforce Flex Credits at $0.10/action. But no common unit exists across suites, so buyers cannot compare.
- **Legal:** per-seat dominates (Harvey $100-$2,000/user/mo) — the vertical where seats still price the work.
- **Verticals (finance, industry, workplace):** opaque, but the strategic direction is absorbing the work — service-as-software (Cartage), agency ownership (Dwelly), pay-per-hire (Humanly), "Human Minute Equivalent" (Altrina). Per-outcome economics in disguise.
- **Services:** every SI is "exploring" outcome-based pricing; none publishes it at scale.

The open question the census cannot answer: nobody anywhere prices on verified business results. The closest approaches are per-resolution CX pricing and per-case legal (EvenUp). Pricing on outcomes is the clearest unclaimed strategic ground in the landscape.

### 3.4 MCP is the default substrate in the platform layer, proprietary connectors in the verticals

MCP is the standard tool-access substrate in L1 runtime (nearly every tool-access company), L2 platforms (Cloudflare, Azure, LangChain, LlamaIndex), browser/computer-use agents (H Company, Browser Use, the 2025 YC cohort generally), and increasingly the suites (Atlassian, HubSpot, Zoho, Intercom Fin, Google — with Google also pushing A2A as the rival interop standard). The vertical clusters have not engaged: finance reports no MCP strategies, legal only at the edges (Eve, Rox), industry verticals report none visible, workplace only at the margins. Vertical agents win on deep proprietary connectors into ERPs, EHRs, DMS, TMS, and CCaaS — the systems of record — and treat MCP as additive reach at best. The MCP ecosystem itself became its own funding and M&A category (mcp-use/Manufact $6.3M from Peak XV, Dedalus $11M, Arcade-Smithery).

### 3.5 The build interface stratifies cleanly by layer

Code-first SDKs and CLIs dominate L1 infrastructure; natural language dominates every vertical cluster; the suites converged on natural language plus a low-code studio with prebuilt role agents — no pro-code-first suite offering exists. Two emergent patterns: the **meta-agent** in customer service (an internal agent builds and manages the customer-facing agent — Parahelp, Observe.AI, Giga, Minimal AI, Crescendo, Scaled Cognition) and **hybrid canvases** pairing no-code with code-first SDKs (Sierra, Wonderful, Browserbase). Visual drag-and-drop survives mainly as the incumbent-suite and workflow-automation interface.

### 3.6 Runtime is vendor multi-tenant SaaS almost everywhere; self-host is an OSS or sovereignty play

Vendor multi-tenant SaaS is the default in every cluster. Self-host appears only with open-source lineage (Temporal, E2B, LiveKit, Browser Use, MinusX) or where data sovereignty demands it (Synera on-prem for engineering IP, SIs with sovereign options, Bland and Acrely for regulated voice). All 14 L5 suites are multi-tenant with no self-host; finance and legal report none anywhere despite being regulated domains — a genuine enterprise-procurement gap. BYOC/VPC appears at enterprise tiers as the compromise.

### 3.7 Autonomy follows risk, not ambition

Approval gates dominate where a regulated or consequential output exists: legal (Harvey "review-ready", Eve permissioned agents), healthcare (clinician sign-off on notes and prior auth), finance (human review of agent output in ~20 of 25 known cases), suites (12 of 14). Full-autonomy claims cluster in industry verticals (Cartage, Peer, Tensr, Dwelly's "AI should do every operational task") and GTM. The consistent architecture: autonomous execution with human sign-off for consequential actions (Crescendo's Safe Action Framework, Giga's Scout approval gates, Maven's confidence-based escalation). Human-in-the-loop tooling as a product (rather than a primitive inside orchestration engines) is thin — open ground in L1.

### 3.8 Governance is the weakest dimension cluster-wide

Every cluster page reports it. SOC 2 Type II is the ceiling nearly everywhere; FedRAMP appears only at Sierra; agent identity and spend caps are almost entirely absent below the suite layer. The second-wave control planes just launched (Microsoft Agent 365, ServiceNow AI Control Tower, Salesforce Digital Wallet) — the suites are ahead of the startups on governance, which inverts the usual pattern where startups ship controls first. For a buyer assembling a multi-vendor agent estate, there is no mature cross-vendor governance standard; A2A versus MCP versus proprietary interop is contested ground.

### 3.9 Open source stratifies: strong at the platform layer, absent in verticals

Roughly 40% of L1 runtime ships an OSS core (Apache-2.0/MIT dominant; Composio 30k stars, E2B 13.6k, Browser Use 50k, LiteLLM 40k, Langfuse 34k). OSS is the leading GTM currency for infrastructure. The vertical clusters are near zero: finance 0 of 25 known, industry 0 of 66, workplace 0, legal 0, L4 0. The suites are proprietary with open protocols (MCP, A2A) as the open surface — Google's ADK is the only OSS suite framework. Quivr's failure (28k stars that never converted to support revenue) and the absence of any OSS winner in customer service suggest OSS converts to infrastructure businesses, not vertical ones.

### 3.10 Task horizons are stretching, unevenly

Multi-step workflows measured in minutes are the mode everywhere. Long-horizon operation (hours to weeks) and persistent always-on agents are emerging: durable execution (Temporal, Inngest, Hatchet), persistent memory (Mem0, Zep), always-on monitoring (Kestrel, Entangl), continuous close in accounting, Sierra's Horizon platform extending to days-to-weeks, UiPath Maestro long-horizon orchestration, recruiting and background-check cycles in workplace. The infrastructure for long-horizon work is arriving faster than the vertical products that need it — the L1 cluster's assessment that the agent era shifted the default to long-horizon is directionally right but not yet the vertical reality.

### 3.11 The AI-native firm is the newest structural pattern

Software that does not just automate a function but *is* the firm selling the regulated outcome: Dwelly buying UK lettings agencies, AGI ($70M) rolling up independent insurance brokerages, Harper/Fernstone/Panta running the brokerage pattern organically, OffDeal as an AI-native investment bank, Denki as a full-stack AI audit firm, Billow AI and its cohort as agent-native accounting firms, Convexia running pharma work, Crescendo buying a human CX workforce (PartnerHero) to underwrite outcome guarantees, Overdrive Health acquiring billing agencies. Almost all are 2025-26 YC companies with no visible funding — the pattern is early, capital-light, and unproven, but it is the clearest answer to "what does per-outcome pricing look like when taken seriously": the software company internalizes the P&L. It also strains the census taxonomy at the L3/L4 boundary, which the wiki records per company.

### 3.12 Voice is the best-funded modality, with an India sub-cluster

ElevenLabs ($11B, $500M ARR), Parloa ($3B), Deepgram ($1.3B), LiveKit ($1B), Vapi ($500M) anchor the modality layer. Voice is the default interface inside logistics, healthcare, and collections verticals. India forms a distinct funded sub-cluster (Bolna, Ringg with 20M monthly calls, GreyLabs AI) building voice for BFSI collections and support — the one place the census's India inclusion shows a coherent local market rather than scattered entries.

---

## 4. Census corrections verified during profiling

Wiki frontmatter supersedes the census where verified. The merge applied seven status corrections:

| Company | Census said | Verified | Detail |
|---|---|---|---|
| Langfuse | active | acquired | ClickHouse, Jan 16 2026 |
| Prompt Security | active | acquired | SentinelOne, Aug 5 2025 |
| Metis | active | acquired | DoorDash, Mar 2026 |
| Arize | active | acquired | Dynatrace, $915M, Aug 2026 |
| Aim Security | active | acquired | Cato Networks, ~$350M, Sep 2025 |
| Pipedream | active | acquired | Workday, Nov 2025 |
| Quivr | active | pivoted | Support product wound down Apr 2026; now The Vibe Company |

Also verified or corrected during profiling (recorded on the wiki pages, not status changes):

- **Smithery** was already acquired in the census (Arcade, Aug 2026) — re-verified.
- **Salesforce agreed to acquire Fin for ~$3.6B** (June 2026); Intercom renamed itself Fin (May 2026).
- **Cognition** raised a $2B Series E at $48B (announced Sep 8 2026) with ~$900M run-rate revenue.
- **GovDash** raised a $30M Series B (Jan 2026).
- **One-liner corrections:** Agent FM is a desktop automation teammate (not as the census described); Anchorhead does research-agent evals; Caretta was misclassified — it is realtime AI for sales calls.
- **Pivots noted:** Redouble AI is now Silverlake, a Java-native agent OS; Pipeshift pivoted to inference serving.
- **Low-confidence figures flagged on their pages:** Kernel's Series A has conflicting figures ($22M vs $16M); Redouble's census funding/ARR claims could not be corroborated; Crescendo's $100M+ ARR is unaudited; Harvey's ~$100M ARR is an estimate; Yuma (~$3.3M) and Parahelp (~$0.9M) are low-confidence estimates.

---

## 5. Gaps and confidence

**In the data:**

- 463 of 766 pages are base depth — census data plus light verification. Unknown rates are highest in the software-engineering cluster (60-69 unknowns per decision, reflecting 47 companies with no visible traction) and in the industry verticals (runtime and tenancy almost entirely unpublished at seed stage).
- Roughly a dozen base-tier L1 companies have no footprint beyond their YC listings (Daqstra, Metorial, Moss, ContextFort, Specific, Scrapybara, superglue, Coasts, Amika, Amulet, Shepherd) — noted on their pages.
- Pricing is opaque across most verticals; where this report quotes prices, they are the published or reported minority.
- Reported ARR is rare and mostly estimated everywhere outside the CS leaders and the suites.

**In the landscape (open ground, consolidated from the cluster pages):**

- **Per-outcome pricing on verified results** — nobody prices on outcomes in infrastructure, and verticals claim the direction without publishing economics.
- **Governance and agent identity** — weakest dimension cluster-wide; the suites' control planes are ahead of the startups'.
- **Self-hosted/on-prem for regulated verticals** — absent in finance, legal, and workplace despite regulated buyers.
- **Human-in-the-loop tooling as a product** — approval gates are primitives, not products.
- **Mid-market agent delivery** — no services firm offers productized delivery below enterprise.
- **Voice-model routing, on-prem voice, video modality, underserved-language voice** — single entrants or empty.
- **Government beyond intake, education beyond grading, benefits administration, case management** — unoccupied.
- **Audit (PCAOB-regulated) and mid-market tax** — nearly empty in finance.

---

## 6. Verification

Checks run against the deliverables on disk (September 9, 2026):

1. **Coverage:** 766 of 766 assigned companies have wiki pages, matched by frontmatter name (the four apparent misses — Cognition (Devin), Cursor (Anysphere), Diode Computers Inc., Sourcegraph (Amp) — exist under slug variants that keep trailing punctuation, e.g. `cognition--devin-.md`).
2. **Depth:** 303 pages carry `profile_depth: deep`, 463 `base`; sum 766. Target was ~200 deep.
3. **Clusters:** 14 cluster pages exist in `agent-platform-research/wiki/clusters/`.
4. **Merge:** `companies-with-profiles.tsv` has 1,328 rows with `profile_depth` and `wiki_slug` columns; 7 status corrections applied; 0 layer corrections.
5. **App v2:** node structural check passed — DATA array parses with 1,328 companies; 766 wiki links, every one resolving to a file on disk; 303 deep / 463 base badges; depth filter, drawer profile row, and Phase 2 report link present; acquired count 35 (29 census + 6 verified); Quivr shows pivoted.
6. **Template conformance** was verified per agent before completion (correct slugs, complete sections, no frontmatter pipes, theses under 25 words).

---

## 7. Next

Phase 3 (thematic deep-dives, per the plan §7.3): long-horizon agents, market sizing, build-vs-buy, pricing evolution, moats and M&A, YC cohort evolution, and the platform-versus-app structure — each drawing on the wiki and feeding the final report. The app rebuilds after every phase. Paused here for review of the Phase 2 outputs before Phase 3 launches.

**Artifacts:**

- `agent-platform-market-research.html` — interactive app, v2 (filters, search, drill-down, YC cohort, VC backers, verticals, wiki links)
- `agent-platform-research/wiki/` — 766 company pages, 14 cluster pages, templates
- `agent-platform-research/data/companies-with-profiles.tsv` — merged dataset (census + profile fields)
- `agent-platform-research/tasks/phase-2.md` — assignment table and completion checks
- `agent-platform-phase1-census.md` — Phase 1 census (1,328 entries)
- `agent-platform-research-plan.md` — the research plan (v2)
