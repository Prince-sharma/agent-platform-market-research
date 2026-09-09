---
name: Cloudflare Agents SDK
layer: L2
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L2
---

# Cloudflare Agents SDK

**Thesis (one line):** A developer toolkit for building and deploying durable, globally distributed AI agents on the Cloudflare Workers runtime.

## Facts

- Founded: unknown
- HQ: unknown
- YC batch: none
- Backers: unknown
- Funding: unknown
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Developers building AI agents
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** code
2. **Runtime and tenancy:** vendor multi-tenant SaaS
3. **Tool and integration strategy:** MCP, proprietary connectors (Browser, Sandbox, AI Search)
4. **Knowledge and data strategy:** built-in RAG (AI Search) and local SQL storage
5. **Autonomy and human-in-the-loop:** approval gates; supports both autonomous and human-in-the-loop patterns
6. **Governance and enterprise controls:** agent identity, observability (logs, metrics, traces)
7. **Pricing model:** unknown
8. **GTM motion:** PLG self-serve
9. **Moat thesis:** distribution (global network) and infrastructure integration (Workers)
10. **Open-source posture:** proprietary
11. **Task horizon:** persistent (always-on) with durable execution and scheduling

## Analysis

- **Agent capability depth:** End-to-end agent orchestration including communication channels (Slack, Voice, Email), sandboxed code execution, and machine payments.
- **Weaknesses:** High dependency on the Cloudflare ecosystem for full durability and scaling benefits.
- **Trajectory:** Strong developer adoption with 500k weekly downloads as of April 2026.
- **M&A:** none visible

## Sources

- seed:L2
- https://developers.cloudflare.com/agents/ (2026-09-09)
