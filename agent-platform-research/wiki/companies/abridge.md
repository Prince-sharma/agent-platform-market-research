---
name: Abridge
layer: L3
scope: vertical
vertical: healthcare
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L3;Lightspeed
---

# Abridge

**Thesis (one line):** Ambient AI platform transforming clinical conversations into structured, billable medical notes and actionable EHR outputs for enterprise healthcare systems.

## Facts

- Founded: unknown
- HQ: Philadelphia, PA
- YC batch: none
- Backers: Lightspeed, IVP (led $250M round)
- Funding: $250M+ total; last round $150M Series C
- Valuation: $5.3B (Aug 2026)
- Revenue/ARR: $100M+ (Aug 2026, high confidence)
- ICP: Enterprise healthcare systems and large medical groups
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** Natural language (ambient audio capture) with review/edit interface in EHR (Epic Hyperspace/Haiku)
2. **Runtime and tenancy:** Vendor multi-tenant SaaS (Secure U.S.-based cloud)
3. **Tool and integration strategy:** Proprietary connectors; deep integration with EHRs (specifically Epic)
4. **Knowledge and data strategy:** Built-in RAG via "Contextual Reasoning Engine" syncing with previous encounters, health system guidelines, and external medical literature (UpToDate, NEJM, JAMA)
5. **Autonomy and human-in-the-loop:** Approval gates; AI drafts notes and orders for clinician review and verification via "Linked Evidence"
6. **Governance and enterprise controls:** RBAC (SSO), audit trails, HIPAA compliance, 256-bit encryption, custom governance controls
7. **Pricing model:** unknown
8. **GTM motion:** Sales-led (Enterprise healthcare systems)
9. **Moat thesis:** Distribution (Enterprise EHR lock-in), data gravity (clinical encounter data), and specialized evals (clinician-led research)
10. **Open-source posture:** Proprietary
11. **Task horizon:** Multi-step workflow (minutes); covers pre-visit prep, ambient capture, and post-visit documentation

## Analysis

- **Agent capability depth:** End-to-end clinical documentation: surfaces patient history pre-visit, captures ambient audio during the encounter, generates structured billable notes, predicts medical problems for billing codes, and drafts actionable EHR orders.
- **Weaknesses:** High dependency on EHR partner ecosystems (e.g., Epic) for full workflow utility.
- **Trajectory:** Expanding from a documentation tool into a comprehensive "clinical reasoning" agent that provides real-time decision support and automated administrative actions.
- **M&A:** none visible

## Sources

- Phase 1 sweep: kp-vertical-b.md;vc-us-a.md;vc-us-b.md;vc-us-c.md (Sep 2026)
- Abridge Valuation 2026: $5.3B, $100M+ ARR, and How It ... (2026-08-25)
- Generative AI Platform for Clinical Conversations (https://www.abridge.com/product)
- Abridge | Ambient AI for Clinicians (https://www.abridge.com/platform/clinicians)
- Enhancing clinical documentation with ambient artificial intelligence... - PMC (2025-02-21)
