---
name: Hatchet
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L1;YC W24
---

# Hatchet

**Thesis (one line):** Open-source Postgres-backed orchestration engine for background tasks and durable agent workflows; simpler than Temporal, compliance-ready.

## Facts

- Founded: 2023
- HQ: New York, NY
- YC batch: W24
- Backers: Y Combinator, Ritual Capital (seed, Apr 2024, undisclosed)
- Funding: ~$0.5M seed (Apr 2024); no raise in 28 months (Seedtable, Jul 2026)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Developers at AI-first startups replacing queues and cron with durable orchestration
- Pricing model: Usage-based (Free 100k runs/mo then $10/1M; Team $500/mo; Enterprise $1,000/mo)

## The eleven build decisions

1. **Build interface:** Code; Python, TypeScript, Go, JavaScript SDKs; workflow-as-code
2. **Runtime and tenancy:** Hatchet Cloud (multi-tenant SaaS) plus self-host (OSS, Postgres-backed); BYOC mentioned
3. **Tool and integration strategy:** API, webhook, cron, and event triggers; no proprietary connector marketplace
4. **Knowledge and data strategy:** Postgres-backed task state; no RAG
5. **Autonomy and human-in-the-loop:** Durable tasks with pause/resume; concurrency limits, dynamic rate limiting, fair scheduling as guardrails
6. **Governance and enterprise controls:** RBAC, audit logs, SSO, SOC 2 Type II, HIPAA
7. **Pricing model:** Usage tiers: free 100k runs then $10/1M; $500/mo Team; $1,000/mo Enterprise
8. **GTM motion:** PLG self-serve plus OSS funnel (7.8k GitHub stars, MIT)
9. **Moat thesis:** Simplicity and Postgres durability versus Temporal; YC network
10. **Open-source posture:** OSS core (MIT); self-host; cloud proprietary
11. **Task horizon:** Multi-step workflows (minutes) to long-horizon durable tasks

## Analysis

- **Agent capability depth:** Queues, cron, concurrency and fair-scheduling policies, retries, and real-time observability for background tasks and AI agents
- **Weaknesses:** Tiny funding (~$0.5M) and team (~7 people); no raise since Apr 2024; throughput below dedicated queues per own benchmark
- **Trajectory:** Targeting AI-first companies; consolidating legacy orchestration with a compliance posture (SOC 2 Type II, HIPAA)
- **M&A:** None visible

## Sources

- hatchet.run/pricing (Sep 2026)
- github.com/hatchet-dev/hatchet (Sep 2026)
- seedtable.com/companies/hatchet-run (Jul 2026)
- ycombinator.com/companies/hatchet-run (Sep 2026)
