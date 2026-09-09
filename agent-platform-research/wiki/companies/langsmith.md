---
name: LangSmith
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L1
---

# LangSmith

**Thesis (one line):** LangChain's flagship observability and evaluation platform for debugging, testing, and monitoring production LLM-powered agents.

## Facts

- Founded: 2023
- HQ: San Francisco, California
- YC batch: none
- Backers: IVP (lead), Sequoia, Benchmark, Amplify, CapitalG, Sapphire Ventures
- Funding: $160M total; $125M Series B on 2025-10-20
- Valuation: $1.25B (2025-10-20)
- Revenue/ARR: $16M ARR (2025, reported by GetLatka)
- ICP: AI engineering teams, from AI-native startups to global enterprises
- Pricing model: Per seat plus usage (LCUs/LSUs)

## The eleven build decisions

1. **Build interface:** Hybrid; SDKs for tracing and a web dashboard for evaluation, prompt engineering, and no-code agent building.
2. **Runtime and tenancy:** Multi-tenant SaaS with self-hosted and hybrid deployment options for Enterprise customers.
3. **Tool and integration strategy:** Deeply integrated with LangChain and LangGraph ecosystems.
4. **Knowledge and data strategy:** Observability-focused; stores traces and application data for analysis and evaluation.
5. **Autonomy and human-in-the-loop:** Provides tools for human-led evaluation and debugging of agent traces.
6. **Governance and enterprise controls:** Custom SSO, ABAC, RBAC, and support SLAs for Enterprise plans.
7. **Pricing model:** Per seat ($0 or $39/mo) plus usage-based billing via LangChain Compute Units (LCU) and Storage Units (LSU).
8. **GTM motion:** PLG self-serve (Developer/Plus tiers) and sales-led (Enterprise).
9. **Moat thesis:** Distribution via LangChain's massive developer base and data gravity from production traces.
10. **Open-source posture:** Proprietary SaaS with a self-host option for Enterprise customers.
11. **Task horizon:** Supports monitoring of everything from single-turn calls to long-horizon agentic workflows.

## Analysis

- **Agent capability depth:** Enables developers to build, deploy, and scale reliable agents via a control plane, agent servers, and no-code "Fleet" tools.
- **Weaknesses:** Trace-based billing can lead to unpredictable costs as agent "chattiness" increases.
- **Trajectory:** Moving toward a full "agent engineering" platform, expanding from simple observability into deployment and management (Control Plane).
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; kp-infra.md), verified 2026-09-09
- LangChain raises $125M to build the platform for agent engineering (https://www.langchain.com/blog/series-b), 2025-10-20
- LangChain Revenue 2025: $16M ARR, $1.3B Valuation - GetLatka (https://getlatka.com/companies/langchain), 2026-08-24
- LangSmith Plans and Pricing (https://www.langchain.com/pricing), 2026-09-09
- Self-hosted LangSmith (https://docs.langchain.com/langsmith/self-hosted), 2026-09-09
- Enable additional LangSmith features (https://docs.langchain.com/langsmith/deploy-self-hosted-full-platform), 2026-09-09
- LangSmith pricing in 2026: tiers, costs, and what to watch for | Coverge (https://coverge.ai/blog/langsmith-pricing), 2026-04-14
