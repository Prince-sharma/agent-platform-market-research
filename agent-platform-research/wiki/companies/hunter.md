---
name: Hunter
layer: L3
scope: vertical
vertical: security
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L3
---

# Hunter

**Thesis (one line):** An AI-driven SOC platform that automates alert triage, investigation, and response to scale security expertise without increasing headcount.

## Facts

- Founded: unknown
- HQ: Tel Aviv, Israel
- YC batch: none
- Backers: Stripes (led Series C), DTCP, Cisco Investments, Databricks, YL Ventures, Bessemer Venture Partners, M12, Snowflake Ventures, Blumberg Capital, U.S. Venture Partners
- Funding: $118M total raised (Apr 2026); last round Series C $68M (2022-01-25)
- Valuation: unknown
- Revenue/ARR: Average contract value approximately $280,000 annually (2025)
- ICP: Fortune 500 companies and small SecOps teams
- Pricing model: Custom enterprise pricing

## The eleven build decisions

1. **Build interface:** Web canvas (SOC Platform) and Copilot AI for analyst augmentation
2. **Runtime and tenancy:** Vendor multi-tenant SaaS
3. **Tool and integration strategy:** Integrations across security stack including UEBA, Identity, Endpoint, and Cloud
4. **Knowledge and data strategy:** Live sync with systems of record; requires a Data Lake prerequisite
5. **Autonomy and human-in-the-loop:** Agentic AI for autonomous operations with analysts supervising the AI investigations
6. **Governance and enterprise controls:** unknown
7. **Pricing model:** Custom enterprise; average annual cost ~$280,000, maximum around $600,000 (2025)
8. **GTM motion:** Sales-led (quote-only pricing, no free trial)
9. **Moat thesis:** Workflow lock-in via "all-in-one" SOC platform and proprietary AI-driven triage/correlation
10. **Open-source posture:** Proprietary
11. **Task horizon:** Multi-step workflow (autonomous detection, investigation, and response)

## Analysis

- **Agent capability depth:** Pathfinder AI deploys specialized agents to analyze and correlate security data and create attack narratives. It automates the end-to-end process from triage and scoring to the execution of response playbooks.
- **Weaknesses:** High barrier to entry due to custom-only pricing and a mandatory Data Lake prerequisite.
- **Trajectory:** Moving from reactive analyst-led investigation to a proactive model where analysts supervise autonomous AI agents.
- **M&A:** none visible

## Sources

- Phase 1 census (verified 2026-09-09): ext:L3
- https://www.businesswire.com/news/home/20220125005285/en/Hunters-Secures-%2468-Million-in-Series-C-Funding-to-Become-a-Leading-Security-Operations-Platform — Funding and backers
- https://www.cbinsights.com/company/huntersai/financials — Total funding
- https://techcrunch.com/2022/01/25/hunters-raises-68m-series-c-for-its-security-operations-platform/ — Funding and SIEM replacement strategy
- https://costbench.com/software/siem/hunters-ai/ — Pricing model and Data Lake prerequisite
- https://www.vendr.com/buyer-guides/hunters — Average contract value and pricing range
- https://www.hunters.security/ — Product capabilities and SIEM focus
- https://www.hunters.security/pathfinder-ai — Agentic AI and Copilot AI details
- https://www.hunters.security/en/blog/pathfinder-ai-part-1 — Pathfinder AI intelligence layer
