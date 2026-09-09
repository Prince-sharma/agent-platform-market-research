---
name: Scaled Cognition
layer: L3
scope: vertical
vertical: customer service
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: Khosla Ventures
---

# Scaled Cognition

**Thesis (one line):** Custom agentic model (APT) delivering verifiable, policy-exact customer experience actions; sells reliability, not intelligence.

## Facts

- Founded: 2024 (Dan Roth, CEO; Dan Klein, CTO; Damon Pender, CFO); some coverage says 2022
- HQ: New York, NY (Lerer Hippeau listing; some profiles list Mountain View, CA)
- YC batch: none
- Backers: Khosla Ventures (led $100M Series A; Vinod Khosla on board), Genesys (strategic), Lerer Hippeau (led $21M seed), SilverCircle, Stata Capital Partners
- Funding: $121M total; last round $100M Series A led by Khosla Ventures (June 2026)
- Valuation: $750M (June 2026, WSJ)
- Revenue/ARR: unknown; ~33 employees mid-2026
- ICP: Fortune 500 in financial services, healthcare, telecom, insurance; BPOs and CX service providers; high-stakes customer interactions
- Pricing model: unknown; APT delivered via stateless RESTful API plus platform licensing

## The eleven build decisions

1. **Build interface:** no-code, low-code, or SDK (Agent Builder); AgentTwin auto-generates agents from historical interactions; natural language compiles to deterministic specifications, not prompts
2. **Runtime and tenancy:** hosted, customer VPC, or fully on-premises; stateless execution
3. **Tool and integration strategy:** typed API schemas with verified contracts; GenAPI simulates backend APIs for pre-production testing; standard RESTful API; models swappable at will
4. **Knowledge and data strategy:** retrieves existing records rather than generating content (hallucination reduction); grounded in company policies and backend systems
5. **Autonomy and human-in-the-loop:** executes high-stakes actions (purchases, claims, rebooking) with architecturally enforced policies; deterministic conditions gate every action; self-verification before confirmation
6. **Governance and enterprise controls:** Agent Defender blocks jailbreaks and malicious prompts; every action, blocked decision, and policy check logged and auditable; versioned deployments with evaluation gates
7. **Pricing model:** unknown
8. **GTM motion:** sales-led enterprise; Genesys strategic investment opens its 8,000+ customer base; BPO partnerships; research team does hands-on deployment
9. **Moat thesis:** proprietary APT model architecture (action-level training objectives, synthetic data pipeline, agent self-play) plus simulation and eval infrastructure (GenAPI)
10. **Open-source posture:** proprietary model; open-by-design API — prompts, policies, and business logic stay with the customer
11. **Task horizon:** multi-step transactional workflows (minutes) with verified outcomes

## Analysis

- **Agent capability depth:** agents complete user-specified actions correctly on first attempt — insurance claims, flight changes, purchases on a customer's behalf; APT-1 topped Tau-Bench and ComplexFuncBench at launch (Feb 2025)
- **Weaknesses:** single-model bet against frontier labs adding reliability features; unproven revenue at $750M valuation; "no hallucinations" marketing invites scrutiny; tiny team vs rivals
- **Trajectory:** targeting the $600B BPO market as enterprises replace outsourced managed services with owned AI workforces; plans expansion beyond CX into finance; Genesys distribution
- **M&A:** none; founders previously built and sold Semantic Machines, a conversational AI pioneer, to Microsoft (2018)

## Sources

- Scaled Cognition Series A announcement page (accessed 2026-09-09)
- SiliconANGLE: $100M raise, Genesys participation (2026-06-25)
- Scaled Cognition: APT-1 launch post (2025-02-12)
- Lerer Hippeau: seed announcement and origin story (2025-02-12)
- Scaled Cognition platform and about pages (accessed 2026-09-09)
- toflow.ai: Scaled Cognition funding profile (2026-06-26)
- WSJ: Scaled Cognition reliability approach (accessed 2026-09-09)
