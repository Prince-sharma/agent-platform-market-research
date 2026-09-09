---
name: fixa
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: base
updated: 2026-09-09
sources: YC F24
---

# fixa

**Thesis (one line):** An observability and testing framework that uses simulated AI agents to evaluate and debug AI voice agents.

## Facts

- Founded: unknown
- HQ: unknown
- YC batch: F24
- Backers: unknown
- Funding: unknown
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: Developers building AI voice agents
- Pricing model: unknown

## The eleven build decisions

1. **Build interface:** SDK (Python package `fixa-dev`) and Cloud Platform.
2. **Runtime and tenancy:** Multi-tenant SaaS (Cloud Platform) and local Python execution.
3. **Tool and integration strategy:** Integrates with Pipecat, Cartesia, Deepgram, OpenAI, and Twilio.
4. **Knowledge and data strategy:** unknown
5. **Autonomy and human-in-the-loop:** Automated simulation of calls with LLM-based evaluation.
6. **Governance and enterprise controls:** unknown
7. **Pricing model:** unknown
8. **GTM motion:** PLG (open-source components and PyPI package).
9. **Moat thesis:** Evals and observability for the specific modality of voice agents.
10. **Open-source posture:** OSS components (fixa-observe repository).
11. **Task horizon:** Single-turn to multi-step conversations (minutes).

## Analysis

- **Agent capability depth:** Enables end-to-end testing of voice agents by simulating a caller and using an LLM to grade the conversation quality.
- **Weaknesses:** Early stage with limited integration options (primarily Twilio for call initiation).
- **Trajectory:** Expanding from a testing library to a full observability and cloud platform for voice AI.
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; yc-2024.md), verified 2026-09-09
- fixa documentation (https://docs.fixa.dev/introduction), 2026-09-09
- fixadev/fixa-observe GitHub (https://github.com/fixadev/fixa-observe), 2025-02-27
- PyPI fixa-dev (https://pypi.org/project/fixa-dev/), 2026-09-09
