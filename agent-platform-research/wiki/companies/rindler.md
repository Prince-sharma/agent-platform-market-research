---
name: Rindler
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: base
updated: 2026-09-09
sources: YC S26
---

# Rindler

**Thesis (one line):** A translation layer that turns any website into a deterministic API for AI agents to read data and perform actions.

## Facts

- Founded: unknown
- HQ: unknown
- YC batch: S26
- Backers: unknown
- Funding: unknown
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Developers building AI agents that need to interact with third-party websites without APIs.
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** MCP server and a `run` operation for task description.
2. **Runtime and tenancy:** Multi-tenant SaaS (browser runs on Rindler infrastructure).
3. **Tool and integration strategy:** MCP (Model Context Protocol).
4. **Knowledge and data strategy:** Maps sites into screens, actions, and structured outputs.
5. **Autonomy and human-in-the-loop:** Fully automated browser driving based on natural language descriptions.
6. **Governance and enterprise controls:** OAuth 2.0 PKCE authentication.
7. **Pricing model:** unknown
8. **GTM motion:** unknown
9. **Moat thesis:** Ability to turn any website into a deterministic API without manual scripts or selectors.
10. **Open-source posture:** Proprietary.
11. **Task horizon:** Multi-step workflow (minutes).

## Analysis

- **Agent capability depth:** Agents can sign into authenticated portals, search listings, fill forms, and extract structured data from any website.
- **Weaknesses:** Dependence on the stability of target website UI/UX despite the "deterministic API" claim.
- **Trajectory:** Expanding from a simple translation layer to a comprehensive MCP-based web automation infrastructure.
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; yc-2026.md), verified 2026-09-09
- Rindler Official Site (https://rindler.ai/), 2026-09-09
- Launch YC: Rindler (https://www.ycombinator.com/launches/RHN-rindler-turn-any-website-into-an-api-for-ai-agents), 2026-07-09
- Rindler Documentation (https://rindler.ai/docs), 2026-09-09
