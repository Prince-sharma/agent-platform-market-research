---
name: Cline
layer: L3
scope: vertical
vertical: software engineering
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L3
---

# Cline

**Thesis (one line):** An open-source autonomous coding agent providing developers full control over AI spend and model choice within their IDE and terminal.

## Facts

- Founded: unknown
- HQ: San Francisco, California
- YC batch: none
- Backers: Emergence Capital (lead), Pace Capital (lead), 1984 Ventures, Essence VC, Cox Exponential
- Funding: $32M total (Series A and Seed, 2025-07-31)
- Valuation: $110M (2025-07-31)
- Revenue/ARR: unknown
- ICP: Individual developers and enterprise software engineering teams
- Pricing model: Freemium; usage-based AI inference and optional subscriptions

## The eleven build decisions

1. **Build interface:** VS Code extension, CLI, and SDK for embedding in products; interacts via natural language.
2. **Runtime and tenancy:** Client-side architecture; supports hosted providers or local models (Ollama, LM Studio).
3. **Tool and integration strategy:** Deep Model Context Protocol (MCP) support to connect browsers, databases, and internal tools.
4. **Knowledge and data strategy:** Ability to explore large projects and understand codebase structure, dependencies, and behavior.
5. **Autonomy and human-in-the-loop:** Approval gates; requires permission for creating/editing files, running commands, and using the browser.
6. **Governance and enterprise controls:** Enterprise tier includes SSO, SLA, RBAC, authentication logs, and centralized billing.
7. **Pricing model:** Free for individuals (BYOK); ClinePass subscription at $9.99/month; Enterprise custom quotes.
8. **GTM motion:** PLG self-serve via VS Code Marketplace and open-source adoption.
9. **Moat thesis:** Open-source distribution, model flexibility (BYOK), and deep IDE/CLI integration.
10. **Open-source posture:** Open-source core; free for individual developers.
11. **Task horizon:** Multi-step workflow; handles complex tasks like refactoring large codebases and building projects from scratch.

## Analysis

- **Agent capability depth:** Cline acts as an autonomous agent that can create and edit files, execute terminal commands, and use a browser. It performs end-to-end software engineering tasks from initial prompting to production.
- **Weaknesses:** BYO-model usage can become expensive during long loops; frequent approval prompts may limit autonomy for the sake of safety.
- **Trajectory:** Expanding from a VS Code extension into a broader agent runtime usable in terminals and embedded SDKs for enterprises.
- **M&A:** none visible

## Sources

- Phase 1 census (verified 2026-09-09): ext:L3
- https://cline.bot/pricing — Pricing tiers and enterprise features
- https://docs.cline.bot/getting-started/clinepass — ClinePass subscription details
- https://comparedge.com/tools/cline-ai/pricing — Plan comparisons and Enterprise features
- https://aitoolsatlas.ai/tools/cline/pricing — Feature highlights and model flexibility
- https://cline.bot/blog/cline-raises-32m-series-a-and-seed-funding-building-the-open-source-ai-coding-agent-that-enterprises-trust — Funding and investor details
- https://www.caplight.com/company/cline — Valuation and HQ location
- https://cline.bot/ — User traction and product capabilities
