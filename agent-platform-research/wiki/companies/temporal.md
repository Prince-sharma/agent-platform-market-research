---
name: Temporal
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L1;Amplify Partners;Lightspeed
---

# Temporal

**Thesis (one line):** Durable execution engine whose code-first workflows persist state and recover from failure; the reliability layer long-running AI agents are being built on.

## Facts

- Founded: 2019 (Samar Abbas CEO, Maxim Fateev CTO; AWS and Uber Cadence lineage)
- HQ: Bellevue, WA
- YC batch: none
- Backers: a16z (Series D lead), Madrona, 22+ investors
- Funding: $649.5M over 9 rounds; $300M Series D (Feb 17, 2026)
- Valuation: $5B (Feb 2026)
- Revenue/ARR: unknown; revenue reported roughly doubled in 2026 (The New Stack, Aug 2026, medium confidence)
- ICP: Platform and backend teams at tech-first enterprises; AI agent teams
- Pricing model: Platform fee plus usage (Essentials $100/mo, Business $500/mo, metered actions and storage)

## The eleven build decisions

1. **Build interface:** Code-first; workflows in Go, Java, TypeScript, Python, .NET, PHP SDKs; no canvas
2. **Runtime and tenancy:** Multi-tenant Temporal Cloud plus full self-host (OSS); namespace isolation
3. **Tool and integration strategy:** Code calls any API; community MCP server (Oct 2025); no proprietary connector marketplace
4. **Knowledge and data strategy:** Bring-your-own store; workflow state persisted in Temporal; no built-in RAG
5. **Autonomy and human-in-the-loop:** Durable signals, updates, and timers support approval gates; guardrails expressed in code
6. **Governance and enterprise controls:** RBAC, audit logging, SOC 2 Type 2, mTLS, service accounts, namespaces
7. **Pricing model:** Platform fee plus usage: $100/mo Essentials, $500/mo Business, metered actions ($50/first 5M) and storage
8. **GTM motion:** OSS-led PLG with self-serve cloud tiers plus enterprise sales
9. **Moat thesis:** Durable-execution workflow lock-in plus MIT-licensed de facto standard (2,900+ customers, 1T monthly actions)
10. **Open-source posture:** OSS core (MIT, "100% open source"); full self-host
11. **Task horizon:** Long-horizon (days to months), fault-tolerant

## Analysis

- **Agent capability depth:** Not an agent itself; the execution substrate agents run on. Workflows-as-code with persisted state, automatic recovery, and Nexus cross-namespace service calls (GA Mar 2025)
- **Weaknesses:** Developer-only interface; multi-component usage pricing hard to predict; heavyweight for simple jobs
- **Trajectory:** $300M Series D explicitly framed around making agentic AI real (Feb 2026); expanding Nexus and agent tooling
- **M&A:** None visible

## Sources

- temporal.io/news Series D announcement (Feb 17, 2026)
- Reuters: Temporal raises $300M in a16z-led round at $5B (Feb 17, 2026)
- temporal.io/about (Sep 2026)
- docs.temporal.io/cloud/pricing (Sep 2026)
- The New Stack: Temporal AI adoption (Aug 2026)
