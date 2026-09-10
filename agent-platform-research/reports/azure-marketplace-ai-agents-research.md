# Microsoft Azure Marketplace: AI Apps and Agents — Deep-Dive Research Report

**Date:** September 9, 2026  
**Researcher:** Phase 1 Azure Research  
**Primary Source:** https://marketplace.microsoft.com/en-us/marketplace/apps?category=ai-apps-and-agents

---

## Executive Summary

On September 25, 2025, Microsoft launched the reimagined **Microsoft Marketplace**, unifying Azure Marketplace and Microsoft AppSource into a single destination for cloud solutions, AI apps, and agents. The marketplace launched with **over 3,000 AI apps and agents** newly available, integrated directly into Microsoft products from Azure AI Foundry to Microsoft 365 Copilot. By January 2026, 330 new offers were added; by June 2026, another 367 — signaling rapid catalog growth.

Microsoft 365 Copilot has surpassed **30 million paid seats** (July 2026), with **230,000+ organizations** using Copilot Studio to build custom agents. Over **1 million custom AI agents** have been created. At Ignite 2025 (November 2025), Microsoft announced **Agent 365** — a control plane for managing and governing AI agents — alongside **Work IQ**, new Office agents, and Anthropic Claude model availability in Microsoft Foundry.

---

## 1. Full Catalog Enumeration

### Marketplace Overview

The Microsoft Marketplace AI Apps and Agents category is the primary catalog, accessible at:
- `https://marketplace.microsoft.com/en-us/marketplace/apps?category=ai-apps-and-agents`
- Legacy URL: `https://azuremarketplace.microsoft.com/en-us/marketplace/apps/category/ai-plus-machine-learning`

**Catalog size:**
- **3,000+ AI apps and agents** at launch (September 25, 2025) ([Microsoft Blog](https://blogs.microsoft.com/blog/2025/09/25/introducing-microsoft-marketplace-thousands-of-solutions-millions-of-customers-one-marketplace/))
- **330 new offers** added in January 2026 ([LavX News](https://news.lavx.hu/article/microsoft-marketplace-january-2026-330-new-offers-signal-strategic-shift-in-enterprise-ai-and-multi-cloud-management))
- **367 new offers** added in June 2026 ([LavX News](https://news.lavx.hu/article/microsoft-marketplace-adds-367-offers-what-the-june-2026-drop-signals-for-multi-cloud-strategy))
- Tens of thousands of cloud and industry solutions across the broader marketplace catalog

### Enumerated AI Apps and Agents

The following is a non-exhaustive list of notable AI apps and agents identified on the marketplace, organized by publisher:

| # | Name | Publisher | Rating | Reviews | Description | Pricing Model |
|---|------|-----------|--------|---------|-------------|---------------|
| 1 | **n8n.cloud** | n8n GmbH | 4.9 | 47-54 | Workflow automation platform with 150+ app integrations, node-based visual UI | 30-day free trial; subscription tiers |
| 2 | **n8n Self Hosted** | n8n GmbH | — | — | Container-based self-hosted workflow automation | Container pricing |
| 3 | **Palantir AIP** | Palantir Technologies | — | — | AI-powered decision intelligence platform for enterprise data integration and analysis | Contact publisher |
| 4 | **Cognigy.AI** (NiCE Cognigy) | Cognigy | — | — | Conversational AI platform for customer service automation | Contact publisher |
| 5 | **UiPath Agentic Automation** | UiPath SRL | — | — | AI-powered business automation platform with agentic capabilities | Subscription; free trial available |
| 6 | **UiPath Automation Cloud (Free Trial)** | UiPath | — | — | Cloud-based RPA and automation platform | Free trial |
| 7 | **Moveworks — Agentic Copilot** | Moveworks | — | — | AI assistant for employee support across IT, HR, facilities | Subscription |
| 8 | **Glean** | Glean | — | — | Enterprise search and knowledge AI agent | Contact publisher |
| 9 | **Writer Enterprise Platform** | Writer | — | — | Enterprise-grade generative AI writing and content platform | Subscription |
| 10 | **C3 Agentic AI Platform** | C3.ai | — | — | Enterprise AI platform for building and deploying AI applications | Contact publisher |
| 11 | **BA Insight for Azure AI Search** | BA Insight | 4.6 | 21 | Enterprise search connector for Azure AI Search | Subscription |
| 12 | **Legora** | Legora (Leyaab) | — | — | AI-powered legal workspace with native Microsoft 365 integration | Subscription |
| 13 | **Leena AI — Enterprise Virtual Assistant** | Leena AI | — | — | Agentic AI-powered enterprise virtual assistant for HR and IT | Subscription |
| 14 | **Haptik — Voice AI Agents** | Haptik | — | — | Voice-based AI agents for customer interaction | Subscription |
| 15 | **Koredot AI for Work** | Koredot AI | — | — | AI-powered workplace productivity agent | Subscription |
| 16 | **Gong Revenue AI OS** | Gong | — | — | Revenue intelligence platform with AI agents | Subscription |
| 17 | **ServiceNow on Azure** | ServiceNow | — | — | Enterprise service management with AI capabilities | Subscription |
| 18 | **Streebo Logistics Chatbot** | Streebo | — | — | Generative AI chatbot for logistics, powered by Copilot Studio | Subscription |
| 19 | **Anthropic Claude (Sonnet 4.5, 4.6, Opus 4.6)** | Anthropic | — | — | Frontier AI models available through Microsoft Foundry and Marketplace | Pay-as-you-go (token-based, CCU billing) |
| 20 | **Teradata Analyst Agent** | Teradata | — | — | Conversational analytics agent for data exploration | Contact publisher |
| 21 | **Growthguru.ai Partner Agents** | Growthguru.ai | — | — | AI agents for growth and partnership management | Subscription |
| 22 | **Copilot Agent Library** | Microsoft (Power Cat) | — | — | Pre-built agent templates for Microsoft 365 Copilot | Included with Copilot license |

### Additional Partners Identified on Marketplace

From the Ignite 2025 launch and subsequent marketplace updates, the following partners have also been confirmed as having AI agent/app listings:

- **Adobe** (Adobe-Microsoft partnership for AI-powered document and creative workflows)
- **Cohere** (foundation models available through Foundry)
- **Mistral AI** (foundation models available through Foundry)
- **Esri** (ArcGIS for Teams — geospatial AI agent)
- **Lucid Software** (Lucidchart for Teams — visual collaboration agent)
- **NetDocuments** (legal document AI agent)
- **Seismic** (sales enablement content agent)
- **Egnyte** (content search and summarization agent)
- **Bigtincan** (sales content management agent)
- **ALVAO** (IT service desk agent)
- **Priority Matrix** (project management agent)
- **Sift** (people discovery and connection agent)
- **KnowBe4** (security awareness HRM+ platform)
- **Pure Storage** (cloud block storage with AI integration)
- **Dash0** (observability with AI cost control)
- **Wokelo** (custom AI agents for enterprise workflows)
- **Nextant** (AI Agents Accelerator — build & deploy service)
- **Telefónica Tech** (AI Pilot Delivery service)
- **Cloocus** (Cloud Security Envisioning Workshop)
- **Zammo.ai** (conversational AI platform — 6x revenue increase via marketplace)

**Sources:**
- [Microsoft Marketplace launch blog](https://blogs.microsoft.com/blog/2025/09/25/introducing-microsoft-marketplace-thousands-of-solutions-millions-of-customers-one-marketplace/)
- [Azure Marketplace listings](https://azuremarketplace.microsoft.com/en-us/marketplace/apps)
- [LavX News — January 2026](https://news.lavx.hu/article/microsoft-marketplace-january-2026-330-new-offers-signal-strategic-shift-in-enterprise-ai-and-multi-cloud-management)
- [LavX News — June 2026](https://news.lavx.hu/article/microsoft-marketplace-adds-367-offers-what-the-june-2026-drop-signals-for-multi-cloud-strategy)
- [Digital Bricks — AI Agents in Microsoft Marketplace](https://www.digitalbricks.ai/blog-posts/ai-agents-in-the-microsoft-marketplace)

---

## 2. Featured and Top-Rated Apps

### Highest-Rated Apps (with visible ratings)

| App | Publisher | Rating | # Reviews |
|-----|-----------|--------|-----------|
| **n8n.cloud** | n8n GmbH | 4.9 / 5 | 47-54 |
| **BA Insight for Azure AI Search** | BA Insight | 4.6 / 5 | 21 |

Most marketplace listings do not yet display visible star ratings or review counts, as the AI Apps and Agents category is relatively new (launched September 2025). The marketplace's ratings and reviews system is documented at [Microsoft Learn — Ratings and reviews](https://learn.microsoft.com/en-us/marketplace/ratings-reviews).

### Featured Solutions

Microsoft highlights featured solutions on the marketplace homepage and through **intelligent discovery** (announced August 2026), which uses AI to match apps and agents to customers based on their needs. The [Agent Showcase](https://microsoftpartners.microsoft.com/abs/agent-showcase/) on the Microsoft Partners site highlights partner-built agents.

From the launch blog, Microsoft specifically called out partners launching new AI offerings:
- Siemens (8X increase in customer adoption via marketplace)
- Mars Inc. (customer testimonial on trusted solutions)
- Zammo.ai (6x increase in revenue via marketplace)

**Sources:**
- [n8n.cloud listing](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/n8ngmbh1616619114564.n8n_cloud?tab=overview)
- [BA Insight listing](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/ba-insight-globalhqboston1619706754703.baiforazure?tab=overview)
- [Intelligent Discovery blog](https://www.microsoft.com/en-us/microsoft-cloud/blog/2026/08/25/accelerating-ai-adoption-with-intelligent-discovery-in-microsoft-marketplace/)
- [Agent Showcase](https://microsoftpartners.microsoft.com/abs/agent-showcase/)

---

## 3. Adoption Signals

### Microsoft Marketplace Adoption

| Metric | Value | Source / Date |
|--------|-------|---------------|
| AI apps and agents at launch | 3,000+ | [Microsoft Blog, Sep 25, 2025](https://blogs.microsoft.com/blog/2025/09/25/introducing-microsoft-marketplace-thousands-of-solutions-millions-of-customers-one-marketplace/) |
| New offers added (Jan 2026) | 330 | [LavX News, Jan 22, 2026](https://news.lavx.hu/article/microsoft-marketplace-january-2026-330-new-offers-signal-strategic-shift-in-enterprise-ai-and-multi-cloud-management) |
| New offers added (Jun 2026) | 367 | [LavX News, Jun 11, 2026](https://news.lavx.hu/article/microsoft-marketplace-adds-367-offers-what-the-june-2026-drop-signals-for-multi-cloud-strategy) |
| Siemens customer adoption increase | 8X | [Microsoft Blog, Sep 25, 2025](https://blogs.microsoft.com/blog/2025/09/25/introducing-microsoft-marketplace-thousands-of-solutions-millions-of-customers-one-marketplace/) |
| Zammo.ai revenue increase | 6X | [Microsoft DevBlog, Jun 2, 2026](https://devblogs.microsoft.com/all-things-azure/build-scale-and-monetize-apps-and-agents-with-microsoft-marketplace/) |
| Microsoft partners in ecosystem | 500,000+ | [Microsoft DevBlog, Jun 2, 2026](https://devblogs.microsoft.com/all-things-azure/build-scale-and-monetize-apps-and-agents-with-microsoft-marketplace/) |
| Fortune 500 using Azure | 95% | [Microsoft DevBlog, Jun 2, 2026](https://devblogs.microsoft.com/all-things-azure/build-scale-and-monetize-apps-and-agents-with-microsoft-marketplace/) |
| Teams monthly active users | 400 million | [Microsoft DevBlog, Jun 2, 2026](https://devblogs.microsoft.com/all-things-azure/build-scale-and-monetize-apps-and-agents-with-microsoft-marketplace/) |
| Multiparty private offers expansion | 30 countries in Europe; AU, JP, SA coming Jul 2026 | [Microsoft DevBlog, Jun 2, 2026](https://devblogs.microsoft.com/all-things-azure/build-scale-and-monetize-apps-and-agents-with-microsoft-marketplace/) |

### Microsoft 365 Copilot Adoption

| Metric | Value | Source / Date |
|--------|-------|---------------|
| M365 Copilot paid seats | 30 million | [Microsoft Blog, Jul 30, 2026](https://www.microsoft.com/en-us/microsoft-365/blog/2026/07/30/the-next-measure-of-ai-momentum-is-work-transformed/) |
| M365 Copilot paid seats (prior quarter) | 20 million | [Microsoft IR, Apr 29, 2026](https://sqmagazine.co.uk/copilot-statistics/) |
| M365 Copilot paid seats (Q2 FY26) | 15 million | [Microsoft IR, Jan 28, 2026](https://www.computerworld.com/article/4124591/microsoft-touts-m365-copilot-momentum-claims-15m-paid-users.html) |
| Net seat adds Q3 FY26 | 5 million (doubled QoQ) | [Microsoft Blog, Jul 30, 2026](https://www.microsoft.com/en-us/microsoft-365/blog/2026/07/30/the-next-measure-of-ai-momentum-is-work-transformed/) |
| Fortune 500 using M365 Copilot | 90%+ | [Microsoft Ignite 2025 Blog, Nov 18, 2025](https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/18/microsoft-ignite-2025-copilot-and-agents-built-to-power-the-frontier-firm/) |
| Fortune 500 with 10K+ Copilot seats | 60%+ | [Microsoft IR, Apr 2026](https://sqmagazine.co.uk/copilot-statistics/) |
| Largest single deployment | Accenture — 740,000+ seats | [SQ Magazine, Jun 2026](https://sqmagazine.co.uk/copilot-statistics/) |
| Other large deployments | Bayer, J&J, Mercedes-Benz, Roche (90K+ seats each) | [SQ Magazine, Jun 2026](https://sqmagazine.co.uk/copilot-statistics/) |
| Infosys, TCS, Wipro combined | 300,000+ employees | [Microsoft News, Jun 3, 2026](https://news.microsoft.com/source/asia/2026/06/03/infosys-tcs-and-wipro-scale-microsoft-365-copilot-to-over-300000-employees/) |
| Total commercial M365 seats | 450 million | [Microsoft IR, Jan 28, 2026](https://sqmagazine.co.uk/copilot-statistics/) |
| Paid Copilot conversion rate | ~4.4% of eligible base | Calculated from 20M/450M |
| Features shipped in last year | 400+ | [Microsoft Ignite 2025 Blog, Nov 18, 2025](https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/18/microsoft-ignite-2025-copilot-and-agents-built-to-power-the-frontier-firm/) |
| Enterprise queries per day (est.) | 1.1 billion | [Presenc AI, Mar 2026](https://presenc.ai/research/copilot-usage-statistics) |
| M365 Copilot pricing | $30/user/month (annual) | [SQ Magazine, Jun 2026](https://sqmagazine.co.uk/copilot-statistics/) |

### Copilot Studio Adoption

| Metric | Value | Source / Date |
|--------|-------|---------------|
| Organizations using Copilot Studio | 230,000+ | [CX Today, May 1, 2025](https://www.cxtoday.com/contact-center/microsoft-hits-1mn-custom-ai-agent-milestone-with-230000-organizations-using-copilot-studio/); [Windows News, Jul 1, 2026](https://windowsnews.ai/article/copilot-studio-now-powers-230k-orgs-microsofts-blueprint-for-ai-agent-governance.375482) |
| Custom AI agents created | 1 million+ | [CX Today, May 1, 2025](https://www.cxtoday.com/contact-center/microsoft-hits-1mn-custom-ai-agent-milestone-with-230000-organizations-using-copilot-studio/) |
| Copilot Studio reached 100K orgs | October 2024 | [Windows Central, Jan 20, 2025](https://www.windowscentral.com/microsoft/microsoft-rebuts-salesforce-100k-organizations-used-copilot-studio-by-october-2024) |

### GitHub Copilot Adoption

| Metric | Value | Source / Date |
|--------|-------|---------------|
| Paid subscribers | 4.7 million | [Microsoft IR, Jan 28, 2026](https://sqmagazine.co.uk/copilot-statistics/) |
| YoY growth | ~75% | [Microsoft IR, Jan 28, 2026](https://sqmagazine.co.uk/copilot-statistics/) |
| Fortune 100 using GitHub Copilot | 90% | [GitHub, per SQ Magazine](https://sqmagazine.co.uk/copilot-statistics/) |
| Developer productivity improvement | 55% faster task completion | [GitHub-funded research, per SQ Magazine](https://sqmagazine.co.uk/copilot-statistics/) |

### Industry Forecast

- **IDC predicts 1.3 billion agents by 2028** ([Microsoft Agent 365 Blog, Nov 18, 2025](https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/18/microsoft-agent-365-the-control-plane-for-ai-agents/))
- Microsoft positions for "a future with over 1 billion agents" ([Windows Central, Nov 18, 2025](https://www.windowscentral.com/microsoft/microsoft-doubles-down-on-agentic-ai-agent-365-prepares-for-a-future-with-over-1-billion-agents))

---

## 4. Categories of Agents

Based on the marketplace catalog and Microsoft's own agent taxonomy, agents fall into the following categories:

### A. Foundation Models / Model Serving
| Agent/App | Publisher | Notes |
|-----------|-----------|-------|
| Anthropic Claude (Sonnet 4.5, Sonnet 4.6, Opus 4.6) | Anthropic | Available via Microsoft Foundry and Marketplace; CCU billing |
| Cohere models | Cohere | Available through Foundry |
| Mistral AI models | Mistral AI | Available through Foundry |
| OpenAI GPT-5 | OpenAI/Microsoft | Integrated into Copilot; available through Foundry |
| Sora 2 | OpenAI/Microsoft | Video generation model in Copilot |

### B. Automation / Workflow
| Agent/App | Publisher | Notes |
|-----------|-----------|-------|
| n8n.cloud | n8n GmbH | 150+ app integrations, node-based workflow automation |
| UiPath Agentic Automation | UiPath | RPA + agentic AI for enterprise process automation |
| n8n Self Hosted | n8n GmbH | Container-based deployment |

### C. Customer Service / Conversational AI
| Agent/App | Publisher | Notes |
|-----------|-----------|-------|
| Cognigy.AI (NiCE Cognigy) | Cognigy | Conversational AI for customer service |
| Haptik Voice AI Agents | Haptik | Voice-based customer interaction agents |
| Streebo Logistics Chatbot | Streebo | Generative AI chatbot powered by Copilot Studio |
| Leena AI Enterprise Virtual Assistant | Leena AI | HR and IT employee support agent |

### D. Coding / Development
| Agent/App | Publisher | Notes |
|-----------|-----------|-------|
| GitHub Copilot | Microsoft/GitHub | 4.7M paid subscribers; multi-file code generation |
| Foundry Agent Service | Microsoft | Build, deploy, and manage AI agents on Azure |

### E. Document Processing / Knowledge Management
| Agent/App | Publisher | Notes |
|-----------|-----------|-------|
| Glean | Glean | Enterprise search and knowledge AI |
| BA Insight for Azure AI Search | BA Insight | Enterprise search connector (4.6 stars) |
| NetDocuments Copilot | NetDocuments | Legal document search, summarize, manage |
| Seismic | Seismic | Sales content search and management |
| Search Egnyte | Egnyte | File search, summarize, generate answers |
| Bigtincan | Bigtincan | Sales content search, share, preview |

### F. Security
| Agent/App | Publisher | Notes |
|-----------|-----------|-------|
| KnowBe4 HRM+ Platform | KnowBe4 | Security awareness and workforce protection |
| Cloocus Cloud Security Envisioning | Cloocus | Cloud security risk assessment workshop |
| Microsoft Security Copilot Agents | Microsoft | Automated threat detection and incident response |

### G. Data / Analytics
| Agent/App | Publisher | Notes |
|-----------|-----------|-------|
| Palantir AIP | Palantir Technologies | Decision intelligence and data integration |
| C3 Agentic AI Platform | C3.ai | Enterprise AI for industrial applications |
| Teradata Analyst Agent | Teradata | Conversational analytics agent |
| Microsoft Analyst Agent | Microsoft | Data analysis agent in Copilot |

### H. Vertical-Specific
| Agent/App | Publisher | Vertical | Notes |
|-----------|-----------|----------|-------|
| Legora | Legora | Legal | AI-powered legal workspace with M365 integration |
| ArcGIS for Teams | Esri | Geospatial | Map and application discovery |
| EcoMatcher | EcoMatcher | Sustainability | Tree planting and gifting agent |
| Embark by Hermis | Hermis | HR/L&D | AI-powered micro-learning for employee training |
| NexAA | TVS Next | HR | Employee experience transformation |
| Partner Onboarding | Datamatics | Vendor Mgmt | Partner onboarding automation |
| Streebo Logistics Chatbot | Streebo | Logistics | Generative AI chatbot for logistics |

### I. Infrastructure / Tooling
| Agent/App | Publisher | Notes |
|-----------|-----------|-------|
| Foundry Agent Service | Microsoft | Agent hosting, vCPU/memory billing |
| Lucidchart for Teams | Lucid Software | Visual collaboration in Teams |
| Priority Matrix | Appfluence | Project management in Teams |
| ALVAO | ALVAO s.r.o. | IT service desk integration |
| Pure Storage Cloud Dedicated | Pure Storage | Enterprise block storage |
| Dash0 | Dash0 | Observability with cost control |
| Saner Cloud | Saner | Integrated security platform |
| Netwrix 1Secure | Netwrix | Integrated security platform |

### J. Productivity / General Workplace
| Agent/App | Publisher | Notes |
|-----------|-----------|-------|
| Microsoft Writing Coach | Microsoft | Writing improvement agent |
| Microsoft Career Coach | Microsoft | Career development agent |
| Microsoft Learning Coach | Microsoft | Learning and development agent |
| Microsoft Analyst | Microsoft | Data analysis agent |
| Microsoft Scout | Microsoft | Autopilot background agent |
| Microsoft Copilot Cowork | Microsoft | Multi-step task execution |
| Gong Revenue AI OS | Gong | Revenue intelligence |
| Writer Enterprise Platform | Writer | Enterprise generative AI writing |
| Koredot AI for Work | Koredot AI | Workplace productivity |
| Moveworks Agentic Copilot | Moveworks | Employee support across IT/HR/facilities |
| Sift | Sift | People discovery and connection |

---

## 5. Pricing Models

The Microsoft Marketplace supports multiple pricing models for AI apps and agents. Microsoft has also introduced emerging agent-based consumption billing.

### Pricing Models in Use

| Model | Description | Examples |
|-------|-------------|-----------|
| **Free Trial** | Time-limited full access | n8n (30-day trial), UiPath Automation Cloud (free trial) |
| **Pay-as-you-go (Usage-based)** | Metered consumption based on resource usage | Foundry Agent Service (vCPU/hour, memory/GiB-hour), Anthropic Claude (CCU/token billing), Azure AI models |
| **Per-seat Subscription** | Fixed monthly cost per user | Microsoft 365 Copilot ($30/user/month), Writer, Gong |
| **Contact Publisher** | Custom enterprise pricing | Palantir AIP, Cognigy.AI, C3.ai, Teradata |
| **Consumption/Credit-based (Agent)** | Pay per AI agent task completed | Microsoft Copilot Credits ($0.02-$0.50 per action) |
| **Included with License** | Bundled with existing Microsoft license | Copilot Agent Library (with Copilot license), Microsoft-built agents |
| **Container/Managed App** | Deploy into customer's Azure tenant | n8n Self Hosted, Zammo.ai managed application |

### Agent-Based Consumption Billing (Emerging)

Microsoft is rolling out **agent-based consumption billing** — a significant shift from per-seat to per-task pricing ([ON AI², May 14, 2026](https://onai2.com/blog/microsoft-agent-based-pricing-model/)):

| Tier | Model | What You Pay For |
|------|-------|------------------|
| Traditional | Per-seat subscription | Copilot, M365, Azure seats |
| Agent-Based | Consumption billing | Per-task execution by AI agents |

- Each agent task consumes **Copilot Credits**
- Credits priced on a sliding scale based on task complexity
- Estimated pricing: **$0.02–$0.50 per agent action**
- Simple email summary: ~$0.02; Multi-step research-and-report: ~$0.50+
- Enterprise agreements include base credit allocation with overage billing

### Foundry Agent Service Pricing

| Component | Pricing |
|-----------|---------|
| Hosted agents | vCPU (hour) + Memory (GiB-hour) — contact for rates |
| Models | Token-based consumption (see Foundry Models pricing) |
| File Search Storage | $/GB of vector-storage per day (1 GB free) |
| Code Interpreter | $/session |
| Web Search | $/1,000 transactions |
| Custom Search | $/1,000 transactions |

Source: [Foundry Agent Service Pricing](https://azure.microsoft.com/en-us/pricing/details/foundry-agent-service/)

### Anthropic Claude Pricing on Azure

Claude models on Microsoft Foundry use **Claude Consumption Units (CCU)** billing:
- Available models: Claude Sonnet 4.5, Claude Sonnet 4.6, Claude Opus 4.6
- Listings on Marketplace: `anthropic.anthropic-claude-sonnet-4-5-offer`, `anthropic.anthropic-claude-sonnet-4-6-offer`, `anthropic.anthropic-claude-opus-4-6-offer`
- Source: [Microsoft Learn — Claude CCU Billing](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/claude-models-billing)

### Marketplace Transaction Fees

| Cloud | Fee |
|-------|-----|
| Azure | 3% |
| GCP | 3% |
| AWS | 3–5% (1.5% for ISV Accelerate co-sell deals) |

Source: [Automatum — Marketplace Comparison](https://www.automatum.io/blog-posts/aws-vs-azure-vs-gcp-marketplace-comparison)

### MACC Commitment Integration

For organizations with a **Microsoft Azure Consumption Commitment (MACC)**, 100% of purchases for Azure benefit-eligible solutions count toward the commitment — dollar-for-dollar, no limit. This is a significant procurement incentive.

### Industry Comparison of Agent Pricing

| Company | Agent Pricing Model |
|---------|-------------------|
| Microsoft | Credit-based consumption |
| Salesforce | Per-conversation agent billing |
| ServiceNow | Per-resolution pricing |
| Google Workspace | Included in premium tiers (for now) |
| Anthropic | API token-based |

Source: [ON AI², May 14, 2026](https://onai2.com/blog/microsoft-agent-based-pricing-model/)

---

## 6. Reviews and Ratings

### Marketplace Ratings System

Microsoft Marketplace supports a ratings and reviews system documented at [Microsoft Learn](https://learn.microsoft.com/en-us/marketplace/ratings-reviews). Only verified purchasers can leave reviews.

### Apps with Visible Ratings

| App | Rating | # Reviews | Notable Feedback |
|-----|--------|-----------|-------------------|
| **n8n.cloud** | 4.9 / 5 | 47-54 | Praised for flexibility, 150+ integrations, visual workflow builder; "don't pay for each step" pricing model appreciated |
| **BA Insight for Azure AI Search** | 4.6 / 5 | 21 | Enterprise search connector valued for Azure AI Search integration |

### General Review Themes

Based on marketplace listings, partner testimonials, and third-party reviews:

**Common Praise Points:**
- **Ease of integration** with existing Microsoft stack (Azure, M365, Teams)
- **Rapid provisioning** — Microsoft cited Siemens reducing configuration time from ~20 minutes to 1 minute per instance
- **Security and compliance** — solutions run inside customer's Azure tenant with Managed Identity
- **MACC commitment integration** — purchases count toward existing Azure commitments
- **One-click deployment** for managed applications (e.g., Zammo.ai)

**Common Complaints/Concerns:**
- **Cost unpredictability** with consumption-based/agent billing models
- **Vendor lock-in** — deep Microsoft platform dependency may create blind spots for multi-cloud organizations
- **Limited ratings data** — many AI agent listings are new and lack sufficient reviews
- **Claude on Azure billing complexity** — described as a "billing trap" by some analysts ([AZ365.ai](https://az365.ai/blog/claude-on-azure-the-marketplace-billing-trap/))
- **Governance lag** — agent capabilities evolve faster than governance tools
- **Insufficient explainability** — many advanced agents operate as "black boxes"
- **Unclear accountability** when human-agent teams jointly manage workflows

**Sources:**
- [n8n.cloud listing](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/n8ngmbh1616619114564.n8n_cloud?tab=overview)
- [Microsoft Blog — Siemens testimonial](https://blogs.microsoft.com/blog/2025/09/25/introducing-microsoft-marketplace-thousands-of-solutions-millions-of-customers-one-marketplace/)
- [Windows News — Copilot Studio governance](https://windowsnews.ai/article/copilot-studio-now-powers-230k-orgs-microsofts-blueprint-for-ai-agent-governance.375482)
- [AZ365.ai — Claude billing](https://az365.ai/blog/claude-on-azure-the-marketplace-billing-trap/)
- [LavX News — January 2026](https://news.lavx.hu/article/microsoft-marketplace-january-2026-330-new-offers-signal-strategic-shift-in-enterprise-ai-and-multi-cloud-management)

---

## 7. Microsoft Copilot Studio and Copilot Agents

### Copilot Studio Overview

**Microsoft Copilot Studio** is both a marketplace listing and the primary platform for building, deploying, and managing AI agents within the Microsoft ecosystem. It serves as the native agent development platform for Microsoft 365 Copilot.

**Key adoption metrics:**
- **230,000+ organizations** using Copilot Studio ([CX Today, May 2025](https://www.cxtoday.com/contact-center/microsoft-hits-1mn-custom-ai-agent-milestone-with-230000-organizations-using-copilot-studio/))
- **1 million+ custom AI agents** created (May 2025)
- Reached 100,000 organizations by October 2024
- Available with a Microsoft 365 Copilot license or on consumption billing

### Agent Store

The **Agent Store** is the central hub in Microsoft 365 Copilot where users discover and install agents. There are four ways to include agents:

1. **Deploy prebuilt agents** — from Microsoft and trusted partners (admin-managed)
2. **Create with Copilot Studio** — custom agents published to Agent Store
3. **Bring agents from external platforms** — connect agents built on external platforms or custom code
4. **Integrate with Agent 365 SDK** — for developer-built agents

Source: [Microsoft Learn — Agent Store](https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-agent-store)

### Microsoft-Built Agent Types

Microsoft has built and deployed numerous first-party (1P) agents across multiple categories:

#### Productivity Agents
| Agent | Description | Supported In |
|-------|-------------|--------------|
| **Writing Coach** | Take writing to the next level | Copilot |
| **Career Coach** | Elevate career development | Copilot |
| **Learning Coach** | Unlock learning potential | Copilot |
| **Analyst** | Data analysis agent | Copilot |
| **Microsoft Scout** | Autopilot background agent with own identity/permissions; keeps work moving | Copilot |
| **Copilot Cowork** | Multi-step task execution; runs end-to-end and returns completed result | Copilot |

#### Office Agents (Announced at Ignite 2025)
| Agent | Description | Status |
|-------|-------------|--------|
| **Word Agent** | Create high-quality documents iteratively with Copilot | Agent Mode GA |
| **Excel Agent** | Create spreadsheets; choose between Anthropic and OpenAI reasoning models | Agent Mode available |
| **PowerPoint Agent** | Create presentations | Via Frontier program |

#### Industry/Role Agents (Announced at Ignite 2025)
| Agent | Description |
|-------|-------------|
| **Sales Development Agent** | Autonomously researches prospects, crafts outreach emails, follows up with leads, hands off to human sellers; integrates with Dynamics 365 and Salesforce |
| **Admin Agents** | Auto-monitor IT systems and infrastructure events |
| **People Agent** | Employee information and HR support |
| **Learning Agent** | Learning and development support |

#### Dynamics 365 Agents
| Agent | Description |
|-------|-------------|
| **Dynamics 365 Sales Agent** | Sales automation and CRM management |
| **Dynamics 365 Customer Service Agent** | Customer service automation |
| **Dynamics 365 Supply Chain Agent** | Supply chain management |

#### Other Microsoft Agent Domains
- **Security Copilot Agents** — Automated threat detection and incident response
- **GitHub Copilot Agents** — Multi-file code generation and refactoring
- **Azure AI Agents** — Custom enterprise workflows deployed on Azure

### Work IQ

**Work IQ** is the intelligence layer behind Microsoft 365 Copilot and agents, announced at Ignite 2025. It has three components:

1. **Work Data** — Rich knowledge from emails, files, meetings, chats
2. **Memory** — User style, preferences, habits, workflows, relationships
3. **Inference** — Combines data and memory to make connections, unlock insights, predict next best action

Work IQ suggests the right agent for the task based on prompt and intent. Available for custom agents with a Microsoft 365 Copilot license or consumption billing.

### Copilot Studio Licensing

- Microsoft 365 Copilot: **$30/user/month** (annual commitment, requires qualifying M365 E3/E5/Business Standard/Business Premium base license)
- Copilot Studio: Available with M365 Copilot license or on consumption billing
- Copilot Credits: Sliding scale ($0.02–$0.50 per agent action)

**Sources:**
- [Microsoft Learn — Agent Store](https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-agent-store)
- [Microsoft Learn — Agents built by Microsoft](https://support.microsoft.com/en-us/microsoft-365-copilot/agents-built-by-microsoft)
- [Microsoft Ignite 2025 Blog](https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/18/microsoft-ignite-2025-copilot-and-agents-built-to-power-the-frontier-firm/)
- [SQ Magazine — Copilot Statistics](https://sqmagazine.co.uk/copilot-statistics/)
- [Agent Directory (community)](https://agentdirectory.sharepointalex.uk/agents.html)
- [Perficient — Ignite 2025 Agent Announcements](https://blogs.perficient.com/the-agentic-enterprise-key-agent-announcements-from-microsoft-ignite-2025/)

---

## 8. Microsoft Ignite 2025 Announcements (November 18–21, 2025)

Microsoft Ignite 2025 was held in San Francisco with **200,000+ registrants** and **17,000–20,000 in-person attendees**, featuring 400+ sessions. The event focused on "the complete lifecycle of AI."

### Key Agent and Marketplace Announcements

#### A. Microsoft Agent 365 (GA)

**Agent 365** is the control plane for AI agents — a unified platform to deploy, organize, and govern agents securely, regardless of whether they were created with Microsoft platforms, open-source frameworks, or third-party platforms.

**Five core capabilities:**

1. **Registry** — Single source of truth for all agents via Microsoft Entra; includes Agent ID, Teams Store registration, and shadow agent detection; can quarantine unsanctioned agents
2. **Access Control** — Unique agent ID required; agent Policy Templates for standard security; Microsoft Entra enforces adaptive, risk-based access; principle of least privilege
3. **Visualization** — Unified dashboard with advanced analytics; complete map of agent-user-resource connections; role-based reporting; agent performance measurement (ROI tracking)
4. **Interoperability** — Agents from any platform (Microsoft, open-source, third-party) can be managed; Agent 365 SDK for integration
5. **Security** — Detailed logging, reporting, e-discovery; policies to detect and investigate unethical agent interactions; integration with Microsoft Defender, Entra, Purview

**Status:** Generally Available (via Frontier program in M365 admin center)

Source: [Microsoft Agent 365 Blog](https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/18/microsoft-agent-365-the-control-plane-for-ai-agents/)

#### B. Work IQ

The intelligence layer behind Copilot and agents (detailed in Section 7). Enables Copilot to understand user's job, company, and work patterns.

#### C. Office Agents and Agent Mode

- **Word, Excel, PowerPoint agents in chat** — work iteratively with Copilot to deliver documents, spreadsheets, presentations
- **Agent Mode in Office apps** — choose between Anthropic and OpenAI reasoning models in Excel; Word Agent Mode GA; PowerPoint via Frontier program
- **Copilot Cowork** — multi-step task execution (GA June 2026); 30-40% cheaper than single-model options; used by half the Fortune 500 within 6 months
- **Microsoft Scout** — first autopilot agent; stays active in background with own identity/permissions

#### D. Anthropic Claude Models in Microsoft Foundry

Announced at Ignite 2025 — Anthropic's Claude models (Sonnet 4.5, Sonnet 4.6, Opus 4.6) are now available through Microsoft Foundry and Marketplace, alongside OpenAI GPT-5 and other models. This expands model choice for Copilot and custom agents.

Source: [Azure Blog — Claude in Foundry](https://azure.microsoft.com/en-us/blog/introducing-anthropics-claude-models-in-microsoft-foundry-bringing-frontier-intelligence-to-azure/)

#### E. Foundry Agent Service Updates

- **Foundry Agent Service** — GA with multi-agent orchestration
- **Multi-Agent Workflows** — introduced November 25, 2025
- **Hosted Agents** — per-session sandboxed scale-to-zero
- **Native Agent 365 Integration** in Foundry

Sources: [Foundry Agent Service blog](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/foundry-agent-service-at-ignite-2025-simple-to-build-powerful-to-deploy-trusted-/4469788), [Multi-Agent Workflows](https://devblogs.microsoft.com/foundry/introducing-multi-agent-workflows-in-foundry-agent-service/)

#### F. Microsoft Entra Agent ID

New identity management for AI agents — assigns each agent a unique Entra ID identity with Conditional Access and audit logging. Extends Zero Trust security to autonomous agents. Status: Preview (late 2025).

#### G. Frontier Firm AI Initiative

Partnership with the Digital Data Design Institute at Harvard (D^3). Inaugural cohort includes: Barclays, BNY, Cigna Healthcare, Clifford Chance, DuPont, Eaton, Eli Lilly, EY, GHD, Mastercard, Levi Strauss, Lumen, Nestlé.

#### H. Marketplace-Specific Announcements

- **Intelligent Discovery** (preview) — AI-powered matching of apps/agents to customer needs
- **Multiparty Private Offers** expansion to 30 European countries (AU, JP, SA coming July 2026)
- **Copilot Agent Store** — central hub for discovering and installing agents in M365 Copilot
- **Agent 365 SDK** — for integrating external agents into the Agent 365 governance framework

**Sources:**
- [Microsoft Ignite 2025 Book of News](https://news.microsoft.com/ignite-2025-book-of-news/)
- [Microsoft Ignite 2025 Blog](https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/18/microsoft-ignite-2025-copilot-and-agents-built-to-power-the-frontier-firm/)
- [Microsoft Agent 365 Blog](https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/18/microsoft-agent-365-the-control-plane-for-ai-agents/)
- [TechTarget — Foundry and Agent 365](https://www.techtarget.com/it-infrastructure/news/366634569/Microsoft-Foundry-ties-in-with-Agent-365)
- [Windows Central — Agent 365](https://www.windowscentral.com/microsoft/microsoft-doubles-down-on-agentic-ai-agent-365-prepares-for-a-future-with-over-1-billion-agents)
- [Perficient — Ignite 2025 Recap](https://blogs.perficient.com/the-agentic-enterprise-key-agent-announcements-from-microsoft-ignite-2025/)
- [Azure Blog — Claude in Foundry](https://azure.microsoft.com/en-us/blog/introducing-anthropics-claude-models-in-microsoft-foundry-bringing-frontier-intelligence-to-azure/)

---

## 9. Partner Ecosystem

### Most Prominent ISVs and Partners on the Marketplace

| Partner | Category | Notable Listing | Marketplace Impact |
|---------|----------|-----------------|-------------------|
| **UiPath** | Automation/Workflow | UiPath Agentic Automation; UiPath Automation Cloud | Major RPA + agentic AI player |
| **n8n** | Automation/Workflow | n8n.cloud (4.9 stars); n8n Self Hosted | Highest-rated marketplace listing |
| **Palantir** | Data/Analytics | Palantir AIP | Enterprise decision intelligence |
| **Cognigy** | Customer Service | Cognigy.AI (NiCE Cognigy) | Conversational AI leader |
| **Anthropic** | Foundation Models | Claude Sonnet 4.5/4.6, Opus 4.6 | Frontier models via Foundry |
| **Moveworks** | Employee Support | Agentic Copilot for All Employees | Deepened partnership Sep 2025 |
| **Glean** | Knowledge/Search | Enterprise search agent | Available on Marketplace |
| **Writer** | Content/GenAI | Writer Enterprise Platform | Enterprise generative AI |
| **C3.ai** | Enterprise AI | C3 Agentic AI Platform | Industrial AI applications |
| **Gong** | Revenue Intelligence | Revenue AI OS | Launched on Marketplace Jul 2026 |
| **ServiceNow** | IT Service Mgmt | ServiceNow on Azure | Enterprise service management |
| **Siemens** | Industrial/Manufacturing | AI solutions | 8X customer adoption increase via Marketplace |
| **Zammo.ai** | Conversational AI | Managed application | 6X revenue increase via Marketplace |
| **Adobe** | Document/Creative | Adobe-Microsoft AI partnership | Integrated document workflows |
| **Cohere** | Foundation Models | Models via Foundry | Enterprise language models |
| **Mistral AI** | Foundation Models | Models via Foundry | Open-weight and commercial models |
| **Teradata** | Data/Analytics | Analyst Agent | Conversational analytics (Apr 2026) |
| **Legora** | Legal | AI legal workspace | Native M365 integration |
| **BA Insight** | Enterprise Search | Azure AI Search connector | 4.6 stars, 21 reviews |
| **Streebo** | Logistics | Logistics Chatbot | Powered by Copilot Studio |
| **Leena AI** | HR/IT | Enterprise Virtual Assistant | Agentic AI for employee support |
| **Haptik** | Customer Service | Voice AI Agents | Voice-based AI agents |
| **KnowBe4** | Security | HRM+ Platform | Security awareness |
| **Esri** | Geospatial | ArcGIS for Teams | GIS data analysis agent |
| **Lucid Software** | Productivity | Lucidchart for Teams | Visual collaboration |
| **NetDocuments** | Legal | Copilot for documents | Legal document management |
| **Seismic** | Sales Enablement | Content agent | Sales content management |
| **Egnyte** | Content Mgmt | Search Egnyte | File search and summarization |

### Partner Program Structure

Microsoft's marketplace partner ecosystem includes:
- **500,000+ Microsoft partners** in the broader ecosystem
- **IP Co-Sell program** — Microsoft sellers have financial incentive to recommend partner products alongside Azure services
- **ISV Success program** — benefits for software development companies
- **Marketplace GitHub repo** — resources for building and publishing agents
- **Multiparty Private Offers** — partner-led sales across 30+ countries

### Partner Distribution Reach

When partners publish through Marketplace, their solutions get surfaced across:
- 95% of Fortune 500 using Azure
- 400 million monthly active Teams users
- 20 million+ paid Microsoft 365 Copilot seats (now 30M+)
- Microsoft 365 admin center
- Azure portal
- Microsoft 365 Copilot Agent Store

**Sources:**
- [Microsoft DevBlog — Build, Scale, Monetize](https://devblogs.microsoft.com/all-things-azure/build-scale-and-monetize-apps-and-agents-with-microsoft-marketplace/)
- [Microsoft Blog — Marketplace Launch](https://blogs.microsoft.com/blog/2025/09/25/introducing-microsoft-marketplace-thousands-of-solutions-millions-of-customers-one-marketplace/)
- [Moveworks Partnership Announcement](https://investor.wedbush.com/wedbush/article/bizwire-2025-9-25-moveworks-deepens-partnership-with-microsoft-empowering-workforce-through-new-marketplace-integration)
- [Gong on Marketplace](https://www.linkedin.com/posts/shanegevans_this-has-been-a-long-time-coming-and-im-activity-7478097372619751424-bcFC)
- [Microsoft Learn — Ecosystem Partner Agents](https://learn.microsoft.com/en-us/microsoft-agent-365/third-party-agents)

---

## 10. Competitive Positioning: Microsoft Marketplace vs AWS Marketplace

### Head-to-Head Comparison

| Dimension | Microsoft Marketplace | AWS Marketplace |
|-----------|----------------------|-----------------|
| **AI Apps/Agents Category** | Dedicated "AI Apps and Agents" category (Sep 2025) | "AI agents and tools" category (Jul 2025) |
| **Catalog Size (AI)** | 3,000+ AI apps and agents at launch | Not publicly disclosed; AWS has broader overall marketplace |
| **Transaction Fee** | 3% | 3–5% (1.5% for ISV Accelerate co-sell) |
| **Committed Spend Program** | MACC (Microsoft Azure Consumption Commitment) — 100% of eligible purchases count | EDP (Enterprise Discount Program) |
| **Co-Sell Program** | IP Co-Sell — Microsoft sellers have direct financial incentive to recommend partner products | ISV Accelerate — largest field sales force |
| **Unified Marketplace** | Yes — Azure Marketplace + AppSource merged into single Microsoft Marketplace (Sep 2025) | No — AWS Marketplace is separate from other Amazon properties |
| **Distribution Surface** | Azure portal, M365 admin center, Teams (400M MAU), Copilot (30M+ paid seats), Outlook, Word, Excel, PowerPoint | AWS console, AWS Marketplace |
| **Agent Governance** | Agent 365 — unified control plane for all agents (Microsoft, open-source, third-party) | No equivalent unified agent governance layer |
| **Agent Store** | Built into Microsoft 365 Copilot — users discover/install agents in flow of work | No equivalent consumer-facing agent store |
| **Model Marketplace** | Microsoft Foundry model catalog (Anthropic, Cohere, Mistral, OpenAI, open-source) | Amazon Bedrock model marketplace |
| **Identity for Agents** | Microsoft Entra Agent ID — unique identity per agent with Conditional Access | No equivalent agent identity system |
| **Intelligent Discovery** | AI-powered matching of apps/agents to customer needs (preview, Aug 2026) | Standard search/filter |
| **Multiparty Private Offers** | Available across 30+ countries; expanding | Available via Channel Partner Private Offers |

### Microsoft's Stated Advantages

1. **Distribution advantage**: Marketplace solutions are surfaced contextually in the Microsoft products customers already use — Azure, M365 Copilot, Teams, Outlook, Word, Excel, PowerPoint. This provides a "publish once, get surfaced everywhere" model.

2. **IP Co-Sell incentive**: Microsoft's co-sell program is described as "arguably the most powerful co-sell program of the three" — Microsoft's own sales team has financial incentive to recommend partner products alongside Azure services.

3. **Enterprise alignment**: Enterprise business applications (ERP, CRM, productivity) align better with Azure. The 90%+ Fortune 500 Copilot penetration and 450M commercial M365 seats provide an unmatched enterprise distribution channel.

4. **Unified governance**: Agent 365 provides a governance layer that AWS lacks — registry, access control, visualization, interoperability, and security for all agents regardless of origin.

5. **Agent identity**: Microsoft Entra Agent ID extends Zero Trust security to autonomous agents — a capability AWS does not yet match.

6. **MACC integration**: 100% of eligible marketplace purchases count toward Azure consumption commitments, dollar-for-dollar with no limit.

7. **Model choice**: Microsoft Foundry offers models from Anthropic, OpenAI, Cohere, Mistral, and open-source — providing broader model diversity than Amazon Bedrock's primarily Amazon-hosted model approach.

### AWS's Counter-Positioning

1. **Larger field sales force**: AWS ISV Accelerate offers the largest field sales force among the three clouds.
2. **Infrastructure alignment**: Infrastructure and security tools tend to perform better on AWS.
3. **Broader marketplace**: AWS Marketplace has been established longer and has a larger overall transaction volume.
4. **Lower co-sell fees**: ISV Accelerate participants can receive reduced fees as low as 1.5% on co-sell deals.
5. **Earlier AI agent category**: AWS launched its AI agents and tools category in July 2025, two months before Microsoft's unified marketplace.

### Analyst Assessment

Per [FourWeekMBA](https://fourweekmba.com/aws-vs-microsoft-the-agent-platform-battle-across-six-dimensions/) and [Automatum](https://www.automatum.io/blog-posts/aws-vs-azure-vs-gcp-marketplace-comparison):

- **Azure is the priority for Microsoft-centric enterprises** — financial services, healthcare, manufacturing, government
- **AWS is the priority for infrastructure-centric products** — security tools, DevOps, high-velocity/low-ACV motions
- **Azure's co-sell program is the strongest** for enterprise deals ($100K+)
- **Microsoft's agent governance stack** (Agent 365 + Entra Agent ID) is a significant differentiator that AWS does not yet match
- **Microsoft's distribution surface** (Copilot, Teams, Office) provides contextual agent discovery that AWS cannot replicate

**Sources:**
- [FourWeekMBA — AWS vs Microsoft Agent Platform Battle](https://fourweekmba.com/aws-vs-microsoft-the-agent-platform-battle-across-six-dimensions/)
- [Automatum — AWS vs Azure vs GCP Marketplace](https://www.automatum.io/blog-posts/aws-vs-azure-vs-gcp-marketplace-comparison)
- [AWS — AI agents and tools in AWS Marketplace](https://aws.amazon.com/about-aws/whats-new/2025/07/ai-agents-tools-aws-marketplace/)
- [Microsoft DevBlog — Build, Scale, Monetize](https://devblogs.microsoft.com/all-things-azure/build-scale-and-monetize-apps-and-agents-with-microsoft-marketplace/)
- [Mumega — Big Three Agent Platforms](https://mumega.com/blog/big-three-agent-platforms-june-2026/)

---

## Appendix A: Key Timeline

| Date | Event |
|------|-------|
| Oct 2024 | Copilot Studio reaches 100,000 organizations |
| May 2025 | Microsoft announces 1M+ custom AI agents created; 230K+ orgs using Copilot Studio |
| Jul 2025 | AWS launches AI agents and tools category in AWS Marketplace |
| Sep 25, 2025 | Microsoft launches reimagined Microsoft Marketplace with 3,000+ AI apps and agents |
| Nov 18–21, 2025 | Microsoft Ignite 2025 — Agent 365, Work IQ, Office agents, Claude in Foundry, Entra Agent ID |
| Jan 2026 | 330 new marketplace offers added; M365 Copilot hits 15M paid seats |
| Jan 2026 | Microsoft Marketplace AI strategy blog published |
| Mar 2026 | Copilot agents reportedly reach 10M enterprise users (per CallSphere) |
| Apr 2026 | M365 Copilot hits 20M paid seats; GitHub Copilot at 4.7M subscribers |
| May 2026 | Microsoft agent-based consumption billing reported |
| Jun 2026 | 367 new marketplace offers; Copilot Cowork GA; M365 Copilot hits 30M paid seats |
| Aug 2026 | Intelligent Discovery in Microsoft Marketplace (preview) |

## Appendix B: Key Source URLs

| Source | URL |
|--------|-----|
| Microsoft Marketplace (AI Apps & Agents) | https://marketplace.microsoft.com/en-us/marketplace/apps?category=ai-apps-and-agents |
| Microsoft Blog — Marketplace Launch | https://blogs.microsoft.com/blog/2025/09/25/introducing-microsoft-marketplace-thousands-of-solutions-millions-of-customers-one-marketplace/ |
| Microsoft Ignite 2025 — Copilot & Agents | https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/18/microsoft-ignite-2025-copilot-and-agents-built-to-power-the-frontier-firm/ |
| Microsoft Agent 365 Blog | https://www.microsoft.com/en-us/microsoft-365/blog/2025/11/18/microsoft-agent-365-the-control-plane-for-ai-agents/ |
| Microsoft Ignite 2025 Book of News | https://news.microsoft.com/ignite-2025-book-of-news/ |
| Azure Blog — Claude in Foundry | https://azure.microsoft.com/en-us/blog/introducing-anthropics-claude-models-in-microsoft-foundry-bringing-frontier-intelligence-to-azure/ |
| Microsoft DevBlog — Build, Scale, Monetize | https://devblogs.microsoft.com/all-things-azure/build-scale-and-monetize-apps-and-agents-with-microsoft-marketplace/ |
| Azure Blog — AI Strategy with Marketplace | https://azure.microsoft.com/en-us/blog/design-your-ai-and-agent-strategy-with-microsoft-marketplace/ |
| Microsoft Learn — Agent Store | https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-agent-store |
| Microsoft Learn — Agents Built by Microsoft | https://support.microsoft.com/en-us/microsoft-365-copilot/agents-built-by-microsoft |
| Microsoft Learn — AI App/Agent Publishing | https://learn.microsoft.com/en-us/partner-center/marketplace-offers/artificial-intelligence-app-agent-publishing-guidance |
| Foundry Agent Service Pricing | https://azure.microsoft.com/en-us/pricing/details/foundry-agent-service/ |
| Foundry Agent Catalog | https://ai.azure.com/catalog/agents |
| Microsoft Learn — Claude CCU Billing | https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/claude-models-billing |
| Microsoft Learn — Ecosystem Partner Agents | https://learn.microsoft.com/en-us/microsoft-agent-365/third-party-agents |
| Microsoft Learn — Ratings and Reviews | https://learn.microsoft.com/en-us/marketplace/ratings-reviews |
| SQ Magazine — Copilot Statistics | https://sqmagazine.co.uk/copilot-statistics/ |
| Presenc AI — Copilot Usage | https://presenc.ai/research/copilot-usage-statistics |
| CX Today — Copilot Studio Milestone | https://www.cxtoday.com/contact-center/microsoft-hits-1mn-custom-ai-agent-milestone-with-230000-organizations-using-copilot-studio/ |
| Windows News — Copilot Studio 230K Orgs | https://windowsnews.ai/article/copilot-studio-now-powers-230k-orgs-microsofts-blueprint-for-ai-agent-governance.375482 |
| ON AI² — Agent-Based Pricing | https://onai2.com/blog/microsoft-agent-based-pricing-model/ |
| FourWeekMBA — AWS vs Microsoft | https://fourweekmba.com/aws-vs-microsoft-the-agent-platform-battle-across-six-dimensions/ |
| Automatum — Marketplace Comparison | https://www.automatum.io/blog-posts/aws-vs-azure-vs-gcp-marketplace-comparison |
| LavX — January 2026 Offers | https://news.lavx.hu/article/microsoft-marketplace-january-2026-330-new-offers-signal-strategic-shift-in-enterprise-ai-and-multi-cloud-management |
| LavX — June 2026 Offers | https://news.lavx.hu/article/microsoft-marketplace-adds-367-offers-what-the-june-2026-drop-signals-for-multi-cloud-strategy |
| InfoWorld — Marketplace Opens | https://www.infoworld.com/article/4063548/microsoft-marketplace-opens-for-ai-apps-agents.html |
| Perficient — Ignite 2025 Recap | https://blogs.perficient.com/the-agentic-enterprise-key-agent-announcements-from-microsoft-ignite-2025/ |
| Microsoft Cloud Blog — Intelligent Discovery | https://www.microsoft.com/en-us/microsoft-cloud/blog/2026/08/25/accelerating-ai-adoption-with-intelligent-discovery-in-microsoft-marketplace/ |
| Microsoft 365 Blog — AI Momentum | https://www.microsoft.com/en-us/microsoft-365/blog/2026/07/30/the-next-measure-of-ai-momentum-is-work-transformed/ |
| Microsoft Partners — Agent Showcase | https://microsoftpartners.microsoft.com/abs/agent-showcase/ |
| Agent Directory (community) | https://agentdirectory.sharepointalex.uk/agents.html |
| n8n.cloud Listing | https://azuremarketplace.microsoft.com/en-us/marketplace/apps/n8ngmbh1616619114564.n8n_cloud?tab=overview |
| Palantir AIP Listing | https://azuremarketplace.microsoft.com/en-us/marketplace/apps/palantirtechnologies1585670280063.palantir_aip?tab=overview |
| Cognigy.AI Listing | https://azuremarketplace.microsoft.com/en-us/marketplace/apps/cognigy.cognigy_ai |
| UiPath Listing | https://azuremarketplace.microsoft.com/en-us/marketplace/apps/uipath1739889469080.uipath_business_automation_platform_srl?tab=overview |

---

*Report compiled September 9, 2026. All data sourced from public web sources, Microsoft documentation, and third-party analyst reports. Catalog enumeration is non-exhaustive — the marketplace contains 3,000+ AI apps and agents; this report captures the most prominent and well-documented listings.*
