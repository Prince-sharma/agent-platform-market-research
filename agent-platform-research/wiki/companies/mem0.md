---
name: Mem0
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L1;YC S24
---

# Mem0

**Thesis (one line):** Memory layer for AI agents; extracts and stores user and entity facts, retrieves personalized context via vector plus graph memory.

## Facts

- Founded: 2023
- HQ: San Francisco, CA
- YC batch: S24
- Backers: Basis Set Ventures (Series A lead), Kindred Ventures (seed lead), Peak XV, YC, GitHub Fund; angels incl. Scott Belsky and Dharmesh Shah
- Funding: $24M total across seed plus Series A (announced Oct 28, 2025)
- Valuation: unknown
- Revenue/ARR: ~$1M (getlatka, Jun 2024; low confidence, stale)
- ICP: AI agent and app developers, and enterprises
- Pricing model: Freemium usage tiers (Hobby free, Starter $19/mo, Growth $79/mo, Pro $249/mo)

## The eleven build decisions

1. **Build interface:** Code (Python/JS SDKs, REST API)
2. **Runtime and tenancy:** Vendor multi-tenant SaaS plus self-host (Docker, OSS)
3. **Tool and integration strategy:** MCP (OpenMemory local MCP server plus hosted Mem0 MCP) plus SDK integrations
4. **Knowledge and data strategy:** Built-in memory (vector plus graph) with BYO vector store in OSS
5. **Autonomy and human-in-the-loop:** unknown
6. **Governance and enterprise controls:** Audit logs, per-user API keys, enterprise-tier controls
7. **Pricing model:** Freemium subscription by usage
8. **GTM motion:** PLG self-serve plus sales-led
9. **Moat thesis:** Data gravity — memory quality grows with usage, high switching cost
10. **Open-source posture:** OSS core (Apache-2.0) plus hosted platform
11. **Task horizon:** Persistent (always-on memory across sessions and agents)

## Analysis

- **Agent capability depth:** Memory layer: extracts and stores user/entity facts, retrieves personalized context via vector plus graph memory; managed API and self-hosted OSS
- **Weaknesses:** Graph memory gated to Pro/Enterprise tiers (Sep 2026)
- **Trajectory:** Shifting from vector retrieval toward relational and graph memory for complex entity tracking
- **M&A:** None visible

## Sources

- PR Newswire: Mem0 raises $24M Series A (Oct 28, 2025)
- ycombinator.com/companies/mem0 (Sep 2026)
- mem0.ai/pricing (Sep 2026)
- docs.mem0.ai/platform/mem0-mcp (Sep 2026)
- github.com/mem0ai/mem0 (Sep 2026)
