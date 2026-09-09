---
name: LiteLLM
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L1
---

# LiteLLM

**Thesis (one line):** An open-source LLM gateway standardizing 100+ model APIs into a unified OpenAI-compatible interface for enterprise routing, spend tracking, and governance.

## Facts

- Founded: 2023
- HQ: San Francisco, CA
- YC batch: Winter 2023
- Backers: Y Combinator, Gravity Fund, Pioneer Fund
- Funding: $12M total raised (Phase 1 census, verified 2026-09-09); public databases show only a $1.6M seed (Aug 2023) as the latest disclosed round
- Valuation: unknown
- Revenue/ARR: $10M+ ARR (reported 2026, confidence: medium)
- ICP: AI developers, DevOps teams, and engineering leaders managing multi-model infrastructure
- Pricing model: Open-core (Free self-hosted / Annual Enterprise quote)

## The eleven build decisions

1. **Build interface:** Code-first via Python SDK and FastAPI server; configuration via `config.yaml` and Admin UI.
2. **Runtime and tenancy:** Self-hosted (including air-gapped) and managed cloud SaaS.
3. **Tool and integration strategy:** MCP Gateway, OpenTelemetry logging, and integrations with Datadog.
4. **Knowledge and data strategy:** Memory management for user preferences and feedback scoped per user/team.
5. **Autonomy and human-in-the-loop:** Enforces guardrails and policies on requests/responses.
6. **Governance and enterprise controls:** RBAC, audit logs, SSO/SCIM, OIDC/JWT auth, and spend caps (per key, user, team, or org).
7. **Pricing model:** Free for open-source; Enterprise is priced based on gateway scale (not per token).
8. **GTM motion:** PLG self-serve via open-source adoption leading to Enterprise sales.
9. **Moat thesis:** Integration breadth (100+ LLMs) and becoming the standardized proxy layer for enterprise LLM access.
10. **Open-source posture:** OSS core (MIT License) with a proprietary Enterprise tier for governance and security.
11. **Task horizon:** Single-turn to multi-step (supports agent session-level caps and iterations).

## Analysis

- **Agent capability depth:** Provides the routing, budget enforcement, and unified API layer that allows agents to switch models dynamically and track costs.
- **Weaknesses:** High TCO for "free" tier due to required infrastructure and DevOps labor for production deployments.
- **Trajectory:** Expanding from a simple proxy to a comprehensive AI Gateway including MCP and Agent-specific routing and budgeting. Funding databases (PitchBook, Caplight) record only the 2023 seed; the census's $12M total implies an undisclosed later round.
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; kp-infra.md), verified 2026-09-09
- LiteLLM AI Gateway (LLM Proxy) | liteLLM (https://docs.litellm.ai/docs/simple_proxy), 2026-09-09
- AI Gateway for Agents, MCPs & LLM Routing | LiteLLM (https://www.litellm.ai/ai-gateway), 2026-09-09
- LiteLLM pricing (https://www.litellm.ai/pricing), 2026-09-09
- Enterprise AI Gateway for Secure LLM Access | LiteLLM (https://www.litellm.ai/enterprise), 2026-09-09
- LiteLLM 2026 Company Profile | PitchBook (https://pitchbook.com/profiles/company/520687-72), 2026-09-09
- BerriAI / LiteLLM | IntelPilot.ai (https://www.intelpilot.ai/company/berriai-litellm/6a07d103a6715bdc309662ae), 2026-09-09
