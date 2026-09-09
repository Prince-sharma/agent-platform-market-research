---
name: Arize
layer: L1
scope: horizontal
vertical: general
status: acquired
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L1;Foundation Capital;Battery
---

# Arize

**Thesis (one line):** AI observability and evals platform (Phoenix OSS) for LLMs and agents; acquired by Dynatrace for $915M as its AI observability anchor.

## Facts

- Founded: 2020 (Jason Lopatecki CEO, Aparna Dhinakaran)
- HQ: Berkeley, CA
- YC batch: none
- Backers: Adams Street Partners (Series C lead), Battery, Foundation Capital
- Funding: $131M total; $70M Series C (Feb 2025)
- Valuation: $915M acquisition price (Aug 2026)
- Revenue/ARR: unknown (third-party estimate $10-20M, low confidence)
- ICP: AI and ML engineering teams shipping LLM apps and agents
- Pricing model: Free tier (25k spans, 15-day retention); Pro $50/mo; Enterprise custom

## The eleven build decisions

1. **Build interface:** Code-first (Python/JS SDKs, notebooks) plus UI dashboards and playground
2. **Runtime and tenancy:** Multi-tenant SaaS; Enterprise tier adds self-hosted
3. **Tool and integration strategy:** OpenTelemetry standard plus Phoenix remote MCP server
4. **Knowledge and data strategy:** Ingests traces and eval data; no RAG
5. **Autonomy and human-in-the-loop:** Evals and monitors act as guardrails; human annotations
6. **Governance and enterprise controls:** SOC 2 Type II, HIPAA, GDPR, SSO, audit logs, org/space RBAC (Enterprise)
7. **Pricing model:** Freemium subscription tiers on spans and retention
8. **GTM motion:** PLG free tier plus enterprise sales; OSS Phoenix funnel
9. **Moat thesis:** OSS Phoenix distribution plus eval depth; trace data gravity
10. **Open-source posture:** OSS core (Phoenix) plus proprietary AX SaaS; self-host option
11. **Task horizon:** Observes agents of any horizon

## Analysis

- **Agent capability depth:** Tracing (OTel), automated error discovery (Signal), online/offline evals, agent-as-judge, experimentation, prompt tooling
- **Weaknesses:** Absorbed into Dynatrace (Aug 2026); standalone roadmap tied to acquirer
- **Trajectory:** Now Dynatrace's AI observability anchor; Phoenix OSS continues
- **M&A:** Acquired by Dynatrace for $915M (announced Aug 13, 2026)

## Sources

- PR Newswire: Arize $70M Series C (Feb 20, 2025)
- arize.com/pricing (Sep 2026)
- Dynatrace IR: acquisition press release (Aug 13, 2026)
- arize.com/about (Sep 2026)
