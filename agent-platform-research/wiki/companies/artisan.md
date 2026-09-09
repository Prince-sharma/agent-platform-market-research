---
name: Artisan
layer: L3
scope: vertical
vertical: GTM/sales
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: gtm:tofu;seed:L3;YC W24
---

# Artisan

**Thesis (one line):** AI-powered BDR agents that automate outbound prospecting, lead enrichment, and meeting booking to replace or augment human sales development teams.

## Facts

- Founded: unknown
- HQ: unknown
- YC batch: W24
- Backers: unknown
- Funding: $36.5M total; $25M Series A (2025-04-09)
- Valuation: unknown
- Revenue/ARR: $5M ARR (2026-08-10, high confidence)
- ICP: BDRs, AEs, and AMs running outbound sales motions
- Pricing model: Tiered plans (Team, Scale, Enterprise) based on lead volume, mailboxes, and dialer seats

## The eleven build decisions

1. **Build interface:** Natural language and configuration for campaigns; includes a dialer for reps.
2. **Runtime and tenancy:** Vendor multi-tenant SaaS.
3. **Tool and integration strategy:** Proprietary connectors for Salesforce and HubSpot (bi-directional sync) and custom webhooks.
4. **Knowledge and data strategy:** Built-in B2B database of 250M+ verified contacts with integrated enrichment and signals.
5. **Autonomy and human-in-the-loop:** Autonomous by default; supports approval gates, tone locking, banned phrases, and escalation rules.
6. **Governance and enterprise controls:** SOC 2 Type II, SSO/SAML, audit logs, and advanced security controls for Enterprise.
7. **Pricing model:** Platform fee based on lead volume (e.g., 2,500/mo for Team, 6,000/mo for Scale) plus dialer seats.
8. **GTM motion:** Sales-led with white-glove onboarding and forward-deployed strategists for Enterprise.
9. **Moat thesis:** Data gravity (250M+ contacts) and workflow lock-in via deep CRM sync and integrated dialer.
10. **Open-source posture:** Proprietary.
11. **Task horizon:** Long-horizon (multi-step outbound sequences from lead find to meeting booked).

## Analysis

- **Agent capability depth:** End-to-end outbound automation including lead sourcing, personalized outreach, reply handling, and CRM synchronization.
- **Weaknesses:** High dependency on CRM integration quality and potential deliverability risks associated with automated sending domains.
- **Trajectory:** Expanding from a single AI BDR (Ava) toward a broader suite of "AI employees" for various GTM functions.
- **M&A:** none visible

## Sources

- Phase 1 census (verified 2026-09-09)
- gtm-carry.md
- kp-vertical-b.md
- yc-2024.md
- Artisan Plans & Pricing, artisan.co (2026-09-09)
- Salesforce setup, support.artisan.co (2026-09-09)
- TechCrunch, "Artisan raises $25M" (2025-04-09)
- GetLatka, Artisan Revenue 2025 (2026-08-10)
