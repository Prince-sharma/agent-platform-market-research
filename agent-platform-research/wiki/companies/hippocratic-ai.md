---
name: Hippocratic AI
layer: L3
scope: vertical
vertical: healthcare
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L3;a16z;General Catalyst
---

# Hippocratic AI

**Thesis (one line):** Safety-focused, non-diagnostic conversational AI agents designed to scale patient outreach and clinical administrative workflows for providers, payors, and life sciences.

## Facts

- Founded: unknown
- HQ: unknown
- YC batch: none
- Backers: a16z, General Catalyst (seed)
- Funding: $126M Series C (Nov 2025)
- Valuation: $3.5B (Nov 2025)
- Revenue/ARR: unknown
- ICP: Health systems, hospitals, medical groups, health plans, risk-bearing organizations, and pharmaceutical/life sciences companies.
- Pricing model: Hourly (advertised as low as $9/hour)

## The eleven build decisions

1. **Build interface:** natural language (voice-first conversational AI)
2. **Runtime and tenancy:** vendor multi-tenant SaaS
3. **Tool and integration strategy:** proprietary; integrates with EHR/CRM for cohort pulling and write-back
4. **Knowledge and data strategy:** built-in RAG via Polaris LLM (trained on proprietary healthcare data, clinical care plans, and textbooks)
5. **Autonomy and human-in-the-loop:** approval gates; real-time hand-off to human nurses on red flags or clinical judgment requests
6. **Governance and enterprise controls:** HIPAA, HITRUST, SOC 2; clinician-led output testing (7,500+ licensed clinicians)
7. **Pricing model:** per hour
8. **GTM motion:** sales-led
9. **Moat thesis:** evals (clinician-validated outputs), proprietary healthcare LLM (Polaris), and distribution via health system partnerships
10. **Open-source posture:** proprietary
11. **Task horizon:** multi-step workflow (minutes to hours); persistent for longitudinal chronic care check-ins

## Analysis

- **Agent capability depth:** End-to-end patient interaction including inbound scheduling, post-discharge follow-ups, chronic care monitoring, and care-gap outreach. Agents handle the full cycle: identifying cohorts from EHR, conducting empathetic voice conversations, escalating to humans, and documenting outcomes back to systems of record.
- **Weaknesses:** Non-diagnostic limitation restricts agents from providing medical advice or diagnosis; reliance on hourly pricing may create budget unpredictability for some enterprises.
- **Trajectory:** Expanding from simple scheduling/reminders into complex "orchestrators" for specific clinical pathways (e.g., Sepsis, CKD, HEDIS gaps) and integrating deeper into facility hardware (cobots, room AV).
- **M&A:** none visible

## Sources

- Phase 1 sweep: kp-vertical-b.md;vc-us-a.md;vc-us-b.md (Sep 2026)
- Product Overview – Hippocratic AI (https://hippocraticai.com/new-products/)
- AI Agents That Call Your Patients - Hippocratic AI (2026-07-27)
- A complete overview of Hippocratic AI pricing and its AI healthcare agents | eesel AI (2025-10-01)
- Hippocratic AI lands $126M series C at $3.5B valuation (2025-11-03)
