---
name: Exaforce
layer: L3
scope: vertical
vertical: security
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L3;Mayfield;Khosla Ventures
---

# Exaforce

**Thesis (one line):** An agentic SOC platform using a real-time knowledge graph to automate security detection, triage, investigation, and response.

## Facts

- Founded: 2023
- HQ: San Jose
- YC batch: none
- Backers: HarbourVest, Peak XV, Mayfield, Khosla Ventures, Seligman Ventures, AICONIC VENTURES
- Funding: $200M total; $125M Series B (May 12, 2026)
- Valuation: $725M (May 2026)
- Revenue/ARR: unknown
- ICP: SOCs from next-gen startups to global enterprises
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** Centralized dashboard; natural-language hunting via Exabot Investigate; unknown
2. **Runtime and tenancy:** Vendor multi-tenant SaaS (customer-operated) or managed service (Exaforce-operated); unknown
3. **Tool and integration strategy:** 100+ integrations including AWS, Azure, GCP, Okta, GitHub, CrowdStrike, and Splunk
4. **Knowledge and data strategy:** Unified data layer and real-time security knowledge graph
5. **Autonomy and human-in-the-loop:** Autonomous workflows with human approval gates configured for containment actions
6. **Governance and enterprise controls:** unknown
7. **Pricing model:** Not published; contact sales
8. **GTM motion:** Sales-led (contact sales); offers both platform and MDR services
9. **Moat thesis:** Real-time security reasoning via knowledge graph and multi-model AI (ML combined with LLMs)
10. **Open-source posture:** Proprietary
11. **Task horizon:** Multi-step autonomous workflows (minutes to hours) covering the full SOC lifecycle

## Analysis

- **Agent capability depth:** Uses four specialized "Exabots" for detection, triage, investigation, and response. These agents perform cross-environment pivoting, natural-language hunting, and execute containment actions like isolating instances or revoking sessions.
- **Weaknesses:** High upfront investment costs for traditional SOCs are cited as a general industry challenge, though Exaforce claims to reduce these.
- **Trajectory:** Scaling AI-native security operations and deepening real-time reasoning capabilities following a $125M Series B.
- **M&A:** none visible

## Sources

- Phase 1 census (verified 2026-09-09): ext:L3;Mayfield;Khosla Ventures
- https://www.exaforce.com/ — MTTI/MTTR metrics and data layer
- https://www.exaforce.com/solutions/ai-for-soc — SOC challenges
- https://www.exaforce.com/resources/exaforce-the-agentic-ai-soc-platform — SOC lifecycle
- https://www.gartner.com/reviews/product/exaforce-agentic-soc-platform — Dashboard and integration overview
- https://techcrunch.com/2026/05/12/exaforce-raises-125m-series-b-to-build-ai-for-catching-and-stopping-cyberattacks-as-they-happen/ — Funding and valuation
- https://www.exaforce.com/press-release/exaforce-raises-125m-series-b-to-combat-ai-powered-attacks-with-real-time-security-reasoning — Funding and reasoning capabilities
- https://siliconangle.com/2026/05/12/agentic-soc-startup-exaforce-closes-125m-round-reported-725m-valuation/ — Exabots and founding date
- https://www.exaforce.com/platform — Multi-model AI and Exabot Detect
- https://www.cybervendorguide.com/tools/exaforce — HQ, integrations, and Exabot functions
