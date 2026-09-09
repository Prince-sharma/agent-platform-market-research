---
name: Okta Agent Identity Center
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L1
---

# Okta Agent Identity Center

**Thesis (one line):** Provides identity, authorization, and governance for AI agents, treating them as first-class identities to secure the agentic enterprise.

## Facts

- Founded: unknown
- HQ: unknown
- YC batch: none
- Backers: unknown
- Funding: unknown
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Enterprises deploying autonomous AI agents across diverse ecosystems.
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** Okta Admin Console for management; token exchange configuration via developer guides/API.
2. **Runtime and tenancy:** Multi-tenant SaaS.
3. **Tool and integration strategy:** Proprietary connectors; supports Amazon Bedrock AgentCore and any identity provider.
4. **Knowledge and data strategy:** Live sync with systems of record via identity directory and System Log events.
5. **Autonomy and human-in-the-loop:** Enforces approval gates via human owner assignment and access certifications.
6. **Governance and enterprise controls:** RBAC, audit trails (System Log), agent identity, least privilege policies, and time-bound access.
7. **Pricing model:** unknown
8. **GTM motion:** Sales-led (Enterprise flagship product).
9. **Moat thesis:** Distribution through existing identity footprint and deep integration into enterprise SSO/governance workflows.
10. **Open-source posture:** Proprietary; supports open Cross App Access (XAA) standard.
11. **Task horizon:** Persistent (always-on identity and runtime governance).

## Analysis

- **Agent capability depth:** Enables agents to securely authenticate, perform agent-to-agent calls, and access protected resources on behalf of users via token exchange.
- **Weaknesses:** Core SKU excludes advanced features like ISPM and Governance Analyzer, potentially limiting visibility for some tiers.
- **Trajectory:** Expanding from basic identity to runtime governance via the Agent Gateway to control real-time agent actions.
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; kp-infra.md), verified 2026-09-09
- Okta for AI Agents | Govern Agentic Identity (https://www.okta.com/products/govern-ai-agent-identity/), 2026-09-09
- Okta for AI Agents is Now Generally Available (https://www.okta.com/blog/ai/okta-for-ai-agents-general-availability/), 2026-04-29
- Okta expands AI agent security to support new... (https://www.okta.com/newsroom/articles/okta-expands-ai-agent-security-to-any-idp/), 2026-05-14
- Okta brings first-class identity to AI agents with Agent SSO (https://www.okta.com/newsroom/press-releases/okta-brings-first-class-identity-to-ai-agents-with-agent-sso/), 2026-08-24
- Introducing Agent Gateway: Runtime AI agent governance (https://www.okta.com/blog/product-innovation/agent-gateway-runtime-governance/), 2026-07-23
- Set up AI agent token exchange | Okta Developer (https://developer.okta.com/docs/guides/ai-agent-token-exchange/authserver/main/), 2026-09-09
