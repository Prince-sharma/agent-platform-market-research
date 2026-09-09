---
name: Galileo
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L1
---

# Galileo

**Thesis (one line):** An evaluation and observability platform that converts offline AI evaluations into real-time production guardrails for reliable enterprise agents.

## Facts

- Founded: unknown
- HQ: San Francisco
- YC batch: none
- Backers: Scale Venture Partners (lead), Databricks Ventures, Premji Invest, Amex Ventures, Citi Ventures, ServiceNow, SentinelOne, Battery Ventures, Walden Capital, The Factory
- Funding: $68M total; $45M Series B (2024-10-15)
- Valuation: unknown
- Revenue/ARR: 834% revenue growth since beginning of 2024 (reported 2024-10-15)
- ICP: Enterprise AI teams and developers deploying AI agents at scale
- Pricing model: Freemium (Free, Pro, Enterprise)

## The eleven build decisions

1. **Build interface:** SDK and dashboards for capturing groundtruth, building evals, and monitoring.
2. **Runtime and tenancy:** Multi-tenant SaaS.
3. **Tool and integration strategy:** unknown
4. **Knowledge and data strategy:** Build datasets from synthetic, development, and live production data; supports subject matter expert annotations.
5. **Autonomy and human-in-the-loop:** Provides real-time guardrails to stop prompt attacks, data leaks, and hallucinations in < 200ms.
6. **Governance and enterprise controls:** Standard RBAC (available in Pro/Enterprise).
7. **Pricing model:** Per usage unit (traces); Free ($0), Pro ($100/mo for 50k traces), Enterprise (custom).
8. **GTM motion:** PLG self-serve (Free/Pro) and sales-led (Enterprise).
9. **Moat thesis:** Evals and cost-efficiency via Luna SLMs, which reduce evaluation costs by 96-97% compared to LLM-as-judge.
10. **Open-source posture:** Proprietary.
11. **Task horizon:** Supports single-turn RAG and multi-step agentic workflows (minutes to hours).

## Analysis

- **Agent capability depth:** Enables developers to observe agent decision-making, perform failure mode analysis, and implement low-latency guardrails for autonomous processes.
- **Weaknesses:** Positioned as overkill for basic monitoring needs compared to simpler logging tools like LangSmith.
- **Trajectory:** Moving toward a comprehensive "Agent Reliability Platform" focusing on the maturity gap between agent demos and production-scale deployment.
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; kp-infra.md), verified 2026-09-09
- Galileo Raises $45M Series B Funding to Bring Evaluation Intelligence to Generative AI Teams Everywhere (https://www.prnewswire.com/news-releases/galileo-raises-45m-series-b-funding-to-bring-evaluation-intelligence-to-generative-ai-teams-everywhere-302276383.html), 2024-10-15
- Announcing our Series B, Evaluation Intelligence Platform (https://galileo.ai/blog/announcing-our-series-b), 2024-10-15
- Galileo Pricing (https://galileo.ai/pricing), 2026-09-09
- Introducing Galileo's Agent Reliability Platform (https://galileo.ai/blog/galileo-agent-reliability-platform), 2026-06-09
- Galileo AI Evals Pricing & Features (2026) | RightAIChoice (https://rightaichoice.com/tools/galileo-ai-evals), 2026-05-25
- AI Agent Evaluation: Key Methods & Insights (https://galileo.ai/blog/ai-agent-evaluation), 2026-02-24
