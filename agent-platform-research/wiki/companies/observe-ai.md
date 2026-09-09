---
name: Observe.AI
layer: L3
scope: vertical
vertical: customer service
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: seed:L3;Menlo
---

# Observe.AI

**Thesis (one line):** YC-born contact-center AI that grew from conversation intelligence into an agentic CX platform spanning voice agents, copilots, and coaching.

## Facts

- Founded: 2017 (formerly Z21 Labs)
- HQ: Redwood City, CA; Bengaluru R&D office
- YC batch: W18
- Backers: SoftBank Vision Fund 2 (Series C lead), Zoom, Menlo Ventures (Series B lead), Nexus Venture Partners, NGP Capital, YC
- Funding: $213M total; last round Series C $125M (Apr 2022, SoftBank Vision Fund 2)
- Valuation: $304M at Series B (Jul 2020, PitchBook via TechCrunch); Series C valuation undisclosed
- Revenue/ARR: ~$44M ARR estimated for 2024 (GetLatka, low confidence); "eight-figure revenue" at Series C (2022)
- ICP: Enterprise contact centers (100-100,000 agents) in healthcare, financial services, insurance, retail, automotive, BPO
- Pricing model: Tiered subscription by product module (VoiceAI Agents, Real-time AI, Post-interaction AI, Enterprise tiers); no public unit pricing

## The eleven build decisions

1. **Build interface:** CoBuilder (an AI agent that configures other agents) plus a governed workspace with drafting and versioning; natural-language Coach Builder for coaching agents (2026)
2. **Runtime and tenancy:** Vendor SaaS hosted exclusively on AWS; production voice and digital runtime (streaming ASR, custom TTS, noise suppression); listed on AWS Marketplace
3. **Tool and integration strategy:** "Integration Fabric" with 250+ enterprise connectors across CRM, CCaaS, telephony, and knowledge bases; open APIs and MCP support
4. **Knowledge and data strategy:** Knowledge Center grounds agent answers to prevent hallucination; shared "Customer Interaction Intelligence" memory layer across all agents; analyzes 100% of interactions
5. **Autonomy and human-in-the-loop:** Hybrid-workforce model — autonomous voice and chat agents for routine interactions with live transfer to humans; coaching plans require human supervisor sign-off (no autonomous employment actions)
6. **Governance and enterprise controls:** ISO 27001, SOC 2 Type 2, PCI DSS, GDPR, CCPA; RBAC, MFA, PCI-grade PII and PHI redaction, tool permissions, rollout gates
7. **Pricing model:** Tiered platform subscription by module and tier; no public per-seat or per-resolution rates
8. **GTM motion:** Sales-led enterprise (direct plus channel); AWS Marketplace and a strategic AWS collaboration agreement; international expansion
9. **Moat thesis:** Conversation data at scale (100% interaction analysis), Integration Fabric plus shared memory layer, vertical CX focus, patents on interaction evaluation (2026)
10. **Open-source posture:** Proprietary; no open-source releases found
11. **Task horizon:** In-interaction (minutes) copilot support and post-interaction automation; always-on voice agents; moving toward end-to-end workflow execution from authentication to resolution

## Analysis

- **Agent capability depth:** VoiceAI Agents resolve inbound and outbound calls end-to-end (answering, routing, scheduling, claims); ChatAI Agents deflect billing and order queries; Companion Agent assists live agents with context and next-best action; Performance Agents (Sep 2026) automate coaching and performance management
- **Weaknesses:** Gartner peer reviews flag admin upkeep burden, thin support, and feature fragmentation; pricing opaque; agentic pivot lands in a crowded field against better-funded rivals
- **Trajectory:** Conversation intelligence (2017-2022), then copilots (2023-2025), now an agentic CX platform with Performance Agents (Sep 2026); CMP Prism "Pioneer" for real-time agent assist (Jul 2026); DoorDash deployment spans 19,000 agents
- **M&A:** Acquired Scope.AI (Aug 2021) to add omnichannel; nothing since

## Sources

- observe.ai (accessed 2026-09-09)
- observe.ai/pricing (accessed 2026-09-09)
- observe.ai/platform/agent-platform (accessed 2026-09-09)
- observe.ai/hybrid-workforce (accessed 2026-09-09)
- TechCrunch, Observe.ai raises $125M adding Zoom as an investor (2022-04-12)
- Observe.AI Series C press release (2022-04-12)
- PR Newswire, Observe.AI launches Performance Agents for CX (2026-09-08)
- CMSWire, Observe.AI launches AI coaching agents for contact centers (2026-09-08)
- PR Newswire, Observe.AI featured as Pioneer on CMP Prism (2026-07-07)
- SalesTech Edition, Performance Agents human sign-off (2026-09-08)
- CB Insights company profile (accessed 2026-09-09)
- GetLatka, Observe.AI ARR estimate (accessed 2026-09-09)
