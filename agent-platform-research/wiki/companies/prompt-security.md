---
name: Prompt Security
layer: L1
scope: horizontal
vertical: general
status: acquired
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L1
---

# Prompt Security

**Thesis (one line):** A unified security platform providing visibility, governance, and real-time protection for enterprise GenAI tools, homegrown apps, and autonomous agents.

## Facts

- Founded: 2023
- HQ: New York, NY
- YC batch: none
- Backers: Jump Capital (lead), Hetz Ventures, Ridge Ventures, Okta, F5, Four Rivers Group
- Funding: $23M total, Series A on 2024-11-20
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Enterprise security teams, SOC analysts, and compliance officers
- Pricing model: Tiered annual subscription (Free to $80K/year)

## The eleven build decisions

1. **Build interface:** Dashboards and centralized policy management for visibility and control.
2. **Runtime and tenancy:** Multi-tenant SaaS with options for "your cloud or ours" and isolated Kubernetes pods.
3. **Tool and integration strategy:** MCP Gateway for agentic AI; supports 15,000+ AI services and various agent frameworks (OpenClaw, Claude Code).
4. **Knowledge and data strategy:** Real-time monitoring and redaction of PII/sensitive data across AI touchpoints.
5. **Autonomy and human-in-the-loop:** Enforces guardrails via "fail-closed" verdicts and tool execution validation to prevent autonomous agent risks.
6. **Governance and enterprise controls:** RBAC, audit trails, SOC 2, GDPR, and real-time policy enforcement.
7. **Pricing model:** Tiered pricing (Free–$80K/year) with additional per-user implementation and training fees.
8. **GTM motion:** Sales-led and marketplace (AWS Marketplace).
9. **Moat thesis:** Deep integration into the agentic stack (MCP Gateway) and broad coverage of shadow AI tools.
10. **Open-source posture:** Proprietary; provides visibility tools for open frameworks like OpenClaw.
11. **Task horizon:** Persistent (always-on monitoring of agent behavior and tool calls).

## Analysis

- **Agent capability depth:** Enables secure deployment of autonomous agents by validating tool calls, scanning web browsing for indirect injections, and monitoring behavioral baselines.
- **Weaknesses:** Premium pricing relative to competitors and significant "hidden" implementation costs.
- **Trajectory:** Was expanding from prompt-level filtering to machine-level agentic security via the MCP Gateway; now being folded into SentinelOne's Singularity platform as its AI runtime security layer.
- **M&A:** Acquired by SentinelOne (announced 2025-08-05); prompt.security now operates as part of SentinelOne, and its technology powers SentinelOne's agent security offerings.

## Sources

- Phase 1 census (phase1-merged.tsv; kp-infra.md), verified 2026-09-09
- SentinelOne to Acquire Prompt Security (https://www.sentinelone.com/press/sentinelone-to-acquire-prompt-security/), 2025-08-05
- SentinelOne acquires AI security startup Prompt Security - SiliconANGLE (https://siliconangle.com/2025/08/05/sentinelone-acquires-ai-security-startup-prompt-security/), 2025-08-05
- SentinelOne AI Security Platform (https://www.sentinelone.com/platform/securing-ai-prompt/), 2026-09-09
- Agentic AI Security: Real-Time MCP Protection (https://prompt.security/solutions/agentic-ai-security-and-governance), 2026-09-09
- Prompt Security Cost Calculator 2026 (https://costbench.com/software/ai-security/prompt-security/calculator/), 2026-09-09
- SentinelOne Agent Foundry (https://agents.prompt.security/), 2026-09-09
- Prompt Security: AI Security Platform (https://aws.amazon.com/marketplace/pp/prodview-lzvx5ody7qffw), 2026-09-09
- Prompt Security 2026 Company Profile (https://pitchbook.com/profiles/company/550877-86), 2026-09-09
