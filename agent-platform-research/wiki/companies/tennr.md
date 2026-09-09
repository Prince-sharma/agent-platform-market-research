---
name: Tennr
layer: L3
scope: vertical
vertical: healthcare
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L3;Foundation Capital;YC W23
---

# Tennr

**Thesis (one line):** Agentic orchestration platform automating unstructured patient intake, referral processing, and insurance verification to eliminate operational friction in specialty healthcare.

## Facts

- Founded: 2021
- HQ: New York City
- YC batch: W23
- Backers: IVP (lead), a16z, Foundation Capital, Lightspeed, GV, ICONIQ, Frank Slootman
- Funding: $162M total; $101M Series C (Jun 2025)
- Valuation: $605M (Jun 2025)
- Revenue/ARR: unknown (reported tripling of revenue between Oct 2024 and Jun 2025)
- ICP: Specialty healthcare providers, national networks, and independent providers
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** unknown
2. **Runtime and tenancy:** vendor multi-tenant SaaS
3. **Tool and integration strategy:** proprietary connectors for fax, portals, and internal orders
4. **Knowledge and data strategy:** proprietary vision-language models trained on service-to-payer criteria mappings
5. **Autonomy and human-in-the-loop:** fully autonomous for classification and routing; agentic capabilities for phone-based benefit investigations
6. **Governance and enterprise controls:** policy-grade decisioning; unknown
7. **Pricing model:** unknown
8. **GTM motion:** sales-led
9. **Moat thesis:** data gravity (proprietary dataset of payer criteria) and workflow lock-in (deep integration into fax/intake pipelines)
10. **Open-source posture:** proprietary
11. **Task horizon:** multi-step workflow (minutes to days for referral completion)

## Analysis

- **Agent capability depth:** End-to-end automation of the "black hole" referral process: reading unstructured faxes/emails, extracting clinical data, verifying insurance eligibility via phone/portal, requesting missing documentation, and updating systems of record.
- **Weaknesses:** High dependency on the persistence of legacy fax workflows in healthcare; potential friction in integrating with highly fragmented EHR systems.
- **Trajectory:** Expanding from simple intake automation to full "patient orchestration," moving deeper into the revenue cycle by reducing first-pass denials.
- **M&A:** none visible

## Sources

- Phase 1 sweep: kp-vertical-b.md;vc-ai.md;yc-2023.md (Sep 2026)
- https://tennr.com/ (Sep 2026)
- https://www.fiercehealthcare.com/health-tech/tennr-clinches-101m-build-out-ai-automates-patient-referral-workflows (2025-06-18)
- Tennr AI-Powered Document Intelligence for Patient Referrals by Tennr — Product Research | aVenture (2026-05-12)
