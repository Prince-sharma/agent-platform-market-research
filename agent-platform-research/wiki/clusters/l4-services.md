# L4 Services: SIs and Agent Boutiques

## Scope

15 companies profiled in this cluster during Phase 2 (assignment file: data/phase2-assignments/p2-4-l4.txt). Ten are global SIs or Big 4 consultancies; five are AI-native boutiques (Automat, Callback, Luthor, Quantiphi, Refactor).

## Notable companies

- **Accenture:** Largest SI agent practice; AI Refinery platform plus Distiller framework industrializes agent building (orchestrator, super agent, utility agent hierarchy) on NVIDIA infrastructure.
- **Deloitte:** Zora AI deploys Perform and Advise agents for finance workflows; explicitly exploring outcome-based pricing on top of cloud subscriptions.
- **EY:** EY.ai Agentic Platform co-developed with NVIDIA, starting in tax, risk, and finance; EY.ai Enterprise Private with Dell targets sovereign deployment.
- **KPMG:** Workbench multi-agent platform productizes audit, tax, and advisory into "Services as Software"; ~50 active agents internally with 1,000 in development; Client Zero self-use first.
- **TCS:** Agent Foundry plus a drug-development agentic platform; most explicit about shifting revenue from headcount to agent-based and outcome-based models.
- **Infosys:** Agentic AI Foundry with NVIDIA; vertical pre-built agent libraries; states a "service-as-software" trajectory.
- **Wipro:** WEGA is an agent-native SDLC delivery platform (design, build, test, release) with a visual studio and third-party agent marketplace.
- **Quantiphi:** AI-native boutique with baioniq platform and TSaaS ("Technology Services as Software") model; acquired Candyspace.
- **Automat:** Best-funded startup in the cluster ($15.5M Series A led by Felicis); managed, self-healing automations positioned as legacy RPA replacement.

## Patterns across the eleven build decisions

- **Productization is universal:** every global SI launched branded platform IP (AI Refinery, Zora, EY.ai Agentic Platform, Workbench, AI Force, Agentic AI Foundry, WEGA, Neuro AI, Agentic AI Suite). The cluster's defining move is wrapping services in software to escape pure headcount pricing.
- **NVIDIA is the default alliance:** Accenture, Cognizant, EY, HCLTech, Infosys, TCS, and Wipro all co-engineer with NVIDIA; KPMG leans Microsoft Azure; Quantiphi splits across AWS and GCP. GTM is services-led and alliance-led everywhere; boutiques add forward-deployed engineers (Automat, Deloitte, Infosys).
- **Runtime converges on deployment flexibility:** public cloud, dedicated VPC, on-prem, and sovereign options are table stakes (Accenture, Deloitte, Quantiphi, TCS, EY/Dell). Data sovereignty, not multi-tenant SaaS efficiency, drives architecture.
- **Pricing is the big unknown:** 12 of 15 pages report unknown pricing. Disclosed or signaled models split between subscription plus usage (Automat), cloud subscription with outcome-based exploration (Deloitte), agent/outcome-based transition (TCS), and platform-embedded services (Quantiphi TSaaS, KPMG Services as Software). No one discloses per-outcome pricing at scale.
- **Build interface diverges by heritage:** code-first SDK (Accenture AI Refinery SDK), low-code studios (WEGA Studio, TCS), natural-language and demonstration-based building (Automat), upload-and-config review flows (Luthor, Callback).
- **Task horizon:** multi-step to long-horizon across the cluster; several claim persistent always-on operation (Capgemini BI lifecycle, Quantiphi 24/7, Wipro end-to-end SDLC).
- **Governance converges on RBAC, audit trails, and responsible AI frameworks**, with regulated industries as the beachhead (EY tax and risk, Luthor SEC/FINRA marketing compliance, TCS secure-by-design).
- **Open-source posture:** proprietary platforms throughout; runtimes are model-agnostic (TCS, Cognizant) but no firm ships an OSS core.

## Consolidation and M&A

- Only one acquisition inside the cluster: Quantiphi bought Candyspace for AI-native digital experience capability.
- The SIs are building platforms rather than buying; contrast the software layer, where Phase 1 tracked Moveworks acquired by ServiceNow and Forethought by Zendesk. Expect SIs to acquire boutiques for agent delivery talent as outcome-based pricing matures; the seed-stage boutiques here (Callback, Luthor, Refactor) are the natural targets.

## Traction distribution

- Ten of 15 are public companies or global partnerships with established enterprise distribution; none separately disclose agent revenue, so agentic traction is invisible in reported financials.
- Funded private firms: Quantiphi ($23.5M, 2024, Multiples Private Equity) and Automat ($19.25M total, Felicis-led Series A).
- Seed tail: Callback and Luthor ($500K each), Refactor (undisclosed); none show visible follow-on funding yet.

## Gaps and open ground

- **No proven per-outcome economics:** every pricing innovation is "exploring" or "transitioning"; no SI publishes outcome-priced agent delivery at scale, leaving the commercial model of agentic services unsettled.
- **Mid-market is unserved:** every SI targets large enterprises; no services firm in this cluster offers productized agent delivery for the mid-market.
- **No OSS-core services firm:** the cluster is entirely proprietary, unlike the platform layer where OSS is a wedge.
- **Vertical depth is rare:** only Luthor (compliance) is a true vertical specialist; the generalists dominate, leaving room for vertical agent boutiques in healthcare, legal, and financial operations.
- **Fragile seed tail:** the YC-stage firms depend on services-led, high-touch delivery with no disclosed revenue, so survival depends on follow-on funding or acquisition.
