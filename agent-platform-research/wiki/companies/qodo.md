---
name: Qodo
layer: L3
scope: vertical
vertical: software engineering
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L3
---

# Qodo

**Thesis (one line):** Qodo provides AI agents for code review, testing, and governance to ensure trust and quality in AI-generated software.

## Facts

- Founded: 2022
- HQ: New York
- YC batch: none
- Backers: Qumra Capital (lead), Maor Ventures, Phoenix Venture Partners, S Ventures, Square Peg, Susa Ventures, TLV Partners, Vine Ventures, Peter Welinder, Clara Shih
- Funding: $120M total; $70M Series B (2026-03-30)
- Valuation: unknown
- Revenue/ARR: $1M (2024)
- ICP: Developers and engineering teams at enterprises (e.g., Walmart, NVIDIA, Red Hat, Box, Intuit, Ford Motors, Monday.com)
- Pricing model: Workspace-based, usage-driven credit system

## The eleven build decisions

1. **Build interface:** IDE, CLI, and Git integrations (PR review)
2. **Runtime and tenancy:** Single-tenant SaaS or on-prem (Enterprise); otherwise SaaS
3. **Tool and integration strategy:** Git and IDE integrations
4. **Knowledge and data strategy:** Multi-agent approach grounded in deep codebase context, PR history indexing, and code history
5. **Autonomy and human-in-the-loop:** Human-in-the-loop; developers discuss or dismiss findings
6. **Governance and enterprise controls:** SSO/SAML, audit logs, and governance analytics dashboard
7. **Pricing model:** Usage-driven credits ($.012/credit); Pro Team plans at $30/mo, $60/mo (5k credits), and $240/mo (20k credits)
8. **GTM motion:** PLG self-serve (Free 14-day trial) and sales-led (Enterprise)
9. **Moat thesis:** Deep codebase context and multi-agent verification for AI-generated code
10. **Open-source posture:** Proprietary; offers self-host option for Enterprise
11. **Task horizon:** Multi-step workflow (PR review, test generation, and verification)

## Analysis

- **Agent capability depth:** Qodo employs a multi-agent system to perform PR reviews, generate tests, and enforce governance standards. These agents reason across multiple dimensions simultaneously, utilizing repository history and prior PR decisions to find bugs and design deviations.
- **Weaknesses:** unknown
- **Trajectory:** Expanding from code review into a broader code governance platform to combat "software slop" from AI coding tools.
- **M&A:** none visible

## Sources

- Phase 1 census (verified 2026-09-09): ext:L3
- https://www.qodo.ai/pricing/ — Pricing tiers and credit costs
- https://docs.qodo.ai/pricing-and-usage — Workspace billing model
- https://aicodereview.cc/blog/qodo-pricing/ — Product breadth and former name (CodiumAI)
- https://pricingsaas.com/companies/qodo — Founding date, location, and Pro plan pricing
- https://techcrunch.com/2026/03/30/qodo-bets-on-code-verification-as-ai-coding-scales-raises-70m/ — Series B funding and HQ
- https://www.globenewswire.com/news-release/2026/03/30/3264740/0/en/qodo-raises-70m-to-accelerate-fight-against-software-slop-from-openclaw-and-claude-code.html — Customer list and funding
- https://docs.qodo.ai/core-concepts/qodo-platform-core-capabilities — Multi-agent approach and governance
