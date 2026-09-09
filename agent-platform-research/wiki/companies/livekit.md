---
name: LiveKit
layer: X
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:X
---

# LiveKit

**Thesis (one line):** Real-time voice and video infrastructure providing the stateful, low-latency foundation required for humanlike AI agents.

## Facts

- Founded: unknown
- HQ: San Francisco, CA
- YC batch: none
- Backers: Index Ventures (lead), Salesforce Ventures, Hanabi Capital, Altimeter, Redpoint Ventures
- Funding: $100M Series C (Jan 2026)
- Valuation: $1B (Jan 2026)
- Revenue/ARR: unknown
- ICP: Developers and enterprises building real-time voice and video AI agents
- Pricing model: Tiered monthly plans plus per-second usage metering

## The eleven build decisions

1. **Build interface:** code (framework for building agents)
2. **Runtime and tenancy:** vendor multi-tenant SaaS (LiveKit Cloud) and self-host
3. **Tool and integration strategy:** unknown
4. **Knowledge and data strategy:** unknown
5. **Autonomy and human-in-the-loop:** unknown
6. **Governance and enterprise controls:** RBAC, security reports, HIPAA, SSO, Support SLA
7. **Pricing model:** platform fee plus usage (per-second metering for sessions, recording, WebRTC, and SIP)
8. **GTM motion:** PLG self-serve (Build/Ship/Scale plans) and sales-led (Enterprise)
9. **Moat thesis:** infrastructure for stateful real-time media and open-source WebRTC lineage
10. **Open-source posture:** OSS core; self-host option
11. **Task horizon:** multi-step workflow (minutes to hours)

## Analysis

- **Agent capability depth:** Provides the transport and orchestration layer for voice agents, including telephony, STT, TTS, and LLM inference passthrough.
- **Weaknesses:** High dependency on third-party LLM/STT/TTS providers for core intelligence.
- **Trajectory:** Moving toward becoming the standard "voice-driven era" computing infrastructure for large-scale enterprise deployment.
- **M&A:** none visible

## Sources

- Phase 1 census and kp-infra.md sweep (verified 2026-09-09)
- livekit.com/pricing (2026-09-09)
- livekit.com/blog/introducing-per-second-metering-for-livekit (2026-08-24)
- livekit.com/blog/livekit-series-c (2026-01-22)
