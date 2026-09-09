---
name: camelAI
layer: L3
scope: vertical
vertical: data & analytics
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: YC W24
---

# camelAI

**Thesis (one line):** An AI business intelligence agent that converts natural language into SQL, dashboards, and deep research reports for structured data.

## Facts

- Founded: 2023
- HQ: San Francisco
- YC batch: W24
- Backers: Y Combinator Continuity Fund, Team Ignite Ventures, Orange Collective
- Funding: $500K, Seed, Apr 2024
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Vertical SaaS platforms, data companies, and enterprise teams
- Pricing model: Flat-rate inference ($5/stream/month) or B2B tiers (Pro $200/month + usage)

## The eleven build decisions

1. **Build interface:** natural language
2. **Runtime and tenancy:** vendor multi-tenant SaaS; dedicated VPC available for Enterprise
3. **Tool and integration strategy:** proprietary connector library (50+ sources including Snowflake, BigQuery, Postgres)
4. **Knowledge and data strategy:** live sync with systems of record
5. **Autonomy and human-in-the-loop:** fully autonomous SQL generation and visualization; guardrails via row-level security
6. **Governance and enterprise controls:** RBAC (row-level security for multi-tenant architecture)
7. **Pricing model:** platform fee plus usage (Pro) or flat-rate (inference streams)
8. **GTM motion:** PLG self-serve (no sales calls/demos required)
9. **Moat thesis:** price (unmetered inference) and distribution via embeddable API
10. **Open-source posture:** proprietary
11. **Task horizon:** multi-step workflow (minutes) to persistent (scheduled cron reports)

## Analysis

- **Agent capability depth:** End-to-end BI: connects to databases, writes optimized SQL, generates interactive charts, and publishes polished notebooks/dashboards to live URLs.
- **Weaknesses:** unknown
- **Trajectory:** Expanding from a BI agent into a broader AI infrastructure provider offering unmetered inference streams and coding agents.
- **M&A:** none visible

## Sources

- YC W24
- camelai.com, accessed 2026-09-09
- ycombinator.com/companies/camelai, accessed 2026-09-09
- indexed.vc/companies/usecamelai, accessed 2026-09-09
