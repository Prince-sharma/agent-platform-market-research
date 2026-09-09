---
name: mcp-use
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: YC S25
---

# mcp-use

**Thesis (one line):** Open-source MCP framework and cloud (renamed Manufact, Feb 2026) for building and hosting MCP servers and apps; rides the connector-ecosystem wave.

## Facts

- Founded: 2025 (repo created Mar 2025)
- HQ: San Francisco, CA (Switzerland presence)
- YC batch: S25
- Backers: Peak XV (seed lead, Feb 2026), Liquid 2 Ventures, Pioneer Fund, YC
- Funding: ~$6.9M total; $6.3M seed (Feb 12, 2026)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Developers building MCP servers and apps; companies targeting ChatGPT and Claude connector ecosystems
- Pricing model: OSS free (MIT); cloud from ~$19/mo (low confidence, pricing page unreachable)

## The eleven build decisions

1. **Build interface:** Code (Python/TypeScript SDK) plus templates
2. **Runtime and tenancy:** Self-host (OSS, Docker/Node) plus Manufact cloud (multi-tenant)
3. **Tool and integration strategy:** MCP-native; the product is MCP tooling itself
4. **Knowledge and data strategy:** Infrastructure/framework; no RAG
5. **Autonomy and human-in-the-loop:** unknown
6. **Governance and enterprise controls:** Cloud auth and access control per docs; rest unknown
7. **Pricing model:** OSS free; hosted cloud subscription (details unverified)
8. **GTM motion:** PLG self-serve, OSS-to-cloud funnel
9. **Moat thesis:** OSS distribution (10,537 stars, 7M+ downloads, Sep 2026) riding MCP standard adoption
10. **Open-source posture:** OSS core (MIT); self-host option
11. **Task horizon:** Infrastructure; powers agents of any horizon

## Analysis

- **Agent capability depth:** mcp-use SDK is a fullstack framework to build MCP servers (for agents) and MCP apps (for ChatGPT/Claude); Manufact cloud deploys and hosts them
- **Weaknesses:** 4-person team (Jun 2026); crowded MCP tooling space; platform risk from OpenAI/Anthropic first-party tooling
- **Trajectory:** Renamed mcp-use to Manufact (Feb 2026); moving from agent-client library to the cloud for MCP servers/apps as ChatGPT and Claude connectors open up
- **M&A:** None visible

## Sources

- manufact.com/blog seed announcement (Feb 12, 2026)
- SiliconANGLE: Manufact raises $6.3M (Feb 12, 2026)
- github.com/mcp-use/mcp-use (Sep 2026)
- ycombinator.com/companies/manufact (2026)
- VentureBeat: Manufact seed coverage (Mar 11, 2026)
