---
name: Fixify
layer: L3
scope: vertical
vertical: IT service
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L3
---

# Fixify

**Thesis (one line):** An AI-native IT help desk platform blending agentic automation with human analysts to provide scalable, high-touch vertical IT service.

## Facts

- Founded: 2023
- HQ: Arlington, Virginia
- YC batch: none
- Backers: Costanoa Ventures (lead), Decibel Partners (lead), Paladin Capital Group (lead), Scale Venture Partners
- Funding: $32M total; $25M Series A (2024-10-23)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Tech-centric organizations between 100 and 2,000 employees
- Pricing model: Annual subscription based on number of employees

## The eleven build decisions

1. **Build interface:** Natural language automation authoring (no scripting required)
2. **Runtime and tenancy:** Vendor multi-tenant SaaS
3. **Tool and integration strategy:** Proprietary connector library (native integrations for Slack, MS Teams, ServiceNow, Jira, Okta, Microsoft Entra ID, Jamf, Google Workspace, Microsoft 365)
4. **Knowledge and data strategy:** Live sync with systems of record (integrates with ITSM platforms and learns from documentation, historical tickets, and call transcripts)
5. **Autonomy and human-in-the-loop:** Human-in-the-loop; AI assists analysts with next steps and reasoning, but human experts supervise all automations 24x7 and step in for judgment.
6. **Governance and enterprise controls:** SOC 2 Type 2, ISO/IEC 42001:2023, ISO/IEC 27001, HIPAA, CCPA, GDPR; includes data deletion requests and configurable quality control reviews.
7. **Pricing model:** Per employee (subscription)
8. **GTM motion:** Sales-led
9. **Moat thesis:** Workflow lock-in via deep ITSM integrations and a hybrid "AI + human analyst" service model.
10. **Open-source posture:** Proprietary
11. **Task horizon:** Multi-step workflow (executes multi-step workflows using agentic reasoning)

## Analysis

- **Agent capability depth:** Agents perform end-to-end ticket categorization, triage, root-cause analysis, and execution of multi-step workflows (e.g., app access management) while drafting context-aware responses.
- **Weaknesses:** Heavy reliance on a proprietary workforce of human analysts may limit the margins compared to fully autonomous agents.
- **Trajectory:** Moving toward deeper "agentic reasoning" to handle more complex IT playbooks while maintaining a human-centric service layer to differentiate from pure-play chatbots.
- **M&A:** none visible

## Sources

- Phase 1 census (verified 2026-09-09)
- https://techcrunch.com/2024/10/23/fixify-blends-automation-and-human-analysts-to-tackle-it-problems/ (2024-10-23)
- https://www.fixify.com/pricing (accessed 2026-09-09)
- https://www.globenewswire.com/news-release/2024/10/23/2967878/0/en/Fixify-Secures-25-Million-in-Series-A-Funding-to-Modernize-IT-Help-Desks-by-Keeping-Humans-in-the-Loop.html (2024-10-23)
- https://www.fixify.com/ai-help-desk-automation (accessed 2026-09-09)
