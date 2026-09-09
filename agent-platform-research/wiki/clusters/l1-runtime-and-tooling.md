# L1: Runtime and Tooling

## Scope

68 companies profiled in this cluster during Phase 2 (assignment file: data/phase2-assignments/p2-1a-l1-runtime.txt). These are agent-infrastructure companies: sandboxes and runtimes, browser and computer-use environments, tool access and MCP, memory, durable execution and orchestration, plus adjacent observability, security, and payments infrastructure. 25 were profiled deep; 43 at base depth.

## Notable companies

- **Temporal** — Durable execution engine; $300M Series D at $5B (Feb 2026, a16z). The reliability layer long-running agents are being built on; 2,900+ customers, MIT-licensed core.
- **Exa** — Web search API built for AI; $250M Series C at $2.2B (May 2026, a16z). Own neural index plus an async research Agent API.
- **OpenRouter** — Unified LLM routing API; $113M Series B at $1.3B (May 2026, CapitalG). Routes ~25T tokens/week across 400+ models; the model-access default for agent builders.
- **Braintrust** — Evals and data platform; $80M Series B at $800M (Feb 2026, ICONIQ). Used by Notion, Stripe, Zapier, Airtable.
- **Arcade** — Authorization and secure action layer; $72M raised. Acquired Smithery (Aug 2026) to own the agent tool supply chain: auth plus registry plus distribution.
- **Browserbase** — Headless browser cloud; $67.5M raised at $300M valuation. Moving from raw browser sessions to one-API-call managed agents.
- **Merge** — Unified API for HR, payroll, ticketing, accounting; $74.5M raised. Pivoted from embedded integrations to agent data and tools (Agent Handler, Gateway).
- **E2B** — Open-source sandboxes for AI code execution; $32M raised. Claims 88% of Fortune 100 usage; embedded in Manus, Perplexity, Groq stacks.
- **Composio** — Open-source integration layer; $29M raised, 30k GitHub stars. 1,500+ integrations with managed OAuth served over MCP.
- **AIR Security** — Agent supply-chain firewall; $50M across two seeds (Sep 2026, Sequoia and Greenoaks). Defining the "vet what agents install" category six months out of the gate.

## Patterns across the eleven build decisions

- **Build interface:** Overwhelmingly code-first — SDKs, APIs, CLIs. Visual surfaces are rare (BotCity Studio, Browserbase Director, Paragon's low-code editor); natural-language interfaces are just emerging (Browserbase Agents, Jun 2026).
- **Runtime and tenancy:** Vendor multi-tenant SaaS is the default. Self-host is the OSS differentiator (Temporal, E2B, Daytona, Hatchet, Inngest, Mem0, Zep, mcp-use, Sourcebot); proprietary platforms (Merge, OpenRouter, Browserbase) stay cloud-only, adding VPC/BYOC only at enterprise tiers.
- **Integrations:** MCP became the standard substrate — nearly every tool-access company supports it (Composio, Arcade, Smithery, mcp-use/Manufact, Metorial, Dedalus, Castari, Specific, superglue, Exa, Mem0, Zep). Deep proprietary connector libraries persist where normalization matters (Merge, Paragon, Pipedream).
- **Knowledge and data:** Memory emerged as a distinct 2024-2026 category (Mem0, Zep, Hyperspell, Glen, Shepherd) with data-gravity moat theses; integration companies sell live sync with systems of record.
- **Autonomy and HITL:** Infrastructure mostly enables autonomy. Approval gates are productized by only a few (Arcade, BotCity governance, Temporal durable signals, Inngest waitForEvent); most treat guardrails as the customer's code.
- **Governance:** SOC 2 Type II is table stakes for funded companies; HIPAA/ISO 27001 for healthcare and enterprise buyers. Agent identity and authorization (Arcade, Agentic Fabriq, Alter, AIR) is the newest control surface.
- **Pricing:** Usage-based dominates — per-second (E2B), per-hour (Browserbase, Kernel), per-call (Composio, Arcade), per-token (OpenRouter, Exa), per-run (Hatchet). Subscription floors plus metered overage is the standard shape. Per-seat pricing is nearly absent; per-outcome pricing does not exist yet.
- **GTM:** OSS-funnel-to-cloud PLG is the norm. Sales-led where the buyer is security (Aim, AIR, BotCity) or data infrastructure (Merge, Paragon).
- **Open-source posture:** Roughly 40% of the cluster ships an OSS core, Apache-2.0/MIT dominant; SSPL appears once (Inngest). OSS stars are a leading GTM currency (Composio 30k, E2B 13.6k, mcp-use 10.5k, Hatchet 7.8k).
- **Task horizon:** The agent era shifted the default to long-horizon and persistent — durable execution (Temporal, Inngest, Hatchet, Rivet), persistent memory (Mem0, Zep), always-on VMs (machine0) — versus the single-turn tool calls of the LLM-app era.

## Consolidation and M&A

Four acquisitions hit this cluster in twelve months: **Aim Security** to Cato Networks (~$350M, Sep 2025), **Pipedream** to Workday (announced Nov 2025, closed by Jan 2026), **Smithery** to Arcade (Aug 2026), and **Arize** to Dynatrace ($915M, Aug 2026). The pattern: incumbent platforms buying agent-era capabilities rather than building — observability (Dynatrace), security (Cato), connectivity (Workday). Separately, Arcade's Smithery purchase is vertical consolidation inside the MCP tool layer: authorization plus registry plus distribution in one stack. Expect the memory and evals categories to consolidate next; Atla already retrenched (shut its observability product, Feb 2026) to survive as a judge-model API.

## Traction distribution

Sharply bimodal. Four companies at or above $800M valuation (Temporal $5B, Exa $2.2B, OpenRouter $1.3B, Braintrust $800M) against 40+ pre-seed companies with no visible funding. Reported ARR is rare and mostly estimated: Merge ~$20M (2023, Sacra), Paragon $9M (2024, Sacra), OpenRouter $100M+ inference-spend run-rate (not revenue), Redouble ~$900K (census, uncorroborated). 53 of 68 are YC-backed (2020-2026 batches), but the funded leaders are mostly non-YC (Temporal, E2B, Browserbase, Merge, OpenRouter, Arize, Braintrust, Arcade, AIR) — YC supplies the tail, not the head. Acquisitions prove exit demand: $915M (Arize) and ~$350M (Aim) for sub-$150M-raised companies.

## Gaps and open ground

- **Agent identity and authorization** is contested at both ends — Okta and Microsoft shipping into incumbent installs, startups (Arcade, Agentic Fabriq, Alter) building natively — with no independent winner yet.
- **Memory** is crowded (five-plus startups) but has no enterprise standard; data gravity favors whoever locks in first, and consolidation is likely.
- **Per-outcome pricing** does not exist in this cluster — everything is metered on inputs (tokens, calls, hours). Pricing on results is open ground.
- **Human-in-the-loop tooling** is thin: approval gates are primitives inside orchestration engines, not products.
- **Agent-native payments** has one pre-seed entrant here (Agentcard); the rails remain unbuilt relative to agent spending ambitions.
- **Evals for computer-use agents** (hud, Halluminate, AgentHub, Abundant, Anchorhead, Ashr) are duplicated across six pre-seed startups — a category formed faster than demand can support.
