---
name: Augment Code
layer: L3
scope: vertical
vertical: software engineering
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L3
---

# Augment Code

**Thesis (one line):** Codebase-aware AI coding agents providing end-to-end software engineering automation for enterprise teams to improve productivity and software quality.

## Facts

- Founded: 2022
- HQ: Palo Alto, California
- YC batch: none
- Backers: Sutter Hill Ventures (led Series A), Index Ventures, Innovation Endeavors, Lightspeed Venture Partners, Meritech Capital
- Funding: $252M total; $227M Series B (2024-04-24)
- Valuation: $977M post-money (2024-04-24)
- Revenue/ARR: ~$20M ARR est. (2025)
- ICP: Enterprise software engineering teams
- Pricing model: Credit-based usage (pooled credits)

## The eleven build decisions

1. **Build interface:** IDE (Augment panel), CLI, and chat (natural language)
2. **Runtime and tenancy:** Vendor multi-tenant SaaS
3. **Tool and integration strategy:** MCP and Native Tools
4. **Knowledge and data strategy:** Built-in Context Engine for codebase awareness
5. **Autonomy and human-in-the-loop:** Approval gates; agent provides plans and implements steps, but "never merges on its own"
6. **Governance and enterprise controls:** SOC 2 Type II, ISO 42001, CMEK, SSO, OIDC, SCIM, and "No AI training allowed"
7. **Pricing model:** Business plan: $100/month flat (up to 50 seats) including $100 usage; Enterprise: Custom user pricing and volume-based annual discounts
8. **GTM motion:** Hybrid PLG (trial with 30,000 credits) and sales-led (Enterprise)
9. **Moat thesis:** Codebase awareness via Context Engine and custom AI models tuned for code to avoid hallucinations
10. **Open-source posture:** Proprietary
11. **Task horizon:** Multi-step workflow (implementing features, upgrading dependencies, writing pull requests)

## Analysis

- **Agent capability depth:** Agents perform end-to-end tasks including feature implementation, dependency upgrades, and deep code reviews. The Cosmos "software factory" runs fleets of agents for CI failure investigation, PR enforcement, and security vulnerability triage.
- **Weaknesses:** unknown
- **Trajectory:** Moving toward a "programmable software factory" model (Cosmos) that automates the SDLC via event-driven agent fleets.
- **M&A:** none visible

## Sources

- Phase 1 census (verified 2026-09-09): ext:L3
- https://www.augmentcode.com/pricing — Pricing plans and enterprise controls
- https://www.augmentcode.com/blog/our-new-credit-based-plans-are-now-live — Credit-based pricing migration
- https://agentcode.ai/augment-code-pricing — 2026 pricing changes and retired tiers
- https://www.augmentcode.com/blog/augment-codes-pricing-is-changing — Shift to usage-based credits
- https://pitchbook.com/profiles/company/530746-75 — Founding date and employee count
- https://www.augmentcode.com/blog/augment-inc-raises-227-million — Funding and valuation details
- https://www.augmentcode.com/product/cosmos — Cosmos agent fleet capabilities
- https://docs.augmentcode.com/using-augment/agent — Agent workflow and capabilities
