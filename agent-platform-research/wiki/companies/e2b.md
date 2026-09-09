---
name: E2B
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L1;Insight;YC S24
---

# E2B

**Thesis (one line):** Open-source secure cloud sandboxes for running AI-generated code; the code-execution standard embedded in leading agent stacks.

## Facts

- Founded: 2023 (Czech-founded; FoundryLabs, Inc.)
- HQ: San Francisco, CA
- YC batch: none
- Backers: Insight Partners (Series A lead, Jul 2025), Decibel and Kaya VC (seed, Oct 2024)
- Funding: $32M total: $11.5M seed (Oct 2024) plus $21M Series A (Jul 28, 2025)
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: AI agent builders from startups to enterprise; claims 88% of Fortune 100 use E2B (Jul 2025)
- Pricing model: Usage-based per second (Hobby free with $100 credits; Pro $150/mo; Enterprise custom)

## The eleven build decisions

1. **Build interface:** Code; JavaScript and Python SDKs, Code Interpreter SDK, Desktop SDK for computer use
2. **Runtime and tenancy:** Multi-tenant SaaS plus self-host via Terraform on AWS/GCP (Azure unsupported)
3. **Tool and integration strategy:** The sandbox is the tool agents call; MCP server not confirmed
4. **Knowledge and data strategy:** Sandbox infrastructure; no RAG
5. **Autonomy and human-in-the-loop:** Isolation is the guardrail; no built-in approval gates
6. **Governance and enterprise controls:** Enterprise security via isolated sandboxes; compliance certifications unknown
7. **Pricing model:** Per-second usage: CPU $0.000014-0.000112/s by vCPUs, RAM $0.0000045/GiB/s; Pro $150/mo raises session and concurrency caps
8. **GTM motion:** PLG self-serve (Stripe) plus enterprise sales
9. **Moat thesis:** OSS standard for AI code execution (Apache-2.0, 13.6k stars) embedded in Manus, Groq, Perplexity, Lindy, Gumloop, Hugging Face
10. **Open-source posture:** OSS core (Apache 2.0); self-host via Terraform
11. **Task horizon:** Session-based (minutes to 24 hours); not persistent always-on

## Analysis

- **Agent capability depth:** Secure cloud sandboxes for AI-generated code: code interpreter and desktop/computer-use SDKs; positioned as the enterprise AI agent cloud
- **Weaknesses:** Session caps (1h Hobby, 24h Pro); per-second costs scale with agent activity; no Azure self-host
- **Trajectory:** Enterprise AI agent cloud positioning; post-Series A hiring
- **M&A:** None visible

## Sources

- e2b.dev/blog/series-a (Jul 28, 2025)
- VentureBeat: E2B essential to 88% of Fortune 100 (Jul 28, 2025)
- e2b.dev/pricing (Sep 2026)
- github.com/e2b-dev/E2B (Sep 2026)
- ain.ua E2B seed coverage (Oct 18, 2024)
