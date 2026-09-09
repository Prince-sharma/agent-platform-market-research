---
name: Numeric
layer: L3
scope: vertical
vertical: finance/accounting
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L3;Menlo
---

# Numeric

**Thesis (one line):** An AI-native accounting platform that automates the month-end close and reconciliation process for mid-market finance teams.

## Facts

- Founded: 2020
- HQ: San Francisco
- YC batch: none
- Backers: Menlo Ventures (lead)
- Funding: $51M total, Series B (Nov 2025)
- Valuation: unknown
- Revenue/ARR: single-digit millions (Oct 2024, medium confidence)
- ICP: Mid-market finance and accounting teams using ERPs like NetSuite, Sage Intacct, QuickBooks, or Xero
- Pricing model: Per user per month (starts at $30/user/mo for Essentials; custom quotes for Growth/Enterprise)

## The eleven build decisions

1. **Build interface:** config workflow (close checklists, project management, and AI assistant)
2. **Runtime and tenancy:** vendor multi-tenant SaaS
3. **Tool and integration strategy:** proprietary connector library (Live ERP and file storage integration)
4. **Knowledge and data strategy:** live sync with systems of record (layers on top of existing GL)
5. **Autonomy and human-in-the-loop:** approval gates (preparers and reviewers; AI-generated flux analysis and matching)
6. **Governance and enterprise controls:** RBAC (segregation of duties between preparers and reviewers), audit trails
7. **Pricing model:** per seat
8. **GTM motion:** sales-led (demo-led for higher tiers)
9. **Moat thesis:** data gravity (financial data graph), workflow lock-in (close management)
10. **Open-source posture:** proprietary
11. **Task horizon:** multi-step workflow (minutes to days for month-end close)

## Analysis

- **Agent capability depth:** Automates transaction matching, bank statement parsing, flux analysis, and narrative reporting by syncing with ERP data.
- **Weaknesses:** High dependency on specific ERP integrations; pricing for advanced tiers is opaque (quote-based).
- **Trajectory:** Expanding from a close-management tool to a full financial operating system for real-time accounting.
- **M&A:** none visible

## Sources

- census data: verified 2026-09-09
- numeric.io: product features, about page, and pricing (2026)
- menlovc.com: Series A investment details (2024-10-10)
- techcrunch.com: Series A funding and revenue growth (2024-10-10)
- crunchbase.com: HQ and company profile (2026)
- bluecopa.com: pricing tier analysis (2026-08-14)
- aiagentsquare.com: ERP compatibility and editorial score (2026-07-09)
- bestaiaccounting.com: product review and GL integration (2026-05-12)
