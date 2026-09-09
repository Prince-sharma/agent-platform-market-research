---
name: Maven AGI
layer: L3
scope: vertical
vertical: customer service
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L3;Lux
---

# Maven AGI

**Thesis (one line):** Enterprise AI support agents with a compliance-heavy GTM (ISO 42001, GSA schedule), expanding from customer service into commerce and broader "Business AGI".

## Facts

- Founded: 2023, Boston
- HQ: Boston, MA
- YC batch: none
- Backers: M13 (Series A lead), Lux Capital, executive angels from Google, OpenAI, and HubSpot; Series B lead undisclosed
- Funding: $78M total — $28M (May 2024, including $20M Series A led by M13) plus $50M Series B (Jun 2025)
- Valuation: unknown (third-party estimate ~$236M, low confidence)
- Revenue/ARR: unknown
- ICP: Large enterprises with high-volume customer support (marketplaces, B2B software, consumer services); US federal via GSA schedule
- Pricing model: Custom enterprise contracts priced on conversation volume, feature scope, integration complexity, seats, and term; no list pricing

## The eleven build decisions

1. **Build interface:** Agent Designer — build workflows without deep technical skills, with simulation and testing tools
2. **Runtime and tenancy:** Vendor SaaS (deployment details not public); AWS Marketplace listing; inherits authentication from connected systems
3. **Tool and integration strategy:** Integration-first architecture with 100+ out-of-the-box integrations (Zendesk, Salesforce, Freshdesk, Genesys, HubSpot, Slack, Snowflake)
4. **Knowledge and data strategy:** "Graph of Record" with version-aware knowledge retrieval; proprietary enterprise search engine validates answers against documentation; ingests structured and unstructured sources (PDFs, spreadsheets, notes)
5. **Autonomy and human-in-the-loop:** Autonomous resolution of routine and mid-complexity queries (claims up to 90-93% of inquiries); confidence-based escalation to humans with structured summaries and reasoning
6. **Governance and enterprise controls:** SOC 2 Type 2, ISO 27001, ISO 42001 (Feb 2026), ISO 27701/27017/27018, PCI DSS Level 1 v4.0, HIPAA, GDPR, CCPA; deterministic guardrails, RBAC, audit logs, automatic redaction (e.g., SSNs), prompt-injection detection
7. **Pricing model:** Custom enterprise contracts (volume-, scope-, and term-based); no public per-resolution or per-seat rates
8. **GTM motion:** Direct enterprise sales; AWS Marketplace; GSA Multiple Award Schedule IT contract (Aug 2026) opening federal demand
9. **Moat thesis:** Unified reasoning engine across voice, chat, email; deep CX-stack integrations; grounding via proprietary enterprise search; compliance portfolio as an enterprise trust signal
10. **Open-source posture:** Proprietary; no open-source releases found
11. **Task horizon:** Multi-step support resolutions (minutes); positioning toward long-horizon cross-functional automation ("Business AGI")

## Analysis

- **Agent capability depth:** Agent Maven resolves voice (native speech-to-speech) and chat end-to-end including actions (refunds, updates, verification); Maven Copilot augments human agents; Maven Commerce (Sep 2026) adds a selling agent
- **Weaknesses:** No public pricing, ARR, or valuation; crowded space (Sierra, Decagon, Intercom, Observe.AI); G2 reviews note cost for smaller firms and a learning curve for advanced behaviors
- **Trajectory:** $50M Series B (Jun 2025) to meet enterprise demand; ISO 42001 (Feb 2026) and GSA schedule (Aug 2026) deepen the regulated-enterprise wedge; Maven Commerce (Sep 2026) begins the expansion beyond support; customers include Tripadvisor, ClickUp, Quest Software, Thumbtack, SS&C
- **M&A:** none visible

## Sources

- mavenagi.com (accessed 2026-09-09)
- mavenagi.com/pricing (accessed 2026-09-09)
- mavenagi.com/about-us (accessed 2026-09-09)
- VentureBeat, Maven AGI $28M funding round (2024-05-29)
- FinSMEs, Maven AGI raises $20M Series A (2024-05-29)
- Lux Capital, our investment in Maven AGI (2024-05-29)
- PR Newswire, Maven AGI raises $50M (2025-06-18)
- mavenagi.com/resources/series-b (2025-06-16)
- PR Newswire, Maven AGI achieves ISO/IEC 42001 certification (2026-02-18)
- mavenagi.com, Meet Maven Commerce (2026-09-03)
- eesel.ai, Maven AGI pricing analysis (2026-07-15)
- G2, Maven AGI reviews (accessed 2026-09-09)
