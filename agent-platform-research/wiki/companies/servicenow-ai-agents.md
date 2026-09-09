---
name: ServiceNow AI Agents
layer: L5
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: gtm:inc;seed:L5
---

# ServiceNow AI Agents

**Thesis (one line):** Workflow platform turned agent control tower providing an orchestrator to manage specialized AI agents across enterprise IT, HR, and customer service.

## Facts

- Founded: 2004
- HQ: Santa Clara, CA
- YC batch: none
- Backers: public company (NOW)
- Funding: public company (NOW)
- Valuation: unknown
- Revenue/ARR: $2.96B subscription revenue (Q4 2024); $200M ACV for Pro Plus AI tier (Dec 2024)
- ICP: Large enterprises (ITSM, HR, Customer Service)
- Pricing model: AI-native licensing (Prime/Pro Plus tiers)

## The eleven build decisions

1. **Build interface:** natural language (via AI Agent Studio)
2. **Runtime and tenancy:** vendor multi-tenant SaaS
3. **Tool and integration strategy:** proprietary connector library (Action Fabric / A2A protocol)
4. **Knowledge and data strategy:** live sync with systems of record (single data model)
5. **Autonomy and human-in-the-loop:** approval gates; guardrails (set in AI Agent Studio)
6. **Governance and enterprise controls:** RBAC, audit trails, AI Control Tower for central governance
7. **Pricing model:** platform fee plus usage (AI-native SKUs/Prime)
8. **GTM motion:** sales-led
9. **Moat thesis:** data gravity, workflow lock-in, distribution (installed base)
10. **Open-source posture:** proprietary
11. **Task horizon:** multi-step workflow (minutes) to long-horizon (hours to weeks)

## Analysis

- **Agent capability depth:** End-to-end task automation using an Orchestrator to coordinate specialized agents for ticket resolution and case triage.
- **Weaknesses:** High dependency on the Now Platform ecosystem for maximum efficacy.
- **Trajectory:** Moving toward an "Autonomous Workforce" via ServiceNow Otto to handle jobs rather than just tasks.
- **M&A:** Acquired Moveworks ($2.85B, Dec 2025), Logik.ai, and Cuein.

## Sources

- https://venturebeat.com/technology/agentic-ai-needs-orchestration-how-servicenows-ai-orchestrator-automates-complex-enterprise-workflows — 2025-01-29: Orchestrator and Studio details
- https://www.reuters.com/technology/servicenow-buy-ai-firm-moveworks-29-billion-tap-new-customers-2025-03-10/ — 2025-03-10: Moveworks acquisition price
- https://newsroom.servicenow.com/press-releases/details/2025/ServiceNow-announces-new-agentic-AI-innovations-to-autonomously-solve-the-most-complex-enterprise-challenges-01-29-2025-traffic/default.aspx — 2025-01-29: Agent control tower announcement
- https://www.servicenow.com/products/ai-agents.html — n.d.: Product capabilities and Otto
- https://www.servicenow.com/community/upgrades-and-patching-forum/servicenow-ai-native-licensing-in-2026-a-practical-guide-to/td-p/3565858 — 2026-06-29: AI-native licensing guide
