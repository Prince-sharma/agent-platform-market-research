---
name: Exa
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: YC S21
---

# Exa

**Thesis (one line):** Web search API built for AI — search, page contents, answers, and an async research Agent API over its own neural index.

## Facts

- Founded: 2021
- HQ: San Francisco, CA
- YC batch: S21
- Backers: Andreessen Horowitz (Series C lead), Benchmark (Series B lead), Lightspeed (Series A lead), NVentures, YC, Pioneer Fund
- Funding: ~$361M over 4 rounds; $250M Series C (May 20, 2026)
- Valuation: $2.2B (May 2026)
- Revenue/ARR: unknown
- ICP: AI app and agent developers, and enterprises
- Pricing model: Pay-as-you-go credits (search $7/1k requests, contents $1/1k pages, answer $5/1k, deep search $12-15/1k, agent $0.012-1.00/run)

## The eleven build decisions

1. **Build interface:** Code (REST API, SDKs)
2. **Runtime and tenancy:** Vendor multi-tenant SaaS; enterprise tier with custom indexes, QPS, SLAs
3. **Tool and integration strategy:** MCP (open-source Exa MCP server)
4. **Knowledge and data strategy:** Live web search and retrieval over its own neural index
5. **Autonomy and human-in-the-loop:** unknown
6. **Governance and enterprise controls:** Enterprise SLAs/MSAs, Zero Data Retention, custom rate limits
7. **Pricing model:** Pay-as-you-go per-request credits by endpoint
8. **GTM motion:** PLG self-serve plus sales-led enterprise
9. **Moat thesis:** AI-native search infrastructure — own index, embeddings-first retrieval
10. **Open-source posture:** Proprietary API with OSS SDKs and MCP server
11. **Task horizon:** Single-turn to long-horizon (async Agent API for deep research)

## Analysis

- **Agent capability depth:** Search, page contents, answers, and an async Agent API for automated research over its own neural index
- **Weaknesses:** Costs scale with endpoint, result count, and agent effort
- **Trajectory:** Scaling toward hundreds of thousands of searches/second for agentic workloads (May 2026)
- **M&A:** None visible

## Sources

- exa.ai/blog announcing Series C (May 20, 2026)
- a16z.com announcement (May 20, 2026)
- Bloomberg: Exa valued at $2.2B (May 20, 2026)
- exa.ai/docs/reference/pricing (Aug 20, 2026)
- ycombinator.com/companies/exa (Sep 2026)
