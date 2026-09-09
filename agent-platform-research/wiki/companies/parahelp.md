---
name: Parahelp
layer: L3
scope: vertical
vertical: customer service
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: YC S24
---

# Parahelp

**Thesis (one line):** Autonomous AI support agent that builds and manages itself through natural language, resolving software-company tickets end-to-end, priced per resolution.

## Facts

- Founded: 2024, by Anker Ryhl (CEO per Sacra) and Mads Lunau Liechti
- HQ: San Francisco
- YC batch: S24
- Backers: Alt Capital (Series A lead), Hidden Capital (seed lead), Y Combinator, Perplexity, ByFounders, Skyfall Ventures, Hanabi Capital
- Funding: $21.2M total ($3.2M seed + $18M Series A, both announced 2025-09-11)
- Valuation: unknown
- Revenue/ARR: unknown; third-party estimate ~$0.9M ARR (getlatka, undated, low confidence); traction: 46% of Captions' tickets resolved within 7 days, over half of Framer's support, CSAT 94% at Kit
- ICP: B2B software companies (CX teams; customers incl. Captions, Perplexity, Bolt, Framer, Kit)
- Pricing model: per-resolution credits, 1 credit per resolved ticket; $1.25/credit (Start), $1/credit (Scale), custom; Internal Agent actions metered at 0.1-5 credits

## The eleven build decisions

1. **Build interface:** Natural language only; customers chat with the Internal Agent to build, test, and refine the Customer Agent, no canvas or customer-side code.
2. **Runtime and tenancy:** Vendor multi-tenant SaaS; no self-host option visible.
3. **Tool and integration strategy:** "If a tool has an API" the Internal Agent writes and runs scoped code to connect it; prebuilt connectors incl. Stripe, Slack, Linear, Retool, Intercom, Zendesk, Pylon, Plain, Front.
4. **Knowledge and data strategy:** Live context sync from Notion, help centers, historical tickets, Slack, GitHub PRs.
5. **Autonomy and human-in-the-loop:** Customer Agent resolves tickets end-to-end unattended; low-confidence cases route to humans; drafts can be sent to Slack for one-click approval.
6. **Governance and enterprise controls:** SOC 2 Type II, GDPR, RBAC; scoped API connections for secure tool use.
7. **Pricing model:** Outcome-based per-resolution credits; agent-building actions metered separately.
8. **GTM motion:** Sales-led ("book a demo" / "talk to a founder"), amplified by YC-network case studies (Captions, Perplexity).
9. **Moat thesis:** The self-managing Internal Agent removes setup and maintenance cost; per-resolution pricing aligns to outcomes; secure any-API tool connectivity.
10. **Open-source posture:** Proprietary; nothing open-source visible.
11. **Task horizon:** Multi-step ticket resolution (minutes) across email, live chat, and Slack; always-on.

## Analysis

- **Agent capability depth:** Two-agent architecture: a Customer Agent resolves complex issues end-to-end (billing, technical troubleshooting) while the Internal Agent builds, tests, and continuously improves it, including writing code for new integrations; live in production at Captions (46% resolution in 7 days), Perplexity, Bolt, Framer, and Kit.
- **Weaknesses:** 11-person team; narrow software-company ICP; compliance stack stops at SOC 2/GDPR; sub-$1M estimated ARR against $21.2M raised.
- **Trajectory:** Parahelp 3 (June 2026) reframed the bottleneck from intelligence to connection, with agents that wire up their own tools; expanding channels and proactive self-improvement.
- **M&A:** none visible.

## Sources

- parahelp.com (accessed 2026-09-09)
- parahelp.com/pricing (accessed 2026-09-09)
- parahelp.com/blog/announcing-our-series-a-and-seed (2025-09-11)
- parahelp.com/blog/parahelp-3 (2026-06-18)
- ycombinator.com/companies/parahelp (accessed 2026-09-09)
- sacra.com/c/parahelp (accessed 2026-09-09)
- menlotimes.com, Parahelp announced $18M Series A and $3.2M seed (2025-09-12)
- featurebase.app/blog/parahelp-pricing (2026-05-20)
- getlatka.com/companies/parahelp.com (accessed 2026-09-09)
