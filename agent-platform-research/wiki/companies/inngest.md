---
name: Inngest
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L1
---

# Inngest

**Thesis (one line):** Durable step-function platform for event-driven agents; functions retry, persist state, and fan out without developers managing infrastructure.

## Facts

- Founded: 2021 (product launched 2022)
- HQ: US (Inngest Inc; city undisclosed)
- YC batch: none
- Backers: Altimeter (Series A lead), a16z, Notable, Afore, Guillermo Rauch
- Funding: $30.1M over 4 rounds; $21M Series A (Sep 16, 2025)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Developers shipping event-driven workflows and AI agents
- Pricing model: Usage-based (Hobby $0 with 50k executions/mo; Pro $99/mo with 500k, then ~$0.50/1M)

## The eleven build decisions

1. **Build interface:** Code; step.run() functions via TypeScript, JavaScript, Python, Go SDKs; no canvas
2. **Runtime and tenancy:** Inngest Cloud (multi-tenant SaaS) plus self-host since 1.0 (Jan 2026; Helm, Postgres, Redis)
3. **Tool and integration strategy:** Event and webhook triggers; official MCP servers for coding agents like Claude Code and Cursor (Oct 2025); no connector marketplace
4. **Knowledge and data strategy:** Event-driven functions over the user's own stores; no built-in RAG
5. **Autonomy and human-in-the-loop:** step.waitForEvent() supports approvals and human-in-the-loop; concurrency, throttling, priorities as guardrails
6. **Governance and enterprise controls:** RBAC, audit logs, SAML SSO on Enterprise plan
7. **Pricing model:** Usage-based subscriptions: free Hobby tier, $99/mo Pro, custom Enterprise
8. **GTM motion:** PLG self-serve, dev-server-first developer experience
9. **Moat thesis:** Developer experience and step-function model lock-in; OSS distribution (5.8k GitHub stars)
10. **Open-source posture:** Source-available core (SSPL 1.0 at 1.0, Jan 2026, Apache-2.0 planned); self-host supported
11. **Task horizon:** Multi-step to long-horizon (durable sleeps, waitForEvent)

## Analysis

- **Agent capability depth:** Durable functions that retry, persist state, and fan out, with flow control and observability; runs on serverless, servers, or edge
- **Weaknesses:** Small team (~25 employees); SSPL license not OSI-approved; self-host only since Jan 2026
- **Trajectory:** Open-sourced core with self-hosting (Jan 2026); AI-agent orchestration focus after $21M Series A (Sep 2025)
- **M&A:** None visible

## Sources

- inngest.com/blog Series A announcement (Sep 16, 2025)
- inngest.com/blog Inngest 1.0 self-hosting (Jan 7, 2026)
- inngest.com/pricing (Sep 2026)
- github.com/inngest/inngest (Sep 2026)
- CB Insights company financials (Sep 2025)
