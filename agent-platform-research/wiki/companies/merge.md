---
name: Merge
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L1
---

# Merge

**Thesis (one line):** Unified API platform for HR, payroll, ticketing, and accounting data; pivoting from embedded integrations to the data-and-tools layer for agents.

## Facts

- Founded: 2020 (Shensi Ding CEO, Gil Feig CTO)
- HQ: New York, NY
- YC batch: none
- Backers: Accel (Series B lead), NEA (seed lead), Addition
- Funding: $74.5M: $4.5M seed (May 2021), $15M Series A (Nov 2021), $55M Series B (Oct 2022)
- Valuation: ~$317M (2023, Sacra estimate)
- Revenue/ARR: ~$20M (2023, Sacra estimate, low confidence); 2,500+ customers (Oct 2022)
- ICP: B2B SaaS product teams (embedded integrations); since 2025 also enterprises deploying agents
- Pricing model: Free 3 production linked accounts; Launch $650/mo up to 10 accounts plus $65/extra (Sep 2026)

## The eleven build decisions

1. **Build interface:** API-first unified API plus Merge Link embedded auth UI; Connector Studio with AI-generated connectors
2. **Runtime and tenancy:** Multi-tenant SaaS; single-tenant Merge-hosted option; US/EU/APAC data residency; no self-host
3. **Tool and integration strategy:** Proprietary unified API across HRIS, payroll, ATS, CRM, accounting, ticketing, file storage; Agent Handler Tool Packs positioned as MCP-server replacement
4. **Knowledge and data strategy:** Live normalized sync from systems of record; Knowledge Base Unified API (2026) for enterprise context
5. **Autonomy and human-in-the-loop:** Agent Handler rules and alerts as guardrails; evaluations suite; approval gates not core
6. **Governance and enterprise controls:** SOC 2 Type II, ISO 27001, HIPAA, GDPR, CCPA; audit trail (enterprise); field-level scopes, redaction
7. **Pricing model:** Per-linked-account subscription tiers plus overage
8. **GTM motion:** Sales-led with self-serve entry
9. **Moat thesis:** Normalized cross-category data layer plus managed maintenance; expanding into agent tools and LLM gateway
10. **Open-source posture:** Proprietary; no self-host
11. **Task horizon:** Persistent (always-on syncs) plus multi-step agent actions

## Analysis

- **Agent capability depth:** Unified API platform (auth, normalize, sync, monitor) plus Agent Handler (governed agent tool access, Oct 2025) and Gateway (LLM routing control plane, Mar 2026)
- **Weaknesses:** Per-linked-account costs scale poorly; breadth over depth per category; three-product AI pivot stretches focus
- **Trajectory:** "Restarted" around AI in 2025; ambitions to be the "AWS of AI" — data, tools, and model gateway
- **M&A:** None visible

## Sources

- merge.dev/pricing/unified (Sep 2026)
- merge.dev/security (Sep 2026)
- TechCrunch: Merge raises $55M Series B (Oct 24, 2022)
- merge.dev/blog Agent Handler (Oct 2025)
- merge.dev/blog Gateway announcement (Mar 31, 2026)
- Sacra company profile (2024)
