---
name: Paragon
layer: L1
scope: horizontal
vertical: general
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L1;YC W25
---

# Paragon

**Thesis (one line):** Embedded integration platform repositioned for AI agents; Managed Sync ingestion plus ActionKit unified actions with managed auth.

## Facts

- Founded: 2019 (Brandon Foo CEO, Ishmael Samuel)
- HQ: Los Angeles, CA
- YC batch: W20
- Backers: Inspired Capital (Series A lead), FundersClub, Garuda Ventures
- Funding: $15.5M disclosed: $2.5M seed (Jul 2020) plus $13M Series A (Aug 2022)
- Valuation: unknown
- Revenue/ARR: $9M (2024, Sacra estimate, medium confidence; $4M in 2023, +125% y/y)
- ICP: B2B SaaS product and engineering teams; AI agent builders
- Pricing model: Custom quote; usage scales with Connected Users (tenants) plus task usage

## The eleven build decisions

1. **Build interface:** TypeScript framework plus low-code workflow editor; embedded Connect Portal UI or headless SDK; Git repo sync
2. **Runtime and tenancy:** Multi-tenant SaaS; self-host and single-tenant options (enterprise)
3. **Tool and integration strategy:** Proprietary connector library plus custom connectors; ActionKit MCP server
4. **Knowledge and data strategy:** Managed Sync (Jul 2025): two-call third-party ingestion into customer DB plus Permissions API for RAG access control
5. **Autonomy and human-in-the-loop:** Workflow retries, feature flags, dev/staging/prod environments; approval gates via workflow logic
6. **Governance and enterprise controls:** SOC 2, GDPR, RBAC, SAML SSO, on-prem/single-tenant; event logs
7. **Pricing model:** Custom-quote usage pricing on connected users and tasks; no public unit price
8. **GTM motion:** Sales-led (ACV $30-40K, targeting six-figure); self-serve trial
9. **Moat thesis:** Embedded workflow lock-in (sync, actions, workflows suite)
10. **Open-source posture:** Proprietary
11. **Task horizon:** Multi-step workflows (minutes to hours); Managed Sync persistent

## Analysis

- **Agent capability depth:** Embedded integration infrastructure: Managed Sync (ingestion), ActionKit (unified action API plus MCP), Workflows (embedded iPaaS) with managed auth
- **Weaknesses:** Smaller connector catalog than Merge/Pipedream; opaque pricing; sub-scale funding
- **Trajectory:** Repositioned from embedded iPaaS to "integration platform for AI agents and products"
- **M&A:** None visible

## Sources

- useparagon.com/pricing (Sep 2026)
- ycombinator.com/companies/paragon (Sep 2026)
- useparagon.com/blog Series A (2022)
- Sacra company profile (2025)
- TechCrunch seed coverage (Jul 28, 2020)
