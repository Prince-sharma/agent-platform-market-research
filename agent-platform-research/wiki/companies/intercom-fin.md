---
name: Intercom Fin
layer: L5
scope: vertical
vertical: customer service
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L5;seed:L3
---

# Intercom Fin

**Thesis (one line):** An AI customer service agent providing end-to-end resolution across channels with a distinct outcome-based pricing model.

## Facts

- Founded: 2011
- HQ: San Francisco
- YC batch: none
- Backers: unknown
- Funding: unknown
- Valuation: unknown
- Revenue/ARR: nearing $100M (2026, estimated)
- ICP: Customer service teams, startups, and enterprises
- Pricing model: per outcome ($0.99 - $9.99) plus per seat platform fee

## The eleven build decisions

1. **Build interface:** natural language
2. **Runtime and tenancy:** vendor multi-tenant SaaS
3. **Tool and integration strategy:** MCP
4. **Knowledge and data strategy:** built-in RAG
5. **Autonomy and human-in-the-loop:** approval gates
6. **Governance and enterprise controls:** RBAC, audit trails, compliance certs, spend caps
7. **Pricing model:** per outcome
8. **GTM motion:** PLG self-serve
9. **Moat thesis:** distribution
10. **Open-source posture:** proprietary
11. **Task horizon:** multi-step workflow (minutes)

## Analysis

- **Agent capability depth:** Resolves queries end-to-end via knowledge base grounding, executes configured procedures, and handles sales qualification/disqualification across chat, email, and voice.
- **Weaknesses:** Costs scale linearly with successful automation, potentially creating budget unpredictability for high-volume users.
- **Trajectory:** Moving toward a fully integrated AI-first platform; parent company Intercom renamed itself to Fin in 2026.
- **M&A:** Parent company Fin (fka Intercom) agreed to be acquired by Salesforce for ~$3.6B (June 2026).

## Sources

- https://www.intercom.com/pricing — 2026-09-09: Pricing and plan details
- https://www.intercom.com/help/en/articles/8205718-fin-ai-agent-outcomes — 2026-07-30: Outcome definitions and pricing
- https://www.gleap.io/blog/intercom-fin-ai-pricing-2026 — 2026-04-20: Analysis of resolution pricing
- https://www.intercom.com/help/en/articles/7837535-fin-ai-agent-faqs — 2026-09-09: Setup and channel FAQs
- https://www.intercom.com/ai-chatbot — 2026-09-09: Capability and resolution claims
- https://techcrunch.com/2026/06/15/salesforce-acquires-ai-customer-service-platform-fin-for-3-6b/ — 2026-06-15: Parent company acquired by Salesforce
