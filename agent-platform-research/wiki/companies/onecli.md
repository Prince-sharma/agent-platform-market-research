---
name: OneCLI
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: base
updated: 2026-09-09
sources: YC S26
---

# OneCLI

**Thesis (one line):** An open-source credential gateway that secures AI agents by injecting secrets at the network layer instead of storing them in the agent.

## Facts

- Founded: 2026
- HQ: unknown
- YC batch: S26
- Backers: Y Combinator
- Funding: unknown
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Teams running coding or autonomous agents in production
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** CLI and credential gateway
2. **Runtime and tenancy:** Self-host / Open source
3. **Tool and integration strategy:** MCP and CLI integrations
4. **Knowledge and data strategy:** unknown
5. **Autonomy and human-in-the-loop:** Approval gates based on user-defined rules
6. **Governance and enterprise controls:** Agent identity, scoped credentials, and admin-controlled workspace policies
7. **Pricing model:** unknown
8. **GTM motion:** PLG (Open source)
9. **Moat thesis:** Security infrastructure (credential injection) and integration as default layer in NanoClaw
10. **Open-source posture:** OSS core (Apache License 2.0)
11. **Task horizon:** Multi-step workflow

## Analysis

- **Agent capability depth:** Enables agents to securely access GitHub, Gmail, Notion, Dropbox, and CRMs without holding raw secrets.
- **Weaknesses:** Traction is listed as "none visible" in census despite reported 320K+ downloads in YC launch materials.
- **Trajectory:** Expanding from a credential gateway to a full "agent harness" providing isolated VMs for employees.
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; yc-2026.md), verified 2026-09-09
- OneCLI - A Personal Assistant for Every Employee (https://onecli.sh/), 2026-09-09
- Launch YC: OneCLI - Your AI agents shouldn't be holding raw secrets (https://www.ycombinator.com/launches/RoJ-onecli-your-ai-agents-shouldn-t-be-holding-raw-secrets), 2026-07-23
- onecli/onecli (https://github.com/onecli/onecli/), 2026-09-09
