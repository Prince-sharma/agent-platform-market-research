---
name: LangGraph
layer: L2
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:OSS;seed:L2
---

# LangGraph

**Thesis (one line):** A low-level, graph-based orchestration framework and runtime for building reliable, stateful, and long-running enterprise AI agents.

## Facts

- Founded: unknown
- HQ: unknown
- YC batch: none
- Backers: unknown
- Funding: unknown
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Developers and enterprises building bespoke, complex agentic workflows
- Pricing model: MIT-licensed open-source library (free)

## The eleven build decisions

1. **Build interface:** code
2. **Runtime and tenancy:** vendor multi-tenant SaaS (via LangSmith Deployment) and self-host
3. **Tool and integration strategy:** proprietary connector library (via LangChain integrations)
4. **Knowledge and data strategy:** built-in RAG and persistence (short-term and long-term memory)
5. **Autonomy and human-in-the-loop:** approval gates (human-in-the-loop for inspecting and modifying state)
6. **Governance and enterprise controls:** audit trails and observability (via LangSmith)
7. **Pricing model:** unknown
8. **GTM motion:** PLG self-serve
9. **Moat thesis:** workflow lock-in and evals (via LangSmith integration)
10. **Open-source posture:** OSS core (MIT-licensed); self-host option
11. **Task horizon:** long-horizon (hours to weeks)

## Analysis

- **Agent capability depth:** Enables mixing deterministic hand-coded steps with LLM-driven agentic steps to create stateful, multi-actor applications.
- **Weaknesses:** Very low-level framework requiring significant developer effort compared to high-level abstractions.
- **Trajectory:** Strong growth as the de facto standard for agent orchestration, with v1.0 GA in October 2025.
- **M&A:** none visible

## Sources

- ext:OSS
- seed:L2
- https://www.langchain.com/langgraph (2026-09-09)
- https://docs.langchain.com/oss/python/langgraph/overview (2026-09-09)
