---
name: Decagon
layer: L3
scope: vertical
vertical: customer service
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L3;a16z, Accel;Coatue
---

# Decagon

**Thesis (one line):** AI concierge platform whose autonomous support agents resolve tickets end-to-end across chat, email, and voice for digital-first enterprises.

## Facts

- Founded: 2023 (August; Jesse Zhang, Ashwin Sreenivas)
- HQ: San Francisco (additional offices New York, London)
- YC batch: none
- Backers: Coatue and Index Ventures (led $250M Series D, Jan 2026); a16z, Accel (led $35M Series A), Bain Capital Ventures, Ribbit, Forerunner
- Funding: $481M total; $250M Series D (Jan 2026)
- Valuation: $4.5B (Jan 2026)
- Revenue/ARR: $100M ARR (Aug 2026, reported by Newcomer)
- ICP: Enterprise CX teams at digital-first brands (Notion, Duolingo, Eventbrite among customers)
- Pricing model: Per-conversation or per-resolution (outcome-based)

## The eleven build decisions

1. **Build interface:** Natural-language agent operating procedures for non-technical users; declarative configuration for integrations.
2. **Runtime and tenancy:** Vendor multi-tenant SaaS.
3. **Tool and integration strategy:** Proprietary connector library, self-serve APIs, and MCP open connectivity.
4. **Knowledge and data strategy:** Built-in RAG with live sync from knowledge bases (Confluence, Contentful, Kustomer) plus live web search.
5. **Autonomy and human-in-the-loop:** Fully autonomous resolution with Watchtower always-on QA and simulated-conversation validation; human escalation supported.
6. **Governance and enterprise controls:** RBAC, SSO (Okta, Microsoft Entra), SOC 2, PII redaction, audit logs.
7. **Pricing model:** Per-conversation (fixed rate) or per-resolution (higher rate for successful outcomes).
8. **GTM motion:** Sales-led enterprise motion.
9. **Moat thesis:** Integration depth, outcome-aligned pricing, engineering brand, and quality tooling (Watchtower).
10. **Open-source posture:** Proprietary.
11. **Task horizon:** Multi-step workflows (minutes) across chat, email, and voice.

## Analysis

- **Agent capability depth:** End-to-end ticket resolution: CRM data retrieval, API-triggered actions (refunds, subscriptions), voice-channel authentication.
- **Weaknesses:** Declarative integration model may limit complex custom logic; competition from Sierra and incumbent CX suites.
- **Trajectory:** From support deflection to an "AI Concierge" replacing traditional service-cloud seats; hit $100M ARR in Aug 2026.
- **M&A:** None visible.

## Sources

- Phase 1 census (verified 2026-09-09)
- https://decagon.ai/blog/series-d-announcement (2026-01-27)
- https://www.businesswire.com/news/home/20260128580542/en/Decagons-Valuation-Triples-to-%244.5-Billion-as-it-Ushers-in-the-Age-of-AI-Concierge (2026-01-28)
- https://siliconangle.com/2026/01/28/decagon-ai-raises-250m-4-5b-valuation-scale-ai-concierge-platform/ (2026-01-28)
- https://www.bloomberg.com/news/articles/2026-01-28/ai-customer-support-startup-decagon-valued-at-4-5-billion (2026-01-28)
- https://decagon.ai/blog/pricing-ai-agents (2024-12-10)
- https://trust.decagon.ai/ (2026-09-09)
- https://decagon.ai/security (2026-09-09)
- https://decagon.ai/product/integrations (2026-09-09)
- https://decagon.ai/product/watchtower (2026-09-09)
- https://engineering.decagon.ai/blog/custom-integrations-without-custom-infrastructure (2026-07-03)
- https://www.newcomer.co/p/decagon-hit-100-million-betting-against (2026-08-11)
- https://en.wikipedia.org/wiki/Decagon_(company) (2026-09-09)
