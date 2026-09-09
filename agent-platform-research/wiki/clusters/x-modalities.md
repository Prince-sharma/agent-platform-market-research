# Cross-cutting modalities: voice agents and browser/computer-use agents

## Scope

61 companies profiled in this cluster during Phase 2 (assignment file: data/phase2-assignments/p2-6-x.txt). These are the cross-cutting modality companies from the Phase 1 census: voice-agent platforms (horizontal platforms, model/transport infrastructure, and vertical voice products) plus browser and computer-use agents. 20 pages are deep profiles; 41 are base profiles.

## Notable companies

- **ElevenLabs** — $500M ARR and an $11B valuation (Series D, 2026-02-04); voice models plus a Conversational AI agent platform; the modality layer's biggest business.
- **Parloa** — $350M Series D at $3B (2026-01-15), Berlin; enterprise voice CX for Fortune 200 contact centers; the best-funded pure voice-agent platform.
- **Vapi** — $50M Series B at $500M (2026-05-12), 1B calls; developer-first voice orchestration API at roughly $0.05/minute plus at-cost model fees.
- **Bland** — $100M+ raised, 3.5M weekly calls; enterprise AI phone calls on in-house voice models with HIPAA/SOC 2 and on-prem options.
- **Deepgram and LiveKit** — the infrastructure pair: speech-to-text models ($130M Series C at $1.3B, Jan 2026) and open-source WebRTC transport ($100M Series C at $1B, Jan 2026).
- **Cartesia** — $91M raised, 10,000+ customers; real-time voice generation models for agents.
- **Browser Use** — 50,000+ GitHub stars, $17M Felicis-led seed (2025-03-22); the default open-source browser-agent library, now with a paid cloud.
- **H Company** — $220M seed (2025), Paris; Runner H computer-use agents on a specialized small VLM, with an MCP server and Studio low-code surface.
- **Cognigy** — acquired by NICE for approximately $955M (closed 2025-09-08); low-code contact-center agent platform and the cluster's big exit.
- **PolyAI** — $86M Series D (2025), $200M+ total; established enterprise voice assistants.

## Patterns across the eleven build decisions

- **Build interface:** voice splits into no-code canvases (Synthflow, Cognigy AI Agent Studio, ElevenLabs Workflow Builder) versus code-first APIs (Vapi, Retell AI, Bolna). Browser agents split into open-source libraries (Browser Use, Skyvern, Asteroid, Magnitude) versus managed platforms with low-code studios (H Company, Notte).
- **Runtime and tenancy:** vendor multi-tenant SaaS is the default everywhere; on-prem or VPC deployment appears only where regulated buyers demand it (Bland enterprise, Acrely, Vapi on-prem option); self-host comes almost exclusively from open-source lineage (LiveKit, Browser Use, Skyvern).
- **Integrations:** voice platforms lean on proprietary connector libraries into telephony, CCaaS, and calendars; MCP has become the standard substrate for browser/computer-use tool access (H Company, Browser Use, and the 2025 YC cohort generally).
- **Pricing:** usage-based per-minute is the voice norm, often with passthrough model costs (Vapi) or all-inclusive minutes (Bland); model companies charge per character or per minute of audio (Cartesia, Deepgram, ElevenLabs subscription tiers plus credits); browser agents price on browser-hours or credits (Browser Use, Airtop).
- **Task horizon:** converges on multi-step workflows measured in minutes (a phone call, a web task); only the call-center deployments approach always-on persistence.
- **Moats:** latency and reliability engineering (Bland in-house models, Cartesia, Vapi orchestration), open-source distribution (Browser Use, Skyvern), and CCaaS workflow lock-in (Parloa, Cognigy). Reliability claims are the newest differentiator: Dari sells deterministic playback, Kura AI and Smooth lead with reliability, Leaping AI with self-improving agents.

## Consolidation and M&A

Cognigy's ~$955M acquisition by NICE (2025) is the cluster's defining exit: a CCaaS incumbent buying voice-agent capability rather than building it, mirroring ServiceNow-Moveworks and Zendesk-Forethought elsewhere in the census. AgentQL sits inside TinyFish, which raised a $47M Series A led by ICONIQ (2025), consolidating web data extraction into a broader agent platform. Beyond that, the cluster is young and largely unconsolidated; the likely acquirers are CCaaS suites (NICE, Genesys, Five9, Talkdesk) for voice and RPA incumbents for computer use.

## Traction distribution

Sharply bimodal. The funded leaders: ElevenLabs ($11B valuation, $500M ARR), Parloa ($3B), Deepgram ($1.3B), LiveKit ($1B), Vapi ($500M), H Company ($220M seed), Bland ($100M+), Cartesia ($91M), PolyAI ($200M+ total), Cognigy (exited at ~$955M), Airtop ($38.8M), Conveo ($50M), Prosper ($30M a16z), Synthflow ($20M, 1,000+ customers), Browser Use ($17M), Ringg ($15M, 20M monthly calls, Cred/Flipkart/Practo), Phonely ($16M), telli ($18.5M), Parallel ($20M Index), Sable AI ($45M), Multion ($20M+, ~$100M valuation). Reported ARR is rare: ElevenLabs $500M (2026), Opencall.ai $1M (2024), Bolna $700K. The seed tail is long: roughly 25 of the 61 show no visible follow-on funding, including pre-seed entrants Notte ($2.5M), Arini ($500K), Terrakotta ($500K), and AutoComputer (pre-seed). India forms a distinct funded sub-cluster (Bolna, Ringg, GreyLabs AI) building voice for BFSI collections and support.

## Gaps and open ground

- **Reliability engineering for browser agents** is the problem the newest entrants attack directly (Dari's deterministic playback, Kura AI, Smooth) but no one owns it yet.
- **Voice-model routing** is barely occupied: Speko ("OpenRouter for voice AI", YC S26) is the only entrant.
- **On-prem voice** remains rare (Acrely is the clearest positioning) despite regulated-buyer demand.
- **Multilingual and underserved-language voice** has one visible entrant (Samora AI, YC W26).
- **Video as an agent modality** is nearly empty: Cardboard (agentic video editor, YC W26) and Lightscreen (voice-plus-video interviewing) are the only occupants.
- **Vertical voice niches** are crowded at seed stage (dentists: Arini and Newton; vets: Scritch; car dealers: Sandra AI, Toma, VoxOps; drive-thrus: Lilac Labs) with no category leader yet emerged.
