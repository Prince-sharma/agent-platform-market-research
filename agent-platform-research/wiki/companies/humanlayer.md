---
name: HumanLayer
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: YC F24
---

# HumanLayer

**Thesis (one line):** An API and SDK providing human-in-the-loop oversight and approval workflows for AI agents to ensure safety in production environments.

## Facts

- Founded: 2023
- HQ: San Francisco, California, United States
- YC batch: F24
- Backers: Y Combinator
- Funding: $500K total, Convertible Note on 2024-10-10
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Production software teams and enterprises deploying autonomous AI agents
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** SDK (Python, TypeScript) and API
2. **Runtime and tenancy:** unknown
3. **Tool and integration strategy:** MCP integration; connects to Slack, Email, and Discord
4. **Knowledge and data strategy:** unknown
5. **Autonomy and human-in-the-loop:** Enforces human-in-the-loop safety via binary approvals, free-form feedback, and escalation workflows
6. **Governance and enterprise controls:** Audit trails for function calls; timeout and escalation management; idempotency keys
7. **Pricing model:** unknown
8. **GTM motion:** unknown
9. **Moat thesis:** Workflow lock-in via human-agent communication infrastructure and "Context Engineering" methodology
10. **Open-source posture:** Open-source JavaScript SDK; MIT license for Python package
11. **Task horizon:** Long-horizon (supports asynchronous workflows, pausing, and resuming agents)

## Analysis

- **Agent capability depth:** Enables agents to execute high-stakes tool calls (e.g., database modifications, infrastructure changes) by routing requests to humans for approval.
- **Weaknesses:** Low current download volume for the Python package (325 monthly) suggests early-stage adoption.
- **Trajectory:** Expanding from a simple approval API into a broader "Context Engineering" framework and IDE for orchestrating coding agents.
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; yc-2024.md), verified 2026-09-09
- humanlayer linkedin (https://linkedin.com/company/humanlayer-dev), 2026-06-22
- Extruct AI (https://www.extruct.ai/hub/humanlayer-dev-funding/), 2024-12-04
- Bright Coding (http://www.blog.brightcoding.dev/2025/08/13/humanlayer-the-missing-bridge-between-autonomous-ai-and-human-oversight), 2025-08-13
- runany.dev (https://runany.dev/blog/humanlayer-human-in-the-loop-api/), 2026-05-30
- 12-Factor Agents GitHub (https://github.com/humanlayer/12-factor-agents), 2025-03-30
- CB Insights (https://www.cbinsights.com/company/humanlayer/financials), 2024-10-10
