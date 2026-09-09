---
name: Skyvern
layer: X
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:X;YC S23
---

# Skyvern

**Thesis (one line):** AI-powered browser automation that replaces brittle selectors with natural language intent to automate complex web workflows at scale.

## Facts

- Founded: unknown
- HQ: unknown
- YC batch: YC S23
- Backers: unknown
- Funding: $2.8M raised (Seed, 2025-12-18)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Developers and enterprise operations teams replacing manual portal work
- Pricing model: Monthly credit tiers

## The eleven build decisions

1. **Build interface:** Natural language, code (Python/TypeScript SDK), and no-code dashboard
2. **Runtime and tenancy:** Vendor multi-tenant SaaS and self-host
3. **Tool and integration strategy:** Proprietary SDK extending Playwright; Zapier integration
4. **Knowledge and data strategy:** Live browser interaction with vision and LLM-based extraction
5. **Autonomy and human-in-the-loop:** Fully autonomous agents with human-in-the-loop for Enterprise
6. **Governance and enterprise controls:** RBAC, SOC-2 Type II, HIPAA compliance, Azure Key Vault, Bitwarden integration
7. **Pricing model:** Platform fee (monthly tiers) plus usage (credits)
8. **GTM motion:** PLG self-serve and sales-led for Enterprise
9. **Moat thesis:** Reliability via vision-based intent over DOM selectors; open-source adoption
10. **Open-source posture:** OSS core (AGPL-3.0); self-host option
11. **Task horizon:** Multi-step workflow (minutes)

## Analysis

- **Agent capability depth:** End-to-end browser automation including navigation, form filling, structured data extraction, CAPTCHA solving, and 2FA/TOTP handling.
- **Weaknesses:** Reliance on LLM vision/reasoning for complex flows may introduce latency or non-deterministic behavior.
- **Trajectory:** Moving from per-step pricing to credit-based bundles to encourage production-scale automation and iteration.
- **M&A:** None visible

## Sources

- Phase 1 census and kp-infra.md;yc-2023.md sweep (verified 2026-09-09)
- skyvern.com/pricing (2026-09-09)
- skyvern.com/developers (2026-09-09)
- skyvern.com/blog/launch-week-day-5-simpler-pricing-model/ (2026-01-30)
- skyvern.com/blog/we-raised-2-7m-to-fix-browser-automation (2025-12-18)
