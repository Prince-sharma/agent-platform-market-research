---
name: Vapi
layer: X
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:X;Bessemer;YC W21
---

# Vapi

**Thesis (one line):** An enterprise voice AI infrastructure platform that simplifies the orchestration of STT, LLM, and TTS for low-latency phone agents.

## Facts

- Founded: 2021
- HQ: unknown
- YC batch: YC W21
- Backers: Peak XV (led Series B), Bessemer, YC, M12, Kleiner Perkins
- Funding: $72M total; $50M Series B (2026-05-12)
- Valuation: $500M (2026-05-12)
- Revenue/ARR: unknown (enterprise revenue grew 10x in one year as of 2026-05-12)
- ICP: Enterprises and developers building voice AI phone agents
- Pricing model: Usage-based per minute

## The eleven build decisions

1. **Build interface:** Code and config workflow via API and dashboard
2. **Runtime and tenancy:** Vendor multi-tenant SaaS with on-premise deployment options for enterprise
3. **Tool and integration strategy:** Proprietary connector library (connects with 40+ applications)
4. **Knowledge and data strategy:** Bring-your-own-model flexibility and secure private data integration
5. **Autonomy and human-in-the-loop:** Fully autonomous voice agents with real-time call control
6. **Governance and enterprise controls:** RBAC, SOC 2, HIPAA, PCI, SSO, and Zero Data Retention add-ons
7. **Pricing model:** Platform fee plus usage (0.05 USD per minute hosting plus at-cost model provider fees)
8. **GTM motion:** PLG self-serve (Build plan) and sales-led (Scale plan)
9. **Moat thesis:** Infrastructure orchestration, latency optimization, and enterprise compliance (HIPAA/SOC2)
10. **Open-source posture:** Proprietary; on-premise option for enterprise
11. **Task horizon:** Multi-step workflow (minutes)

## Analysis

- **Agent capability depth:** End-to-end voice orchestration handling transcription, LLM reasoning, and speech synthesis to replace traditional phone menus and hold times.
- **Weaknesses:** High dependency on third-party model providers for core intelligence and voice quality.
- **Trajectory:** Moving toward a comprehensive voice-native operating system for business-to-customer communication.
- **M&A:** none visible

## Sources

- Phase 1 census and kp-infra.md;vc-us-b.md;yc-2021-22.md sweep (verified 2026-09-09)
- vapi.ai/pricing (2026)
- vapi.ai/blog/series-b (2026-05-12)
- vapi.ai/blog/ai-wrapper (2025-05-26)
- github.com/VapiAI/docs/blob/main/fern/pricing.mdx (2026)
