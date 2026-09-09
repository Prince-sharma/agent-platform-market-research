---
name: Superagent
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: base
updated: 2026-09-09
sources: YC W24
---

# Superagent

**Thesis (one line):** An AI security platform providing adversarial red teaming and continuous find-and-fix vulnerability patching for AI-native developers.

## Facts

- Founded: unknown
- HQ: unknown
- YC batch: W24
- Backers: Y Combinator, Rebel Fund
- Funding: $1.6 million seed
- Valuation: unknown
- Revenue/ARR: unknown
- ICP: AI-native developers
- Pricing model: Free for open source; otherwise unknown

## The eleven build decisions

1. **Build interface:** Dashboard and CI/CD hooks (GitHub)
2. **Runtime and tenancy:** unknown
3. **Tool and integration strategy:** GitHub integration
4. **Knowledge and data strategy:** Gray-box testing using repository context
5. **Autonomy and human-in-the-loop:** Human-in-the-loop for PR approval of fixes
6. **Governance and enterprise controls:** unknown
7. **Pricing model:** unknown
8. **GTM motion:** PLG self-serve (Free for open source)
9. **Moat thesis:** Adversarial testing data and automated remediation (PRs)
10. **Open-source posture:** Free for open source; proprietary core
11. **Task horizon:** Continuous (runs on every PR, nightly, or release)

## Analysis

- **Agent capability depth:** Enables developers to identify exploit paths and automatically patch vulnerabilities in their agents and code via PRs.
- **Weaknesses:** Focuses primarily on the "break and fix" cycle rather than runtime monitoring or policy enforcement.
- **Trajectory:** Expanding from simple CVE scanning to complex adversarial campaigns against live apps and model APIs.
- **M&A:** none visible

## Sources

- Phase 1 census (phase1-merged.tsv; yc-2024.md), verified 2026-09-09
- Red Team | Superagent Docs (https://www.superagent.sh/docs/red-team), 2026-09-09
- Red Teaming AI Agents: What We Learned From 50 Assessments (https://www.superagent.sh/blog/red-teaming-ai-agents-learnings), 2025-12-08
- Superagent: Security for AI-native developers | Y Combinator (https://www.ycombinator.com/companies/superagent), 2026-09-09
