---
name: Anterior
layer: L3
scope: vertical
vertical: healthcare
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L3;NEA
---

# Anterior

**Thesis (one line):** Enterprise AI platform automating prior authorization and complex clinical workflows for health plans via modular, FHIR-native "Actions."

## Facts

- Founded: unknown
- HQ: unknown
- YC batch: none
- Backers: NEA (led Series A)
- Funding: $64M total; last round $40M (Feb 2026)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Health plans / Payer enterprises
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** unknown
2. **Runtime and tenancy:** vendor multi-tenant SaaS (implied by "Anterior platform" and API-first delivery)
3. **Tool and integration strategy:** API-first; FHIR-native; integrates with payer systems like HealthEdge and MCG
4. **Knowledge and data strategy:** live sync with systems of record (EMR integration, NSI chart retrieval)
5. **Autonomy and human-in-the-loop:** approval gates; configurable thresholds from fully automated to human-guided; clinicians review/refine reasoning
6. **Governance and enterprise controls:** RBAC, immutable audit logs, AI reasoning logs, HIPAA verification, KLAS-verified accuracy
7. **Pricing model:** unknown
8. **GTM motion:** sales-led (offers "managed deployments" via forward-deployed clinicians and AI engineers)
9. **Moat thesis:** clinical accuracy (99.24%), deep payer system integrations, workflow lock-in via FHIR-compliant policy digitization
10. **Open-source posture:** proprietary
11. **Task horizon:** multi-step workflow (minutes) to long-horizon (case management/adjudication)

## Analysis

- **Agent capability depth:** End-to-end automation of the prior authorization lifecycle: intake (fax-to-case), verification (eligibility/policy), preparation (FHIR conversion), reasoning (medical necessity review), and summarization (determination notes/denial letters).
- **Weaknesses:** High dependency on payer system interoperability and clinician trust for "black box" avoidance.
- **Trajectory:** Expanding from a specific prior authorization solution into a general-purpose "Modular AI" platform ("Actions") for any clinical payer workflow (e.g., FWA, Risk Adjustment, HEDIS).
- **M&A:** none visible

## Sources

- Phase 1 sweep: kp-vertical-b.md;vc-us-b.md (Sep 2026)
- Anterior closes $40 Million to accelerate health plan AI ... (2026-02-12)
- https://www.anterior.com/prior-authorization-solution
- https://www.anterior.com/action
- https://www.anterior.com/
