---
name: OpenHands
layer: L3
scope: vertical
vertical: software engineering
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:OSS;seed:L3;Menlo
---

# OpenHands

**Thesis (one line):** An open-source autonomous software engineer providing a model-agnostic platform to automate end-to-end coding tasks for developers and enterprises.

## Facts

- Founded: 2024
- HQ: Boston, Massachusetts
- YC batch: none
- Backers: Madrona (lead), Menlo Ventures, Pillar VC, Obvious Ventures, Fujitsu Ventures, Alumni Ventures
- Funding: $18.8M Series A (2025-11-18); total raised $23.8M (per 2025-11-18 source)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Individual developers and enterprises seeking software development automation
- Pricing model: Freemium (Free OSS/Individual tiers, custom Enterprise pricing)

## The eleven build decisions

1. **Build interface:** Web-based GUI, Terminal UI, CLI, and SDK
2. **Runtime and tenancy:** Multi-tenant SaaS (OpenHands Cloud), dedicated VPC (Cloud Self-hosted), and local self-host
3. **Tool and integration strategy:** Integrations with GitHub, GitLab, Jira, and Slack
4. **Knowledge and data strategy:** Context Condenser technology for efficient token use; BYOK (Bring Your Own Key)
5. **Autonomy and human-in-the-loop:** Autonomous agents that edit code, run shell commands, browse the web, and open pull requests
6. **Governance and enterprise controls:** Enterprise SAML/SSO, private VPC, and auditability controls
7. **Pricing model:** Free for OSS/Individual; custom pricing for Enterprise; at-cost LLM usage for Cloud
8. **GTM motion:** PLG (Free OSS/Individual tiers) and sales-led (Enterprise)
9. **Moat thesis:** Open-source community distribution, model-agnosticism, and high SWE-bench Verified performance (~53%)
10. **Open-source posture:** MIT-licensed open source core; self-host option available
11. **Task horizon:** Long-horizon (autonomous agents acting like junior engineers to fix issues and open PRs)

## Analysis

- **Agent capability depth:** Agents perform end-to-end engineering tasks including writing code, executing shell commands, browsing the web, and running tests. They can independently work toward a described goal to resolve issues and submit pull requests.
- **Weaknesses:** unknown
- **Trajectory:** Expanding from a community-driven OSS tool to an enterprise-grade platform with strategic hardware collaborations (AMD) and secure VPC deployments.
- **M&A:** none visible

## Sources

- Phase 1 census (verified 2026-09-09): ext:OSS;seed:L3;Menlo
- https://www.openhands.dev/blog/weve-just-raised-18-8m-to-build-the-open-standard-for-autonomous-software-development — Funding and Madrona lead
- https://pitchbook.com/profiles/company/639106-03 — Founded date and HQ
- https://www.cbinsights.com/company/all-hands — Total raised and former name
- https://www.openhands.dev/pricing — Pricing tiers and deployment options
- https://www.openhands.dev/blog/openhands-cloud-self-hosted-secure-convenient-deployment-of-ai-software-development-agents — VPC and integration details
- https://docs.openhands.dev/enterprise — Enterprise data control
- https://aitrendtool.com/tools/openhands — MIT license and SWE-bench performance
