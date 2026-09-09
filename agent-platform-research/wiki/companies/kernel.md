---
name: Kernel
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: Accel;YC S25
---

# Kernel

**Thesis (one line):** Browser-as-a-service on unikernels with sub-150ms cold starts; the performance-challenger browser runtime for AI agents.

## Facts

- Founded: 2025 (Kernel Technologies)
- HQ: San Francisco, CA
- YC batch: S25
- Backers: Accel (Series A lead, Oct 2025), Y Combinator
- Funding: $22M Series A (Oct 9, 2025; PitchBook lists $16M)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: AI agent and web-automation developer teams
- Pricing model: Usage-based with no idle billing (Hobbyist $30/mo, Start-Up $200/mo, headless ~$0.06/hr)

## The eleven build decisions

1. **Build interface:** Code (API plus SDKs for Playwright, Puppeteer, Browser Use, Magnitude)
2. **Runtime and tenancy:** Vendor multi-tenant SaaS
3. **Tool and integration strategy:** Official SDKs for agent frameworks; Anthropic integration for Claude Managed Agents (Jun 2026)
4. **Knowledge and data strategy:** Persistent browser profiles carry state and auth across sessions
5. **Autonomy and human-in-the-loop:** Infrastructure; enables long-horizon autonomous agents
6. **Governance and enterprise controls:** SOC 2 (2026); session logs, live view, replays
7. **Pricing model:** Usage-based, no idle billing; tiered plans with metered browser-hours
8. **GTM motion:** PLG self-serve
9. **Moat thesis:** Unikernel performance (sub-150ms cold starts), price, open source
10. **Open-source posture:** Open source per YC listing; self-host unknown
11. **Task horizon:** Long-horizon; supports Claude Managed Agents scheduled tasks (Jun 2026)

## Analysis

- **Agent capability depth:** Cloud browser sessions: isolated Chromium on unikernels, persistent profiles, stealth proxies, full observability (live view, replays, logs)
- **Weaknesses:** Young (founded 2025, 8-20 employees); thinner feature set and brand than Browserbase
- **Trajectory:** Partnered with Anthropic (Jun 2026) to power Claude Managed Agents; expanding toward agent-execution infrastructure
- **M&A:** None visible

## Sources

- SiliconANGLE: Kernel raises $22M (Oct 9, 2025)
- accel.com investment announcement (Oct 9, 2025)
- ycombinator.com/companies/kernel (2026)
- kernel.sh (2026)
- Caplight company profile (2026)
