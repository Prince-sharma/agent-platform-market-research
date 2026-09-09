---
name: Freed
layer: L3
scope: vertical
vertical: healthcare
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L3
---

# Freed

**Thesis (one line):** AI-powered medical scribe platform automating clinical documentation, coding, and patient communications for individual clinicians and healthcare organizations.

## Facts

- Founded: unknown
- HQ: San Francisco, CA
- YC batch: none
- Backers: Sequoia (lead)
- Funding: $30M Series A (Mar 2025)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Individual clinicians, small-to-midsized clinics, and healthcare organizations
- Pricing model: Tiered monthly subscription (Starter, Core, Premier) and custom Group plans

## The eleven build decisions

1. **Build interface:** Natural language (AI scribe) with specialty-specific templates and an AI chat interface
2. **Runtime and tenancy:** Vendor multi-tenant SaaS
3. **Tool and integration strategy:** EHR push integration for supported browser-based EHRs
4. **Knowledge and data strategy:** Built-in RAG (Clinical Evidence sourced from 50+ medical sources) and patient context pull-forward
5. **Autonomy and human-in-the-loop:** Approval gates (clinicians edit/review AI-generated notes and codes)
6. **Governance and enterprise controls:** RBAC (Medical Assistant users), SSO, audit trails (implied by SOC 2), HIPAA/HITECH compliance, and organization-wide BAA
7. **Pricing model:** Per seat (per clinician) monthly or annual subscription
8. **GTM motion:** PLG self-serve (individual clinician motion) and sales-led (Group/Clinic plans)
9. **Moat thesis:** Workflow lock-in via EHR integration and style-learning AI templates
10. **Open-source posture:** Proprietary
11. **Task horizon:** Multi-step workflow (minutes) from visit capture to note generation and EHR push

## Analysis

- **Agent capability depth:** End-to-end clinical administrative automation: ambient listening during visits, generating structured clinical notes, suggesting ICD-10/CPT/E/M codes, and drafting patient instructions and referral letters.
- **Weaknesses:** Dependence on browser-based EHR compatibility for "push" functionality.
- **Trajectory:** Expanding from a point-solution scribe to a comprehensive "AI platform for your clinic" including administrative roles (Medical Assistants) and deeper clinical intelligence.
- **M&A:** None visible

## Sources

- Phase 1 sweep: kp-vertical-b.md (Sep 2026)
- Freed raises $30 million, led by Sequoia, to tackle clinician ... (2025-03-05)
- Pricing — Free Trial, Individual & Group | Freed (https://www.getfreed.ai/pricing)
- Freed Pricing, Discounts, and Referral Program | Freed Scribe Help Center (https://help.getfreed.ai/en/articles/9242518-freed-pricing-discounts-and-referral-program)
- AI Medical Scribe for Clinicians (https://www.getfreed.ai/specialty/clinicians)
- Toolradar: Freed Reviews, Pricing & Alternatives (2026-08-26)
