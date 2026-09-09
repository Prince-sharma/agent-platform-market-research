# Other and General Vertical Agents (L3)

## Scope

23 companies profiled in this cluster during Phase 2 (assignment file: data/phase2-assignments/p2-3g-other.txt). These are research, data, media, design, hardware-engineering, and uncategorized vertical agents carried over as high-priority entries from the Phase 1 census. 22 pages are profile_depth deep, 1 base (Junction Bioscience, still effectively stealth).

## Notable companies

- **Viktor** — AI coworker performing tasks across 3,200+ workplace tools via Slack/Teams; $75M Series A led by Accel (2026-05) on a $15M revenue run rate across 2,000+ organizations. The cluster's traction leader and closest thing to a horizontal general-agent play.
- **Tasklet** — cloud agent OS for knowledge work; a 2025 rebrand of Shortwave (founded 2020) with $33M total raised, a $13M Lightspeed bridge (2026-07) at a reported $175M valuation, and ~$5M ARR. Shows incumbents recycling email-AI assets into agent platforms.
- **Bridgetown Research** — AI agents automating primary research and due diligence for PE/VC and consulting; $19M Series A (Accel, Lightspeed, 2025-02) at a reported $250M valuation, with "a few million dollars" of revenue within four months of launch.
- **Rally UXR** — agentic user-research infrastructure (recruitment, scheduling, incentives); $20.3M total including an $11M Series A (2025-06), team of 35, customers including Google, Meta, Ramp, and Figma, 3x YoY growth.
- **MinusX** — AI data scientist that operates Jupyter and Metabase directly; OSS core with self-host option, a rarity in this cluster.
- **Adam** — AI CAD copilot across Onshape, Autodesk Fusion, and its own open-source CADAM text-to-CAD generator; $4.1M seed (2025-10), free-to-$1,000/month tiers.
- **Undermind** — deep-search scientific literature agent claiming 10-50x better recall than keyword search; tiered subscription to Pro/Team/Enterprise.
- **Semiotic** — human-AI hybrid design agency producing landing pages at scale; $78K revenue in its first four weeks (2025-11).

## Patterns across the eleven build decisions

- **Build interface:** natural language is near-universal; a minority layer on structured surfaces — Buster (YAML config), Overlap (node-based pipeline canvas), SigmanticAI (VSCode extension plus CLI), Adam (parametric sliders alongside chat).
- **Runtime and tenancy:** vendor multi-tenant SaaS is the default everywhere. Exceptions are telling: Wideframe ships a native Mac desktop app, MOVEdot deploys into customer VPCs for automotive OEMs, SigmanticAI offers air-gapped on-prem for chip designers, and MinusX keeps a self-host option.
- **Integrations:** proprietary connector libraries dominate (Viktor 3,200+, Tasklet 3,000+, camelAI 50+ sources). MCP appears repeatedly but as a secondary or "coming soon" surface (Adam, Hera, Undermind, Voicepanel, MinusX, MadeThis, Semiotic) — this cluster treats MCP as additive reach, not as the core strategy.
- **Knowledge:** live sync with systems of record is the dominant pattern — these agents act on data inside the tools they operate rather than maintaining their own RAG stores.
- **Autonomy:** approval gates are the modal posture (Viktor's "You Keep the Sign-off", Tasklet, Adam, Hera, ion design, Semiotic's human-AI hybrid), with a fully-autonomous minority (MinusX operating BI tools, Booko's always-on pricing, Rally's autonomous recruitment, the science loops at Junction and Sciloop).
- **Governance:** the weakest decision cluster-wide. SOC 2 is the ceiling (Rally, Viktor, Tasklet, MOVEdot Type I, Booko claims SOC 2 plus HIPAA); RBAC and spend caps appear at Rally, Tasklet, and kater.ai; most pages are unknown.
- **Pricing:** largely opaque. Where visible: per-seat subscriptions (Adam, Undermind, Wideframe at $100/mo), usage or platform fees (Tasklet "pay for work", camelAI $5/stream/month, kater annual contracts), and Semiotic's $0/$9/$35 tiers.
- **GTM:** PLG self-serve dominates (Adam, camelAI, Hera, MadeThis, Tasklet, Undermind, Voicepanel, Wideframe); sales-led for enterprise research and hardware (Bridgetown, Rally, Overlap, MOVEdot, Motives, Junction).
- **Moat:** integrations plus workflow lock-in plus data gravity are the recurring theses; evals-based moats appear at MinusX and Undermind.
- **Open-source:** overwhelmingly proprietary. Exceptions: MinusX (OSS core), Buster (open-source AI-native data stack), Adam (open-sources its CADAM generator).
- **Task horizon:** multi-step workflows (minutes) are the norm; long-horizon for the science and silicon agents (Junction, Sciloop, SigmanticAI's spec-to-verified-RTL); persistent always-on for the coworker cohort (Viktor, Tasklet, MadeThis, Booko, ion design).

The cluster splits three ways: agents that operate existing professional tools (Viktor, Tasklet, MinusX, Adam, MOVEdot, Wideframe), agents that produce research or creative artifacts (Bridgetown, Undermind, Semiotic, Hera, Overlap, ion design, Motives, Voicepanel), and autonomous-science loops (Junction, Sciloop).

## Consolidation and M&A

No acquisitions in or into this cluster — every page reports "none visible." The one structural event is Tasklet's rebrand from Shortwave, an asset recycle rather than M&A. The absence of exits is consistent with a seed-heavy cluster where the two scaled leaders (Viktor, Tasklet) raised their growth rounds only in 2026.

## Traction distribution

A sharp barbell. Funded leaders: Viktor ($75M Series A, $15M run rate, 2,000+ orgs), Tasklet ($33M total, ~$5M ARR, $175M valuation), Bridgetown ($19M at $250M), Rally UXR ($20.3M total, 3x YoY). Early revenue signals: Semiotic ($78K in four weeks), Hera (revenue doubling monthly as of 2025-05), Bridgetown ("a few million" in four months). The seed tail is long: Overlap $1.9M, Voicepanel $2.4M, ion design $1.8M, Adam $4.1M, and a band of ~$500K notes (MinusX, camelAI, Buster, Motives, MOVEdot, Junction), with no visible funding for Booko, MadeThis, Sciloop, SigmanticAI, Undermind, Wideframe, or kater.ai.

## Gaps and open ground

- Governance is thin almost everywhere: SOC 2 is the ceiling, no FedRAMP or agent-identity frameworks, and audit trails appear only at Bridgetown and Rally.
- Pricing opacity is the norm — most companies are either too early or sales-led to publish.
- The "general" agents (Viktor, Tasklet, MadeThis, Booko) sit awkwardly in a vertical census; they compete with horizontal platforms on breadth and may belong in a general-agent cluster.
- Science agents (Junction, Sciloop, Undermind) are pre-revenue with unproven moats; their hypothesis-generation loops are undifferentiated from each other so far.
- No M&A has started; expect consolidation pressure on the AI-coworker cohort first, since Viktor and Tasklet now have the capital to absorb seed-stage tool operators.
