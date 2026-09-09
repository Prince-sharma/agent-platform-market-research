---
name: Horizon3.ai
layer: L3
scope: vertical
vertical: security
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: SignalFire;Craft
---

# Horizon3.ai

**Thesis (one line):** An AI-native offensive security platform providing autonomous penetration testing to identify and validate exploitable attack paths in production environments.

## Facts

- Founded: unknown
- HQ: San Francisco
- YC batch: none
- Backers: NightDragon (co-lead), NEA (co-lead)
- Funding: $250M Series E, Aug 2026
- Valuation: $2B+ (Aug 2026)
- Revenue/ARR: 120% ARR growth (Aug 2026)
- ICP: Organizations worldwide, including banks, hospitals, and US federal government agencies/DIB contractors.
- Pricing model: Sales-assisted quotes; pay-as-you-go available via NodeZero Flex.

## The eleven build decisions

1. **Build interface:** Web platform (implied by "real-time view" and AWS Marketplace listing); unknown.
2. **Runtime and tenancy:** Deployed on AWS; supports on-prem, cloud, and hybrid networks.
3. **Tool and integration strategy:** Proprietary autonomous pentesting suite; integrates with customer firewalls for training data.
4. **Knowledge and data strategy:** Proprietary training data collected from customer firewalls.
5. **Autonomy and human-in-the-loop:** Fully autonomous ("AI Hacker"); safe operation in live production with "1-click Verify" for fixes.
6. **Governance and enterprise controls:** FedRAMP High Authorized (NodeZero: Federal); supports CMMC, SOC2, and regulatory framework reporting.
7. **Pricing model:** Sales-assisted quotes; median buyer pays $18,600 per year (2025 data).
8. **GTM motion:** Sales-led (sales-assisted quotes); available via AWS Marketplace.
9. **Moat thesis:** Proprietary training data from customer firewalls and a six-year head start in autonomous pentesting.
10. **Open-source posture:** Proprietary.
11. **Task horizon:** Multi-step workflow (chains weak credentials, misconfigurations, and identity gaps into attack paths).

## Analysis

- **Agent capability depth:** The agents autonomously probe networks to find exploitable paths, chain multiple weaknesses together, and safely exploit them. They provide remediation guidance and re-run tests to verify that the attack path is closed.
- **Weaknesses:** Exact pricing is not public, requiring sales-assisted quotes for most enterprise tiers.
- **Trajectory:** Expanding globally into Australia and Singapore and moving toward an "AI vs. AI" cybersecurity model.
- **M&A:** none visible

## Sources

- Phase 1 census (verified 2026-09-09): SignalFire;Craft
- https://aws.amazon.com/marketplace/pp/prodview-l4tou5vhpvarm — Product overview and AWS deployment
- https://horizon3.ai/use-case/packaging/ — Product tiers (Flex, Core, Pro, Elite)
- https://www.vendr.com/marketplace/horizon3 — Median pricing and Federal variant
- https://horizon3.ai/news/press-release/horizon3-raises-250m-series-e-at-2b-valuation-to-lead-the-ai-vs-ai-cybersecurity-era/ — Funding, valuation, and ARR growth
- https://www.forbes.com/sites/victordey/2026/08/03/horizon3-raises-250-million-as-cybersecuritys-next-war-goes-ai-vs-ai/ — Training data moat and CEO insights
- https://siliconangle.com/2026/08/03/horizon3-ai-raises-250m-2b-plus-valuation-autonomous-pentesting/ — Global expansion and technical workflow
- https://horizon3.ai/nodezero/ — Agent capabilities and AD Password Audit
