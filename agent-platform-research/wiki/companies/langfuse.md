---
name: Langfuse
layer: L1
scope: horizontal
vertical: general
status: acquired
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L1;YC S23
---

# Langfuse

**Thesis (one line):** Open-source observability and engineering platform for tracing, evaluating, and improving production LLM applications and AI agents.

## Facts

- Founded: 2022
- HQ: Berlin, Germany
- YC batch: W23
- Backers: Lightspeed Venture Partners (seed lead), Y Combinator
- Funding: $4M seed led by Lightspeed (Nov 2023); CB Insights records $4.5M over 3 rounds. Census carries a $50M Series B (Mar 2026) that appears only in low-quality blog coverage and conflicts with the January 2026 acquisition
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: AI engineers and enterprises building production LLM applications
- Pricing model: Tiered SaaS (Hobby, Core, Pro) and Custom Enterprise self-hosted

## The eleven build decisions

1. **Build interface:** SDKs, API-first architecture, and a web dashboard for observability and prompt management.
2. **Runtime and tenancy:** Multi-tenant SaaS (Cloud) and self-hosted (Docker/Helm) options.
3. **Tool and integration strategy:** Integrates with OpenTelemetry, LangChain, OpenAI SDK, and LiteLLM.
4. **Knowledge and data strategy:** Bring-your-own store; self-hosted enterprise bundled with ClickHouse.
5. **Autonomy and human-in-the-loop:** Supports human feedback and annotation queues for evaluation.
6. **Governance and enterprise controls:** Project-level RBAC, audit logs, data retention policies, and SCIM (Enterprise).
7. **Pricing model:** Platform fee plus usage (units); Cloud plans start at $0 to $199/month with additional units at $8/100k.
8. **GTM motion:** PLG self-serve (Hobby/Core) and sales-led (Enterprise).
9. **Moat thesis:** Data gravity through production traces and workflow lock-in via the integrated engineering loop (tracing to evals).
10. **Open-source posture:** OSS core (MIT License) with a self-host option and a proprietary Enterprise license for advanced features.
11. **Task horizon:** Supports observability for single-turn and multi-step agent workflows.

## Analysis

- **Agent capability depth:** Provides the infrastructure to trace every request, manage prompt versions, and run evaluations to optimize agent quality and latency.
- **Weaknesses:** Heavy reliance on external database infrastructure (e.g., ClickHouse) for high-scale self-hosted deployments.
- **Trajectory:** Post-acquisition, deepening ClickHouse integration (self-hosted Enterprise is bundled with ClickHouse Cloud, BYOC, or Private) while expanding from tracing into a full "AI engineering loop" of experiments and datasets.
- **M&A:** Acquired by ClickHouse on 2026-01-16; operates as a ClickHouse subsidiary (CB Insights, PitchBook, YC directory). The census's $50M Series B (Mar 2026) is contradicted by both databases and rests on unreliable sourcing.

## Sources

- Phase 1 census (phase1-merged.tsv; kp-infra.md;yc-2023.md), verified 2026-09-09
- Langfuse raises $4M seed (https://langfuse.com/blog/announcing-our-seed-round), 2023-11-07
- Langfuse company profile (https://www.cbinsights.com/company/langfuse), 2026-09-09
- Langfuse company profile (https://pitchbook.com/profiles/company/517418-38), 2026-09-09
- Langfuse (https://www.ycombinator.com/companies/langfuse), 2026-09-09
- Pricing - Langfuse (https://langfuse.com/pricing), 2026-09-09
- Self-Hosted Pricing - Langfuse (https://langfuse.com/pricing-self-host), 2026-09-09
