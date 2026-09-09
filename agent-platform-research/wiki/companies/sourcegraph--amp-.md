---
name: Sourcegraph (Amp)
layer: L3
scope: vertical
vertical: software engineering
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L3
---

# Sourcegraph (Amp)

**Thesis (one line):** An enterprise coding agent utilizing a code graph to plan, edit, and verify code across various developer environments.

## Facts

- Founded: unknown
- HQ: unknown
- YC batch: none
- Backers: Andreessen Horowitz (lead), Insight Partners, Geodesic Capital
- Funding: $125M raised (2021)
- Valuation: $2.625B (2021-07-13)
- Revenue/ARR: $10M (2021)
- ICP: Quality-obsessed developers and software engineering teams
- Pricing model: Monthly subscription or usage-based credits

## The eleven build decisions

1. **Build interface:** IDE (VS Code extension), CLI tool, web, and mobile phone.
2. **Runtime and tenancy:** SaaS with "orbs" (remote machines) that run independently of the local laptop.
3. **Tool and integration strategy:** unknown
4. **Knowledge and data strategy:** Built on an enterprise code graph.
5. **Autonomy and human-in-the-loop:** Autonomous agents that plan work, edit multiple files, run commands, and check their own output.
6. **Governance and enterprise controls:** Enterprise tier includes SSO, directory sync, admin controls, and minimal data retention.
7. **Pricing model:** Subscription tiers (Megawatt $20/mo, Gigawatt $200/mo) or unconstrained usage-based API pricing for tokens and orbs.
8. **GTM motion:** PLG self-serve (free sign-up) and Enterprise sales.
9. **Moat thesis:** Integration with enterprise code graph and "outcomes obsessed" unconstrained token usage.
10. **Open-source posture:** Proprietary; provides CLI installation via npm/pnpm.
11. **Task horizon:** Long-horizon; agents run in remote orbs that keep working without supervision after the laptop is closed.

## Analysis

- **Agent capability depth:** Amp agents function as autonomous coding partners that plan tasks, execute edits across multiple files, and verify their own results. They operate across the terminal, IDE, and web to deliver high-quality code.
- **Weaknesses:** Conflicting pricing reports between official site (subscriptions) and third-party reviews (zero-markup usage billing).
- **Trajectory:** Moving toward "frontier" agentic workflows by deleting stale assumptions and adopting the latest models (e.g., Claude Opus 4.8).
- **M&A:** none visible

## Sources

- Phase 1 census (verified 2026-09-09): ext:L3
- https://ampcode.com/ — Product capabilities and installation
- https://sourcegraph.com/demo/amp — Team features and IDE agnostic approach
- https://github.com/sourcegraph/amp-examples-and-guides/blob/main/guides/cli/README.md — CLI usage and installation
- https://ampcode.com/pricing — Subscription tiers and Enterprise controls
- https://ampcode.com/docs/pricing — Orb specifications and subscription details
- https://aitrendtool.com/tools/amp — Model usage (Claude Opus 4.8) and usage-based billing
- https://sourcegraph.com/blog/announcing-sourcegraphs-series-d-round — Funding and valuation details
