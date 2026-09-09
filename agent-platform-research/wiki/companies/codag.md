---
name: Codag
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: base
updated: 2026-09-09
sources: YC S26
---

# Codag

**Thesis (one line):** Log compression infrastructure that reduces token costs and noise for AI agents debugging distributed systems.

## Facts

- Founded: 2026
- HQ: San Francisco
- YC batch: Summer 2026
- Backers: Y Combinator
- Funding: unknown
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Developers using AI coding agents (e.g., Claude Code, Cursor)
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** CLI and hosted HTTPS API
2. **Runtime and tenancy:** Multi-tenant SaaS (API) and local CLI
3. **Tool and integration strategy:** MCP server; supports Kubernetes, Docker, AWS CloudWatch, Vercel, Railway, Datadog, Sentry
4. **Knowledge and data strategy:** Live compression of log streams into schema-valid JSON
5. **Autonomy and human-in-the-loop:** unknown
6. **Governance and enterprise controls:** unknown
7. **Pricing model:** unknown
8. **GTM motion:** PLG self-serve (CLI/API)
9. **Moat thesis:** Token efficiency and noise reduction for agent context windows
10. **Open-source posture:** Open-source Go CLI (MIT License)
11. **Task horizon:** Single-turn to multi-step debugging workflows

## Analysis

- **Agent capability depth:** Agents can debug infrastructure incidents using compressed, ranked log patterns instead of raw, oversized log files.
- **Weaknesses:** High dependency on the adoption of specific AI coding agents and MCP standards.
- **Trajectory:** Expanding from a CLI tool to a broader AI gateway for permissioned and cheaper log access.
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; yc-2026.md), verified 2026-09-09
- Codag Official Site (https://codag.ai/), 2026-09-09
- Y Combinator Company Profile (https://www.ycombinator.com/companies/codag), 2026-09-09
- Codag CLI GitHub (https://github.com/codag-megalith/codag-cli), 2026-09-09
