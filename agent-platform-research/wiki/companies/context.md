---
name: Context
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: base
updated: 2026-09-09
sources: YC S26
---

# Context

**Thesis (one line):** A unified API providing AI agents with structured, real-time web data and document conversion to eliminate custom crawler maintenance.

## Facts

- Founded: 2026
- HQ: unknown
- YC batch: S26
- Backers: Y Combinator
- Funding: unknown
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Developers building AI agents and products requiring live web data
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** API-first (REST/JSON Schema)
2. **Runtime and tenancy:** multi-tenant SaaS
3. **Tool and integration strategy:** proprietary connectors (Web Scraping, Crawl, and Extract APIs)
4. **Knowledge and data strategy:** live sync with the web (real-time context)
5. **Autonomy and human-in-the-loop:** unknown
6. **Governance and enterprise controls:** unknown
7. **Pricing model:** unknown
8. **GTM motion:** PLG self-serve
9. **Moat thesis:** reduction of infrastructure complexity (proxies, browsers, parsers) for agent developers
10. **Open-source posture:** proprietary
11. **Task horizon:** single-turn to multi-step workflow (data retrieval/extraction)

## Analysis

- **Agent capability depth:** Agents can scrape URLs to Markdown/HTML, crawl entire sites for RAG, and extract schema-validated JSON data.
- **Weaknesses:** High dependency on the stability of third-party website structures and anti-bot measures.
- **Trajectory:** Expanding from simple scraping to complex, schema-driven data extraction for agentic workflows.
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; yc-2026.md), verified 2026-09-09
- Context.dev: Web Scraping & Crawl API for AI Agents (https://www.context.dev/), 2026-09-09
- Context.dev: We give AI agents realtime web context via API (https://www.ycombinator.com/companies/contextdev), 2026-09-09
- Launch YC: Context.dev: Live web data API for AI agents (https://www.ycombinator.com/launches/SPy-context-dev-live-web-data-api-for-ai-agents), 2026-08-05
