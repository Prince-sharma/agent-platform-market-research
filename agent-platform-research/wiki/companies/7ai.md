---
name: 7ai
layer: L3
scope: vertical
vertical: security
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L3;Greylock;Index
---

# 7ai

**Thesis (one line):** An agentic security platform that automates the SOC lifecycle to reduce analyst burnout and accelerate threat response.

## Facts

- Founded: 2024
- HQ: Boston, Massachusetts
- YC batch: none
- Backers: Index Ventures (lead), Greylock, CRV, Spark Capital, Blackstone Innovations Investments
- Funding: $202M total; $130M Series A (Dec 2025)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Fortune 500 enterprises
- Pricing model: Enterprise contracts; AWS Marketplace procurement available

## The eleven build decisions

1. **Build interface:** Web platform featuring "Pulse" live view and investigation dashboards.
2. **Runtime and tenancy:** Vendor multi-tenant SaaS; deployed on AWS.
3. **Tool and integration strategy:** Native integrations with GuardDuty, CloudTrail, and AWS Security Hub; covers cloud, endpoint, identity, network, and DLP.
4. **Knowledge and data strategy:** Live sync with systems of record to pull source data and check against environment.
5. **Autonomy and human-in-the-loop:** Autonomous decision-making and action with humans on the loop.
6. **Governance and enterprise controls:** unknown
7. **Pricing model:** unknown
8. **GTM motion:** Sales-led; available via AWS Marketplace.
9. **Moat thesis:** Swarming architecture using 60+ domain-specialized agents working in parallel.
10. **Open-source posture:** Proprietary.
11. **Task horizon:** Multi-step workflow (investigations completed in minutes).

## Analysis

- **Agent capability depth:** Agents execute the full SOC lifecycle: detecting threats, investigating alerts to a conclusion with evidence, responding via remediation, and proactively hunting. They utilize a "swarming" architecture where multiple specialized agents work an alert in parallel.
- **Weaknesses:** unknown
- **Trajectory:** Expanding from stealth (Feb 2025) to enterprise scale, targeting the "Agentic Security Inflection Point" to replace repetitive manual SOC work.
- **M&A:** none visible

## Sources

- Phase 1 census (verified 2026-09-09): seed:L3;Greylock;Index
- https://7ai.com/platform — Platform capabilities and Pulse view
- https://linkedin.com/company/seven-ai — Company size, HQ, and founders
- https://7ai.com/company — Founding date and mission
- https://blog.7ai.com/citing-the-agentic-security-inflection-point-7ai-raises-largest-cybersecurity-a-round-in-history-to-bring-ai-security-agents-to-enterprises — Series A details
- https://aws.amazon.com/marketplace/pp/prodview-2bhzh7e2dlc7k — AWS integrations and ICP
- https://agenticindex.io/vendors/7ai — Swarming architecture and seed funding amount
