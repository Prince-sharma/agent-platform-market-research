---
name: Coval
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: YC S24
---

# Coval

**Thesis (one line):** An evaluation and simulation platform providing the safety infrastructure needed to deploy and scale reliable autonomous voice and chat agents.

## Facts

- Founded: 2024
- HQ: San Francisco
- YC batch: S24
- Backers: Norwest (lead), Base10 Partners, Twilio Ventures, Y Combinator
- Funding: $31M total; $28M Series A (2026-06-24)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Developers, QA teams, and enterprises deploying voice AI agents (e.g., Zoom, Deepgram)
- Pricing model: Tiered monthly subscription (Starter, Growth, Custom)

## The eleven build decisions

1. **Build interface:** Hybrid; offers a CLI, API, and dashboard for simulation and review.
2. **Runtime and tenancy:** Multi-tenant SaaS.
3. **Tool and integration strategy:** Supports MCP and API integrations.
4. **Knowledge and data strategy:** Observability platform that scores production calls and uses human review to retrain AI judges.
5. **Autonomy and human-in-the-loop:** Human-in-the-loop; smart sampling routes failures to human reviewers to sharpen evaluations.
6. **Governance and enterprise controls:** RBAC, audit logs, HIPAA, SOC 2 Type II, and GDPR compliance.
7. **Pricing model:** Platform fee per month with usage limits (simulation minutes and monitored calls).
8. **GTM motion:** Hybrid; PLG self-serve (Starter/Growth tiers) and sales-led (Custom).
9. **Moat thesis:** Evals and simulation infrastructure for voice-native complexities (accents, interruptions, background noise).
10. **Open-source posture:** Proprietary.
11. **Task horizon:** Multi-step workflow (minutes); evaluates end-to-end conversations.

## Analysis

- **Agent capability depth:** Enables agents to be stress-tested against thousands of realistic scenarios, including irate callers and compliance traps, before production.
- **Weaknesses:** Primary focus is on evaluation and simulation rather than the orchestration or execution of the agents themselves.
- **Trajectory:** Expanding from a voice-first evaluation tool into a broader deployment-readiness platform for both voice and chat agents.
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; yc-2024.md), verified 2026-09-09
- Coval: Voice AI Testing & Evaluation Platform (https://www.coval.ai/), 2026-09-09
- Coval Raises $28 Million Series A to Define Safety and Reliability for Autonomous Voice Agents (https://www.prnewswire.com/news-releases/coval-raises-28-million-series-a-to-define-safety-and-reliability-for-autonomous-voice-agents-302808740.html), 2026-06-24
- Pricing | Coval (https://www.coval.ai/pricing/), 2026-09-09
- Welcome to Coval (https://docs.coval.ai/welcome), 2026-09-09
- Voice AI Simulation — Test Voice Agents Before Launch | Coval (https://www.coval.ai/products/simulation/), 2026-09-09
