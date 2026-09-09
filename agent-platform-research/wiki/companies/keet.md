---
name: Keet
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: base
updated: 2026-09-09
sources: YC S24
---

# Keet

**Thesis (one line):** Provides authentication and API wrappers for any website, enabling AI agents to perform authenticated actions on behalf of users.

## Facts

- Founded: 2024
- HQ: New York, New York
- YC batch: S24
- Backers: Y Combinator
- Funding: $500K total funding
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Developers building AI agents and automations requiring authenticated web access
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** API and SDK (TypeScript example provided)
2. **Runtime and tenancy:** multi-tenant SaaS
3. **Tool and integration strategy:** proprietary connectors; supports MCP server
4. **Knowledge and data strategy:** live sync with systems of record (automated data extraction and validation)
5. **Autonomy and human-in-the-loop:** unknown
6. **Governance and enterprise controls:** manages authenticated user sessions
7. **Pricing model:** unknown
8. **GTM motion:** unknown
9. **Moat thesis:** integrations (stable wrappers for sites without official APIs)
10. **Open-source posture:** proprietary
11. **Task horizon:** single-turn to multi-step workflow

## Analysis

- **Agent capability depth:** Agents can authenticate into legacy or consumer sites to extract data, submit forms, and post content (e.g., LinkedIn).
- **Weaknesses:** High dependency on the stability of target website DOMs/structures.
- **Trajectory:** Expanding from simple data extraction to a consolidated L1 authentication layer for the agentic web.
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; yc-2024.md), verified 2026-09-09
- Keet Documentation (https://docs.trykeet.com/overview/introduction), 2026-09-09
- Launch YC: Keet (https://www.ycombinator.com/launches/Ljk-keet-apis-for-any-website), 2024-08-28
- Welcome.AI Company Profile (https://www.welcome.ai/company/keet), 2026-09-09
