---
name: Zep
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L1;YC W24
---

# Zep

**Thesis (one line):** Long-term agent memory built on temporal knowledge graphs (Graphiti OSS); expanding toward an enterprise "Context Lake."

## Facts

- Founded: 2023
- HQ: San Francisco, CA
- YC batch: W24
- Backers: Y Combinator; ~4 investors total, no VC lead disclosed
- Funding: ~$2.3M total across 3 rounds; latest $500K convertible note (Jan 2024)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: AI and agent teams, startups to Fortune 500
- Pricing model: Metered $1.25/1k messages plus $2.50/MB; Flex $125/mo and Flex Plus $375/mo credit plans (Sep 2026)

## The eleven build decisions

1. **Build interface:** Code (SDKs/API)
2. **Runtime and tenancy:** Zep Cloud multi-tenant plus VPC and BYOC (Sep 2026)
3. **Tool and integration strategy:** MCP server (Sep 2026)
4. **Knowledge and data strategy:** Built-in temporal knowledge graphs with live chat and business-data ingestion
5. **Autonomy and human-in-the-loop:** unknown
6. **Governance and enterprise controls:** SOC 2 Type II, HIPAA BAA, audit and API logs
7. **Pricing model:** Metered per-message and per-MB with prepaid credit plans
8. **GTM motion:** PLG self-serve plus sales-led
9. **Moat thesis:** Data gravity via temporal knowledge-graph memory (Graphiti OSS)
10. **Open-source posture:** OSS core (Graphiti) plus managed cloud; self-host/BYOC
11. **Task horizon:** Persistent (always-on long-term memory)

## Analysis

- **Agent capability depth:** Ingests chat and business data, maintains entity facts over time, serves context with sub-200ms retrieval
- **Weaknesses:** Infrastructure strain under rapid scale-up (latency 200ms to 2s during a 30x usage spike, Nov 2025); tiny funding
- **Trajectory:** Expanding from memory layer toward a "Context Lake" for enterprise agent infrastructure
- **M&A:** None visible

## Sources

- getzep.com (Sep 2026)
- ycombinator.com/companies/zep-ai (Sep 2026)
- blog.getzep.com metered billing and BYOC (Sep 2026)
- github.com/getzep/graphiti (Sep 2026)
- blog.getzep.com scaling agent memory 30x (Nov 6, 2025)
