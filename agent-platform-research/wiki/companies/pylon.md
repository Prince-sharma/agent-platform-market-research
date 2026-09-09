---
name: Pylon
layer: L3
scope: vertical
vertical: customer service (B2B)
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L3;YC W23
---

# Pylon

**Thesis (one line):** Agentic support platform unifying B2B post-sales ticketing, channels, and AI agents as the Zendesk replacement for SaaS companies.

## Facts

- Founded: November 2022 (Marty Kausas, Advith Chelikani, Robert Eng)
- HQ: San Francisco, CA (Pylon Labs, Inc.)
- YC batch: W23
- Backers: a16z (led $17M Series A, co-led $31M Series B), Bain Capital Ventures (co-led B), General Catalyst (led seed), Y Combinator
- Funding: $51M total; last round $31M Series B co-led by a16z and Bain Capital Ventures (August 2025)
- Valuation: unknown
- Revenue/ARR: unknown; self-reported 5x+ YoY revenue growth two years running (Aug 2025); 750+ customers then, 1,500+ by 2026
- ICP: B2B SaaS post-sales teams — support, success, account management (Together AI, Cognition, Temporal, AssemblyAI, Linear, ElevenLabs)
- Pricing model: per seat; Starter $59, Professional $89, Enterprise $139 per seat/month (annual); AI Assistants add-on $50/seat/month; 3-seat minimum (7 for Enterprise)

## The eleven build decisions

1. **Build interface:** natural language — configure workflows, routing, and agents by asking; reusable Skills package team procedures for agents
2. **Runtime and tenancy:** vendor multi-tenant SaaS
3. **Tool and integration strategy:** channel-native intake (Slack, Teams, Discord, email, chat, SMS, WhatsApp, phone, Telegram) plus Salesforce, HubSpot, Gong, Linear, Jira, Confluence, Notion, Snowflake, BigQuery; MCP support
4. **Knowledge and data strategy:** unified Support, Account, and Product Intelligence layer across conversations, CRM, product usage, logs, and code, exposed to agents and team via MCP
5. **Autonomy and human-in-the-loop:** humans direct agents (Assist Agent, Background Agent, Slack Agent); Support Agent auto-resolves across channels and brings in humans for judgment
6. **Governance and enterprise controls:** RBAC, HIPAA/BAA, security reviews, MSAs at Enterprise tier; viewer-only seats; data warehouse export
7. **Pricing model:** per seat plus AI add-ons (AI Assistants, Account Intelligence sold separately)
8. **GTM motion:** bottom-up Slack-first wedge in the B2B SaaS community, sales-led expansion; self-described Zendesk-killer; 150+ migrations from Zendesk, Intercom, Salesforce
9. **Moat thesis:** system-of-record gravity across channels and post-sales data; Slack Connect channel lock-in; AI trained on each customer's interaction history
10. **Open-source posture:** proprietary
11. **Task horizon:** multi-step investigations (minutes); Background Agents run triggered skills continuously

## Analysis

- **Agent capability depth:** agents investigate every issue before a human opens it, gather account context, draft replies, and update connected systems; July 2026 relaunch positioned Pylon as "the agentic support platform" with humans directing agent fleets
- **Weaknesses:** seat-based pricing under pressure from per-resolution rivals (Sierra); narrow B2B SaaS ICP; bundling retaliation risk from Zendesk, Intercom, and Salesforce (Agentforce in Slack)
- **Trajectory:** 1,500+ customers (2026); Workforce Management product launched; expanding from support desk toward the post-sales operating system
- **M&A:** none visible; recurring acquisition speculation given the Zendesk-Forethought precedent and a16z ownership across CX agents

## Sources

- Pylon blog: $31M Series B announcement (2025-08-19)
- TechCrunch: $17M Series A led by a16z (2024-08-28)
- TechCrunch: seed round, Slack B2B conversations (2023-07-11)
- Pylon website: agentic support platform (accessed 2026-09-09)
- FeatureBase: Pylon pricing 2026 (2026-07-27)
- Sacra: Pylon company profile (2026-02-14)
- Forbes: Pylon, 30 Under 30 AI (2026-01-01)
- Y Combinator company page (accessed 2026-09-09)
