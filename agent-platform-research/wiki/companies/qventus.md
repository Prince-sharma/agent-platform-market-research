---
name: Qventus
layer: L3
scope: vertical
vertical: healthcare
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L3;Mayfield
---

# Qventus

**Thesis (one line):** AI-powered operational assistants that automate hospital patient flow, perioperative coordination, and surgical growth by acting directly on EHR data.

## Facts

- Founded: unknown
- HQ: unknown
- YC batch: none
- Backers: KKR (lead), Mayfield
- Funding: $105M Series D (Jan 2025)
- Valuation: $400M+ (Jan 2025)
- Revenue/ARR: unknown
- ICP: Hospital systems, CIOs, CMIOs, and healthcare operational leaders
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** natural language / config workflow (embedded in EHR)
2. **Runtime and tenancy:** vendor multi-tenant SaaS
3. **Tool and integration strategy:** proprietary connector library (bi-directional EHR integration)
4. **Knowledge and data strategy:** live sync with systems of record; locally trained ML models on patient/care patterns
5. **Autonomy and human-in-the-loop:** approval gates; agents handle "below-license administrative tasks" with human oversight
6. **Governance and enterprise controls:** RBAC, audit trails, compliance certs (implied by "best-in-class security" for healthcare)
7. **Pricing model:** unknown
8. **GTM motion:** sales-led
9. **Moat thesis:** data gravity (locally trained models), workflow lock-in (deep EHR integration), distribution
10. **Open-source posture:** proprietary
11. **Task horizon:** multi-step workflow (minutes to days, e.g., discharge planning and pre-admission testing)

## Analysis

- **Agent capability depth:** Agents automate end-to-end operational tasks: predicting discharge barriers, auto-populating EDDs in EHRs, sequencing ancillary orders (MRI/Echo), making/receiving phone calls, and tracking follow-up items.
- **Weaknesses:** High dependency on EHR integration quality and hospital-specific data cleanliness for local model training.
- **Trajectory:** Moving from a recommendation engine to a "system of action" that executes administrative tasks autonomously to reduce clinician burnout.
- **M&A:** none visible

## Sources

- Phase 1 sweep: kp-vertical-b.md;vc-ai.md (Sep 2026)
- Inpatient Capacity Solution | Qventus (https://www.qventus.com/solutions/discharge-planning/)
- Your AI teammates to automate hospital operations | Qventus (https://www.qventus.com/)
- Healthcare Operations Automation Platform | Qventus (https://www.qventus.com/solutions/healthcare-automation-platform/)
- Qventus Announces $105 Million Investment, Series D Led by KKR (2025-01-13)
- More money comes to AI healthcare: Qventus nabs $105M at $400M+ valuation | TechCrunch (2025-01-13)
