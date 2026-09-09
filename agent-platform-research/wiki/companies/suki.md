---
name: Suki
layer: L3
scope: vertical
vertical: healthcare
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L3
---

# Suki

**Thesis (one line):** A voice-first clinical agent providing ambient documentation, bidirectional EHR write-back, and real-time chart Q&A for enterprise healthcare systems.

## Facts

- Founded: 2017
- HQ: California, unknown city
- YC batch: none
- Backers: unknown
- Funding: $70M Series D (October 2024)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Large healthcare systems, multi-specialty practices, and enterprise health networks (100+ clinicians)
- Pricing model: per seat (monthly)

## The eleven build decisions

1. **Build interface:** natural language (voice-first)
2. **Runtime and tenancy:** vendor multi-tenant SaaS
3. **Tool and integration strategy:** proprietary connector library (deep API connections with Epic, Oracle Cerner, athenahealth, Meditech, eClinicalWorks)
4. **Knowledge and data strategy:** live sync with systems of record (bidirectional EHR integration)
5. **Autonomy and human-in-the-loop:** approval gates (order staging for physician review)
6. **Governance and enterprise controls:** RBAC, audit trails, SOC 2 Type II, signed BAA
7. **Pricing model:** per seat (approx. $299 - $399/month per clinician)
8. **GTM motion:** sales-led (pilot-based)
9. **Moat thesis:** integrations (bidirectional EHR write-back), data gravity, distribution (400+ healthcare systems)
10. **Open-source posture:** proprietary
11. **Task horizon:** multi-step workflow (minutes)

## Analysis

- **Agent capability depth:** Beyond passive scribing, Suki performs bidirectional EHR tasks: pulling vitals/labs for Q&A ("what's the last A1c?"), staging orders directly from conversation, and suggesting ICD-10, HCC, and CPT codes for revenue capture.
- **Weaknesses:** High cost compared to solo tools; steep learning curve for voice-command vocabulary; lack of a human-QA review layer for high-acuity notes.
- **Trajectory:** Expanding from a documentation tool to a comprehensive "digital assistant" that automates the entire clinical workflow and billing accuracy.
- **M&A:** none visible

## Sources

- Phase 1 sweep: kp-vertical-b.md (Sep 2026)
- Suki Review (2026): Pricing, Features & Verdict – Litmus (2026-07-02)
- Suki Pricing: Features, Cost, and the Alternatives in 2026 – HealOS (2025-10-15)
- Suki Pricing (2026) – ITQlick (2026-02-10)
- Suki Secures $70M Series D Funding... (2024-10-10)
