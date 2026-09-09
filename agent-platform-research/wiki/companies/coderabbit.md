---
name: CodeRabbit
layer: L3
scope: vertical
vertical: software engineering
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L3
---

# CodeRabbit

**Thesis (one line):** An autonomous AI code review platform that automates quality gates to reduce bottlenecks caused by AI-generated code.

## Facts

- Founded: 2023
- HQ: San Francisco
- YC batch: none
- Backers: Scale Venture Partners (lead), NVentures: NVIDIA Venture Capital, CRV, Harmony Partners, Flex Capital, Engineering Capital, Pelion Venture Partners
- Funding: $143M total (2026); last round $60M Series B (2025-09-16)
- Valuation: $1.5B (2026)
- Revenue/ARR: unknown
- ICP: Open source projects, individual developers, and regulated/large enterprise teams
- Pricing model: Per developer per month (billed annually)

## The eleven build decisions

1. **Build interface:** Pull requests, IDE (VS Code extension), CLI, and agentic chat
2. **Runtime and tenancy:** Vendor multi-tenant SaaS; self-hosted AWS infrastructure mentioned as a non-fit for some budgets
3. **Tool and integration strategy:** Integrations with Jira, Linear, and MCP connections; supports linters and SAST tools
4. **Knowledge and data strategy:** Context-aware AI reviews; multi-repo analysis (Team plan) and code graph analysis (Enterprise)
5. **Autonomy and human-in-the-loop:** Agentic reviews with 1-click fixes and custom pre-merge checks acting as quality gates
6. **Governance and enterprise controls:** SLA support, dedicated CSM, and agreement redlining for Enterprise customers
7. **Pricing model:** Per seat; Essentials ($24/dev/mo), Team ($48/dev/mo), Advanced ($72/dev/mo), plus usage-based add-ons
8. **GTM motion:** PLG self-serve (14-day free trial, Free/OSS tier) and sales-led Enterprise
9. **Moat thesis:** Workflow lock-in via deep PR integration and context-aware quality gates for AI-generated code
10. **Open-source posture:** Proprietary; offers Free/OSS access for public repositories
11. **Task horizon:** Multi-step workflow (minutes) providing feedback within minutes of PR creation

## Analysis

- **Agent capability depth:** Agents perform autonomous code reviews on PRs, providing summaries, bug detection (null pointers, race conditions), and 1-click fixes. They integrate with external tools and support iterative loops with coding agents.
- **Weaknesses:** High cost for self-hosted AWS infrastructure options.
- **Trajectory:** Expanding into "quality gates" to manage the surge of buggy AI-generated code ("vibe coding").
- **M&A:** Acquired FluxNinja.

## Sources

- Phase 1 census (verified 2026-09-09): ext:L3
- https://www.coderabbit.ai/pricing — Pricing tiers and feature sets
- https://docs.coderabbit.ai/management/plans — Plan comparisons and trial details
- https://kb.coderabbit.ai/articles/2544860735-how-do-I-learn-more-about-CodeRabbit-subscription-plans — Enterprise feature list
- https://www.businesswire.com/news/home/20250916401011/en/CodeRabbit-Raises-%2460M-Series-B-Following-Unprecedented-Growth-as-Vibe-Coding-Triggers-a-Need-for-New-Code-Quality-Standards — Series B funding and investors
- https://techcrunch.com/2025/09/16/coderabbit-raises-60m-valuing-the-2-year-old-ai-code-review-startup-at-550m/ — Founding date and FluxNinja acquisition
- https://www.coderabbit.ai/enterprise — Customer base and enterprise value proposition
- https://docs.coderabbit.ai/guides/code-review-overview — Technical overview of bug detection capabilities
