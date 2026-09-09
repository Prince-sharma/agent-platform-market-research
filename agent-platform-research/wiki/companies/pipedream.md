---
name: Pipedream
layer: L1
scope: horizontal
vertical: general
status: acquired
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L1
---

# Pipedream

**Thesis (one line):** Developer workflow platform connecting agents to 3,000+ APIs and 10,000+ tools; acquired by Workday to become its agent connectivity layer.

## Facts

- Founded: 2019 (Tod Sacerdoti founder/CEO)
- HQ: San Francisco, CA
- YC batch: none (YC Continuity Fund is a Series A investor)
- Backers: True Ventures (Series A lead), CRV, Felicis Ventures, YC Continuity
- Funding: $20M Series A (May 2022)
- Valuation: unknown
- Revenue/ARR: unknown; 5,000+ customers, 1M+ developers (Nov 2025)
- ICP: Developers automating workflows; product teams embedding integrations; post-acquisition, Workday's 11,000+ organizations
- Pricing model: Free 100 credits/mo; Basic $29/mo; Advanced $49/mo; Connect $99/mo plus $2/external user; Business custom

## The eleven build decisions

1. **Build interface:** Code (Node/Python/Go) plus no-code steps; drag-and-drop builder; AI Agent Builder
2. **Runtime and tenancy:** Multi-tenant SaaS; no self-host (source-available components)
3. **Tool and integration strategy:** 3,000+ connectors / 10,000+ pre-built tools; Pipedream Connect SDK; deployable MCP servers; API proxy
4. **Knowledge and data strategy:** Workflow data stores (key-value); live API access via connectors; no RAG
5. **Autonomy and human-in-the-loop:** Fixed and event-driven workflows; IAM access controls; approval gates not productized
6. **Governance and enterprise controls:** SOC 2 Type II, HIPAA, GDPR; Business tier adds SLAs
7. **Pricing model:** Credit-based subscriptions (1 credit = 30s compute) plus per-external-user Connect pricing
8. **GTM motion:** PLG self-serve (1M+ devs); enterprise motion now via Workday
9. **Moat thesis:** Long-tail connector breadth plus developer brand; now Workday distribution
10. **Open-source posture:** Proprietary platform; source-available components on GitHub
11. **Task horizon:** Event-driven persistent workflows (webhook/cron); steps up to 750s

## Analysis

- **Agent capability depth:** Serverless workflow automation plus Connect SDK embedding 3,000+ integrations into apps and agents, with managed auth and MCP servers
- **Weaknesses:** Sub-scale standalone; acquisition folds roadmap into Workday — migration risk for non-HCM users
- **Trajectory:** Acquired; becoming the agent connectivity layer for Workday's HR and finance system of record
- **M&A:** Acquired by Workday (definitive agreement Nov 19, 2025; close expected by Jan 31, 2026; terms undisclosed)

## Sources

- pipedream.com/pricing (Sep 2026)
- newsroom.workday.com acquisition announcement (Nov 19, 2025)
- indexed.vc/companies/pipedream (2026)
- TechCrunch Series A coverage (May 17, 2022)
