# L2 build platforms

## Scope

74 companies profiled in this cluster during Phase 2 (assignment file: data/phase2-assignments/p2-2-l2.txt).

## Notable companies

* Azure AI Foundry: Pro-code platform claiming 80% F500 span via Microsoft agents.
* Glean: High-traction platform with $7.2B valuation and $200M ARR.
* LangChain: Open agent engineering ecosystem valued at ~$1.3B.
* n8n: Open-source workflow automation platform with a $5.2B valuation.
* OpenAI AgentKit: First-party enterprise stack combining visual builder and SDK.
* Palantir AIP: Ontology-grounded platform with $1B+ quarterly revenue.
* Zapier Agents: No-code platform leveraging 9,000+ app integrations.
* Lovable: AI-powered full-stack app builder valued at $2.8B.

## Patterns across the eleven build decisions

* Build Interface: Divergence between pro-code SDKs (Anthropic Agent SDK, Vercel AI SDK, AWS Strands) and no-code/low-code visual canvases (Gumloop, Dify, Coze, Make). Some platforms offer hybrid approaches (CrewAI, Google ADK).
* Runtime: Convergence toward vendor multi-tenant SaaS, though a strong subset emphasizes self-hosting or dedicated VPCs for enterprise governance (Dify, Mastra, n8n).
* Integrations: Heavy adoption of Model Context Protocol (MCP) across new SDKs and platforms (Cloudflare, Azure, LangChain, LlamaIndex). Proprietary connector libraries remain a key differentiator for incumbents (Zapier: 9,000+; Make: 3,000+; Azure: 1,400+).
* Pricing: Divergence between traditional platform fees/seats (Dust, CopilotKit) and emerging usage-based or outcome-based models (Ema, Gumloop's 8% orchestration fee, Zapier's per-run pricing).
* Task Horizon: Split between multi-step workflows lasting minutes (Dify, Dust) and long-horizon agents capable of operating for hours to weeks (LangGraph, CrewAI, Applied Compute).

## Consolidation and M&A

The cluster is experiencing an exit wave of early movers and strategic acquisitions by enterprise suites:
* Aisera was integrated into Automation Anywhere.
* Sana was acquired by Workday for $1.1B.
* Flowise was acquired by Workday.
* Langflow was acquired by IBM via DataStax.
* Yellow.ai announced a SPAC listing at ~$550M.
* n8n received a strategic investment from SAP, contributing to its $5.2B valuation.

## Traction distribution

Traction is highly bimodal:
* Funded Leaders: A small group of high-valuation players (n8n at $5.2B, Glean at $7.2B, Lovable at $2.8B) and high-revenue entities (Palantir AIP).
* Seed Tail: A significant number of companies with no visible traction or early-stage funding (e.g., Andon Labs, BaseFrame, Doublezero, Relari).
* Mid-Tier: Recent 2026 funding rounds for growth-stage platforms including Gumloop ($50M), Dify ($30M), and Mastra ($22M).

## Gaps and open ground

The cluster is densely populated with horizontal builders and model-vendor SDKs. Open ground exists in specialized agent control planes for security and governance, as most current platforms treat governance as a feature rather than a primary infrastructure layer. There is also a gap in platforms specifically optimized for the "AI-native firm" model that sells end-to-end outcomes rather than software seats.
