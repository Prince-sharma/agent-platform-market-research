---
name: Laminar
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: YC S24
---

# Laminar

**Thesis (one line):** Open-source observability platform purpose-built to debug and evaluate long-running, complex AI agents.

## Facts

- Founded: 2024
- HQ: San Francisco, CA
- YC batch: S24
- Backers: Atlantic.vc (lead), Y Combinator, AAL.vc, Ben Sigelman, Ant Wilson
- Funding: $3M seed, 2026-03-16
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Developers building autonomous AI agents, specifically browser-based agents
- Pricing model: Usage-based (Data GB and Signals tokens)

## The eleven build decisions

1. **Build interface:** SDK (TypeScript/Python) and dashboards
2. **Runtime and tenancy:** Multi-tenant SaaS and self-host
3. **Tool and integration strategy:** OpenTelemetry-native
4. **Knowledge and data strategy:** Tracing and storage of agent runs (inputs, reasoning, tool calls)
5. **Autonomy and human-in-the-loop:** Observability and evaluation layer; does not enforce gates but surfaces failures
6. **Governance and enterprise controls:** unknown
7. **Pricing model:** Platform fee ($30/mo Starter) plus usage (per GB of data and per token for Signals)
8. **GTM motion:** PLG self-serve (Free and Starter tiers)
9. **Moat thesis:** Deep integration with long-horizon agent trajectories and open-source distribution
10. **Open-source posture:** OSS core (Apache License 2.0); self-host option available
11. **Task horizon:** Long-horizon (supports agents running for 40+ minutes with hundreds of steps)

## Analysis

- **Agent capability depth:** Enables developers to pinpoint exact failure steps in long-running agents and run offline evaluations to compare prompt/model versions.
- **Weaknesses:** Pricing model is complex and difficult to forecast due to the "Signals" token-based billing axis.
- **Trajectory:** Expanding from basic tracing to a full debugging suite including browser session recording and natural language trace querying.
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; yc-2024.md), verified 2026-09-09
- Pricing | Laminar (https://laminar.sh/pricing)
- Laminar - Open-source observability for AI agents (https://laminar.sh/)
- lmnr-ai/lmnr (https://github.com/lmnr-ai/lmnr)
- Laminar Pricing Explained (2026) (https://llmtools.cc/blog/laminar-pricing/), 2026-07-26
- Laminar raised $3M to build observability for long-running agents (https://laminar.sh/blog/2026-03-16-laminar-launch), 2026-03-16
- Agent debugging startup Laminar raises $3M seed (https://tech.eu/2026/03/17/agent-debugging-startup-laminar-raises-3m-seed-to-tackle-the-observability-gap-in-ai-agents/), 2026-03-17
