---
name: Retell AI
layer: X
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:X;YC W24
---

# Retell AI

**Thesis (one line):** An enterprise-grade voice orchestration platform enabling businesses to deploy low-latency, autonomous AI agents for high-volume call center operations.

## Facts

- Founded: 2023
- HQ: unknown
- YC batch: YC W24
- Backers: Alt Capital, angel investors
- Funding: $5.1M raised (2024)
- Valuation: unknown
- Revenue/ARR: $40M annualized revenue (reported Nov 2025)
- ICP: Businesses requiring AI call centers (e.g., healthcare, insurance, EV companies)
- Pricing model: Pay-as-you-go per minute

## The eleven build decisions

1. **Build interface:** config workflow and API access
2. **Runtime and tenancy:** vendor multi-tenant SaaS with dedicated stable server option for enterprise
3. **Tool and integration strategy:** proprietary connector library including SMS and keypad input detection
4. **Knowledge and data strategy:** unknown
5. **Autonomy and human-in-the-loop:** fully autonomous with built-in safety guardrails
6. **Governance and enterprise controls:** RBAC, custom MSA/DPA, HIPAA/BAA, PII redaction, and SSO
7. **Pricing model:** platform fee (starting at $0) plus usage (per-minute)
8. **GTM motion:** PLG self-serve and sales-led for enterprise
9. **Moat thesis:** proprietary voice orchestration engine for sub-second latency and interruption recovery
10. **Open-source posture:** proprietary
11. **Task horizon:** multi-step workflow (minutes)

## Analysis

- **Agent capability depth:** Handles end-to-end phone calls including scheduling, support automation, and real-time agentic actions mid-call.
- **Weaknesses:** High dependency on third-party LLM and TTS providers for core intelligence and voice synthesis.
- **Trajectory:** Moving toward deeper enterprise compliance and reliability to replace traditional legacy call center infrastructure.
- **M&A:** none visible

## Sources

- Phase 1 census and kp-infra.md;yc-2024.md sweep (verified 2026-09-09)
- retellai.com/pricing (2026)
- retellai.com/about-us (2025)
- retellai.com/changelog/pricing-changes-latency-improvements-one-time-sms-and-more (2025-05-16)
- docs.retellai.com/test/testing-pricing (2026)
