---
name: Atla
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: YC S23
---

# Atla

**Thesis (one line):** LLM-as-a-judge models (Selene) served via API to evaluate and guard AI agents; retired its observability product to go all-in on judges.

## Facts

- Founded: 2023
- HQ: London, UK
- YC batch: S23
- Backers: Creandum (seed lead), Rebel Fund, angels
- Funding: ~$5M seed (Dec 2023)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Developers building AI agents
- Pricing model: Free 2k traces/mo; Startup $199/mo (10k traces, 60-day retention); Custom self-hosted

## The eleven build decisions

1. **Build interface:** Code (API/SDK); auto-evaluation with low configuration
2. **Runtime and tenancy:** Multi-tenant SaaS; self-hosted on Custom tier
3. **Tool and integration strategy:** API plus MCP server (archived with Insights)
4. **Knowledge and data strategy:** Judge models; no RAG
5. **Autonomy and human-in-the-loop:** Judges are the guardrail on agent outputs
6. **Governance and enterprise controls:** SOC 2, HIPAA BAA (Startup tier); SSO/RBAC on Custom
7. **Pricing model:** Freemium subscription on traces
8. **GTM motion:** PLG developer free tier
9. **Moat thesis:** Judge model quality (Selene) plus price
10. **Open-source posture:** Proprietary API; open-weights Selene Mini model (Jan 2025)
11. **Task horizon:** Per-call judge inference

## Analysis

- **Agent capability depth:** Selene judge models auto-evaluate agent traces and guard outputs via API
- **Weaknesses:** Tiny ($5M raised); Insights observability product shut down Feb 2026 mid-pivot; small SDK footprint
- **Trajectory:** All-in on frontier judge models via API after retiring the observability product
- **M&A:** None visible

## Sources

- tech.eu: Atla $5M seed (Dec 7, 2023)
- atla-ai.com/pricing (Sep 2026)
- github.com/atla-ai/atla-insights-sdk (Sep 2026)
- huggingface.co/blog AtlaAI selene-1-mini (Jan 29, 2025)
