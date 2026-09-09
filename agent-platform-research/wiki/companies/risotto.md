---
name: Risotto
layer: L3
scope: vertical
vertical: IT
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: YC W24
---

# Risotto

**Thesis (one line):** An autonomous AI ITSM agent that resolves IT support tickets by integrating with enterprise identity, ticketing, and knowledge systems.

## Facts

- Founded: unknown
- HQ: San Francisco, CA
- YC batch: W24
- Backers: Bonfire Ventures (lead), 645 Ventures, Y Combinator, Ritual Capital, SurgePoint Capital
- Funding: $10M seed (2026-01-27)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Growing businesses and enterprises requiring IT support automation
- Pricing model: Monthly subscription (Startup plan $1,250/m paid annually; Enterprise custom)

## The eleven build decisions

1. **Build interface:** Natural language (conversational tier-1 support) and custom workflows for common tasks.
2. **Runtime and tenancy:** Vendor multi-tenant SaaS.
3. **Tool and integration strategy:** Proprietary connector library (integrates with Slack, Teams, Jira, ServiceNow, Okta, Jamf, etc.) and MCP for ChatGPT for Enterprise/Gemini.
4. **Knowledge and data strategy:** Live sync with systems of record (Notion, Confluence, SharePoint) and continual learning/KB article generation.
5. **Autonomy and human-in-the-loop:** Fully autonomous for tier-1; approval gates for tier-2 (agent approves/modifies drafted solutions).
6. **Governance and enterprise controls:** RBAC controls, SOC 2 type 2, HIPAA.
7. **Pricing model:** Platform fee (Startup plan) and custom Enterprise pricing.
8. **GTM motion:** Sales-led (Enterprise custom pricing, white-glove onboarding) with a 30-day free trial.
9. **Moat thesis:** Evals and prompt libraries based on thousands of real-world examples to manage LLM non-determinism.
10. **Open-source posture:** Proprietary.
11. **Task horizon:** Multi-step workflow (multi-step troubleshooting and automated ticket lifecycle management).

## Analysis

- **Agent capability depth:** End-to-end resolution of tier-1 IT tickets, including IGA access automations (approvals, time-based), password resets, and multi-modal screenshot recognition for troubleshooting.
- **Weaknesses:** Squeezed between massive suites (ServiceNow) and heavily funded independents (Resolve).
- **Trajectory:** Moving toward a "headless" SaaS model where Risotto acts as a specialized tool called by central AI interfaces (e.g., ChatGPT for Enterprise) via MCP.
- **M&A:** None visible.

## Sources

- Phase 1 census (verified 2026-09-09)
- https://techcrunch.com/2026/01/27/risotto-raises-10m-seed-to-use-ai-to-make-ticketing-systems-easier-to-use/ (2026-01-27)
- https://www.tryrisotto.com/pricing (accessed 2026-09-09)
- https://www.finsmes.com/2026/01/risotto-raises-10m-in-seed-funding.html (2026-01-27)
- https://www.tryrisotto.com/ (accessed 2026-09-09)
