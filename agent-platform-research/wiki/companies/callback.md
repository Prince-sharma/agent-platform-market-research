---
name: Callback
layer: L4
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: yc-2024, web:ycombinator.com, web:getcallback.ai, web:outsourceaccelerator.com, web:bobreyes.com
---

# Callback

**Thesis (one line):** An AI-native BPO platform that codifies manual business operations into auditable, software-driven workflows with integrated human-in-the-loop QA.

## Facts

- Founded: 2024
- HQ: San Francisco
- YC batch: S24
- Backers: Y Combinator
- Funding: $500,000 pre-seed (2024-10-25)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Enterprises in regulated industries (e.g., healthcare, finance) with manual back-office processes
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** Config workflow via "Blueprints" and "Jobs"
2. **Runtime and tenancy:** Vendor multi-tenant SaaS with BYO infrastructure integration
3. **Tool and integration strategy:** Proprietary integration layer connecting to APIs, spreadsheets, and on-prem databases
4. **Knowledge and data strategy:** Live sync with systems of record; acts as an auditable system of record itself
5. **Autonomy and human-in-the-loop:** Approval gates; AI handles bounded tasks with human QA for exceptions and verification
6. **Governance and enterprise controls:** RBAC, immutable audit logs, versioned snapshots, and compliance gates
7. **Pricing model:** unknown
8. **GTM motion:** Sales-led/Services-led (collaborative engineering to codify tribal knowledge)
9. **Moat thesis:** Workflow lock-in through codified "Blueprints" and data gravity as a system of record
10. **Open-source posture:** Proprietary
11. **Task horizon:** Multi-step workflow (minutes)

## Analysis

- **Agent capability depth:** Automates unstructured-to-structured data tasks including invoice extraction, PDF report parsing, and image labeling.
- **Weaknesses:** High dependency on initial human-led "process mining" to codify workflows before automation can scale.
- **Trajectory:** Moving from a BPO service replacement toward a central orchestration layer for the enterprise back office.
- **M&A:** none visible

## Sources

- Phase 1 census (yc-2024)
- Y Combinator Company Profile - https://www.ycombinator.com/companies/callback
- Callback Official Website - https://getcallback.ai
- Outsource Accelerator - https://news.outsourceaccelerator.com/callback-secures-pre-seed-funding (2024-10-25)
- The Filipino Tech Explainer - https://www.bobreyes.com/the-architecture-of-ai-process-orchestration-how-callback-is-re-engineering-the-enterprise-back-office (2026-07-06)
