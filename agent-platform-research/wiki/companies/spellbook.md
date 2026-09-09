---
name: Spellbook
layer: L3
scope: vertical
vertical: legal
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L3
---

# Spellbook

**Thesis (one line):** AI-powered contract drafting and review platform integrated directly into Microsoft Word for law firms and in-house legal teams.

## Facts

- Founded: unknown
- HQ: unknown
- YC batch: none
- Backers: Khosla Ventures (lead), Keith Rabois
- Funding: $90M total ($50M Series B Oct 2025; $40M debt Mar 2026)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Law firms and in-house legal departments
- Pricing model: Per seat (custom pricing based on team size)

## The eleven build decisions

1. **Build interface:** Microsoft Word add-in (primary) and natural language interaction.
2. **Runtime and tenancy:** Vendor multi-tenant SaaS; SOC 2 Type II compliant.
3. **Tool and integration strategy:** Deep integration with Microsoft Word; intake from email, Slack, and Salesforce.
4. **Knowledge and data strategy:** Built-in RAG using user precedents, market benchmarks, and indexed signed contracts.
5. **Autonomy and human-in-the-loop:** Approval gates; "Associate" agent works with user oversight; playbook-driven redlining.
6. **Governance and enterprise controls:** RBAC, SOC 2 Type II, GDPR, CCPA, PIPEDA, and Zero Data Retention agreements.
7. **Pricing model:** Per seat (customized based on number of team members).
8. **GTM motion:** Sales-led (demo required for pricing) with a 7-day free trial.
9. **Moat thesis:** Workflow lock-in (Word integration), data gravity (indexed contract history), and legal-specific tuning.
10. **Open-source posture:** Proprietary.
11. **Task horizon:** Multi-step workflow (minutes) for drafting/review; "Associate" agent handles multi-document legal matters.

## Analysis

- **Agent capability depth:** Automates first-pass contract review against playbooks, drafts clauses from precedents, and manages multi-document legal matters via the "Associate" agent.
- **Weaknesses:** Heavy dependency on the Microsoft Word ecosystem for its primary user interface.
- **Trajectory:** Expanding from a drafting tool into a full legal operations suite including intake and contract lifecycle indexing.
- **M&A:** none visible

## Sources

- Phase 1 census (verified 2026-09-09)
- kp-vertical-b.md
- Spellbook Pricing, spellbook.com (2026-09-09)
- Spellbook Homepage, spellbook.com (2026-09-09)
- Spellbook Series B, spellbook.com/blog (2025-10-09)
- Spellbook Series B, BetaKit (2025-10-09)
