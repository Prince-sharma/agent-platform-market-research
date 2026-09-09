---
name: Omnara
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: YC S25
---

# Omnara

**Thesis (one line):** An open-source control plane and command center for running durable, production-grade coding agents across terminal, web, and mobile interfaces.

## Facts

- Founded: 2025
- HQ: unknown
- YC batch: S25
- Backers: Y Combinator
- Funding: unknown
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Software engineers and developers using AI coding agents (e.g., Claude Code, Codex)
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** Hybrid; provided via CLI (`pip install omnara`), a web dashboard, and a mobile app.
2. **Runtime and tenancy:** Flexible; offers a managed cloud or self-hosted options.
3. **Tool and integration strategy:** Supports built-in tools, Model Context Protocol (MCP) servers, and custom API-based tools.
4. **Knowledge and data strategy:** Durable state management that preserves session context and uncommitted code across device handoffs.
5. **Autonomy and human-in-the-loop:** Enforces approval gates via `permission` and `question` interactions that pause agents until a human responds.
6. **Governance and enterprise controls:** Config-based tool access control; provides a single API for secure, reachable production agents.
7. **Pricing model:** unknown
8. **GTM motion:** PLG self-serve via open-source and YC launch.
9. **Moat thesis:** Workflow lock-in through a cross-device "command center" experience and durable agent infrastructure.
10. **Open-source posture:** OSS core (Apache License 2.0) with a managed cloud offering.
11. **Task horizon:** Long-horizon; specifically designed for agents that run for minutes, hours, or days and survive crashes.

## Analysis

- **Agent capability depth:** Enables coding agents to perform multi-step tasks (debugging, refactoring) with the ability to be monitored and steered from a mobile device.
- **Weaknesses:** High dependency on the popularity of specific terminal-based agents like Claude Code for its primary value proposition.
- **Trajectory:** Moving from a wrapper for Claude Code toward a general-purpose, model-agnostic API for any production-grade durable agent.
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; yc-2025.md), verified 2026-09-09
- Omnara GitHub (https://github.com/omnara-ai/omnara), 2025-07-09
- Launch YC: Omnara (https://www.ycombinator.com/launches/OCT-omnara-the-first-command-center-for-ai-agents-terminal-web-and-mobile), 2025
- Omnara Documentation: Interactions (https://docs.omnara.com/events/interactions), 2026-09-09
- Omnara Documentation: Tools & permissions (https://docs.omnara.com/tools/permissions), 2026-09-09
- App Store: Omnara: Claude & Codex Mobile (https://apps.apple.com/us/app/omnara-claude-codex-mobile/id6748426727), 2026-02-04
- Y Combinator Company Profile (https://www.ycombinator.com/companies/omnara), 2025
