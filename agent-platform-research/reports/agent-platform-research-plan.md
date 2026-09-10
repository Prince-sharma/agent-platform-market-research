# Enterprise Agent-Building Platform: Market Research Plan

**Version:** v2, restructured per your feedback (2026-09-09)
**Status:** GTM OS thesis fully decoupled; phased execution defined; awaiting your go for Phase 1
**Supersedes:** v1 (same file, earlier today). See §0.2 for the change log.

---

## 0. How to use this document

### 0.1 Reading guide

This is the research protocol, not the research. Nothing has been researched
yet. Vet it in three parts:

- **§1-§6:** what we study and how it is classified (subject, questions,
  scope, sizing, taxonomy, nuance framework)
- **§7-§10:** how the research executes (the four phases, plus the three
  methodologies you asked for: YC census, VC portfolio census, long-horizon
  agents)
- **§11-§16:** the output contract (profile template, analysis plan,
  deliverables, rigor standards, sequencing, and the decisions still open)

### 0.2 Change log, v1 to v2

| Change | Where |
|---|---|
| YC startup-directory census added as a first-class methodology | §8, Phase 1 |
| VC portfolio census added: compile the agent companies across ~40 VC portfolios | §9, Phase 1 |
| Long-horizon agents added as a dedicated research thread and an eleventh nuance dimension | §6, §10, Phase 3 |
| Execution restructured into four phases; each phase produces a report that feeds the central report | §7, §15 |
| GTM OS thesis fully decoupled: independent problem, neutral framing; prior GTM research is one census input, nothing more | §1 |
| Subject reframed as work agents: agents companies build for daily work | §1, §3 |
| Scale raised: census target 350-600 companies (was 150-200); deep profiles ~100-150 (was ~50) | §7.1 |
| Deliverable spec expanded: drill down by company, sector, nuance, YC batch, VC backer, task horizon | §13 |
| Depth directive added: the long tail gets the same classification rigor as the famous names | §7.2 |

## 1. The research subject: work-agent platforms, as an independent problem

### 1.1 Subject

The subject is the enterprise agent platform space, studied on its own terms:
the platforms, infrastructure, and verticalized products with which companies
build and run **work agents**: agents that autonomously execute useful daily
work inside organizations, in any department (finance, accounting, GTM, HR,
IT, support, legal, operations).

Three parts of one space, all in scope:

1. **Platforms to build agents** (the core): horizontal build platforms, from
   no-code canvases to pro-code frameworks, where a company constructs its
   own agents.
2. **Agent infrastructure:** the picks and shovels underneath.
3. **Vertical work agents:** the specialized, often verticalized agents built
   on or around those platforms, including long-horizon agents (§10).

### 1.2 Independence from the GTM OS thesis

Per your direction: the GTM OS hypothesis plays no role here. No question,
workstream, or conclusion in this plan is framed around it. The space is
treated as a fresh problem, researched and concluded on its own terms.

### 1.3 Relationship to prior research (reuse, not framing)

The completed GTM research (85 companies, 9 categories) is a deep map of the
GTM vertical slice of this same space. It is reused as one input to the
census: roughly 20 of its companies carry over with their profiles, and its
verified facts transfer (Gartner's 40% agentic-AI cancellation forecast by
2027; Forrester's 88% B2B adoption figure; ServiceNow-Moveworks at $2.85B;
Salesforce's ~$800M AI ARR; Glean's $200M ARR and $7.2B valuation; the 11x
arc). Nothing else transfers: no framing, no hypothesis, no wedge logic.

## 2. The questions this research must answer

**Primary question:** what is the totality, structure, and dynamics of the
work-agent platform space: who is building what, with which nuances, at what
scale, and where is it going?

| # | Sub-question | Answered in |
|---|---|---|
| Q1 | How big is the agent-building market today and through 2028-30? | Phase 3 (sizing) |
| Q2 | Does the platform layer centralize (winner-take-most) or fragment into vertical stacks? | Phase 3 (structure) |
| Q3 | What is the real product depth of the incumbent suites, versus their narrative? | Phase 2 (suites) |
| Q4 | Which build model (no-code, natural language, pro-code, config, services) wins which buyer? | Phase 2 (platforms) |
| Q5 | Are enterprises building or buying agents, and what does the failure record imply? | Phase 3 (build-vs-buy) |
| Q6 | Which build nuances separate winners from losers? | Phases 2-3 |
| Q7 | What does the YC cohort reveal: batch-over-batch trends, survival, pivots, concentration? | Phase 1 census + Phase 3 cohort analysis |
| Q8 | What are long-horizon agents, who builds them, and what do they demand of a platform? | §10, Phase 3 |
| Q9 | Where does value pool across layers: infrastructure, platform, vertical application? | Phase 3 (structure) |
| Q10 | What ground remains open, given the full census? | Phase 4 synthesis |

## 3. Scope and boundary rules

**The screen every candidate company passes:** in scope if the company's
primary product is agentic: a platform to build, run, or govern agents;
infrastructure for agents; or a verticalized work agent that autonomously
executes work tasks. Out of scope if the product merely embeds AI features
(a CRM with AI summaries is out; a support agent that resolves tickets is in).

Edge-case rulings:

| Candidate | In scope? | Ruling |
|---|---|---|
| Model providers (OpenAI, Anthropic, Google) as model businesses | Out | Their platform products (AgentKit, Agents SDK, ADK, Vertex Agent Builder) are in: the sharpest competitive threat |
| Agent infrastructure (E2B, Composio, Langfuse, Temporal) | In (Layer 1) | A platform map must include its supply chain |
| No-code builders (Gumloop, Lindy, n8n) | In (Layer 2) | Core |
| Pro-code frameworks (LangGraph, CrewAI, Cloudflare Agents SDK) | In (Layer 2) | Core |
| Vertical work agents (Atomicwork, Sierra, Harvey) | In (Layer 3) | Core |
| Incumbent suites (Agentforce, Copilot Studio) | In (Layer 5) | Core |
| Services firms (Workflows AI, Big 4, SIs) | In (Layer 4) | Core |
| RPA (UiPath, Automation Anywhere) | In (adjacent) | Cover the agentic pivot, not the legacy business |
| Voice-agent platforms (Vapi, Retell, Parloa) | In (cross-cutting) | Best evidence of usage-based pricing |
| Browser/computer-use agents (Browser Use, Skyvern) | In (cross-cutting) | The autonomy frontier |
| SWE agents (Devin, Factory) | In (Layer 3, reference depth) | Same build problems, different buyer; strong long-horizon evidence |
| Crypto/token agents (Virtuals, ElizaOS) | Out | One paragraph in the report |
| Consumer assistants (ChatGPT, Claude as products) | Out | Their builder surfaces enter via their platform products |
| Personal/consumer agents (life assistants, companions) | Out | Work agents only |
| Prosumer work tools (Lindy personal, Gumloop free tier) | In (PLG edge) | The individual builder is an entry motion for several platforms |
| Classic low-code (Retool, Mendix) | In (adjacent) | Retool's AI pivot bears on the build-model question |

## 4. Market-sizing methodology

Three lenses, triangulated. Every number date-stamped, sourced, and presented
as a range; no point estimates presented as fact.

**Lens A, top-down (analyst and VC theses).** Gartner (agentic AI adoption and
cancellation forecasts, AI software spending), IDC (worldwide AI spending),
Forrester (agent adoption surveys), McKinsey (genAI economic potential), plus
the VC framing pieces: a16z's service-as-software thesis (AI expanding
software TAM into labor budgets), Battery, Bessemer's State of the Cloud,
Menlo Ventures' annual enterprise genAI spend reports, Sequoia's AI market
maps. Market-research firms (MarketsandMarkets, Grand View, Precedence) are
used only to show the spread of published estimates, never as the primary
number.

**Lens B, bottom-up (company aggregation).** Sum reported/estimated ARR across
Layer 2 platforms and Layer 1 infrastructure; services revenue attributable
to agent building; pricing benchmarks per model (per seat, per agent, per
run, per outcome) to derive unit economics. The census makes this lens far
stronger than it was in v1: with 350-600 companies classified, the
aggregation is meaningful rather than anecdotal.

**Lens C, capital flows.** 2023-26 funding by layer (round count and dollars,
from the census); 2024-26 M&A with prices (ServiceNow-Moveworks $2.85B
verified; IBM-DataStax, IBM-AgentOps, and others to verify).

**Output:** TAM / SAM / SOM with explicit assumptions; a sensitivity table
(platform spend as 5% / 10% / 20% of enterprise AI spend); a build-vs-buy
split estimate; known biases stated up front (analyst forecasts extrapolate
hype cycles; private ARR is unverified; "agent" is applied opportunistically
to everything).

## 5. Market taxonomy

### 5.1 Six layers

| Layer | Definition | Examples (candidates, to verify) | Strategic question it answers |
|---|---|---|---|
| L1 Agent infrastructure | Picks and shovels: runtime, sandboxes, tool access, memory, orchestration, observability, identity, security | E2B, Browserbase, Composio, Pipedream, Merge, Nango, Temporal, Inngest, Mem0, Zep, Langfuse, Braintrust, Galileo, LiteLLM, OpenRouter, Okta Agent Identity Center, Microsoft Entra Agent ID, Zenity, Aim Security | What is the supply chain; what would a platform buy vs build; where are the chokepoints |
| L2 Build platforms (horizontal) | Products whose output is agents, for any department | No-code: Gumloop, Lindy, Relevance AI, Stack AI, Vellum, Wordware, n8n, Zapier, Make, Flowise, Langflow, Botpress, Voiceflow. Pro-code: LangGraph, CrewAI, LlamaIndex, OpenAI AgentKit, Anthropic Agent SDK, Google ADK, AWS Strands, Cloudflare Agents SDK, Vercel AI SDK, Mastra, Agno, Letta. Enterprise: Writer, Glean, Palantir AIP, Cognigy, Kore.ai, Amelia | The direct competitive set; which build model wins which buyer |
| L3 Vertical work agents | Agents for one department or industry | Atomicwork (IT/HR), Sierra, Decagon, Ada (CS), Harvey, EvenUp (legal), Abridge, Ambience (health), Basis, Numeric, Rillet (accounting), Greenlite (compliance), EliseAI (real estate), Trunk Tools (construction), HappyRobot (logistics), 7ai (security), Devin, Factory (SWE), Clay, 11x (GTM) | The buy-side alternative; where value pools; which verticals remain open |
| L4 Services and custom builders | Vendor builds agents for the customer | Workflows AI (your anchor), AI boutiques, Big 4 practices, Accenture, TCS/Infosys/Wipro/HCL | The alternative delivery model; can it productize; is it a channel |
| L5 Incumbent suites | Agents embedded in systems of record | Microsoft Copilot Studio / Azure AI Foundry, Salesforce Agentforce, ServiceNow (+ Moveworks), Google Agentspace, AWS Bedrock/AgentCore, Oracle, SAP, Workday, HubSpot, Atlassian Rovo, IBM, Snowflake, Databricks | The bundle risk; the distribution moat |
| Cross-cutting modalities | Voice, browser/computer-use | Vapi, Retell, Bland, LiveKit, Deepgram, Cartesia, Synthflow, Parloa; Browser Use, Skyvern, Twin, Induced | Evidence on usage-based economics and reliability engineering |

### 5.2 The three sorting axes

1. **Delivery model: product vs services.** Does the customer operate a tool,
   or does the vendor deliver the outcome?
2. **Scope: horizontal vs vertical.** Any department, or one?
3. **Primary builder persona: developer vs business user vs admin.** Who
   actually constructs the agent?

Placing the anchors:

| | Product | Services |
|---|---|---|
| **Horizontal** | Gumloop (business user), LangGraph / Cloudflare Agents SDK (developer), Copilot Studio (admin) | Workflows AI, Big 4, SIs |
| **Vertical** | Atomicwork (IT/HR), Sierra (CS), Harvey (legal) | vertical boutiques |

A horizontal, enterprise-grade, developer-first product (the Cloudflare-style
quadrant) competes head-on with Copilot Studio and Agentforce. Whether that
quadrant is open or squeezed is exactly what the census and profiling phases
resolve; this plan does not presuppose an answer.

### 5.3 The classification vector

Every census company gets classified on: layer (L1-L5 or modality);
horizontal vs vertical (and which department or industry); build model;
primary buyer; task horizon (§6.11); YC batch (if applicable); VC backers;
funding stage; current status (active / pivoted / acquired / dead).

## 6. The nuance framework: eleven build decisions per company

You asked specifically for the nuances different builders have chosen. Every
profiled company gets scored on:

1. **Build interface:** drag-and-drop canvas / natural language / code /
   config workflow. (Determines who can build: the size of the addressable
   builder pool.)
2. **Runtime and tenancy:** vendor multi-tenant SaaS / dedicated VPC /
   self-host / on-prem. (The enterprise-trust and data-sovereignty decision.)
3. **Tool and integration strategy:** proprietary connector library / MCP /
   marketplace. (The switching-cost decision; MCP is the open-standard
   wildcard.)
4. **Knowledge and data strategy:** built-in RAG / bring-your-own store /
   live sync with systems of record. (Where data gravity, and therefore the
   moat, sits.)
5. **Autonomy and human-in-the-loop design:** fixed workflow / approval
   gates / fully autonomous; guardrail architecture. (The trust-versus-value
   dial.)
6. **Governance and enterprise controls:** RBAC, audit trails, compliance
   certifications, agent identity, spend caps. (The CIO procurement gate.)
7. **Pricing model:** per seat / per agent / per run / per outcome / platform
   fee plus usage. (The business-model decision; the strongest signal of
   what the vendor believes an agent is worth.)
8. **GTM motion:** PLG self-serve / sales-led / services-led / marketplace.
9. **Moat thesis:** integrations, data gravity, workflow lock-in, evals,
   distribution, price. (What the company itself believes, tested against
   evidence.)
10. **Open-source posture:** proprietary / OSS core / fair-code; self-host
    option. (The wedge against suites; the n8n question.)
11. **Task horizon (new in v2):** single-turn / multi-step workflow (minutes)
    / long-horizon (hours to weeks per task) / persistent (always-on). The
    long-horizon end is where reliability, memory, and cost governance get
    hard, and where the differentiated work agents live. See §10.

These eleven become the filter and drill-down dimensions in the central
deliverable.

## 7. Execution: four phases

Research runs in four sequential phases. Each phase gets its own sub-agent
fleet, its own verification pass, and produces a report that feeds the
central report. Nothing is rushed into one pass: each phase completes and is
reviewed before the next begins.

| Phase | Question it answers | Output |
|---|---|---|
| 1 Census | What is the totality of companies in this space? | `agent-platform-phase1-census.md` |
| 2 Classification and profiling | What does each significant company actually do, and how is it built? | `agent-platform-phase2-landscape.md` |
| 3 Thematic deep-dives | Why does the space look the way it does, and where is it going? | `agent-platform-phase3-thematic.md` |
| 4 Central report | How do you consume all of it? | `agent-platform-market-research.html` |

### 7.1 Phase 1: Census (breadth first)

**Goal:** enumerate every VC-funded agent company findable publicly. Not just
the famous names (n8n, LangGraph, CrewAI): the long tail is the point.
Saturation, not sampling: the census is done when new sweeps stop adding
names.

Four inputs, run in parallel as sub-agents:

- **P1.1 YC directory sweep.** Every batch from Winter 2021 through Summer
  2026, screened against the §3 rule. Methodology in §8. Five sub-agents by
  era.
- **P1.2 VC portfolio sweep.** The portfolio pages of ~40 VCs across four
  groups. Methodology in §9. Four sub-agents by group.
- **P1.3 Known-player confirmation sweep.** The seed lists below, each
  confirmed and extended during the sweep. Five to six sub-agents by layer
  group.
- **P1.4 Prior-research reuse.** The GTM dataset's ~20 relevant companies,
  reclassified into this taxonomy. No sub-agent needed.

Seed lists for P1.3 (candidates to confirm, not findings):

- Incumbent suites: Microsoft (Copilot Studio, Azure AI Foundry), Salesforce
  (Agentforce), ServiceNow (AI Agents, Moveworks), Google (Agentspace, ADK,
  Vertex), AWS (Bedrock, AgentCore, Strands), Oracle, SAP, Workday, HubSpot,
  Atlassian, IBM, Snowflake, Databricks, Palantir AIP
- Horizontal no-code: Gumloop, Lindy, Relevance AI, Stack AI, Vellum,
  Wordware, Flowise, Langflow, Zapier, Make, n8n, Botpress, Voiceflow,
  Respell, Beam AI, Coze (ByteDance)
- Pro-code frameworks: LangChain/LangGraph, CrewAI, LlamaIndex, OpenAI
  (AgentKit, Agents SDK), Anthropic (Agent SDK, MCP), Google ADK, AWS
  Strands, Cloudflare Agents SDK, Vercel AI SDK, Mastra, Agno, Letta,
  Microsoft Agent Framework, Hugging Face smolagents
- Enterprise horizontals: Writer, Glean, Palantir AIP, Cognigy, Kore.ai,
  Amelia, Ema
- Vertical work agents: IT/HR (Atomicwork, Moveworks, Aisera, Leena AI,
  TheLoops, Workgrid, Fixify, Paradox); customer service (Sierra, Decagon,
  Ada, Intercom Fin, Zendesk, Forethought, Crescendo, Parloa, DigitalGenius,
  Observe.AI); finance and accounting (Basis, Numeric, Rillet, Klarity,
  Truewind, Digits, Vic.ai, Greenlite, Cofactor, Norm Ai, Unit21, Workiva,
  BlackLine); legal, healthcare, insurance, real estate, construction,
  logistics, security (Harvey, EvenUp, Spellbook, Eve, Luminance, Hebbia,
  Abridge, Ambience, Tennr, Anterior, SmarterDx, Sixfold, Federato, EliseAI,
  Henry AI, Trunk Tools, HappyRobot, Vooma, 7ai, Dropzone, Prophet); SWE
  (Devin, Factory, OpenHands); GTM (from the prior dataset: 11x, Artisan,
  Clay, Copy.ai, Regie, Unify, Nooks, Bounti, Tribble)
- Services: Workflows AI, Averi, AI boutiques, Big 4 practices, Accenture,
  TCS, Infosys, Wipro, HCLTech
- Infrastructure: E2B, Daytona, Browserbase, Composio, Pipedream, Merge,
  Nango, Temporal, Inngest, Restate, Mem0, Zep, Langfuse, Braintrust,
  Galileo, Arize, LangSmith, LiteLLM, OpenRouter, Portkey, Okta Agent
  Identity Center, Microsoft Entra Agent ID, Zenity, Aim, Lasso, Skyfire,
  Payman, Smithery, Glama, PulseMCP
- Open source: AutoGPT, CAMEL, MetaGPT (plus the OSS cores already listed:
  n8n, CrewAI, Agno, Mastra, Langflow, Flowise)
- Modalities: Vapi, Retell, Bland, LiveKit, Deepgram, Cartesia, Synthflow;
  Browser Use, Skyvern, Twin, Induced
- India and global (pending decision 1): Zoho, Freshworks, Sarvam, CoRover,
  Yellow.ai, Haptik, Gupshup, Krutrim; Infosys Topaz, TCS WisdomNext, Wipro
  ai360

**Merge and dedup protocol:** name + URL + one-liner matching across all four
inputs; every surviving company gets the base classification vector (§5.3).
Borderline cases are flagged for your review, never silently dropped.

**Prioritization (added at launch, per your direction):** entries are flagged
high-priority when they come from recent YC batches (2024-2026) or show
meaningful adoption (follow-on funding, notable customers, reported ARR).
Older entries without visible traction stay in the census at base depth. The
priority flag drives Phase 2 profiling depth.

**Completion checks (added at launch, per your direction):** Phase 1 counts
as complete only if every check passes, recorded in the census report's
verification section: (1) all sweep files exist and parse; (2) every assigned
YC batch and VC portfolio was actually swept; (3) seed-list coverage measured;
(4) every entry carries the full classification vector; (5) dedup executed,
with suspected duplicates adjudicated; (6) cross-input overlap reported as the
saturation signal; (7) the GTM carry-over screen documented. A failed check
triggers a re-run of the responsible sweep before the census is delivered.

**Output:** the census report: the full universe with base classifications,
counts by layer / vertical / batch / backer, first-cut observations, and the
borderline list. **Target: 350-600 companies after dedup.**

### 7.2 Phase 2: Classification and profiling (depth)

**Goal:** turn the census into a profiled landscape. Every significant
company gets the full profile (§11) and the eleven nuance scores (§6).
Sub-agents by layer:

- P2.1 Layer 1: agent infrastructure
- P2.2 Layer 2: horizontal build platforms (the core: no-code, pro-code,
  enterprise)
- P2.3 Layer 3: vertical work agents, by department cluster (IT/HR, customer
  service, finance/accounting, legal/healthcare/insurance/real
  estate/construction/logistics, security, GTM)
- P2.4 Layer 4: services and custom builders
- P2.5 Layer 5: incumbent suites
- P2.6 cross-cutting: modalities and open source

**Depth directive (per your feedback):** the famous names get no special
treatment. The long tail gets the same classification rigor as n8n or
LangGraph; deep profiles (~100-150) go to whoever is significant by funding,
traction, or novelty, not by fame.

**Output:** the landscape report: the classified, profiled, nuance-scored
dataset that becomes the central deliverable's core data.

### 7.3 Phase 3: Thematic deep-dives

- **P3.1 Long-horizon agents (§10):** the dedicated thread you asked for
- **P3.2 Market sizing:** the three lenses (§4)
- **P3.3 Build-vs-buy and the failure record:** survey data, in-house
  platform teams, cancellation and implosion evidence
- **P3.4 Pricing evolution:** seats, per-agent, per-run, per-outcome
- **P3.5 Moats, M&A, consolidation:** which layers have switching costs; the
  acquisition map; likely consolidators
- **P3.6 YC cohort evolution:** batch-over-batch entry counts, category
  concentration, survival/pivot/death rates, follow-on funding; what the
  cohort says about maturity and timing
- **P3.7 Platform-vs-app structure:** where value pools across layers; the
  Cloudflare analogy as one lens among several, not a hypothesis to prove

**Output:** the thematic report.

### 7.4 Phase 4: Central report

Synthesis of Phases 1-3 into the interactive deliverable (§13), verified the
same way the GTM one was (well-formedness, JS syntax, runtime render counts,
data completeness).

## 8. YC directory mining methodology

**Window:** every batch from Winter 2021 through Summer 2026. Rationale: the
agent wave starts in 2023 (post-ChatGPT), but 2021-2022 captures the
precursors and the pivots into agents, which are themselves signal.

**Method:** sweep the Y Combinator startup directory
(ycombinator.com/companies) batch by batch, screening each company against
the §3 rule. Capture per company:
batch, name, one-liner, layer, vertical, status (active / pivoted / acquired
/ dead), post-YC funding where visible.

**Screening rule:** include if the primary product is agentic per §3:
platform, infrastructure, or vertical work agent, horizontal or vertical.
Borderline cases (AI features rather than agents) get flagged rather than
dropped.

**Structure:** five sub-agents by era (2021-22, 2023, 2024, 2025, 2026),
each sweeping its batches and returning structured entries. Expect to screen
several thousand companies to isolate the agent-relevant subset.

**Cohort outputs (feeding P3.6):** entries per batch over time; category mix
per batch; survival and pivot rates by cohort year; follow-on funding rates;
the notable graduates.

## 9. VC portfolio mining methodology

**VC groups (four, ~40 firms):**

- **US generalist:** Sequoia, a16z, Benchmark, Accel, Greylock, Lightspeed,
  Founders Fund, Khosla, Insight, Bessemer, Menlo, Battery, Index, Coatue,
  General Catalyst, NEA, IVP, Felicis, Lux, 8VC, Madrona, Craft, ICONIQ,
  Thrive
- **AI-specialist:** Conviction, Radical Ventures, AI Fund, Amplify,
  SignalFire, Mayfield, Foundation Capital
- **Europe:** Northzone, Cherry Ventures, Point Nine, EQT Ventures,
  Balderton, Plural, Seedcamp
- **India and global (pending decision 1):** Peak XV, Accel India, Elevation,
  Blume, Lightspeed India, Z47

**Method:** each VC's portfolio pages filtered for AI/agents; every hit
screened against §3; capture the same base fields as the YC sweep plus
lead-investor attribution.

**Structure:** four sub-agents, one per group.

**Outputs:** the backer matrix (which VCs concentrate in which layers and
verticals: a signal for where sophisticated money thinks the space is going)
and dedup against the census.

## 10. Long-horizon agents: dedicated research thread

**Definition.** Most agents today are single-turn or short multi-step. The
interesting frontier is **long-horizon agents**: verticalized, specialized
agents that own a task for hours to weeks (a month-end close, a code change
with review cycles, a legal work product, a claim adjudication, a freight
cycle), with intermediate state, checkpoints, and human approval gates along
the way. A related but distinct category is **persistent agents** (always
on: monitoring, triaging, inboxes).

**The task-horizon spectrum:** single-turn, then multi-step workflow
(minutes), then long-horizon task (hours to weeks), then persistent
(always-on).

**Why it matters.** Long horizon is where work agents deliver transformative
value (whole work products, not answers), and also where everything gets
hard: reliability over long runs, memory across sessions, cost control,
evaluation of trajectories rather than outputs, and governance. The
primitives long-horizon agents demand (durable execution, checkpointing,
resumability, approval gates, spend caps) are exactly the primitives that
separate an agent platform from a workflow tool.

**Who to study (candidates):** SWE (Devin, Factory, OpenHands); accounting
close (Basis, Numeric, Rillet); legal work products (Harvey, EvenUp);
research and diligence; claims and adjudication; construction (Trunk Tools);
logistics cycles (HappyRobot, Vooma); persistent horizontal agents (Lindy);
and the infrastructure that enables them (Temporal's durable execution, E2B,
memory systems).

**Research questions:**

1. What task horizons are actually being productized today, and in which
   verticals?
2. What are the reliability stories: success rates, human-oversight ratios,
   failure modes over long runs?
3. What infrastructure choices do the builders make (durable execution,
   checkpointing, browser sessions, memory), and what do those choices say
   about gaps?
4. How are long-horizon agents priced (per-outcome pricing emerges here)?
5. What does this imply for what a build platform must provide for
   long-horizon work agents to be constructible on it?

## 11. Per-company profile template

Every company gets: name; layer and sub-segment; one-line thesis; founding
year; HQ; YC batch (if any); VC backers (lead noted); funding (total, last
round, date, investors); valuation (with date); revenue/ARR (reported or
estimated, with date and confidence); ICP; pricing model with unit; the
eleven nuance scores (§6); agent capability depth; moat thesis; weaknesses;
trajectory; task horizon; current status (active / pivoted / acquired / dead,
with date); M&A involvement; sources with dates; confidence rating. Anchors
(Atomicwork, Workflows AI, Gumloop) and category leaders get deep profiles
at 2-3x depth.

## 12. Analysis and synthesis plan

- **Positioning matrices** with selectable axes in the deliverable: build
  model vs buyer; horizontal vs vertical depth; platform vs app; pricing
  model map; task-horizon map.
- **Build-vs-buy analysis:** enterprise survey data, in-house platform
  teams, the 40%-cancellation signal, and what each implies.
- **The Cloudflare analogy, as one lens among several (not a hypothesis to
  prove):** what Cloudflare productized, the agent-runtime equivalents, who
  is actually building that layer (Cloudflare Agents SDK, Vercel, E2B,
  Temporal, AWS AgentCore), and where the analogy breaks (agents bind to
  data, workflows, and integrations, not just compute; enterprises buy
  outcomes).
- **Pricing evolution:** seats, per-agent, per-run, per-outcome; unit
  economics per model; implications for stickiness.
- **Moats and consolidation:** which layers have network effects or switching
  costs; the M&A map; likely consolidators.
- **YC cohort evolution (from the census):** entries per batch, category mix
  shifts, survival/pivot/death by cohort, follow-on rates; what the cohort
  implies about maturity and timing.
- **Long-horizon pattern analysis (from §10):** which verticals productize
  long horizons first; which infrastructure choices correlate with success.
- **Open-ground analysis, framed neutrally:** given the full census, which
  layers, verticals, buyer segments, and geographies remain thinly
  occupied. This is a structural observation about the space, not a wedge
  recommendation; connecting it to your own platform idea is a separate
  exercise you can request.
- **What would change the structural read:** suites bundling credible
  building at near-zero marginal price; MCP plus open frameworks
  commoditizing the build layer; enterprises buying rather than building;
  PLG taking the tail while suites take the enterprise; services capturing
  budgets without productizing.
- **The bear case, collected as evidence:** the 11x arc (verified),
  Gartner's 40% cancellation forecast (verified), public agent failures (Air
  Canada, DPD, Chevrolet, McDonald's-IBM).

## 13. Deliverables

1. **Phase reports (markdown):** `agent-platform-phase1-census.md`,
   `agent-platform-phase2-landscape.md`,
   `agent-platform-phase3-thematic.md`. Each feeds the next phase and the
   central report.
2. **Central report: `agent-platform-market-research.html`.** Interactive,
   single-file, same pattern as the GTM one but built for census scale.
   Consumption model, per your goal: see the totality, then drill down by:
   - **company:** full profile modal (all §11 fields, all eleven nuance
     scores)
   - **sector:** layer, vertical/department, buyer
   - **nuance:** any of the eleven build dimensions as filters (build
     interface, tenancy, MCP vs proprietary, pricing model, task horizon,
     and so on)
   - **cohort:** YC batch, VC backer, funding stage, status
   Plus tabs for: sizing, YC cohort evolution, the backer matrix, the
   long-horizon thread, thematic findings, and sources.
3. **Optional, separate from this research:** a written strategy doc
   connecting the findings to your own platform idea. On request only; it is
   deliberately not part of this scope.

## 14. Rigor standards and known limits

- Source hierarchy: primary (company docs, pricing pages, SEC filings,
  official blogs) > funding press (TechCrunch, Business Insider, The
  Information, Reuters) > analyst summaries > market-research firms.
- Every figure date-stamped; reported vs estimated vs inferred labeled;
  confidence rating per company.
- Private-company revenue is mostly unverified: presented as ranges, "as
  reported."
- No paywalled reports, no customer interviews, no logged-in scraping:
  public web only. Where a Gartner/IDC number matters, the press release or
  a secondary citation is used and labeled.
- Census-specific: YC and VC portfolio data come from public directories;
  dead and pivoted companies stay in the dataset with status flags
  (survivorship bias is the enemy of a good census).
- The deliverable carries the same caveat footer as the GTM one.

## 15. Sequencing and gates

| Phase | Work | Gate |
|---|---|---|
| 0 | This plan (v2) | **Your go: blocking** |
| 1 | Census (YC sweep + VC portfolio sweep + known-player sweep + prior-research reuse; merge and dedup) | Census report delivered; brief pause for your review |
| 2 | Classification and profiling by layer | Landscape report delivered; same gate |
| 3 | Thematic deep-dives (long-horizon, sizing, build-vs-buy, pricing, moats, cohort, structure) | Thematic report delivered; same gate |
| 4 | Central HTML + verification | Handover and walk-through |

Default gating: a brief pause after each phase report so you can
course-correct cheaply. Say "run straight through" once and the remaining
phases execute without stopping.

## 16. Decisions

### 16.1 Settled by your feedback

1. **Full-stack scope:** dig into all VC-funded agent companies and classify
   them, not just the famous platforms.
2. **Scale:** census in the hundreds (target 350-600 after dedup); deep
   profiles ~100-150.
3. **GTM OS decoupled:** independent problem, neutral framing.
4. **Phased execution:** four phases, each producing a report that feeds the
   central report.
5. **YC census and VC portfolio census** as first-class methodologies.
6. **Long-horizon agents** as a dedicated research thread.
7. **Central deliverable:** the combination of everything, with drill-down
   by company, sector, and nuance.

### 16.2 Still open

1. **India and global:** include the India VC group and the Zoho /
   Freshworks / homegrown platform set? *Recommendation: include; it is a
   large, structurally different market, and given your context it doubles
   as design-partner scouting.*
2. **Modalities:** voice and browser-use as brief cross-cutting coverage?
   *Recommendation: yes.*
3. **Phase gating:** pause after each phase report (default), or run
   straight through? *Recommendation: pause after Phase 1 only, then run
   through.*
4. **YC window:** Winter 2021 through Summer 2026 as proposed, or trim to
   the agent era (2023 onward)? *Recommendation: keep 2021+ to capture
   precursors and pivots.*
5. **Anything specific** beyond the anchors (Atomicwork, Workflows AI,
   Gumloop) you already care about: competitors, investors, an ICP, a
   segment you suspect is mispriced?

---

*Nothing above has been researched yet. Company names are candidates for
verification, not findings; figures marked as carried over from the GTM
research are the verified subset. Phase 1 launches on your go.*
