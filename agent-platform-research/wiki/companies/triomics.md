---
name: Triomics
layer: L3
scope: vertical
vertical: healthcare
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: YC W21
---

# Triomics

**Thesis (one line):** AI agents that reason across longitudinal oncology records to automate trial matching, visit preparation, and registry abstraction.

## Facts

- Founded: unknown
- HQ: New York, NY
- YC batch: W21
- Backers: Battery Ventures, Lightspeed, Nexus, Y Combinator
- Funding: $54.2M total; last round $22M (May 2026)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Cancer centers (NCI-designated and community practices) and Life Sciences
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** natural language / config workflow (outputs land in EHR in-baskets, worklists, and notes)
2. **Runtime and tenancy:** vendor multi-tenant SaaS (BAA required for data upload)
3. **Tool and integration strategy:** proprietary connector library (Native integrations with Epic, OncoEMR, iKnowMed; Epic App Marketplace approved)
4. **Knowledge and data strategy:** built-in RAG (OncoIndexer normalizes HL7, FHIR, CCDAs, XMLs, PDFs, TIFFs, JPEGs for OncoLLM)
5. **Autonomy and human-in-the-loop:** approval gates (outputs are cited and reviewable; registrars "adjudicate instead of curate")
6. **Governance and enterprise controls:** RBAC, audit trails, compliance certs (BAA mentioned), cited outputs
7. **Pricing model:** unknown
8. **GTM motion:** sales-led (partnerships with leading cancer centers)
9. **Moat thesis:** data gravity (longitudinal record ingestion), integrations (EHR native), and domain-specific tuning (OncoLLM)
10. **Open-source posture:** proprietary
11. **Task horizon:** multi-step workflow (minutes to hours; processes longitudinal records for daily clinic schedules)

## Analysis

- **Agent capability depth:** Uses "OncoLLM" (a constellation of eight specialized models from 3B to 72B parameters) to perform patient-level reasoning. Agents automate three primary workflows: PRISM (trial matching), Symphony (visit prep/pre-charting), and Harmony (registry abstraction for NAACCR, SEER, COC, and QOPI).
- **Weaknesses:** High dependency on the quality of unstructured data (scanned faxes/PDFs) despite the OncoIndexer pipeline.
- **Trajectory:** Expanding from a trial-matching wedge into a comprehensive oncology intelligence layer that serves both providers and life sciences.
- **M&A:** none visible

## Sources

- Phase 1 sweep: yc-2021-22.md (Sep 2026)
- Triomics (https://triomics.com/)
- Triomics | About us (https://triomics.com/about-us)
- Triomics | Cancer centers overview (https://triomics.com/cancer-centers)
- Triomics nabs $22M to bring oncology-specific AI to cancer centers | TechCrunch (2026-05-27)
- How Triomics Uses AI To Help Doctors Treat Cancer More Quickly (2026-06-03)
