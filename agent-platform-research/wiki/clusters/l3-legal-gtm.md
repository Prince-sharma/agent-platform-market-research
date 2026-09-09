# Legal and GTM/Sales Agents

## Scope

68 companies profiled in this cluster during Phase 2 (assignment file: data/phase2-assignments/p2-3d-legal-gtm.txt). 44 base profiles, 24 deep profiles. Mix: 33 legal-vertical agents, 30 GTM/sales agents, 5 marketing agents — all L3 vertical application-layer players.

## Notable companies

- **Harvey** — Agentic legal associate for elite firms and enterprises; $200M at $11B (Mar 2026), reportedly seeking $15.5B; per-seat pricing $100–$2,000/user/mo with $50K–$300K+ annual contracts. The cluster's valuation leader.
- **Legora** — Law-firm operating system; $600M Series D (Apr 2026) at $5.55B, seeking $10B+; consumption-based Agent Pro pricing; campus-wide license motion.
- **EvenUp** — Demand-package automation for personal injury firms; $150M Series E at $2B+ (Oct 2025); hybrid per-case and per-user pricing.
- **Eve** — AI workforce for plaintiff firms; $103M Series B at $1B (Sep 2025); EveOS with persistent intake/auditing agents and Atlas data layer.
- **Clay** — GTM data and automation infrastructure; credits-based pricing; created the "GTM engineer" role; reportedly near $7B valuation (per Phase 1 sweep commentary).
- **11x** — The AI SDR cautionary tale: customer-claims scandal and CEO exit (2025), now stabilized on per-lead platform pricing (Growth $3,750/mo).
- **Conversica** — Revenue digital assistants veteran; Morgan Stanley-led majority recap (Jul 2026) — the cluster's clearest consolidation signal.
- **Hebbia** — Agentic document analysis for finance/legal due diligence; $130M at $700M on $13M profitable revenue (2024).
- **Rox** — Agent swarms over CRM and warehouse data; $1.2B valuation on $8M ARR (Mar 2026); acquired Quilt.
- **Twin A1** — Digital twins for lawyers; $20M seed; Linklaters, Orrick, Dechert signed (Aug 2026); per-agent pricing.
- **Luminance** — Autonomous contract negotiation (Autopilot); $75M Series C (Feb 2025); Global 100 law firm footprint.
- **Procurement Sciences** — GovCon find-win-deliver OS; 300+ orgs including four of the top 10 defense contractors.

## Patterns across the eleven build decisions

- **Build interface:** Natural-language-first across the cluster; no drag-and-drop canvases. Notable variants: Clay's spreadsheet-plus-NL hybrid, Orange Slice's typed SDK spreadsheet, Rox's agent swarms, Harvey's NL plus workflow builder.
- **Runtime and tenancy:** Vendor multi-tenant SaaS is universal in the deep profiles; no self-host or on-prem option found anywhere in the cluster. Legal buyers get SSO/RBAC, not dedicated tenancy.
- **Integrations:** Proprietary connector libraries dominate — Salesforce/HubSpot for GTM; iManage, NetDocuments, Clio, Litify for legal. MCP appears only at the edges (Eve custom MCPs, Rox).
- **Knowledge and data:** Live sync with systems of record is the winning pattern (CRM sync for GTM; DMS/CMS sync for legal), with built-in RAG second (Harvey Vault, Eve Atlas). Data gravity is the stated moat more often than model quality.
- **Autonomy:** Diverges by vertical — GTM agents run fully autonomous with guardrails (11x exclusion rules, Artisan Ava); legal agents are approval-gated with human review (Harvey "review-ready", Eve permissioned agents).
- **Governance:** RBAC, SSO, audit logs standard in deep profiles; SOC 2 Type II common (Harvey, Eve-adjacent vendors). Spend caps and agent identity are almost entirely absent.
- **Pricing:** Per-seat dominates legal (Harvey $100–$2,000/mo, Ivo $6K/user/yr, Nooks ~$4–5K/user/yr); usage and credits dominate GTM (Clay credits, Rox Agent Actions, 11x/Artisan per-lead volume); outcome-based is rare (EvenUp per-case, Twin A1 per-agent).
- **GTM motion:** Sales-led dominates both verticals, with demo-gated pricing the legal norm; PLG pockets at Clay, Unify, GC AI (free trials, self-serve).
- **Open-source posture:** Proprietary across the board; no OSS core or fair-code player in this cluster.
- **Task horizon:** Multi-step workflows (minutes to hours) are standard; persistent always-on agents emerging (Eve intake, SciFin, JustAI, Clay); long-horizon legal execution at Legora and Luminance.

## Consolidation and M&A

- Conversica's Morgan Stanley-led majority recap (Jul 2026) signals private-equity consolidation of the first-generation revenue-assistant vendors.
- Rox acquired Quilt (RFP/presales knowledge) — an agent platform absorbing adjacent workflow tools.
- 11x's 2025 implosion (customer-claims scandal, CEO exit) triggered the AI SDR credibility shakeout; dozens of undifferentiated seed-stage AI SDRs (Roger, Topo, Clodo, FuseAI) are consolidation candidates.
- Legal shows no M&A yet — mega-rounds (Harvey, Legora, EvenUp, Eve) rather than acquisitions; incumbent legal publishers have not started buying.

## Traction distribution

- Unicorn tier: Harvey ($11B), Legora ($5.55B, seeking $10B+), EvenUp ($2B+), Rox ($1.2B), Eve ($1B).
- Growth tier: Hebbia ($700M), GC AI ($550M), Luminance, Lawhive ($60M Series B), Supio ($60M Series B), Ivo ($55M+ Series B), Spellbook ($50M Series B plus $40M debt), Nooks, Unify, SciFin ($44M seed), Twin A1 ($20M seed), JustAI ($17M Series A).
- Reported ARR is scarce and mostly modest: Harvey ~$100M (estimated), Hebbia $13M profitable (2024), Rox $8M (Mar 2026), Artisan $5M. GovDash ($30M Series B, Jan 2026) and Procurement Sciences (300+ orgs) show traction without disclosed revenue.
- The cluster is a barbell: roughly 33 of 68 companies have visible funding or traction; the other 35 — overwhelmingly YC seed-stage — show none. Lexi AI reports 135K+ documents across 7K+ cases.

## Gaps and open ground

- No self-hosted or on-prem deployment anywhere — an opening for regulated buyers (government, insurance defense) that cannot use vendor SaaS.
- Usage-based pricing without spend caps or agent identity governance — an unaddressed enterprise-control gap.
- Outbound prospecting is oversaturated (a dozen AI SDR variants); inbound conversion and post-sale expansion agents (Ambral, Caseflood.ai, OpenIntake) remain early.
- Legal casework automation is crowded at the top; law-firm business development and intake (Osmaura, Caseflood.ai) and patent-specific agents (Patent Watch, Stilta) are thinly occupied.
- Outcome-based pricing is nearly unclaimed — EvenUp per-case and Twin A1 per-agent are the only visible moves toward paying per resolved matter.
