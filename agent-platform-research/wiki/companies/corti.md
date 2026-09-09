---
name: Corti
layer: L3
scope: vertical
vertical: healthcare
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L3
---

# Corti

**Thesis (one line):** A clinical-grade AI platform providing medical ASR, documentation, and agentic frameworks for healthcare developers and emergency dispatch services.

## Facts

- Founded: unknown
- HQ: Copenhagen
- YC batch: none
- Backers: unknown
- Funding: $87M total; $60M Series B (2023)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Healthcare and life-science developers; emergency medical dispatch agencies
- Pricing model: Usage-based (credits); Acceleration Pack at $1,000/month

## The eleven build decisions

1. **Build interface:** Natural language and API-driven; includes a "Corti Console" for prototyping.
2. **Runtime and tenancy:** Vendor multi-tenant SaaS; HIPAA-ready.
3. **Tool and integration strategy:** Proprietary clinical-grade APIs and JS SDK.
4. **Knowledge and data strategy:** Built-in RAG via specialized "Experts" (e.g., PubMed Expert, DrugBank Expert).
5. **Autonomy and human-in-the-loop:** Approval gates; designed as decision support to support rather than override clinical judgment.
6. **Governance and enterprise controls:** HIPAA-ready; audit trails provided for medical coding.
7. **Pricing model:** Platform fee (optional pack) plus usage (credits based on audio minutes and text tokens).
8. **GTM motion:** Sales-led for enterprise/government; developer-led via API/Console.
9. **Moat thesis:** Clinical-grade accuracy (medical ASR), specialized medical data integrations, and deep vertical workflow lock-in.
10. **Open-source posture:** Proprietary.
11. **Task horizon:** Multi-step workflow (minutes) for triage and documentation.

## Analysis

- **Agent capability depth:** Provides end-to-end clinical automation including real-time ASR for 911 calls, automated triage risk stratification, medical coding (ICD-10), and ambient clinical documentation. Agents can reason across clinical guidelines to identify gaps in patient interviews.
- **Weaknesses:** Transparency and privacy concerns regarding the use of live 911 calls for AI training and dispatch nudging.
- **Trajectory:** Shifting from a specialized emergency tool to a broader "AI platform for healthcare developers" via the Symphony API.
- **M&A:** none visible

## Sources

- Phase 1 sweep: kp-vertical-b.md (Sep 2026)
- Corti: AI Platform for Healthcare Developers (https://corti.ai/)
- Triage and Initial Assessment Agent | Corti AI Agents for Healthcare (2026-08-26)
- Seattle Fire Department used AI to analyze 911 medical calls without public disclosure (2026-06-15)
- Corti, an AI 'co-pilot' for healthcare clinicians, raises $60M | TechCrunch (2023-09-20)
