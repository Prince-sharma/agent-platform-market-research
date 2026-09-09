---
name: OpenRouter
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L1
---

# OpenRouter

**Thesis (one line):** Unified routing API and marketplace for LLM inference; 400+ models across 70+ providers with failover, now routing ~25T tokens weekly.

## Facts

- Founded: 2023 (Alex Atallah, OpenSea co-founder, CEO)
- HQ: New York, NY
- YC batch: none
- Backers: CapitalG (Series B lead, May 2026), a16z and Menlo Ventures (seed/A, Jun 2025), Sequoia, NVentures, ServiceNow, MongoDB, Snowflake, Databricks ventures
- Funding: $153M: $40M seed plus Series A (Jun 2025) plus $113M Series B (May 2026)
- Valuation: $500M (Jun 2025) to $1.3B (May 2026)
- Revenue/ARR: $100M+ annual run-rate inference spend (May 2025); ~25T tokens/week (May 2026)
- ICP: AI developers and startups self-serve; enterprises running multi-model production AI
- Pricing model: Pass-through token pricing plus 5.5% platform fee on credit purchases; BYOK $25k/mo list then 5%

## The eleven build decisions

1. **Build interface:** Config/API; OpenAI-compatible unified API, routing rules, provider preferences; no canvas
2. **Runtime and tenancy:** Multi-tenant SaaS, edge-deployed (~25ms overhead); no self-host
3. **Tool and integration strategy:** Model layer, not tools: 400+ models, 70+ providers, marketplace with rankings and per-token pricing
4. **Knowledge and data strategy:** Routes inference; zero-logging default, no training on prompts
5. **Autonomy and human-in-the-loop:** Guardrails are provider failover, budgets and spend caps, data-policy routing
6. **Governance and enterprise controls:** SOC 2 Type 2; enterprise SSO/SAML, managed policy enforcement, zero-data-retention, spend management, activity logs
7. **Pricing model:** Pass-through token pricing plus 5.5% platform fee (min $0.80; crypto 5.0%); enterprise fee discounts
8. **GTM motion:** PLG (8M+ developers, May 2026) plus enterprise sales motion from Series B
9. **Moat thesis:** Model and provider breadth, routing reliability, developer distribution
10. **Open-source posture:** Proprietary; OpenAI-compatible open API standard
11. **Task horizon:** Inference layer serving all horizons, single-turn to long-horizon agent loops

## Analysis

- **Agent capability depth:** Unified LLM routing API and marketplace with failover, cost/latency/quality-aware routing, unified billing, and BYOK
- **Weaknesses:** Thin margins on pass-through; providers can disintermediate; enterprise compliance depth is recent
- **Trajectory:** Enterprise gateway consolidation — strategic cloud and data investors, multimodal inference, quality-aware routing
- **M&A:** None visible

## Sources

- openrouter.ai/pricing (Sep 2026)
- openrouter.ai/blog Series B (May 28, 2026)
- GlobeNewswire $40M release (Jun 25, 2025)
- TechCrunch $1.3B valuation (May 26, 2026)
- trust.openrouter.ai (Sep 2026)
