---
name: Composio
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L1;Elevation, Lightspeed;Lightspeed
---

# Composio

**Thesis (one line):** Open-source tool and integration layer giving AI agents pre-authenticated access to 1,500+ apps; managed OAuth plus MCP serving.

## Facts

- Founded: 2023 (Sampark Inc; founders Soham Ganatra, Karan Vaidya, IIT-Bombay)
- HQ: San Francisco, CA, plus Bengaluru
- YC batch: none
- Backers: Lightspeed (Series A lead), Elevation Capital and Together Fund (seed), SV Angel, angels incl. Guillermo Rauch and Dharmesh Shah
- Funding: $29M total: ~$4M seed (2024) plus $25M Series A (Jul 22, 2025)
- Valuation: unknown
- Revenue/ARR: unknown; 100k+ developers (Jul 2025)
- ICP: AI-agent developers, AI-first startups, enterprises adding tool use to agents
- Pricing model: Usage-based (free 20K tool calls/mo; $29/mo 200K calls plus $0.299/1K overage; $229/mo 2M)

## The eleven build decisions

1. **Build interface:** Code-first SDKs (Python/TypeScript/CLI) plus hosted remote MCP server; no canvas
2. **Runtime and tenancy:** Multi-tenant SaaS; enterprise VPC/on-prem option (pricing page, Sep 2026)
3. **Tool and integration strategy:** Proprietary library, 1,500+ integrations / 10,000+ tools (2025); remote MCP; intent-based tool search
4. **Knowledge and data strategy:** No built-in RAG; context management and triggers; agents act live on SaaS systems of record
5. **Autonomy and human-in-the-loop:** Autonomous agents with guardrails, proposed execution plans, Python 3.11 sandbox; approval gates not productized
6. **Governance and enterprise controls:** Managed OAuth, per-user sessions; SOC 2 plus dedicated enterprise tier
7. **Pricing model:** Usage-based tiers on tool calls; enterprise custom; repricing announced Aug 2026
8. **GTM motion:** PLG self-serve plus OSS funnel (30,030 GitHub stars, Sep 2026)
9. **Moat thesis:** Tool breadth plus managed auth plus claimed cross-agent learning network effects
10. **Open-source posture:** OSS core SDKs (MIT); hosted platform proprietary
11. **Task horizon:** Multi-step workflows (minutes); event triggers; sandboxed parallel execution

## Analysis

- **Agent capability depth:** Integration and action layer for agents: pre-authenticated toolkits, managed OAuth, tool search, triggers, code sandbox; adapters for OpenAI Agents, Claude, LangChain, Vercel AI SDK
- **Weaknesses:** "Learning layer" claims unverified; crowded MCP-era field; enterprise controls thin versus incumbents
- **Trajectory:** Repositioning from tool-integration layer to "learning infrastructure" where agents share learned skills
- **M&A:** None visible

## Sources

- composio.dev/pricing (Sep 2026)
- composio.dev/blog Series A (Jul 22, 2025)
- FinSMEs: Composio raises $25M Series A (Jul 22, 2025)
- lsvp.com investing-in-composio (Jul 22, 2025)
- github.com/composiohq/composio (Sep 2026)
