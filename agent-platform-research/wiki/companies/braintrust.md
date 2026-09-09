---
name: Braintrust
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L1;a16z
---

# Braintrust

**Thesis (one line):** Evals and data platform for production AI; tracing, experiments, and an autonomous Loop agent that iterates prompts.

## Facts

- Founded: 2023
- HQ: San Francisco, CA
- YC batch: none
- Backers: ICONIQ (Series B lead, Feb 2026), a16z, Greylock, Elad Gil, Base Case
- Funding: ~$124M total; $80M Series B (Feb 17, 2026)
- Valuation: $800M (Feb 2026)
- Revenue/ARR: unknown
- ICP: AI engineering and product teams (Notion, Stripe, Zapier, Airtable, Instacart, Vercel)
- Pricing model: Starter $0 (10k scores then $2.50/1k, $4/GB); Pro $249/mo; Enterprise custom

## The eleven build decisions

1. **Build interface:** Code (TypeScript/Python SDKs) plus UI playground and experiments
2. **Runtime and tenancy:** Multi-tenant SaaS; Enterprise offers on-prem or hosted deployment
3. **Tool and integration strategy:** MCP plus broad integration library
4. **Knowledge and data strategy:** Bring-your-own data (datasets, S3 export)
5. **Autonomy and human-in-the-loop:** Evals plus human review scores; Loop agent runs evals autonomously
6. **Governance and enterprise controls:** SOC 2 Type II, SAML SSO, RBAC, DPA/BAA, SLAs
7. **Pricing model:** Usage-based freemium on scores, storage, and credits
8. **GTM motion:** PLG (free tier, OSS SDKs) plus enterprise sales
9. **Moat thesis:** Evals plus workflow lock-in; trace and dataset data gravity
10. **Open-source posture:** Proprietary platform; OSS SDKs; self-host option
11. **Task horizon:** Tooling; Loop agent iterates continuously

## Analysis

- **Agent capability depth:** Evals, tracing and observability, prompt playground and experimentation, datasets, and Loop — a built-in agent that generates test cases and iterates prompts autonomously
- **Weaknesses:** May 2026 breach — unauthorized AWS account access; all customers told to rotate API keys
- **Trajectory:** Positioning as the observability layer for production AI (Series B thesis, Feb 2026)
- **M&A:** None visible

## Sources

- braintrust.dev/blog Series B (Feb 17, 2026)
- Axios: Braintrust $80M at $800M (Feb 17, 2026)
- braintrust.dev/pricing (Sep 2026)
- TechCrunch: Braintrust confirms breach (May 6, 2026)
