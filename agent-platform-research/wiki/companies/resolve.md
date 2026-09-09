---
name: Resolve
layer: L3
scope: vertical
vertical: IT ops (SRE)
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L3;Greylock
---

# Resolve

**Thesis (one line):** AI SRE agents that automate production operations and incident management to reduce operational toil and improve system reliability.

## Facts

- Founded: 2024
- HQ: San Francisco
- YC batch: none
- Backers: Lightspeed Venture Partners (lead), Greylock Partners, Unusual Ventures, Artisanal Ventures, A*
- Funding: >$150M total; $125M Series A (2026-02-04)
- Valuation: $1B (2026-02-04)
- Revenue/ARR: unknown
- ICP: Large technology, financial services, and consumer application companies (e.g., Coinbase, DoorDash, Salesforce)
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** Natural language via Slack, Microsoft Teams, and the terminal.
2. **Runtime and tenancy:** Vendor multi-tenant SaaS (implied by "deployments" and "enterprise-grade controls").
3. **Tool and integration strategy:** Proprietary integrations across the production stack (code, observability, deployments, cloud infrastructure, configuration).
4. **Knowledge and data strategy:** Live sync with systems of record; combines foundation models with custom models that learn environment-specific tribal knowledge and operational patterns.
5. **Autonomy and human-in-the-loop:** Hybrid; provides actionable recommendations and works alongside engineers while "keeping humans in control."
6. **Governance and enterprise controls:** Enterprise-grade controls (specifics like RBAC/audit trails not detailed but mentioned as a priority).
7. **Pricing model:** unknown
8. **GTM motion:** Sales-led (targeting global enterprise deployments).
9. **Moat thesis:** Data gravity and specialized context; agents learn unique, undocumented tribal knowledge of a company's specific production environment.
10. **Open-source posture:** Proprietary (though founders co-created OpenTelemetry).
11. **Task horizon:** Multi-step workflow (incident diagnosis, rollback decisions, capacity adjustments).

## Analysis

- **Agent capability depth:** End-to-end AI SRE capabilities including triaging alerts, autonomously investigating and resolving incidents, performing rollback decisions, and suggesting guided code changes.
- **Weaknesses:** High dependency on the quality of fragmented telemetry data and undocumented tribal knowledge.
- **Trajectory:** Moving toward "closed-loop systems" and proactive prevention/containment of issues before they affect customers.
- **M&A:** none visible

## Sources

- Phase 1 census (verified 2026-09-09)
- https://resolve.ai/blog/series-a-funding (2026-07-17)
- https://techcrunch.com/2026/02/04/ai-sre-resolve-ai-confirms-125m-raise-unicorn-valuation/ (2026-02-04)
- https://www.prnewswire.com/news-releases/resolve-ai-announces-125m-series-a-at-1b-valuation-to-fix-production-operations-with-ai-302678486.html (2026-02-04)
- https://greylock.com/blog/introducing-resolve/ (2024-10-01)
- https://www.reuters.com/technology/artificial-intelligence/greylock-backed-resolve-ai-raises-35-million-seed-funding-help-engineers-2024-10-01/ (2024-10-01)
