---
name: Nabla
layer: L3
scope: vertical
vertical: healthcare
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L3;Khosla Ventures
---

# Nabla

**Thesis (one line):** Ambient AI clinical layer automating documentation, coding, and EHR integration to reduce clinician burnout across diverse healthcare scales.

## Facts

- Founded: 2018
- HQ: Paris, France
- YC batch: none
- Backers: Khosla Ventures
- Funding: $120M total; $70M Series C (June 2025)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Solo clinicians, mid-market practices, and large health systems (e.g., The Permanente Medical Group)
- Pricing model: Per clinician / month

## The eleven build decisions

1. **Build interface:** Natural language (ambient listening) via web, iOS, Android, and Chrome extension
2. **Runtime and tenancy:** Vendor multi-tenant SaaS
3. **Tool and integration strategy:** SMART on FHIR (Epic, athenahealth, Cerner, Meditech)
4. **Knowledge and data strategy:** Live sync with systems of record; no model training on PHI
5. **Autonomy and human-in-the-loop:** Approval gates; clinicians review and edit AI-generated drafts
6. **Governance and enterprise controls:** RBAC, HIPAA, SOC 2 Type 2, ISO 27001, GDPR; configurable data retention
7. **Pricing model:** Per seat (Starter ~$119/mo, Pro ~$239/mo, Enterprise via sales)
8. **GTM motion:** Hybrid PLG (free tier for solo/residents) and sales-led (enterprise)
9. **Moat thesis:** Distribution (large-scale health system deployments), multilingual capability (35+ languages), and EHR-native integration
10. **Open-source posture:** Proprietary
11. **Task horizon:** Single-turn (visit-to-note generation in ~5 seconds)

## Analysis

- **Agent capability depth:** End-to-end automation of the clinical encounter: ambient capture of patient-clinician dialogue, generation of structured notes (SOAP, H&P), and ICD-10/E&M coding suggestions.
- **Weaknesses:** EHR write-back is reported as "lighter" (structured paste) compared to some competitors; coding features are newer and less battle-tested than legacy revenue-cycle tools; lacks a human-QA review layer.
- **Trajectory:** Expanding from a specialized scribe tool into a broader "Clinical AI Layer" including API-first offerings (Nabla Connect) for other health-tech builders.
- **M&A:** none visible

## Sources

- Phase 1 sweep: kp-vertical-b.md;vc-us-a.md (Sep 2026)
- Nabla | Ambient AI for Clinical Documentation & EHR (https://www.nabla.com/)
- Nabla Review (2026): Pricing, Features & Verdict – Litmus (2026-07-02)
- Nabla AI Review 2026: Copilot Medical Scribe, Pricing, EHR (2025-10-26)
- Nabla Lands $70M To Build AI Agents In Healthcare Settings (2025-06-17)
