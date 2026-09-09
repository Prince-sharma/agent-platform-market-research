---
name: Raindrop
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: YC W24
---

# Raindrop

**Thesis (one line):** An observability platform that detects and auto-fixes silent AI agent failures in production, acting as "Sentry for AI Agents."

## Facts

- Founded: 2025
- HQ: San Francisco, CA
- YC batch: W24
- Backers: Lightspeed (lead), Figma Ventures, Vercel Ventures, founders of Replit, Cognition, Framer, Speak, Notion
- Funding: $15M Seed, 2025-12-01
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: AI engineering teams deploying LLM agents in production
- Pricing model: Freemium (Free, Team, Pro tiers)

## The eleven build decisions

1. **Build interface:** SDK for logging runs and a Slack-first interface for triage and signals.
2. **Runtime and tenancy:** Multi-tenant SaaS.
3. **Tool and integration strategy:** Proprietary tracing for tool calls, messages, and retries; integrates with Slack.
4. **Knowledge and data strategy:** Captures and stores production traces and trajectories for search and analysis.
5. **Autonomy and human-in-the-loop:** Provides automated issue detection and a "self-healing loop" where coding agents fix detected failures.
6. **Governance and enterprise controls:** SOC 2 Compliant.
7. **Pricing model:** Tiered subscription: Free, Team ($150/mo), and Pro ($399/mo).
8. **GTM motion:** PLG self-serve.
9. **Moat thesis:** Runtime discovery and auto-fix loop (self-healing) compared to static eval-first tools.
10. **Open-source posture:** Proprietary.
11. **Task horizon:** Long-horizon (supports agents that run for hours and use thousands of tools).

## Analysis

- **Agent capability depth:** Enables developers to visualize complex agent trajectories, detect silent failures (hallucinations, loops), and automate the fix-to-eval pipeline.
- **Weaknesses:** Slack-first workflow may be a friction point for teams preferring integrated IDE or dashboard-only environments.
- **Trajectory:** Moving from passive observability to active "self-healing" infrastructure with the launch of Raindrop 2.0.
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; yc-2024.md), verified 2026-09-09
- Raindrop | AI Agent Monitoring & Observability (https://www.raindrop.ai/), 2026-09-09
- Raindrop Pricing & Features (2026) | RightAIChoice (https://rightaichoice.com/tools/raindrop), 2026-07-02
- Braintrust vs Langfuse vs Raindrop (2026) (https://www.morphllm.com/comparisons/braintrust-vs-langfuse-vs-raindrop), 2026-06-27
- Introducing Raindrop 2.0: Self-Healing Agents (https://www.raindrop.ai/blog/introducing-raindrop-2/), 2026-06-03
- Raindrop Raises $15M from Lightspeed (https://www.raindrop.ai/blog/seed-round/), 2025-12-01
- Raindrop Documentation (https://www.raindrop.ai/docs/introduction/), 2026-09-09
