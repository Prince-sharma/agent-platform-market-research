---
name: Keywords AI
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: YC W24
---

# Keywords AI

**Thesis (one line):** A unified LLM engineering platform providing an AI gateway, observability, and evaluations to help teams build and optimize reliable AI agents.

## Facts

- Founded: 2023
- HQ: San Francisco, California
- YC batch: W24
- Backers: Y Combinator Continuity Fund, Gradient Ventures, Hat Trinity
- Funding: $5.5M total, $5.0M Seed (March 2026)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: AI startups and enterprise teams building LLM applications and agents
- Pricing model: Tiered SaaS (Free, Team, Enterprise)

## The eleven build decisions

1. **Build interface:** Unified API (OpenAI-compatible), SDKs, and a web dashboard for monitoring and prompt management.
2. **Runtime and tenancy:** Multi-tenant SaaS.
3. **Tool and integration strategy:** Proprietary AI gateway supporting 250-1,000+ models with built-in routing and load balancing.
4. **Knowledge and data strategy:** Built-in logging and dataset creation for evaluations and fine-tuning.
5. **Autonomy and human-in-the-loop:** Supports human-in-the-loop evaluations combined with automated LLM judges.
6. **Governance and enterprise controls:** SOC 2 report, HIPAA BAA, spend limits, alerts, and RBAC (implied by shared workspaces).
7. **Pricing model:** Platform fee ($199/mo for Team) with usage-based limits on logs, scores, and datasets.
8. **GTM motion:** PLG self-serve (free tier) and sales-led for Enterprise.
9. **Moat thesis:** Workflow lock-in by unifying the "control plane" (gateway, observability, and evals) into a single loop.
10. **Open-source posture:** Proprietary.
11. **Task horizon:** Supports multi-step workflows via agent tracing.

## Analysis

- **Agent capability depth:** Enables developers to trace complex agent behavior, route requests across hundreds of models, and iteratively improve performance via automated evals.
- **Weaknesses:** The AI gateway introduces a latency overhead of 50-150ms, which may be unsuitable for strict real-time requirements.
- **Trajectory:** Rebranded as Respan to pivot from a general DevOps tool to a "self-driving" control plane specifically for AI agents.
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; yc-2024.md), verified 2026-09-09
- Pricing | Respan (https://www.respan.ai/pricing)
- Respan unifies LLM observability, evals, and gateway for 100+ AI startups – Top AI Product (https://topaiproduct.com/2026/06/11/respan-unifies-llm-observability-evals-and-gateway-for-100-ai-startups/), 2026-06-12
- Self-driving observability, evals, and gateway for AI agents — Y Combinator (https://www.ycombinator.com/companies/respan)
- Respan Gateway bundles AI routing, observability, evals, and cost controls into o… - NG Tech LLC (https://ngtech.app/insights/2026-06-13-respan-gateway-bundles-ai-routing-observability-evals-and-cost-controls-into-o), 2026-06-13
- Keywords AI Funding: $5.5M Raised, Investors & History (2026) | Indexed.vc (https://indexed.vc/companies/keywordsai)
- Respan (Keywords AI Inc.) LinkedIn (https://www.linkedin.com/company/keywordsai), 2025-04-18
