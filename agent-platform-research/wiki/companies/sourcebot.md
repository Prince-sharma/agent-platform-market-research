---
name: Sourcebot
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: YC F25
---

# Sourcebot

**Thesis (one line):** Self-hosted code search and AI Q&A over entire codebases, served to humans and agents over MCP; used by NVIDIA, Red Hat, Wikimedia.

## Facts

- Founded: 2023
- HQ: San Francisco, CA
- YC batch: F25
- Backers: Y Combinator, Pioneer Fund, Team Ignite Ventures
- Funding: $500K seed (Sep 2025)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Engineering organizations with large codebases; used at NVIDIA, Red Hat, Wikimedia
- Pricing model: Self-host OSS free; cloud plans from $20/user/mo (cloud plans since removed from repo, 2026)

## The eleven build decisions

1. **Build interface:** Web UI search plus natural-language Q&A plus MCP
2. **Runtime and tenancy:** Self-host (Docker/OSS) primary; cloud plans removed from repo (2026 commit)
3. **Tool and integration strategy:** MCP server for code context; indexes connected Git repos
4. **Knowledge and data strategy:** Live sync with Git repositories; indexes whole codebases
5. **Autonomy and human-in-the-loop:** Tool, not agent runtime; serves context to agents
6. **Governance and enterprise controls:** Self-hosted; controls are customer-side
7. **Pricing model:** OSS free self-host; cloud from $20/user/mo (2026 excerpt; strategy in flux)
8. **GTM motion:** OSS PLG toward enterprise
9. **Moat thesis:** OSS distribution, enterprise logos, MCP code-context standard
10. **Open-source posture:** Open source (3,645 stars, Sep 2026; license "Other" per GitHub)
11. **Task horizon:** Single-turn lookups to multi-step context retrieval (minutes)

## Analysis

- **Agent capability depth:** Code search and AI Q&A over whole codebases for humans and agents; MCP server feeds code context to AI tools
- **Weaknesses:** $500K funding and tiny team (1-10); self-host ops burden; cloud strategy in flux
- **Trajectory:** Positioning as the code-context layer (search plus MCP) for enterprise developers and AI agents
- **M&A:** None visible

## Sources

- Caplight company profile (2026)
- indexed.vc/companies/sourcebot (2026)
- github.com/sourcebot-dev/sourcebot (Sep 2026)
- ycombinator.com/companies/sourcebot (2026)
