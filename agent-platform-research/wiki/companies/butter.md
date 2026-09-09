---
name: Butter
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: base
updated: 2026-09-09
sources: YC W25
---

# Butter

**Thesis (one line):** Behavior cache for LLMs; records agent tool-call trajectories and replays them as "muscle memory" while staying aware of dynamic data.

## Facts

- Founded: unknown
- HQ: San Francisco, CA (hiring)
- YC batch: W25
- Backers: YC; other backers unknown
- Funding: unknown
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Teams cutting agent latency and cost on repeated workflows
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** LLM proxy (drop-in)
2. **Runtime and tenancy:** Proxy between agents and LLMs
3. **Tool and integration strategy:** Records and replays tool-call trajectories
4. **Knowledge and data strategy:** Trajectory cache aware of dynamic data
5. **Autonomy and human-in-the-loop:** unknown
6. **Governance and enterprise controls:** unknown
7. **Pricing model:** unknown
8. **GTM motion:** Developer PLG implied
9. **Moat thesis:** Cache hit-rate economics
10. **Open-source posture:** unknown
11. **Task horizon:** unknown

## Analysis

- **Agent capability depth:** LLM proxy that records agent/LLM trajectories and replays them as "muscle memory," staying aware of dynamic data
- **Weaknesses:** Model providers' own prompt caching (Anthropic, OpenAI) erodes the value proposition
- **Trajectory:** Early YC-stage; hiring a systems engineer in SF
- **M&A:** None visible

## Sources

- Phase 1 census, YC W25 sweep (verified 2026-09-09)
- news.ycombinator.com Butter launch thread (2026)
