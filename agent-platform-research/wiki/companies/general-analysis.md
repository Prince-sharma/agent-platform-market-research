---
name: General Analysis
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: YC S24
---

# General Analysis

**Thesis (one line):** Security infrastructure for agentic AI providing automated red teaming, runtime guardrails, and asset management to prevent autonomous agent exploits.

## Facts

- Founded: 2025
- HQ: San Francisco, California
- YC batch: S24
- Backers: Altos Ventures (lead), 645 Ventures, Menlo Ventures, Y Combinator
- Funding: $10M Seed, 2026-04-29
- Valuation: unknown
- Revenue/ARR: Target of $2M in 12-18 months (as of 2026-04-29)
- ICP: Security teams deploying autonomous agents in production (specifically finance and support)
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** Dashboards for asset management and simulation, and developer tools for runtime enforcement.
2. **Runtime and tenancy:** unknown
3. **Tool and integration strategy:** Integrations with GitHub, AWS, GCP, and specific focus on Model Context Protocol (MCP) server security.
4. **Knowledge and data strategy:** Live sync with source inventories (GitHub), cloud accounts, and RAG indices.
5. **Autonomy and human-in-the-loop:** Provides runtime guardrails that can block threats or trigger human-gated changes based on risk scoring.
6. **Governance and enterprise controls:** AI Security Asset Management, policy-based testing, and full traces for observability.
7. **Pricing model:** unknown
8. **GTM motion:** Sales-led (working with enterprise customers in support and finance).
9. **Moat thesis:** Evals and adversarial testing frameworks specifically designed for non-deterministic agentic workflows.
10. **Open-source posture:** Proprietary
11. **Task horizon:** Supports multi-step agent attacks and long-running autonomous workflows.

## Analysis

- **Agent capability depth:** Enables agents to operate with broad access by providing a safety layer that detects prompt injection, tool misuse, and data exfiltration in real-time.
- **Weaknesses:** Early stage with a small team (7 people), focusing heavily on the "security gap" which may face competition from cloud providers' native tools.
- **Trajectory:** Expanding from red teaming into a full runtime security and observability platform for the "agentic era."
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; yc-2024.md), verified 2026-09-09
- General Analysis | Security for Agentic AI (https://generalanalysis.com/), 2026-09-09
- AI Red Teaming Platform | Agentic AI Security Testing | General Analysis (https://generalanalysis.com/products/automated-ai-red-teaming), 2026-09-09
- How to Secure Coding Agents: Technical Whitepaper | General Analysis (https://generalanalysis.com/guides/securing-coding-agents), 2026-05-11
- MCP Server Security: Threat Model and Controls for the Agent Tool Supply Chain | General Analysis (https://generalanalysis.com/guides/mcp-server-security), 2026-05-02
- General Analysis Raises $10M in Seed Funding to Secure Agentic AI (https://www.businesswire.com/news/home/20260429247972/en/General-Analysis-Raises-%2410M-in-Seed-Funding-to-Secure-Agentic-AI), 2026-04-29
- AI Runtime Security & Guardrails | Real-Time LLM Protection | General Analysis (https://generalanalysis.com/products/ai-runtime-security), 2026-09-09
