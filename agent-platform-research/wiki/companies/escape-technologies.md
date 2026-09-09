---
name: Escape Technologies
layer: L3
scope: vertical
vertical: security
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: Balderton Capital;YC W23
---

# Escape Technologies

**Thesis (one line):** An AI-native offensive security platform replacing manual pentesting and legacy scanners with agentic discovery and remediation.

## Facts

- Founded: 2020
- HQ: New York
- YC batch: W23
- Backers: Balderton Capital (lead), Uncorrelated Ventures, IRIS, Y Combinator
- Funding: $23M total; $18M Series A (Mar 10, 2026)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Security teams and engineering organizations
- Pricing model: Scoped to environment; available via AWS Marketplace and channel partners

## The eleven build decisions

1. **Build interface:** Web-based (implied by "launch an assessment" and "Quickstart" documentation)
2. **Runtime and tenancy:** Vendor multi-tenant SaaS (available via AWS Marketplace)
3. **Tool and integration strategy:** Integrations into engineering workflows and CI pipelines
4. **Knowledge and data strategy:** Agentic architecture with memory of business context (e.g., user roles, data types) and Graph context
5. **Autonomy and human-in-the-loop:** Agentic multi-step attack chains; transforms offensive security into a "quality gate"
6. **Governance and enterprise controls:** Enterprise-grade automation; reporting for auditors
7. **Pricing model:** Scoped to environment; avoids "token burn" spikes
8. **GTM motion:** Sales-led (demo-based) and marketplace (AWS Marketplace, 20+ channel partners)
9. **Moat thesis:** Business-logic-aware DAST that improves over time and agentic reasoning for complex attack chains
10. **Open-source posture:** Proprietary
11. **Task horizon:** Long-horizon (continuous assessments and multi-step attack chains)

## Analysis

- **Agent capability depth:** The "Cascade" multi-agent engine orchestrates discovery, reasons about attacker chaining, and proves exploitability with concrete evidence. It replaces single-purpose agents with an adaptive engine that combines LLM reasoning with crawling and DAST infrastructure.
- **Weaknesses:** unknown
- **Trajectory:** Expanding AI agent capabilities to automate the full offensive security lifecycle from discovery to remediation.
- **M&A:** none visible

## Sources

- Phase 1 census (verified 2026-09-09): Balderton Capital;YC W23
- https://escape.tech/product/ai-pentesting — Product capabilities and ROI
- https://docs.escape.tech/documentation/ai-pentesting/ — Cascade engine architecture
- https://escape.tech/ — Product offerings (ASM, DAST, AI Pentesting)
- https://escape.tech/blog/escape-raises-18m-series-a/ — Funding and mission
- https://www.balderton.com/news/escape-raises-18m-series-a-to-fight-ai-powered-cyberattacks-with-ai-agents/ — Funding details
- https://thenextweb.com/news/escape-18m-series-a-ai-security-vibe-coding — Founding date, HQ, and total funding
- https://aws.amazon.com/marketplace/pp/prodview-b5zhismdnjnpw — Marketplace availability and use cases
