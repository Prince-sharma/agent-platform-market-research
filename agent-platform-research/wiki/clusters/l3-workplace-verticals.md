# Workplace verticals

## Scope

48 companies profiled in this cluster during Phase 2 (assignment file: data/phase2-assignments/p2-3h-workplace.txt). The mix: HR and recruiting (12), IT and employee service including SRE/incident ops (13), government (9), restaurants and hospitality (5), home services (4), education (3), and single entries in field services, BPO/back office, consulting, professional services, facilities robotics, and data operations. 15 deep profiles, 33 base profiles.

## Notable companies

- **Moveworks** — the cluster's defining exit: employee-support assistant resolving IT, HR, and finance requests, acquired by ServiceNow for $2.85B (announced Mar 2025, closed Dec 2025) with 350 enterprises and 5.5M employees at close; last standalone valuation $2.1B (2021).
- **Paradox** — the revenue leader of the cluster: conversational hiring assistant Olivia at ~$116M ARR est. (2023), $1.5B valuation (2021), $240M raised; PitchBook lists a 2025 acquisition/merger event around $1.06B.
- **Resolve** — AI SRE "production engineer" that triages, investigates, and remediates production incidents; $125M Series A at a $1B valuation (Feb 2026) with Greylock and Lightspeed.
- **Sona** — agentic frontline workforce operations (scheduling, HR, payroll) for hospitality, retail, and care; $45M Series B (Apr 2026), over $100M total.
- **Metaview** — agentic recruiting platform turning interview conversations into structured intelligence; $35M Series B (Jun 2025), $50M total.
- **Atomicwork** — agentic ITSM/ESM challenger to ServiceNow; Khosla-led $25M Series A (Jan 2025) at a $150M valuation, with usage-credit and per-agent pricing.
- **Leena AI** — employee-service agents across HR, IT, finance, and procurement; Bessemer-backed, claims $75M in contracts closed in a single day (Aug 2026).
- **Traversal** — AI SRE with causal ML and a "Production World Model"; $48M+ from Sequoia and Kleiner Perkins plus a strategic Amex Ventures investment (Mar 2026).
- **Nova** — agentic platform for generating and transforming SAP enterprise software, riding the S/4HANA migration wave; $31.5M Series A (May 2026), in production at Festo and KION Group.
- **Espressive** — the cluster's incumbent-era survivor (founded 2017) with the Barista employee-service agent and an Atos distribution partnership (2025).

## Patterns across the eleven build decisions

- **Build interface:** the agent itself is the interface — natural-language or voice front-ends dominate across hiring, IT support, restaurants, and 311 lines. Admin/build tooling splits between no-code studios (Moveworks Agent Studio, Espressive Control Center, Atomicwork) and config workflows; Rebolt pushes natural-language "vibecoding" of internal apps.
- **Runtime and tenancy:** vendor multi-tenant SaaS is near-universal. Only Traversal advertises flexible deployment for regulated industries; nothing in the cluster ships self-host or on-prem.
- **Integrations:** proprietary connector libraries are the norm (Leena AI 200+, Paradox 60+, Moveworks with a marketplace); MCP appears only at the margins (Conduit). The system-of-record integration — ServiceNow, Workday, SAP, ATS stacks — is the product.
- **Knowledge and data:** live sync with systems of record is the dominant strategy; Moveworks and Espressive layer built-in RAG over enterprise knowledge; the differentiated bets are Traversal's Production World Model and Atomicwork's enterprise knowledge graph.
- **Autonomy:** a spectrum from draft-then-approve (Abel police reports, Metaview notes) to autonomous resolution with escalation (Espressive, Moveworks resolving 3 in 4 issues, Leena AI claiming 70%+ autonomous tickets).
- **Pricing:** the sharpest divergence. Per-seat (Leena AI ~$150/user/yr), platform fee plus usage credits (Atomicwork, Rebolt, Risotto), annual platform contracts (Paradox medians $142k to $920k), and per-outcome pricing in labor-replacement verticals (Humanly pay-per-hire, Maive, Superunit, Altrina's "Human Minute Equivalent").
- **GTM:** sales-led dominates enterprise IT and government B2G; PLG survives in education (Edexia, Frizzle free tiers), dev-adjacent tooling (Patched via PyPI), and freemium recruiting (Metaview, Rebolt).
- **Task horizon:** multi-step workflows (minutes) are the mode. Persistent/always-on appears in monitoring (Kestrel AI, Entangl) and front-office coverage (Bravi, Sona); long-horizon cycles show up in recruiting (Contrario), background checks (Superunit), and SAP migration programs (Nova).
- **Moat:** integration depth, workflow lock-in, and data gravity are the recurring theses; the strongest distribution plays are via suites (Moveworks-ServiceNow) and GSIs (Espressive-Atos).

## Consolidation and M&A

ServiceNow's $2.85B acquisition of Moveworks (announced Mar 2025, closed Dec 2025) is the cluster's defining transaction and the clearest evidence that suites buy rather than build. The PitchBook-listed Paradox merger/acquisition (~$1.06B, Sep 2025) would make HR's category leader a second billion-dollar exit. The consequence is a squeeze: IT and employee-service standalones (Espressive, Atomicwork, Fixify, Risotto) now compete against ServiceNow's first-party agents while the category's flagship was absorbed. Capital is consolidating in SRE/incident ops instead — Resolve at a $1B valuation and Traversal with an Amex strategic investment — where no suite owns the workflow yet. The wider census shows the same pattern in adjacent verticals (Zendesk-Forethought, NICE-Cognigy, Palo Alto Networks-Console).

## Traction distribution

Bifurcated. A funded tier: Moveworks ($2.85B exit), Paradox ($1.5B valuation, ~$116M ARR est.), Resolve ($1B valuation, $125M Series A), Sona (>$100M total), Metaview ($50M), Traversal ($48M+), Nova (>$40M), Atomicwork ($39M), Leena AI ($40M), Fixify ($32M), Humanly ($25M Series B). Then a long seed tail: roughly 30 of 48 companies show no visible funding beyond YC or small seeds (Abel $5M, DianaHR $4.2M, Apriora $2.8M, Risotto $10M, Superunit and Everest $500K each). ARR visibility is poor everywhere except Paradox; Leena AI's $75M single-day contracts claim is the only other revenue signal.

## Gaps and open ground

- **Physical-world verticals are thinly occupied:** one field-services entry (NOSO LABS), two hospitality players (Conduit, Flowtel), and a home-services cluster (Bravi, Hey Telo, Maive) that is entirely seed-stage.
- **Government is crowded at intake** (311 answering, police paperwork, procurement, permitting) but has no agents in benefits administration, case management, or inspections.
- **Education is three graders and nothing else** — no admissions, enrollment, or student-operations agents.
- **No open-source or self-host posture anywhere in the cluster**, no per-run pricing, and no MCP-first integration strategy — all three are open positioning moves.
- **Robotics-labor agents** (Parametric's commercial laundry robots) are a lone outlier; blue-collar physical work is otherwise unoccupied ground.
