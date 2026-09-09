---
name: Prophet
layer: L3
scope: vertical
vertical: security
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L3
---

# Prophet

**Thesis (one line):** Prophet provides an agentic AI SOC platform that autonomously investigates security alerts to reduce analyst burnout and response times.

## Facts

- Founded: unknown
- HQ: Menlo Park, Calif.
- YC batch: none
- Backers: Accel (lead), Bain Capital Ventures, Amex Ventures, Citi Ventures
- Funding: $30M Series A (Jul 2025)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Mature SOC teams overwhelmed by alert volume in modern enterprises
- Pricing model: Subscription based on investigation volume

## The eleven build decisions

1. **Build interface:** unknown
2. **Runtime and tenancy:** Deployed on AWS; vendor SaaS
3. **Tool and integration strategy:** 200+ connectors for SIEM/EDR stacks; requires read-only access to 2-3 security tools
4. **Knowledge and data strategy:** Gathers evidence across the security stack and reasons about context
5. **Autonomy and human-in-the-loop:** Fully autonomous agents for investigation and response; includes "Watchtower" for human-in-the-loop trust
6. **Governance and enterprise controls:** Transparent AI reasoning for compliance and audit trails
7. **Pricing model:** Roughly $50,000/year for 5,000 investigations, plus $10 per overage investigation
8. **GTM motion:** Sales-led (no free tier; lead with demo)
9. **Moat thesis:** Integration depth (200+ connectors) and autonomous "agent-versus-agent" defense capabilities
10. **Open-source posture:** Proprietary
11. **Task horizon:** Multi-step workflow (delivers results in minutes after integration)

## Analysis

- **Agent capability depth:** Agents autonomously triage and investigate every alert end-to-end, mimicking senior analyst reasoning. They perform threat hunting across endpoints, email, cloud, and identity, and optimize detection coverage.
- **Weaknesses:** High total cost of ownership (TCO) due to integration, data residency, and compliance surcharges.
- **Trajectory:** Expanding from alert investigation into a full agentic AI-driven SOC covering detection engineering and incident response.
- **M&A:** none visible

## Sources

- Phase 1 census (verified 2026-09-09): seed:L3
- https://www.prnewswire.com/news-releases/prophet-security-accelerates-the-agentic-ai-soc-movement-with-strategic-investments-from-amex-ventures-and-citi-ventures-302696588.html — Strategic investments from Amex and Citi
- https://www.businesswire.com/news/home/20250729681026/en/Prophet-Security-Raises-%2430M-Series-A-Announces-Industrys-Most-Comprehensive-Agentic-AI-SOC-Platform-to-Transform-Security-Operations — Series A funding and vision
- https://venturebeat.com/infrastructure/ai-vs-ai-prophet-security-raises-30m-to-replace-human-analysts-with-autonomous-defenders — Autonomous agent approach vs copilots
- https://aws.amazon.com/marketplace/pp/prodview-xy555gpzgrrvq — AWS deployment and integration requirements
- https://underdefense.com/blog/ai-soc-pricing/ — Pricing specifics and TCO
- https://rightaichoice.com/tools/prophet-ai-security — Connector count and Watchtower feature
- https://www.prophetsecurity.ai/ — Product capabilities and lifecycle scope
