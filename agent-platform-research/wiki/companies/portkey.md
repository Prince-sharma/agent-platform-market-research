---
name: Portkey
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L1, Elevation, Lightspeed
---

# Portkey

**Thesis (one line):** An AI gateway and control plane providing the reliability, observability, and governance layer required to move AI agents into production.

## Facts

- Founded: unknown
- HQ: San Francisco
- YC batch: none
- Backers: Elevation Capital (lead), Lightspeed
- Funding: $15M Series A, 2026-02-19
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: AI-forward enterprises and GenAI teams
- Pricing model: Tiered SaaS (Free, Pro, Enterprise) and Hybrid/Airgapped licenses

## The eleven build decisions

1. **Build interface:** Hybrid; provided via Universal API (REST and SDKs), CLI (`npx @portkey-ai/gateway`), and a control panel dashboard.
2. **Runtime and tenancy:** Multi-tenant SaaS, Hybrid, and Full Private (Airgapped) deployments where data and control planes run in the customer's cloud.
3. **Tool and integration strategy:** Universal API supporting 3000+ LLMs; supports Model Context Protocol (MCP) for connecting external tools and data sources.
4. **Knowledge and data strategy:** Observability-focused; records logs, traces, and custom metadata; provides semantic caching to reduce latency.
5. **Autonomy and human-in-the-loop:** Enforces real-time guardrails (input/output) to filter, fix, or route requests based on specified checks.
6. **Governance and enterprise controls:** SOC2, ISO27001, GDPR, HIPAA compliance; granular RBAC, PII anonymization, and FinOps spend visibility.
7. **Pricing model:** Tiered; Free (10k logs/mo), Pro ($49/mo), and Enterprise (negotiable terms based on volume and infrastructure).
8. **GTM motion:** PLG self-serve for Dev/Pro tiers; sales-led for Enterprise and Airgapped deployments.
9. **Moat thesis:** Infrastructure lock-in via the "in-path" gateway pattern, combining routing, observability, and governance in one control plane.
10. **Open-source posture:** Offers an open-source version of the Gateway alongside proprietary managed plans.
11. **Task horizon:** Single-turn to multi-step; focuses on the request/response path of agent actions.

## Analysis

- **Agent capability depth:** Enables agents to be production-ready by providing failover (fallbacks), load balancing, and deterministic guardrails for reliability.
- **Weaknesses:** High dependency on the "in-path" architecture which may introduce a single point of failure if not deployed in HA/Airgapped modes.
- **Trajectory:** Expanding from a simple gateway to a comprehensive "Unified Control Plane" for agent operations, focusing on financial certainty and technical reliability.
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; kp-infra.md;vc-in.md), verified 2026-09-09
- Portkey Raises $15M Series A to Scale the Unified Control Plane for Production AI (https://portkey.ai/blog/series-a-funding), 2026-02-19
- Portkey | Control Panel for Production AI — Pricing (https://portkey.ai/pricing), 2026-09-09
- Feature Comparison (https://docs.portkey.ai/docs/product/product-feature-comparison), 2026-09-09
- enterprise/pricing.mdx (https://github.com/Portkey-AI/docs-core/blob/main/enterprise/pricing.mdx), 2026-09-09
- AI Gateway (https://portkey.ai/docs/product/ai-gateway), 2026-09-09
- enterprise/tco-airgapped.mdx (https://github.com/Portkey-AI/docs-core/blob/main/enterprise/tco-airgapped.mdx), 2026-09-09
