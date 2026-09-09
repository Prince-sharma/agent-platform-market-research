# L1: Observability and Security

## Scope

67 companies profiled in this cluster during Phase 2 (assignment file: data/phase2-assignments/p2-1b-l1-obs-sec.txt). The cluster spans agent observability and evals, testing and simulation (including RL environments and world models), LLM gateways, agent security and guardrails, agent identity, agent payments, agent data and knowledge infrastructure, coding-agent tooling, and voice-agent infrastructure. 25 companies were profiled deep; 42 at base depth.

## Notable companies

- **LangSmith** — LangChain's tracing and evaluation SaaS; parent LangChain raised $125M Series B (Oct 2025) at ~$1.25B valuation; the default observability choice inside the LangChain ecosystem.
- **Langfuse** — open-source AI engineering platform (34k+ GitHub stars, MIT core); acquired by ClickHouse in January 2026 — the cluster's clearest sign that observability is being absorbed into data infrastructure.
- **LiteLLM** — open-source gateway standardizing 100+ model APIs behind one OpenAI-compatible interface; 40k+ GitHub stars; the reference open-core GTM in this cluster.
- **Zenity** — security and governance for agents and copilots; $125M Series C (Aug 2026), $180M total — the cluster's largest round.
- **Neo** — agentic software control layer; $100M launch (July 2026) led by Andreessen Horowitz and Bessemer; the best-funded pure agent-security entrant.
- **Patronus AI** — agent evaluation, simulation, and world models; $50M Series B (June 2026) with 15x revenue growth.
- **Galileo** — evaluation intelligence platform; $68M raised; 834% revenue growth since early 2024.
- **Microsoft Entra Agent ID / Okta Agent Identity Center** — incumbent identity platforms shipping agent identity (GA 2025 and April 2026); they bundle agent governance into the existing enterprise identity stack rather than selling it standalone.
- **Portkey** — AI gateway and control plane for production agents; $15M Series A (Feb 2026); guardrails plus routing in one plane.
- **Catena Labs** — AI-native bank for agentic commerce; $30M Series A (2026) led by Circle co-founder Sean Neville; the cluster's main agent-payments bet.

## Patterns across the eleven build decisions

- **Build interface:** code-first dominates. SDKs, APIs, and OpenTelemetry instrumentation are the integration surface; dashboards are for reading traces and evals, not building. Voice-testing platforms (Coval, Hamming) layer no-code test builders on top; security platforms expose policy consoles.
- **Runtime and tenancy:** multi-tenant SaaS is the default, with self-host as the enterprise wedge. Open-core is the cluster's signature posture (Langfuse, LiteLLM, Laminar, Omnara, HumanLayer); security vendors stay proprietary but offer BYOC or marketplace deployment (Prompt Security, Geordie).
- **Integrations:** OpenTelemetry and MCP are the emerging interop standards. Gateways differentiate on provider breadth (LiteLLM 100+ LLMs); security platforms sit inline on MCP traffic; observability tools compete on framework coverage.
- **Pricing:** usage-based per unit (observations, traces, tokens routed) for observability and gateways; enterprise license for self-hosted; security platforms are quote-based annual subscriptions. Per-seat and per-agent pricing are rare.
- **GTM:** PLG through open source for developer tooling; sales-led for security and governance (CISO buyer); AWS Marketplace appearing as a channel (Geordie, Prompt Security).
- **Task horizon:** converge on long-horizon and persistent agents — monitoring is always-on, and guardrails intercept actions in real time. Testing vendors concentrate on pre-deployment simulation of multi-step workflows.
- **Divergence:** agent identity splits between incumbent bundles (Entra, Okta) and startups (Keet, Multifactor, OneCLI); evals split between OSS frameworks (DeepEval, Langfuse) and simulation platforms (Coval, Hamming, Patronus world models); a new continuous-improvement segment (Lemma, Moda, TrainLoop, Osmosis) closes the loop from production traces to fine-tuning.

## Consolidation and M&A

Three acquisitions surfaced in this cluster, all missed by the Phase 1 census (which listed them active): **Prompt Security was acquired by SentinelOne** (announced Aug 5, 2025) and folded into Singularity as AI runtime security; **Langfuse was acquired by ClickHouse** (Jan 16, 2026), with self-hosted enterprise pricing now bundled with ClickHouse Cloud; **Metis was acquired by DoorDash** (Mar 2026) as an applied AI lab for agentic commerce. The pattern: security incumbents buy agent-security capability, data infrastructure buys observability, and large agent operators buy reliability labs. Meanwhile Microsoft and Okta built agent identity natively rather than buying — bad news for standalone identity startups. The crowded voice-testing micro-segment (Coval, Hamming, Cekura, fixa, Roark, Dialogus) looks like the next consolidation target.

## Traction distribution

Funded leaders: Zenity ($180M total), LangChain/LangSmith (parent $160M+ raised at ~$1.25B), Neo ($100M), Galileo ($68M), Patronus AI ($50M), Catena Labs ($48M), Validio ($47M), Lasso Security ($37M), Geordie ($36.5M), Coval ($31M), Edra ($30M). A $5-25M middle tier includes Prompt Security ($23M, pre-acquisition), Raindrop ($15M), Portkey ($15M), Multifactor ($15.1M), Nozomio ($15.2M), LemonSlice ($10.5M), Freestyle ($10M), General Analysis ($10M), Idler ($9M), Keywords AI ($5.5M). The seed tail is long: roughly 30 of 67 companies sit at pre-seed or seed ($500K-$5M) with no visible follow-on, heavily concentrated in YC 2024-2026 batches. Reported revenue signals cluster in evals and security: Galileo 834% growth, Patronus 15x, Lasso 500%, Zenity tripling annually, Validio 800% ARR growth, LiteLLM ~$10M ARR (third-party estimate), Senso ~$1M.

## Gaps and open ground

- **Agent payments is thinly occupied** — only Catena Labs and Locus in this slice; the category's other action (Skyfire, Payman) sits elsewhere in the census.
- **Business-outcome analytics has no leader** — Buildbox, Moda, Voker, and The Context Company all target user-outcome analytics rather than technical traces, all pre-scale.
- **Registries are nearly absent** from this cluster; MCP registry activity lives elsewhere in the census.
- **Voice-agent testing is oversubscribed** relative to visible demand — six funded or YC-backed entrants with overlapping simulation and monitoring pitches.
- **Physical-world and defense niches are single-company** (Mireye, Null Labs) — real ground but unproven.
- **Post-acquisition, independent observability is shrinking**: with Langfuse inside ClickHouse and evals vendors reporting hypergrowth on small bases, the independent-L1 window may close as database, security, and identity incumbents absorb these functions.
