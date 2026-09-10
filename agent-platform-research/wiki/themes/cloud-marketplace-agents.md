# Cloud Marketplace AI Agents: Eight Marketplaces Compared (P3.8)

## Scope

A comprehensive research vertical examining how AI apps and agents are distributed, discovered, procured, and deployed through eight major marketplaces and platforms. This theme answers: what agents are available on each marketplace, which are the most used, how the marketplaces are structured, what the procurement and deployment models are, and what the adoption signals reveal about enterprise agent demand. Implements theme P3.8, extending the Phase 3 thematic set. Date: 2026-09-10. Read alongside market-sizing.md (Lens A analyst anchors), moats-consolidation.md (distribution as a moat), platform-vs-app-structure.md (the platform layer question), and pricing-evolution.md (per-action vs per-seat models).

The eight marketplaces researched, in phased order:

1. **Microsoft Marketplace** (Azure) - launched September 25, 2025
2. **AWS Marketplace AI Agents & Tools** (Bedrock/AgentCore) - launched July 16, 2025
3. **Google Cloud Agent Marketplace** (Gemini Enterprise) - partner agents April 23, 2026
4. **Salesforce AgentExchange** - launched March 4, 2025
5. **ServiceNow Store** (AI agents category) - launched January 2026
6. **OpenAI GPT Store** - launched January 10, 2024
7. **Hugging Face** (Spaces, Agent Hub, smolagents) - Agent Hub launched March 2026
8. **NVIDIA NGC/NIM** (catalog, Agent Blueprints, AgentIQ) - evolving through 2025-2026

## Method

- **Phased independent research:** Eight separate research agents, each assigned one marketplace, ran web searches (40-70 queries each) and page fetches (30-50+ each) to produce structured reports. Phase 1 (Azure) and Phase 2 (AWS) ran sequentially; Phase 3 (Google, Salesforce, ServiceNow, OpenAI, Hugging Face, NVIDIA) ran in parallel.
- **Primary marketplace browsing:** Azure Marketplace AI Apps and Agents category page; AWS Marketplace AI Agents and Tools solution page; Google Cloud Agent Marketplace blog and Agent Gallery docs; Salesforce AgentExchange catalog; ServiceNow Store AI agent marketplace (via SNAgents.ai directory); OpenAI GPT Store; Hugging Face Spaces and Agent Hub; NVIDIA NGC catalog and NIM documentation.
- **Launch announcements and press:** Microsoft Marketplace launch blog (2025-09-25); AWS AI Agents launch (2025-07-16); Google Cloud Next '26 (2026-04-22); Salesforce AgentExchange launch (2025-03-04) and Dreamforce 2025; ServiceNow Knowledge 2025/2026; OpenAI DevDay 2025; Hugging Face State of Open Models; NVIDIA GTC 2025.
- **Adoption data:** Earnings reports, press releases, Forrester TEI studies, Gartner assessments, partner case studies, third-party analyst coverage.
- **Comparative analysis:** agentmarketplace.ai comparison of five vendor marketplaces (August 2026); TURION.AI enterprise agent platform comparison (June 2026); CRM Curator and Salesforce Ben competitive analyses.
- **Labels:** every figure is marked **reported** (company/analyst stated), **estimated** (third-party or inference), or **inferred** (derived here). Marketplace listing counts are as observed/reported on 2026-09-09 and may change.

## Findings

### 1. Eight marketplaces launched within 30 months, each as a distribution channel for its own platform

The AI agent marketplace era began with Salesforce AgentExchange (March 2025) and the OpenAI GPT Store (January 2024), then accelerated through 2025-2026 as every major platform launched its own catalog:

| Marketplace | Launch Date | Catalog Size | Platform Requirement | Transaction Fee |
|---|---|---|---|---|
| OpenAI GPT Store | 2024-01-10 | 3M+ created; ~159K active | ChatGPT account | None (subscription-bundled) |
| Salesforce AgentExchange | 2025-03-04 | 14,000+ solutions; 1,000+ agents | Salesforce + Agentforce | Not disclosed |
| AWS Marketplace (AI Agents) | 2025-07-16 | 900+ AI agent listings | AWS account | 3% public SaaS; 1.5-3% private |
| Microsoft Marketplace | 2025-09-25 | 3,700+ AI apps and agents | M365 Copilot + Copilot Credits | 3% (reported) |
| ServiceNow Store (AI agents) | 2026-01-20 | 95 partner agents; 771+ total | ServiceNow Pro Plus/Enterprise Plus | Not disclosed |
| Hugging Face Agent Hub | 2026-03-03 | ~8,000 agents | None (open-source) | 15% platform fee |
| Google Agent Marketplace | 2026-04-23 | 56+ partner agents from 50+ publishers | Gemini Enterprise ($30-50/seat/mo) | Not disclosed |
| NVIDIA NGC/NIM | Evolving | 10,000+ models/containers | NVIDIA AI Enterprise ($4,500/GPU/yr) | N/A (subscription) |

**Every big-vendor marketplace is a distribution channel for its own platform, not a neutral market.** The agent price is never the whole price - you must first hold the platform (reported, agentmarketplace.ai analysis, August 2026). The exceptions are Hugging Face (model-agnostic, open-source) and NVIDIA (infrastructure layer, not application layer).

### 2. Microsoft Marketplace (Azure)

**Catalog:** 3,000+ AI apps and agents at launch (September 25, 2025), growing to 3,700+ by mid-2026 (330 new offers in January 2026, 367 in June 2026). The catalog fuses Azure Marketplace (2014) and Microsoft AppSource (2016) into a single destination.

**Top-rated apps:**
- n8n.cloud - 4.9/5 stars (47-54 reviews), highest rated
- BA Insight for Azure AI Search - 4.6/5 stars (21 reviews)
- Most listings lack ratings due to category recency

**Key agent categories and listings:**
- **Foundation models:** Anthropic Claude (6 variants: Sonnet 4.5/4.6, Opus 4.1/4.5/4.6, Haiku 4.5), Mistral Small 3.1
- **Automation/workflow:** UiPath Agentic Automation, n8n (3 listings), Palantir Foundry, Red Hat Ansible
- **Customer service:** Cognigy.AI, Haptik Voice AI Agents, AI Speech Analytics for Contact Centers
- **Vertical:** Dragon Copilot (clinical workflows with EHR integration), Legora (legal), Leena AI (HR)
- **Infrastructure:** Elasticsearch (vector DB), Neo4j Aura (graph DB), Langfuse (LLM observability), Chroma
- **Productivity:** AI MailMaestro (email), TeamsMaestro (meeting notes), Presentations AI

**Adoption signals (the strongest in any marketplace):**
- 30 million paid Copilot seats (July 2026, reported)
- 230,000+ organizations using Copilot Studio (July 2026, reported)
- 1 million+ custom AI agents created (reported)
- 10 million active enterprise Copilot agent users (March 2026, reported)
- 2 billion tasks processed per month by Copilot agents (March 2026, reported)
- 4.7 million GitHub Copilot subscribers (reported)
- 90%+ of Fortune 500 running active agents (Microsoft claim, reported)
- 400 million Teams monthly active users (reported)
- Siemens: 8X increase in customer adoption; config time 20 min to 1 min (reported)
- IDC predicts 1.3 billion AI agents by 2028 (reported)

**Copilot agent types (most widely deployed):**
1. Inbox Intelligence Agent - 34% reduction in email management time; 5.2 hours/week reclaimed
2. Meeting Operations Agent - pre-meeting briefings, in-meeting notes, post-meeting task tracking
3. Data Analysis Agent - monitors Excel/Power BI for anomalies, generates reports

**Ignite 2025 announcements (November 2025):**
- Agent 365 (GA) - control plane with Registry, Access Control, Visualization, Interoperability, Security
- Work IQ - intelligence layer (data + memory + inference)
- Office agents + Agent Mode
- Anthropic Claude in Foundry
- Foundry Agent Service updates (multi-agent workflows)
- Entra Agent ID - agent identity with Zero Trust
- Frontier Firm AI Initiative with Harvard
- Marketplace intelligent discovery (AI-powered app matching)

**Pricing:** Seven models - Free Trial, Pay-as-you-go, Per-seat Subscription, Contact Publisher, Consumption/Credit-based (agent, $0.02-$0.50 per agent action), Included with License, Container/Managed App. Azure charges a 3% transaction fee. MACC-eligible purchases count 100% toward commitment.

**Partner ecosystem:** 500,000+ Microsoft partners. 25+ prominent ISVs including UiPath, n8n, Palantir, Cognigy, Anthropic, Moveworks, Glean, Writer, C3.ai, Gong, ServiceNow, Siemens, Adobe, Cohere, Mistral, Teradata, Legora, BA Insight. IP Co-Sell program provides financial incentives for Microsoft sellers to recommend partner products.

### 3. AWS Marketplace (Bedrock/AgentCore)

**Catalog:** 900+ AI agent and tool listings at launch (July 16, 2025), within the broader 25,000+ listing AWS Marketplace. Named launch partners: Anthropic, IBM, Perplexity, Cognigy/NICE, PwC, Salesforce, Stripe, Brave, CircleCI.

**Key listings with ratings:**

| Product | Publisher | Rating | Reviews | Pricing |
|---|---|---|---|---|
| Claude Enterprise | Anthropic | 4.2/5 | 6 | $40/user/mo (25 seat min) |
| IBM watsonx Orchestrate | IBM | 4.4/5 | 389 | $6,360-$76,320/yr |
| NiCE Cognigy AI Agents | Cognigy/NICE | 4.4/5 | 26 | $43,080-$1,000,000/yr |
| Perplexity API Platform | Perplexity | 4.4/5 | 341 | $1,000/mo (credits) |
| Perplexity Enterprise Pro | Perplexity | 4.4/5 | 350 | $40/seat/mo |
| Karini AI Platform | Karini AI | 5.0/5 | 2 | $250,000/yr |
| Automation Anywhere Financial Analyst | Automation Anywhere | 3.4/5 | 4 | Free |

**Amazon Bedrock AgentCore (the deployment platform):**
- Preview July 16, 2025; GA October 23, 2025
- Seven composable services: Runtime, Gateway, Memory, Browser, Code Interpreter, Identity, Observability
- Runtime: serverless microVMs (8-hour sessions, per-second billing) or Instances (14-day sessions, EC2-based, GA August 2026)
- Gateway: zero-code MCP tool creation from APIs and Lambda functions
- Model-agnostic: supports OpenAI, Google Gemini, Anthropic Claude, Amazon Nova, Meta Llama, Mistral
- Framework-agnostic: LangChain, CrewAI, AutoGen, LlamaIndex, Strands, Google ADK, OpenAI Agents SDK
- 2 million+ downloads in first 5 months since preview (reported)

**AWS Agent Registry (preview April 2026, GA August 2026):**
- Private, governed catalog for agents, tools, MCP servers within an enterprise
- Two-plane architecture: Governance Plane (authoritative store) + Discovery Plane (curated approved resources)
- Four personas: Admins, Publishers, Consumers, Curators
- Customers: Southwest Airlines, PepsiCo, Zuora (50 agents across teams)
- 15 AWS regions supported

**Adoption signals:**
- 25,000+ total Marketplace listings (reported)
- 60% faster procurement than traditional IT (Forrester TEI, May 2025, reported)
- 377% ROI; 6-month payback period (Forrester TEI, reported)
- 70% reduction in solution discovery time (reported)
- PGA TOUR: 1,000% increase in content writing speed, 95% cost reduction
- MongoDB: deployed agent-based application in 8 weeks
- Swisscom: launched B2C agent solution in 4 weeks
- Jamf: 89% active usage of Claude Enterprise in 8 weeks
- Reply/Totemia: 65% reduced search time, 40% increased bookings, 25% conversion growth

**re:Invent 2025 announcements (November 30 - December 4, 2025):**
- Amazon Nova 2 models (Sonic, Lite, Omni preview, Forge, Act GA)
- Amazon S3 Vectors GA (up to 2 billion vectors per index, 90% cost reduction)
- 18 new Bedrock open-weight models (Mistral Large 3, Google Gemini, NVIDIA, OpenAI, Qwen)
- Marketplace: Agent mode (conversational discovery), Express private offers, Multi-product solutions, Variable payment models for professional services
- AWS DevOps Agent and Security Agent (preview)

**Bedrock model marketplace:** 100+ foundation models from 13+ providers including Amazon (Nova family), Anthropic (Claude Opus/Sonnet/Fable 5), OpenAI (GPT-5.6 variants), Meta (Llama), Mistral, Cohere, AI21, DeepSeek, Stability AI, Google (Gemini), NVIDIA, Qwen, Luma AI, TwelveLabs, Writer, Kimi AI, MiniMax AI.

**Pricing:** Pay-as-you-go, subscription, custom pricing. Transaction fees: 3% public SaaS; 1.5-3% private offers (tiered by TCV); 0.5% professional services; 0% for qualifying multi-product solutions. October 2025: pricing dimensions expanded from 24 to 200; contract + usage-based pricing for AgentCore containers.

**Protocol support:** MCP + A2A declared per listing; filterable in marketplace search. AgentCore Runtime supports MCP servers (port 8000) and A2A servers (port 9000) as ARM64 Docker containers.

### 4. Google Cloud Agent Marketplace (Gemini Enterprise)

**Catalog:** 56+ partner agents from 50+ publishers, available in the Agent Gallery inside Gemini Enterprise since April 23, 2026. Partner agents are purchased through Google Cloud Marketplace and consumed through the in-app Agent Gallery.

**13 featured launch partners:**
Accenture (Supply Chain Inventory Advisor), Adobe (Marketing Agent), Atlassian (Rovo), Deloitte (Tariff Management Suite), Lovable (app builder), Oracle (AI Database Agent), Palo Alto Networks (Prisma AIRS Model Security), Replit (Replit Agent), S&P Global (Data Retrieval by Kensho), Salesforce (Agentforce Sales), ServiceNow (Now Assist for IT Operations), Workday (Sana Self-Service Agent), plus 43+ additional partners.

**Full catalog spans:** cybersecurity (Acalvio, Palo Alto, Menlo Security, XM Cyber, Saviynt), finance (AutoCIO, Genpact, Teradata), HR (UKG, Workday), sales (Salesforce, Backstory), marketing (Adobe, Supermetrics, Typeface), supply chain (Accenture, Manhattan, Devoteam), IT operations (HCLTech, ServiceNow, LogicMonitor), legal/compliance (Avalara, AODocs), data (Oracle, Teradata, Dun & Bradstreet, Enigma), development (Replit, Lovable).

**Adoption signals:**
- 8+ million Gemini Enterprise paid seats (April 2026, reported)
- ~90% of Fortune 100 using Gemini Enterprise (Q2 2026 earnings, reported)
- Google Cloud revenue $24.8 billion Q2 2026 (82% YoY growth, reported)
- $514 billion cloud backlog (reported)
- 22 billion tokens/minute API processing (reported)
- 6+ trillion tokens/month through ADK (reported)
- 9 million developers building with Google models monthly (reported)
- ~75% of Google Cloud customers using AI products (reported)
- 330 Google Cloud customers processing 1T+ tokens/year (reported)

**Governance model (the best-designed in any marketplace):**
- Two-step flow: employees browse Agent Gallery and submit requests; IT approves/denies
- Every agent gets a SPIFFE-based cryptographic identity (X.509 certificate, 24-hour rotation)
- Access tokens cryptographically bound to agent's certificate (prevents token theft)
- Agent Gateway: centralized network policies, data access, security guardrails
- Model Armor: screens traffic to guarantee data is never used for model training
- "Google Cloud Ready - Gemini Enterprise" designation: four-step evaluation (functionality, output accuracy, autonomous execution, enterprise standards)

**$750 million partner fund (announced April 22, 2026):**
- Covers forward-deployed engineering teams, Gemini Enterprise practice building, early model access, sandbox credits, agent enablement
- FDE embedding partners: Accenture, Capgemini, Cognizant, Deloitte, HCLTech, PwC, TCS
- Practice launch partners: Altimetrik, Artefact, Covasant, Deepsense, Distyl.ai, Northslope, Quantium, Tribe.ai, Tryolabs
- Early model access: Accenture, BCG, Deloitte, McKinsey
- 120,000-member partner ecosystem; 330,000+ experts trained on Google AI
- 95% of top 20 SaaS companies using Gemini models

**Pricing:** Five editions - Business ($21/seat/mo), Standard ($30/$35), Plus ($50/$60), Pay-as-you-go, Frontline (custom). Marketplace access initially Plus-gated, expanded to Standard by September 2026. Compute metered separately ($15-40/mo for active power users). Volume discounts 10-20% above 500 seats. Bundled discounts 25-40% for Workspace + GCP + Gemini Enterprise.

**Protocol support (the most comprehensive):** A2A (Google-led, April 2025), MCP (including BYO-MCP), Unified Commerce Protocol (UCP), Agent Payments Protocol (AP2, used by PayPal), AG-UI. Google published a comprehensive "Developer's Guide to AI Agent Protocols" (March 2026).

**Google ADK (Agent Development Kit):** Open-source (Python, TypeScript, Go, Java). ADK 2.0 with graph-based multi-agent framework. 6T+ tokens/month processed. Deployed by Comcast, L'Oreal, PayPal, Color Health, Geotab, Burns & McDonnell.

### 5. Salesforce AgentExchange

**Catalog:** 14,000+ vetted agents, apps, and tools across the unified AgentExchange (combining AppExchange + Slack Marketplace + Agentforce ecosystem). 1,000+ agents and skills available. 187,000+ reviews. 200+ launch partners (March 2025), growing to 30+ MCP server partners by late 2025.

**Component types:** Actions (integrations), Topics (context/domain), Templates (full agent configurations), MCP Servers (third-party tool servers).

**Notable listings:** Google Cloud Search Action, Box Content Action, Docusign Agreement Action, Workday HR Action, Poggio Revenue AI, Hyro AI Agents for Healthcare, Cursor/Linear/Notion/v0 Slack agents.

**MCP server partners (30+):** AWS, Box, Cisco, Google Cloud, IBM, Notion, PayPal, Stripe, Teradata, WRITER, Anthropic, Dropbox, OpenAI.

**Adoption signals (Agentforce revenue trajectory):**
- $0 to ~$1.2B ARR in under two years (reported)
- $800M ARR (February 2026, Q4 FY26, reported)
- ~$1B ARR (May 2026, reported)
- ~$1.2B ARR (August 2026, +205% YoY, reported)
- Combined AI & Data ARR: ~$3.4B (August 2026, reported)
- 29,000+ Agentforce deals closed (February 2026, reported)
- 2.4 billion Agentic Work Units delivered (reported)
- 19 trillion tokens processed (reported)
- Salesforce as "Customer Zero": 4M autonomous inquiries over 15 months (reported)
- ~6% customer adoption rate (May 2026, estimated)

**Flex Credits pricing:** $500 per 100,000 Credits. Each agent action = 20 Flex Credits ($0.10). 100,000 free Flex Credits with Salesforce Foundations. Customers can swap between seats and credits. Original $2/conversation model retired May 2025.

**Agentforce 360 architecture (four pillars, GA Dreamforce October 2025):**
1. Agentforce 360 Platform - conversational builder, hybrid reasoning, voice, Agentforce Script
2. Data 360 - Intelligent Context, Tableau Semantics, 112T records ingested (+114% YoY)
3. Customer 360 Apps - Sales, Marketing, Service, Field Service, Revenue Management, Commerce, IT Service, Industries
4. Slack as Agentic OS - Slack-First Apps, Channel Expert Agent, Enterprise Search

**Customer case studies:**
- Trustpilot: 99% service backlog reduction
- Agibank: 75% deflection rate; 22,500 loan inquiries/month autonomous; 245,000 total handled
- Kogan.com: 67% inquiry automation, 3x resolution capacity
- Batteries Plus: $15M pipeline from autonomous SDR; 500,000+ autonomous emails
- Engine: 50% chat request resolution

**Reviews:** Gartner Magic Quadrant Leader for Conversational AI Platforms (July 2026). G2 #1 Best Agentic AI Product. Forrester: "easier AI helpers but still inside their walled garden."

**Protocol support:** MCP (announced June 2025, GA with Agentforce 3) with AI Agent Gateway, centralized MCP Server Registry, 30+ MCP partners. A2A protocol support with Agent Card metadata, client-server architecture.

### 6. ServiceNow Store

**Catalog:** 95 partner-built AI agents in the ServiceNow Store (tracked by SNAgents.ai), plus 771+ total agents across platform-native and partner-built categories. 300+ AI Skills across 30+ product modules, organized into 5+ autonomous AI Agent frameworks.

**Platform-native agents by category:**
- **ITSM:** Incident Management Agent, L1 Service Desk AI Specialist (99% faster than human), Change Management Agent, Now Assist for ITSM
- **CSM:** Customer Service Agent, Case Management, Now Assist for CSM
- **HRSD:** Employee Onboarding Agent, HR Request Agent, Now Assist for HRSD
- **Security Ops:** Security Incident Response Agent, Vulnerability Remediation Agent
- **App Development:** Build Agent (works in every major AI coding tool), Knowledge Base Management Agent
- **Cross-platform:** AI Agent Orchestrator, Otto (conversational AI), AI Control Tower, Autonomous Workforce

**Partner program:** 5-tier Build Partner Program (Access, Registered, Select, Premier, Elite), launched January 20, 2026. 2,700+ partners globally. Single annual membership fee. Market Development Fund with 100% reimbursement. Strategic Investment Fund for high-impact opportunities.

**Adoption signals:**
- AI ACV crossed $1 billion (Q2 2026, reported)
- 40%+ quarter-over-quarter AI ACV growth (reported)
- 2,600 Now Assist enterprise customers (Q1 2026, reported)
- Agentic AI production deployments grew 9x in 9 months (reported)
- First-time agentic AI buyers up 45% YoY (reported)
- AI Control Tower crossed 500 customers in first 6 months (reported)
- 8,500+ enterprise customers total
- 100+ billion workflows per year on the platform (reported)
- ServiceNow internally: 90% of IT support requests resolved autonomously; 89% of customer support requests resolved autonomously; resolution times cut 7x

**Moveworks acquisition ($2.85B, completed December 15, 2025):**
- 5.5 million employee users on Moveworks platform
- ~250 mutual customers already using both ServiceNow and Moveworks
- Integrated in 2 months into Autonomous Workforce + EmployeeWorks (February 2026)
- Otto launched May 2026 incorporating Moveworks conversational AI
- EmployeeWorks generated 6 deals exceeding $1M each in net new ACV

**Pricing:** Two-component model - tier upgrade (Pro Plus/Enterprise Plus, 30-40% uplift over base) + consumption-based action unit pool (5,000-25,000 actions/user/year for ITSM/CSM/HRSD). ITSM Pro Plus list price $210/user/mo; negotiated $130-158/user/mo. Now Assist add-ons $38-45/user/mo list. 72% of customers purchase without formal ROI framework.

**Knowledge 2026 announcements (May 5-7, 2026):** Autonomous Workforce (AI specialists executing entire jobs end-to-end), Otto (unified conversational AI), EmployeeWorks, AI Control Tower expansion (governs any AI across any system), Microsoft Agent 365 integration.

**Protocol support:** Full MCP and A2A via Action Fabric architecture. ServiceNow acts as both MCP Server (exposing capabilities to external agents) and MCP Client (invoking external tools). A2A support in two modes (ServiceNow as primary agent; external agents calling ServiceNow).

**Gartner ranking:** #1 for "Building and Managing AI Agents" use case in 2025 Gartner Critical Capabilities.

### 7. OpenAI GPT Store

**Catalog:** 3-5 million GPTs created (estimated); only ~159,000 actively used - a 5.3% survival rate. 8 original categories: Productivity & Writing (~25%), Image Generation (~18%), Coding & Dev (~14%), Research & Analysis (~12%), Education (~10%), Lifestyle (~8%), Entertainment (~7%), Other (~6%).

**Top GPTs by usage:**
- Grimoire (coding): 2M+ conversations
- Copywriter GPT: 500K-600K conversations
- SQL Expert: 200K+ conversations

**Enterprise adoption (the real business, not the GPT Store):**
- $5B+ enterprise ARR (mid-2026, reported)
- 1 million+ business customers (November 2025, reported)
- 3M+ paid business seats (reported)
- 92% Fortune 500 penetration (reported)
- Enterprise now exceeds consumer revenue (August 2026, reported)
- 800M+ people use ChatGPT (reported)

**Revenue breakdown (mid-2026):**
- ChatGPT Enterprise: ~$2.5-3B ARR ($60/seat/mo list; $45-50 realized)
- ChatGPT Business/Team: ~$800M-1B ARR ($25-30/seat/mo; fastest-growing)
- Enterprise API: ~$1.2-1.5B ARR
- ChatGPT Edu: ~$200-400M ARR (Cal State: 460K users)
- ChatGPT Gov: <$100M ARR

**Agent strategy beyond GPTs:**
- ChatGPT agent (July 2025): unified agent merging Operator + deep research + ChatGPT intelligence; uses virtual computer (browser, terminal, API access)
- Codex (May 2025, GA DevDay): cloud-based software engineering agent
- AgentKit (October 2025): Agent Builder, Connector Registry, ChatKit, Guardrails - **being wound down November 30, 2026**
- Apps SDK (October 2025): third-party apps render interactive UI in chat; share context via MCP
- Agents SDK (open-source, Python/TypeScript): self-hosted agents with handoffs, guardrails, sessions, tracing

**Creator economics (weak):**
- ~$0.03 per conversation payout
- Minimum 25 conversations/week to earn anything
- Median creator income: ~$47/month
- Top 1% of creators capture 78% of all revenue
- US-only; non-US creators excluded from payouts
- Still "limited rollout, criteria-based" as of late 2025

**Protocol support:** MCP yes (native support since September 2025; Connector Registry; Apps SDK uses MCP for context sharing). A2A no (OpenAI does not officially support Google's A2A; community GitHub issues remain open).

**Pricing:** Free, Go (~$5/mo), Plus (~$20/mo), Pro (~$200/mo), Team ($25-30/seat/mo), Enterprise ($60/seat/mo list), Edu (bespoke), Gov (bespoke).

**Key limitation:** GPTs run only inside ChatGPT on OpenAI models; no deployment to customer systems; no persistent background execution; no multi-agent orchestration (Agent Builder being wound down); no A2A interoperability.

### 8. Hugging Face

**Scale:**
- 3 million+ models on the Hub (August 2026, reported)
- 1.3 million Spaces (hosted AI applications, May 2026, reported)
- 13 million users (reported)
- 500,000+ public datasets (reported)
- smolagents: 28,929 GitHub stars, 2,880 forks (reported)

**Agent Hub (launched March 3, 2026):** Model-agnostic agent marketplace with ~8,000 agents at launch. 85% developer / 15% platform revenue share. Supports any model (open + closed), any framework (LangChain, CrewAI, Anthropic SDK, custom). Full source code visibility. Combined market: 25,000+ published agents across GPT Store + Gemini + HF (growing ~1,000/day).

**smolagents library:** Lightweight Python library where agents "think in code" (write executable Python rather than JSON tool calls). Model-agnostic, modality-agnostic, tool-agnostic. Supports MCP servers (`ToolCollection.from_mcp`), LangChain tools, Hub Spaces as tools. Share/pull tools and agents to/from the Hub.

**Enterprise pricing:** Free, Team ($20/user/mo), Enterprise ($50/user/mo), Enterprise Plus (custom). ZeroGPU free GPU inference (5-60 min/day by tier). Inference Endpoints on AWS, Azure, GCP from $0.033/hr (CPU) to $20/hr (8x A100). 18+ inference provider partners (Together, Replicate, Groq, Cerebras, Fireworks, etc.).

**Cloud partnerships:**
- AWS: one-click to SageMaker Studio (July 2026)
- Azure: 10,000+ models in Azure AI Foundry under HF Collection (May 2025)
- Google Cloud: partnership expanded November 2025

**NVIDIA acquisition:** Agreed August 27, 2026 for $12.9 billion (~86x $150M annualized revenue). Gives NVIDIA control of the open-source AI distribution layer. Previous valuation $4.5B (2023 Series D).

**Protocol support:** Full MCP support (huggingface_hub MCP Client in Python & JS; HF MCP Server; smolagents MCP integration; Tiny Agents MCP-powered agent in 50 lines of JS; free MCP course). Native function calling via InferenceClient. transformers agents with CodeAgent and Tool classes.

**TrustRadius:** 9.7/10 based on 11 reviews.

### 9. NVIDIA NGC/NIM

**NGC Catalog:** 10,000+ optimized models, containers, and datasets. NIM (NVIDIA Inference Microservices) package models with optimized inference engines (TensorRT-LLM) and standard APIs. 100,000+ NIM downloads (reported).

**NIM Agent Blueprints:** Reference architectures combining NIMs with orchestration patterns. Key types: Digital Humans (photorealistic avatars), VLM Agents (vision-language reasoning), Knowledge/RAG Agents (grounded factual responses), Customer Service Agents (multi-turn conversational with tool-calling).

**Agent Intelligence Toolkit (AgentIQ):** Framework for building, orchestrating, and deploying AI agents. Multi-agent orchestration, tool calling, RAG integration, memory management, hallucination reduction. Integrates with NIM microservices and Nemotron models.

**NVIDIA AI Enterprise:** $4,500 per GPU per year (approximately). Includes NIM, enterprise support, TensorRT, Triton Inference Server, CUDA-X libraries, AI Workbench. NIMs free for development via NGC; production requires AI Enterprise license.

**Nemotron models:**
- Llama-3.1-Nemotron-70B-Instruct: optimized for agent reasoning and tool-use
- Nemotron-4 340B: synthetic data generation (teacher model for training smaller agent models)
- Llama-3.1-Nemotron-Ultra-253B: larger variant

**Cloud marketplace presence:** NIM available on AWS (SageMaker JumpStart), Azure (AI Studio), Google Cloud (Vertex AI Model Garden). NVIDIA AI Enterprise available through all three cloud marketplaces.

**Strategic positioning:** NVIDIA is the infrastructure and orchestration layer, not a distribution marketplace. Provides compute (GPUs), acceleration (CUDA-X: cuDNN, cuBLAS, NCCL, TensorRT-LLM), inference engines (NIM), orchestration (AgentIQ), models (Nemotron), and now model distribution (Hugging Face acquisition). Deliberately avoids the application layer to prevent channel conflict.

**CUDA-X relevance to agents:** cuDNN (low-latency inference for real-time agent responses), cuBLAS (matrix multiplication for Transformer attention), NCCL (multi-GPU/multi-node scaling for large models), TensorRT-LLM (KV cache management, continuous batching, quantization - integrated into NIM). Creates high switching costs: agents optimized for CUDA-X perform significantly better on NVIDIA hardware.

### 10. Cross-marketplace comparison: the most-used agents by adoption signal

| Agent/Platform | Marketplace | Adoption Signal | Label |
|---|---|---|---|
| Microsoft Copilot Studio | Azure | 230K orgs; 10M users; 2B tasks/mo; 30M paid seats | reported |
| Salesforce Agentforce | AgentExchange | $1.2B ARR; 29K deals; 2.4B work units; 19T tokens | reported |
| ServiceNow Now Assist | ServiceNow Store | $1B AI ACV; 2,600 customers; 9x deployment growth | reported |
| OpenAI ChatGPT Enterprise | GPT Store | $5B+ ARR; 1M+ business customers; 92% Fortune 500 | reported |
| Google Gemini Enterprise | Agent Marketplace | 8M+ paid seats; ~90% Fortune 100; $24.8B cloud revenue | reported |
| AWS Bedrock AgentCore | AWS Marketplace | 2M+ downloads; 900+ agent listings; 377% ROI | reported |
| Hugging Face | Agent Hub/Spaces | 13M users; 1.3M Spaces; 3M+ models; 29K smolagents stars | reported |
| NVIDIA NIM | NGC | 100K+ downloads; 10K+ catalog assets; $4,500/GPU/yr | reported |

### 11. Structural comparison across all eight marketplaces

| Dimension | Azure | AWS | Google | Salesforce | ServiceNow | OpenAI | Hugging Face | NVIDIA |
|---|---|---|---|---|---|---|---|---|
| **Launch** | Sep 2025 | Jul 2025 | Apr 2026 | Mar 2025 | Jan 2026 | Jan 2024 | Mar 2026 | Evolving |
| **Catalog** | 3,700+ | 900+ | 56+ | 14,000+ | 95+ partner | 159K active | ~8,000 | 10,000+ |
| **Deployment** | M365/Azure | Customer's AWS | Gemini platform | Salesforce org | ServiceNow platform | ChatGPT only | Any cloud/on-prem | NVIDIA infra |
| **MCP** | Yes | Yes | Yes (BYO-MCP) | Yes | Yes (Action Fabric) | Yes | Yes | Via NIM |
| **A2A** | Via Foundry | Yes | Yes (Google-led) | Yes | Yes (Action Fabric) | No | Via frameworks | No |
| **Pricing** | Per-seat + credits | PAYG + subscription | Per-seat + compute | Flex Credits ($0.10/action) | Tier + action units | Subscription | Free + Enterprise | $4,500/GPU/yr |
| **Openness** | Medium | High | Medium | Low (walled garden) | Low | Low (OpenAI only) | Highest | Medium |
| **Governance** | Agent 365 + Entra ID | AgentCore Identity | SPIFFE crypto identity | Einstein Trust Layer | AI Control Tower | Admin console | Community + SOC2 | Enterprise support |

### 12. The emerging pattern: marketplaces as the enterprise agent distribution layer

The eight marketplaces represent a new distribution layer in the agent stack that did not exist 30 months ago. The pattern:

1. **Platform vendor builds the runtime** (Bedrock AgentCore / Azure AI Foundry + Copilot Studio / Gemini Enterprise Agent Platform / Agentforce / ServiceNow AI Platform / ChatGPT / HF Spaces / NIM).
2. **Partners list agents on the marketplace** (Cognigy, UiPath, IBM, Anthropic, n8n, Accenture, Deloitte, etc.).
3. **Customers procure through the marketplace** (one bill, security vetted, commitment-eligible).
4. **Agents deploy into the customer's environment** (AgentCore / Microsoft tenant / Gemini app / Salesforce org / ServiceNow platform / ChatGPT / any cloud / NVIDIA infrastructure).

This mirrors the pattern from platform-vs-app-structure.md (P3.7): the platform layer captures distribution, and the marketplace is the distribution mechanism.

### 13. What is NOT on any marketplace

- **No per-outcome pricing on hyperscaler marketplaces.** Neither Azure nor AWS surfaces agents priced per-resolution or per-task-completed. Salesforce's Flex Credits ($0.10/action) is the closest, but it is per-action, not per-outcome. The pricing-evolution theme (P3.4) identified per-outcome as the emerging model, yet marketplace procurement cannot yet support it.
- **No long-horizon agents.** None of the hyperscaler marketplaces list agents designed for tasks lasting hours to weeks. The 73 long-horizon companies in the census sell direct.
- **Limited governance tooling.** ServiceNow's AI Control Tower and Microsoft's Agent 365 are the deepest governance offerings. AWS has AIR Agent Governance. Others lack dedicated governance agents.
- **No cross-marketplace portability.** An agent built for Azure cannot run on AWS; an agent on Salesforce cannot deploy to ServiceNow. MCP and A2A protocols enable inter-agent communication but not deployment portability.

## Evidence table

| Dimension | Azure | AWS | Google | Salesforce | ServiceNow | OpenAI | Hugging Face | NVIDIA |
|---|---|---|---|---|---|---|---|---|
| Launch date | 2025-09-25 | 2025-07-16 | 2026-04-23 | 2025-03-04 | 2026-01-20 | 2024-01-10 | 2026-03-03 | Evolving |
| Catalog size | 3,700+ | 900+ | 56+ | 14,000+ | 95+ | 159K active | ~8,000 | 10,000+ |
| Top agent | Copilot Studio | Claude Enterprise | Replit Agent | Agentforce Sales | Now Assist ITSM | ChatGPT agent | smolagents | NIM Blueprints |
| Revenue/ARR | 30M seats | 25K+ listings | $24.8B cloud | $1.2B ARR | $1B AI ACV | $5B+ ARR | ~$150M | $4,500/GPU/yr |
| Protocol | MCP | MCP+A2A | MCP+A2A+UCP+AP2 | MCP+A2A | MCP+A2A | MCP only | MCP | Via NIM |
| Deployment | M365 tenant | Customer's AWS | Gemini app | Salesforce org | ServiceNow | ChatGPT | Anywhere | NVIDIA infra |
| Fee | 3% | 3%/1.5-3% | Undisclosed | Undisclosed | Undisclosed | None | 15% | N/A |
| Key acquisition | - | - | - | - | Moveworks $2.85B | - | NVIDIA $12.9B | Hugging Face $12.9B |

## Implications

1. **The marketplace is a new layer in the agent stack.** It sits between the agent builder and the enterprise buyer, adding procurement, governance, and deployment wrapping. For the census's L2 build platforms and L3 vertical agents, marketplace listing is becoming a distribution requirement.

2. **Distribution is concentrating at the platform layer.** Both hyperscaler marketplaces are owned by the cloud platform the agents run on. The distribution moat from moats-consolidation.md (P3.5) now extends to the hyperscaler itself. An agent on Azure is distributed through Microsoft's cloud; an agent on AWS through Amazon's.

3. **Copilot Studio is the dominant enterprise agent platform by adoption.** 230K organizations and 10M users dwarf any individual agent listing. Salesforce Agentforce ($1.2B ARR) and ServiceNow ($1B AI ACV) are the next strongest. The pattern: the marketplace operator captures rent on every agent sold through it.

4. **AWS leads on openness; Microsoft leads on adoption; Google leads on governance.** AWS's MCP+A2A support and customer's-own-account deployment make it the most open. Microsoft's Copilot Studio embedded in the marketplace gives it the most adoption. Google's SPIFFE-based cryptographic agent identities and four-step partner validation give it the best governance.

5. **Salesforce's Flex Credits ($0.10/action) is the closest to per-outcome pricing on any marketplace.** This validates the pricing-evolution theme (P3.4) prediction that per-action pricing would emerge. However, true per-outcome pricing (per-resolution, per-task-completed) remains absent from all marketplaces.

6. **The NVIDIA-Hugging Face acquisition creates a vertically integrated monopoly on the agent development lifecycle.** NVIDIA now controls: compute (GPUs), acceleration (CUDA-X), inference (NIM), orchestration (AgentIQ), models (Nemotron), and model distribution (Hugging Face). This is the most significant structural change in the agent ecosystem in 2026.

7. **OpenAI's GPT Store is a distribution channel, not a monetization platform.** 3M+ GPTs created, 159K active, median creator income $47/month. The real business is ChatGPT Enterprise ($5B+ ARR). AgentKit's wind-down (November 2026) signals that visual no-code agent building didn't gain enough traction.

8. **ServiceNow's AI Control Tower is the only cross-platform agent governance tool.** It can discover, observe, govern, and secure AI agents deployed across any system - including Microsoft's Agent 365 agents. This positions ServiceNow as the governance layer above all other marketplaces.

9. **The agent registry pattern points toward internal marketplaces.** AWS Agent Registry and Microsoft's "Built by your org" section both let organizations discover and share agents internally. The next evolution: enterprises building internal agent catalogs, not just buying from public marketplaces.

10. **Protocol convergence is happening around MCP.** Seven of eight marketplaces support MCP. A2A is supported by AWS, Google, Salesforce, and ServiceNow but not OpenAI. Google's additional protocols (UCP, AP2, AG-UI) make it the most protocol-rich. The divergence on A2A (OpenAI absent) is the key interoperability gap.

## Open questions

1. **How many agents are actually deployed in production through each marketplace?** Listing counts are not deployment counts. Copilot Studio's 230K organizations is the best proxy but conflates platform with marketplace.

2. **What is the revenue flowing through each marketplace?** Neither Azure nor AWS discloses agent-specific GMV. Salesforce's $1.2B Agentforce ARR is the closest figure but includes platform revenue, not just marketplace transactions.

3. **Will cross-marketplace portability emerge?** MCP and A2A enable inter-agent communication but not deployment portability. If enterprises demand multi-cloud agent portability, a neutral standard may emerge - but no vendor has incentive to lead it.

4. **Will per-outcome pricing reach the marketplace?** If per-outcome agents (Sierra, Cognition) continue to grow, marketplaces must support outcome-based billing or these agents will bypass them.

5. **What happens to the NVIDIA-Hugging Face acquisition regulatory review?** A $12.9B deal giving the dominant GPU manufacturer control of the dominant model hosting platform will face antitrust scrutiny. The outcome shapes the open-source agent ecosystem.

6. **Will OpenAI's AgentKit wind-down signal a broader retreat from no-code agent building?** If visual no-code agent platforms fail across marketplaces, the agent ecosystem may bifurcate into code-first (SDKs, frameworks) and fully-managed (platform-native agents like Copilot, Agentforce).

## Sources

- Microsoft Marketplace launch blog, Alysa Taylor, 2025-09-25 (reported)
- ZDNet, "Microsoft will compete with AWS to offer a marketplace of AI apps and agents," 2025-09-26 (reported)
- The New Stack, Microsoft Marketplace launch, 2025-09-25 (reported)
- Futurum Group, Microsoft marketplace analysis, 2025-09-26 (reported)
- LavX News, Microsoft Marketplace January/June 2026 offer additions (reported)
- Azure Marketplace AI Apps and Agents category, observed 2026-09-09
- CallSphere, Copilot agents 10M enterprise users, 2026-03-17 (reported, secondary)
- Windows News, Copilot Studio 230K orgs, 2026-07-01 (reported, secondary)
- ThePlanetTools, Microsoft Copilot 20M paid seats, 2026-05-01 (reported, secondary)
- Windows Forum, Ignite 2025 announcements, 2025-12-05 (reported)
- AWS "Introducing AI agents and tools in AWS Marketplace," 2025-07-16 (reported)
- CRN, "AWS Launches AI Agents Marketplace and Bedrock AgentCore," 2025-07-16 (reported)
- AWS Marketplace AI agent products documentation (reported)
- AWS Partner Network blog, AgentCore partner solutions, 2025-11-07 (reported)
- AWS Marketplace pricing update, 2025-10-31 (reported)
- AWS Agent Registry announcement, 2026-08-31 (reported)
- Forrester, "Total Economic Impact of AWS Marketplace," May 2025 (reported)
- TMCnet, Cognigy in AWS Marketplace, 2026 (reported)
- Google Cloud blog, partner-built agents in Gemini Enterprise, 2026-04-23 (reported)
- Google Cloud press release, $750M partner fund, 2026-04-22 (reported)
- Google Cloud Next '26 blog, 2026-04-22 (reported)
- CRN, Google $750M partner fund, April 2026 (reported)
- Beri.net, Google Cloud 82% growth, Fortune 100, 2026-07-23 (reported)
- Google ADK documentation, adk.dev (reported)
- Google Agent Identity overview docs (reported)
- Salesforce AgentExchange launch press release, 2025-03-04 (reported)
- Salesforce Q4 FY26 earnings, 2026-02-25 (reported)
- Salesforce Agentforce 360 announcement, 2025-10-13 (reported)
- Salesforce Flex Credits pricing, 2025-05-15 (reported)
- Salesforce MCP support blog, 2025-06-22 (reported)
- Particle News, Agentforce $1.2B ARR, August 2026 (reported)
- Salesforce Ben, Q1 FY27 results, May 2026 (reported)
- State of AgentExchange semiannual analysis (reported)
- ServiceNow Q2 2026 earnings, 2026-07-22 (reported)
- ServiceNow Knowledge 2025/2026 press releases (reported)
- BusinessWire, ServiceNow Build Partner Program, 2026-01-20 (reported)
- TechCrunch, Moveworks acquisition, 2025-03-10 (reported)
- SNAgents.ai marketplace directory (observed)
- Teivasystems, ServiceNow AI complete guide (reported)
- Enterprise DNA, ServiceNow $1B AI ACV, 2026 (reported)
- VendorBenchmark, ServiceNow Now Assist pricing (reported)
- OpenAI DevDay 2025 announcements, 2025-10-06 (reported)
- valueaddvc.com, OpenAI enterprise revenue, 2026 (reported)
- eWeek, OpenAI 1M business customers, 2025-11-05 (reported)
- WIRED, GPT Store creator economics (reported)
- presenc.ai, AI tool marketplace economics, 2026 (reported)
- seo.ai, GPT Store statistics (reported)
- Hugging Face State of Open Models Spring/Summer 2026 (reported)
- Hugging Face pricing and enterprise docs (reported)
- neuronfeed, HF Spaces 1.3M, May 2026 (reported)
- GitHub, huggingface/smolagents (reported)
- CallSphere, AI agent marketplaces comparison, March 2026 (reported)
- TNW, NVIDIA-Hugging Face acquisition, August 2026 (reported)
- NVIDIA NGC catalog, developer.nvidia.com (reported)
- NVIDIA NIM documentation (reported)
- NVIDIA AI Enterprise product page (reported)
- NVIDIA Agent Intelligence Toolkit docs (reported)
- NVIDIA Nemotron product page (reported)
- agentmarketplace.ai, AI Agent Marketplaces Compared, August 2026 (reported, secondary)
- TURION.AI, Enterprise Agent Platforms Comparison, June 2026 (reported)
- CRM Curator, Agentforce vs Copilot vs Now Assist (reported)
