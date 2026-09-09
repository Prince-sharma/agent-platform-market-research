# L5: Incumbent Suite Agent Platforms

## Scope

14 companies profiled in this cluster during Phase 2 (assignment file: data/phase2-assignments/p2-5-l5.txt).

## Notable companies

- **Salesforce Agentforce** — the traction leader: $800M AI ARR across 29K deals, Flex Credits per-action pricing, and the cluster's largest move, acquiring Fin for ~$3.6B.
- **Microsoft Copilot Studio** — low-code builder plus the Agent 365 control plane; Microsoft claims 80% of the Fortune 500 run active agents.
- **ServiceNow AI Agents** — workflow platform repositioned as the agent control tower; bought Moveworks ($2.85B), Logik.ai, and Cuein.
- **Google Gemini Enterprise (ex-Agentspace)** — $30 per seat bundled with Workspace; champions the open A2A agent protocol.
- **Intercom Fin** — outcome-pricing pioneer at $0.99 per resolution, nearing $100M ARR; being absorbed by Salesforce.
- **Zendesk AI Agents** — Resolution Platform with per-resolution pricing; absorbed Ultimate (2024) and Forethought (2026).
- **HubSpot Agent Hub** — ex-Breeze; pay-on-completion agent pricing; acquired Dashworks (April 2025).
- **UiPath Agentic Automation** — RPA incumbent rebuilt around Agent Builder and Maestro long-horizon orchestration.
- **Atlassian Rovo** — agents bundled into paid cloud editions; 2.4M business workflows reported.
- **GitHub Copilot Coding Agent** — autonomous issue-to-PR agent for 20M+ developers; usage billed in AI credits.

## Patterns across the eleven build decisions

- **Build interface:** converged on natural language plus a low-code studio with prebuilt role agents (Copilot Studio, Agentforce Builder, Zia Agent Studio, Agent Builder, AI Agent Studio). No pro-code-first suite offering.
- **Runtime:** 14 of 14 are vendor multi-tenant SaaS; none offer self-host. Agents are cloud consumption by definition here.
- **Integrations:** proprietary connector libraries anchored to the suite's system of record; MCP is the emerging external-tool standard (Atlassian, HubSpot, Zoho, Intercom Fin, Google), while Google pushes A2A and ServiceNow adopts it.
- **Knowledge:** live sync with the suite's own system of record is the default grounding; CX agents add RAG over customer knowledge bases.
- **Autonomy:** approval gates are standard (12 of 14); only Zendesk and Zoho market fully autonomous agents.
- **Governance:** RBAC and audit trails are universal; a second-wave control plane is emerging (Microsoft Agent 365, ServiceNow AI Control Tower, Salesforce Digital Wallet spend caps).
- **Pricing:** the most experimental decision. Per-action (Agentforce Flex Credits at $0.10), per-outcome (Fin $0.99, Zendesk per resolution, HubSpot pay-on-completion), prepaid credits (Copilot Credits, GitHub AI credits at $0.01, UiPath Platform/Agent Units), per seat (Gemini Enterprise $30), or bundled into suite tiers (Rovo, ServiceNow Pro Plus). BlackLine, Workiva, and Zoho publish no agent pricing.
- **GTM:** bundle into the installed base is the universal play; sales-led except PLG at GitHub, Intercom Fin, and Atlassian.
- **Moat:** distribution plus data gravity of the system of record; agents defend suite seats rather than stand alone.
- **Open source:** proprietary products throughout; Google's Agent Development Kit is the only OSS framework; open protocols (MCP, A2A) are the open surface.
- **Task horizon:** multi-step minutes everywhere; long-horizon via case management (UiPath Maestro, ServiceNow); persistent always-on emerging (Salesforce, Google).

## Consolidation and M&A

- Salesforce agreed to acquire Fin (formerly Intercom) for ~$3.6B (June 2026) — buying the outcome-pricing CX leader rather than competing with it.
- ServiceNow acquired Moveworks ($2.85B, closed December 2025), Logik.ai, and Cuein.
- Zendesk absorbed Ultimate (2024) and Forethought (2026).
- HubSpot acquired Dashworks (April 2025).
- Intercom renamed itself Fin (May 2026), then agreed to sell: standalone agents adjacent to suites get absorbed, not funded.
- Implication: suites buy proven agent teams instead of building; the acquired are overwhelmingly CX and employee-support agents with outcome-based pricing.

## Traction distribution

- Disclosed numbers: Salesforce $800M AI ARR (29K deals); Microsoft 80% of Fortune 500 claim; Fin $400M total ARR with the Fin agent near $100M; ServiceNow $200M ACV on its AI Pro Plus tier (Dec 2024); GitHub Copilot 20M+ developers; Atlassian 2.4M workflows; Zendesk deployments at Qantas Loyalty and Serko; UiPath wins at Merck, One NZ, The Very Group.
- Ownership skews public: 10 of 14 sit inside public companies (MSFT, CRM, NOW, GOOGL, TEAM, PATH, BL, WK, HUBS, GitHub under MSFT); Zendesk is PE-held (H&F and Permira); Zoho is private; Fin is exiting via acquisition.
- No seed tail exists in this cluster by construction; the "tail" is thin disclosure, with most suites hiding agent revenue inside suite SKUs.

## Gaps and open ground

- Pricing comparability: per-action, per-outcome, and credit models have no common unit; buyers cannot compare agent economics across suites.
- Interoperability is contested ground: A2A versus MCP versus proprietary; the suite that wins cross-vendor interop wins multi-vendor estates.
- Governance control planes just launched (Agent 365, AI Control Tower); agent identity, spend governance, and audit standards remain immature.
- The value tier is thin: Zoho is the only suite publicly committed to low agent pricing.
- Vertical finance suites (BlackLine, Workiva) ship agents without published pricing or adoption evidence, leaving their agentic traction unmeasurable.
