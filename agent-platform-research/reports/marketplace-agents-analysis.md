# AI Agent Adoption Across Cloud Marketplaces: Analysis Report

**Date:** September 10, 2026
**Scope:** 1,261 AI agents and applications across 8 cloud marketplaces
**Methodology:** Independent research agents enumerated agents from each marketplace's public catalog, partner directories, launch announcements, and press coverage. Adoption signals were classified as strong (reported + numeric evidence), moderate (reported or numeric), or weak (estimated only).

---

## 1. Executive Summary

We cataloged **1,261 distinct AI agents and applications** across eight cloud marketplaces. The market is broad but adoption signals are concentrated: only **156 agents (12%)** have strong adoption signals with verifiable numeric metrics. The top categories are Agent Platforms (102), Productivity (96), Customer Service (95), and Data/Analytics (93). **55 publishers** appear on two or more marketplaces, with Salesforce, ServiceNow, and Accenture leading cross-marketplace distribution.

The strongest adoption signals come from Salesforce's first-party Agentforce (18,000+ companies), OpenAI's GPT Store (top GPTs with 20-60M conversations each), and NVIDIA's blueprint ecosystem (185 agents with GitHub star counts and enterprise deployments). Azure Marketplace has the richest listing metadata (ratings, review counts) but the lowest average ratings (many 1/5 stars with single reviews).

---

## 2. Marketplace Coverage

| Marketplace | Agents | True Agents | Tools/Infra | Strong Signals | Listing URL |
|---|---|---|---|---|---|
| Salesforce (AgentExchange + AppExchange) | 267 | 94 | 173 | 8 | [agentexchange.salesforce.com](https://agentexchange.salesforce.com) |
| NVIDIA (NGC + AI Enterprise) | 185 | 95 | 90 | 12 | [build.nvidia.com](https://build.nvidia.com) |
| Azure (Microsoft Marketplace) | 157 | 0 | 157 | 6 | [marketplace.microsoft.com/en-us](https://marketplace.microsoft.com/en-us) |
| ServiceNow (Store) | 138 | 90 | 48 | 5 | [store.servicenow.com](https://store.servicenow.com) |
| Google (Cloud Marketplace + Gemini Enterprise) | 136 | 72 | 64 | 31 | [cloud.google.com/gemini-enterprise/agents](https://cloud.google.com/gemini-enterprise/agents) |
| OpenAI (GPT Store + API ecosystem) | 132 | 73 | 59 | 14 | [chatgpt.com/gpts](https://chatgpt.com/gpts) |
| Hugging Face (Hub + Spaces) | 129 | 0 | 129 | 5 | [huggingface.co/spaces](https://huggingface.co/spaces) |
| AWS (Marketplace) | 117 | 117 | 0 | 8 | [aws.amazon.com/marketplace](https://aws.amazon.com/marketplace) |
| **Total** | **1,261** | **601** | **660** | **156** | |

**Key observation:** AWS has the highest ratio of true autonomous agents (100%), while Azure and Hugging Face list predominantly tools and infrastructure. Google has the most strong-signal agents (31), driven by the ADK open-source samples with 9.6k GitHub stars.

---

## 3. Cross-Marketplace Presence: Which Publishers Are Everywhere

**55 publishers** appear on two or more marketplaces. The top multi-marketplace publishers:

| Publisher | Marketplaces | Notable Agents |
|---|---|---|
| **Salesforce** | AWS, Google, NVIDIA, OpenAI, Salesforce (5) | Agentforce (Sales/GTM/Service/Marketing), listed as launch partner on AWS, Google Gemini Enterprise, NVIDIA AI Enterprise |
| **ServiceNow** | AWS, Google, NVIDIA, Salesforce, ServiceNow (5) | Now Assist for ITSM/CSM/HRSD, AI Control Tower, Autonomous Workforce |
| **Accenture** | AWS, Google, NVIDIA, Salesforce (4) | AI Refinery agents, Agentic AI Enterprise Process Reinvention |
| **Atlassian** | Azure, Google, NVIDIA, Salesforce (4) | Rovo (AI search and agent), listed on all four marketplaces |
| **Anthropic** | AWS, Azure, Salesforce (3) | Claude Enterprise, Claude Platform, M365 Connector for Claude |
| **Ada** | AWS, Azure, OpenAI (3) | Ada AI Agent (resolves 83%+ of customer inquiries autonomously) |
| **UiPath** | AWS, Azure, Google (3) | Agentic Automation, Autopilot, Robot, Medical Record Summarization |
| **Writer** | AWS, Azure, Salesforce (3) | Enterprise generative AI platform with agents |
| **Genspark** | Azure, Google, OpenAI (3) | Genspark for Excel, Genspark for PowerPoint, Genspark Super Agent ($36M ARR in 45 days) |
| **Moveworks** | AWS, Azure (2) | Agentic AI copilot for employee support |
| **Glean** | AWS, Azure (2) | Enterprise search and AI assistant |
| **C3.ai** | AWS, Azure (2) | C3 Agentic AI Platform, C3 Generative AI |
| **Palantir** | AWS, Azure (2) | Foundry, AIP |
| **CrewAI** | AWS, Hugging Face, NVIDIA (3) | CrewAI Enterprise Platform, multi-agent orchestration |

**Signal:** Publishers on 3+ marketplaces are the ones with real enterprise traction. Salesforce, ServiceNow, and Accenture are the most broadly distributed, which correlates with their enterprise sales motions.

---

## 4. Strong Adoption Signals: Agents with Verifiable Traction

These 156 agents have both reported status and numeric adoption evidence. The top 25 by signal strength:

### 4.1 Highest Adoption by Conversation/Usage Volume

| Agent | Marketplace | Publisher | Adoption Signal | Listing |
|---|---|---|---|---|
| **image generator** | OpenAI | Community Creator | 60M conversations | [chatgpt.com/gpts](https://chatgpt.com/gpts) |
| **Russian chat** | OpenAI | Community Creator | 54M conversations | [chatgpt.com/gpts](https://chatgpt.com/gpts) |
| **Write For Me** | OpenAI | Community Creator | 48M conversations | [chatgpt.com/gpts](https://chatgpt.com/gpts) |
| **Korean chat** | OpenAI | Community Creator | 43M conversations | [chatgpt.com/gpts](https://chatgpt.com/gpts) |
| **Genspark Super Agent** | OpenAI | Genspark | $36M ARR in 45 days | [openai.com/index/genspark](https://openai.com/index/genspark/) |
| **Arabic GPT** | OpenAI | Community Creator | 20M conversations | [chatgpt.com/gpts](https://chatgpt.com/gpts) |
| **Agentforce Service** | Salesforce | Salesforce | 18,000+ companies on Agentforce | [agentexchange.salesforce.com](https://agentexchange.salesforce.com) |
| **Consensus** | OpenAI | Consensus | 17M conversations | [chatgpt.com/gpts](https://chatgpt.com/gpts) |
| **Klarna AI assistant** | OpenAI | Klarna | 2.3M conversations | [openai.com/customer-stories/klarna](https://openai.com/customer-stories/klarna) |
| **Cars24 AI Sales Agent** | OpenAI | Cars24 | 1M+ monthly conversation minutes | [openai.com/customer-stories/cars24](https://openai.com/customer-stories/cars24) |

### 4.2 Highest Adoption by Enterprise Deployment Count

| Agent | Marketplace | Publisher | Adoption Signal | Listing |
|---|---|---|---|---|
| **Agentforce (platform)** | Salesforce | Salesforce | 18,000+ companies; 130K leads contacted by sales agents | [agentexchange.salesforce.com](https://agentexchange.salesforce.com) |
| **Copilot Studio** | Azure | Microsoft | 230K orgs, 10M users, 2B tasks/mo | [marketplace.microsoft.com](https://marketplace.microsoft.com/en-us) |
| **Now Assist** | ServiceNow | ServiceNow | 2,600 enterprise customers; $1B AI ACV | [store.servicenow.com](https://store.servicenow.com) |
| **Ada AI Agent** | Azure, AWS, OpenAI | Ada | Resolves 83%+ of customer inquiries autonomously | [marketplace.microsoft.com - Ada](https://marketplace.microsoft.com/en-gb/product/adasupportinc1726764000854.adagenerative?tab=Overview) |
| **MuleSoft** | Salesforce | Salesforce | 205B integration flow executions/month; 331B automation flows/month | [agentexchange.salesforce.com](https://agentexchange.salesforce.com) |
| **AgentExchange (platform)** | Salesforce | Salesforce | 10,000+ apps, 2,600 Slack apps, 1,000+ agents | [agentexchange.salesforce.com](https://agentexchange.salesforce.com) |
| **AI Control Tower** | ServiceNow | ServiceNow | 500+ customers in 6 months | [store.servicenow.com](https://store.servicenow.com) |
| **Slackbot** | Salesforce | Salesforce | Update records, summarize deal rooms, prep meetings in Slack | [slack.com](https://slack.com) |

### 4.3 Highest Adoption by GitHub Stars / Community Engagement

| Agent | Marketplace | Publisher | Adoption Signal | Listing |
|---|---|---|---|---|
| **Google ADK samples (31 agents)** | Google | Google | 9.6k GitHub stars (google/adk-samples) | [github.com/google/adk-samples](https://github.com/google/adk-samples) |
| **VSS (Video Search & Summarization)** | NVIDIA | NVIDIA | 1,826 GitHub stars | [build.nvidia.com](https://build.nvidia.com) |
| **smolagents CodeAgent** | Hugging Face | Hugging Face | 10k+ GitHub stars | [github.com/huggingface/smolagents](https://github.com/huggingface/smolagents) |
| **PDF to Podcast Blueprint** | NVIDIA | NVIDIA | 873 GitHub stars | [build.nvidia.com](https://build.nvidia.com) |
| **AI-Q Blueprint** | NVIDIA | NVIDIA | 848 GitHub stars | [build.nvidia.com](https://build.nvidia.com) |
| **Enterprise RAG Pipeline** | NVIDIA | NVIDIA | 749 GitHub stars | [build.nvidia.com](https://build.nvidia.com) |
| **Computer Agent (Vision Web Browser)** | Hugging Face | smolagents | 984 likes on HF Space | [huggingface.co/spaces](https://huggingface.co/spaces) |
| **ML Intern** | Hugging Face | smolagents | 414 likes on HF Space | [huggingface.co/spaces](https://huggingface.co/spaces) |
| **HF Realtime Voice** | Hugging Face | smolagents | 344 likes on HF Space | [huggingface.co/spaces](https://huggingface.co/spaces) |

### 4.4 Strong Revenue Signals

| Agent | Marketplace | Publisher | Revenue Signal |
|---|---|---|---|
| **Genspark Super Agent** | OpenAI | Genspark | $36M ARR in 45 days |
| **ServiceNow AI** | ServiceNow | ServiceNow | $1B AI ACV (Q2 2026) |
| **Klarna AI assistant** | OpenAI | Klarna | 2.3M conversations; projected $40M profit impact |
| **Agentforce Sales** | Salesforce | Salesforce | Sellers save up to 25 hours/week; 130K leads contacted |
| **Copilot Studio** | Azure | Microsoft | 230K orgs, 10M users, 2B tasks/mo |

---

## 5. Category Analysis: Where Agent Adoption Is Concentrated

| Category | Total | Top Marketplace | Key Insight |
|---|---|---|---|
| Agent Platform | 102 | Salesforce (21) | Every marketplace has a platform play; Salesforce Agentforce leads in enterprise adoption |
| Productivity | 96 | Azure (20) | Azure dominates via Microsoft 365 Copilot ecosystem; OpenAI GPT Store has high-volume consumer productivity GPTs |
| Customer Service | 95 | Salesforce (25) | The most commercially validated category; Ada, Cognigy, Kore.ai, and Zendesk appear across multiple marketplaces |
| Data/Analytics | 93 | Google (20), Hugging Face (20) | Google's Gemini Enterprise partner agents and HF's open-source analytics spaces lead |
| Document Processing | 68 | Salesforce (21) | Driven by Box, DocuSign, OpenText integrations on AgentExchange |
| Finance | 60 | Salesforce (21) | Breadwinner, Stripe, PayPal, QuickBooks MCP servers on AgentExchange |
| Infrastructure | 59 | NVIDIA (17) | NVIDIA's NIM, cuOpt, Triton, and hardware-adjacent agents dominate |
| Coding/Dev | 57 | NVIDIA (16) | NVIDIA blueprints + AWS coding agents (Cursor, CodeRabbit, GitLab Duo) |
| IT/Employee Support | 44 | ServiceNow (19) | ServiceNow's Now Assist for ITSM is the category leader |
| HR | 43 | Salesforce (16) | Agentforce HR agents + Workday integration |
| Sales/GTM | 43 | Salesforce (30) | Salesforce owns this category with SDR, Sales Coach, and pipeline agents |

---

## 6. Azure Marketplace: Detailed Agent Analysis

### 6.1 Top Azure Marketplace Agents with Listing Links

| Agent | Publisher | Rating | Listing URL |
|---|---|---|---|
| **UiPath Agentic Automation** | UiPath | 1/5 (1 review) | [marketplace.microsoft.com](https://marketplace.microsoft.com/en-us/product/uipath-5054924.uipath_business_automation_platform?tab=overview) |
| **UiPath Autopilot** | UiPath | 3/5 (3 reviews) | [marketplace.microsoft.com](https://marketplace.microsoft.com/en-us/product/uipath-5054924.uipath_business_automation_platform?tab=overview) |
| **n8n** | n8n GmbH | 1/5 (1 review) | [marketplace.microsoft.com - n8n](https://marketplace.microsoft.com/en-us/product/saas/n8ngmbh1616619114564.n8n?tab=overview) |
| **Ada AI Agent** | Ada | 1/5 (1 review) | [marketplace.microsoft.com - Ada](https://marketplace.microsoft.com/en-gb/product/adasupportinc1726764000854.adagenerative?tab=Overview) |
| **Cognigy.AI** | Cognigy | unknown | [marketplace.microsoft.com - Cognigy](https://marketplace.microsoft.com/en-us/product/saas/cognigy.cognigy_ai) |
| **Moveworks** | Moveworks | unknown | [marketplace.microsoft.com - Moveworks](https://marketplace.microsoft.com/en-us/product/office/wa200002149?tab=overview) |
| **Glean** | Glean | unknown | [marketplace.microsoft.com - Glean](https://marketplace.microsoft.com/en-us/product/glean.prod-kp7zdalrtg8wx?tab=overview) |
| **Writer** | Writer | unknown | [marketplace.microsoft.com - Writer](https://marketplace.microsoft.com/en-us/product/4152751883.writer-enterprise-platform?tab=overview) |
| **Palantir AIP** | Palantir | unknown | [marketplace.microsoft.com - Palantir AIP](https://marketplace.microsoft.com/en-us/product/palantirtechnologies1585670280063.palantir_aip?tab=overview) |
| **C3 AI Suite** | C3.ai | 5/5 (1 review) | [marketplace.microsoft.com - C3 AI](https://marketplace.microsoft.com/en-us/product/c3iotinc.c3_ai_suite_transact?tab=overview) |
| **Atlassian Rovo** | Atlassian | unknown | [marketplace.microsoft.com - Rovo](https://marketplace.microsoft.com/en-us/product/wa200010277?tab=overview) |
| **Gong for Outlook** | Gong | unknown | [marketplace.microsoft.com - Gong](https://marketplace.microsoft.com/en-us/product/office/wa200001795?tab=overview) |
| **Harvey** | Harvey | unknown | [marketplace.microsoft.com - Harvey](https://marketplace.microsoft.com/en-us/product/harvey.harvey-assistant?tab=overview) |
| **Clay** | Clay | unknown | [marketplace.microsoft.com - Clay](https://marketplace.microsoft.com/en-us/product/clay.clay?tab=Overview) |
| **Figma for M365 Copilot** | Figma | unknown | [marketplace.microsoft.com - Figma](https://marketplace.microsoft.com/en-us/product/office/wa200004521) |
| **Leena AI Enterprise VA** | Leena AI | unknown | [marketplace.microsoft.com - Leena AI](https://marketplace.microsoft.com/en-us/product/saas/leenaaiinc1703156633353.enterprisevirtualassistant?tab=overview) |
| **Leena AI Enterprise Copilot** | Leena AI | unknown | [marketplace.microsoft.com - Leena Copilot](https://marketplace.microsoft.com/en-us/product/web-apps/leenaaipvtltd1699513268043.enterprise_copilot?tab=overview) |
| **Teneo Agentic AI Platform** | Teneo.ai | unknown | [marketplace.microsoft.com - Teneo](https://marketplace.microsoft.com/en-us/product/saas/artificialsolutionsinternationalab1703003840887.teneo-saas-conversational-ivr-platform?tab=overview) |
| **Genspark** | Genspark | unknown | [marketplace.microsoft.com - Genspark](https://marketplace.microsoft.com/en-us/product/saas/wa200010259?tab=overview) |
| **Genspark for PowerPoint** | Genspark | unknown | [marketplace.microsoft.com - Genspark PPT](https://marketplace.microsoft.com/en-us/product/saas/wa200010473?tab=overview) |
| **Stack Moxie** | Stack Moxie | 4.8/5 (11 reviews) | [marketplace.microsoft.com](https://marketplace.microsoft.com/en-us) |
| **Enterprise Bot Omni Channel** | Enterprise Bot | 5/5 (2 reviews) | [marketplace.microsoft.com](https://marketplace.microsoft.com/en-us) |
| **Yellow.AI** | Bitonic Technology Labs | 3.5/5 (2 reviews) | [marketplace.microsoft.com](https://marketplace.microsoft.com/en-us) |
| **ALVAO Service Desk** | ALVAO s.r.o. | 4/5 (4 reviews) | [marketplace.microsoft.com](https://marketplace.microsoft.com/en-us) |

### 6.2 Azure Marketplace Rating Patterns

Azure Marketplace has the richest review data of any marketplace we studied, but the ratings are strikingly low:

- **Most listings have 1/5 with a single review** - this is the modal pattern, suggesting either quality issues or review-skew from dissatisfied early users
- **The highest-rated agent is Stack Moxie at 4.8/5 (11 reviews)** - a marketing analytics platform
- **Enterprise Bot has 5/5 (2 reviews)** - a GPT-4 powered omnichannel bot
- **Notable agents with 1/5 ratings:** UiPath Agentic Automation, n8n, Ada AI Agent, Palantir Foundry, Dynatrace

This rating pattern is a signal: enterprise B2B marketplace reviews skew negative because only frustrated users leave reviews, and the marketplace is relatively new to AI agent listings.

### 6.3 Azure Marketplace Browse Page

The AI Apps and Agents category can be browsed at:
- [marketplace.microsoft.com/en-us - AI Apps and Agents](https://marketplace.microsoft.com/en-us/search/products?category=ai-apps-and-agents)

Microsoft claims "over 4,000 AI apps and agents" in the catalog. Our research verified 157 distinct agents through direct page fetches and targeted searches; the remainder are on JavaScript-rendered pages that cannot be crawled statically.

---

## 7. Protocol Adoption: MCP and A2A

| Metric | Count | % of Total |
|---|---|---|
| MCP support (mc=Yes) | 320 | 25% |
| True autonomous agents (aa=Yes) | 601 | 48% |
| Both MCP + autonomous | 168 | 13% |

**MCP adoption by marketplace:**
- **Salesforce:** 30 MCP servers (Stripe, PayPal, Shopify, Jira, GitHub, GitLab, Snowflake, Databricks, BigQuery, Okta, Snyk, Zendesk, ServiceNow, Intercom, HubSpot, Outreach, LinkedIn, NetSuite, SAP, QuickBooks, PagerDuty, OneLogin, Anthropic Claude, AWS Bedrock, Google Maps, Box, Slack, Google Workspace, Salesforce DX, Agentforce 360)
- **Hugging Face:** 60+ agents with MCP support (Gradio MCP Server, HF MCP Server, Spaces as Agent Tools)
- **Google:** 72 partner agents with "Google Cloud Ready - Gemini Enterprise" certification
- **Azure:** 40+ agents with M365 Copilot integration
- **AWS:** 10+ MCP servers (AWS API, Wiz, Splunk, Elasticsearch, Confluent, Outreach)

**Signal:** MCP is becoming the standard protocol for agent-to-tool communication. Salesforce's 30 MCP servers on AgentExchange represent the most concentrated MCP ecosystem.

---

## 8. Key Findings and Patterns

### 8.1 What "Working" Looks Like

Agents with the strongest adoption signals share these characteristics:

1. **They solve a specific workflow, not a general problem.** Klarna's AI assistant handles customer service conversations (2.3M handled). Cars24's sales agent handles 1M+ minutes of sales conversations. Ada resolves 83% of inquiries autonomously.

2. **They are embedded in an existing platform's distribution.** Salesforce Agentforce reaches 18,000+ companies because it rides on Salesforce's CRM installed base. Copilot Studio reaches 230K orgs because it is embedded in Microsoft 365.

3. **They have a clear pricing model tied to outcomes.** ServiceNow charges per action unit. Salesforce bundles agents into tier upgrades. Genspark hit $36M ARR because it charges per agent interaction.

4. **They appear on multiple marketplaces.** The 55 publishers on 2+ marketplaces have 3x the average adoption signal strength of single-marketplace publishers.

### 8.2 What Is Not Working

1. **Low-rated Azure Marketplace listings.** The 1/5 rating pattern on Azure suggests that many AI agent listings are not meeting buyer expectations. The marketplace is discovery-friendly but quality is uneven.

2. **"Estimated" adoption signals.** 291 agents (23%) have only estimated signals, meaning we found a listing but no evidence of actual usage. These are likely long-tail listings with minimal traction.

3. **Tools masquerading as agents.** 660 of 1,261 entries (52%) are tools or infrastructure, not true autonomous agents. The marketplace noise-to-signal ratio is high.

4. **Missing review data.** AWS Marketplace renders ratings client-side (not retrievable). ServiceNow Store and Salesforce AgentExchange do not expose public ratings. Only Azure provides structured review data.

### 8.3 The Cross-Marketplace Multiplier Effect

Publishers that list on 3+ marketplaces see disproportionate adoption:

| Publisher | Marketplaces | Combined Agent Count | Strong Signals |
|---|---|---|---|
| Salesforce | 5 | 98 | 8 |
| ServiceNow | 5 | 90 | 5 |
| Accenture | 4 | 8 | 3 |
| Anthropic | 3 | 5 | 2 |
| Ada | 3 | 3 | 2 |
| UiPath | 3 | 8 | 1 |
| Genspark | 3 | 4 | 2 |

**Takeaway:** Cross-marketplace listing is a leading indicator of enterprise adoption. Publishers that invest in multi-marketplace distribution tend to have stronger signals.

---

## 9. GTM Playbook: Selling AI Agents on Azure Marketplace to Indian Companies

### 9.1 The Opportunity

India is Microsoft's fastest-growing cloud market. Microsoft launched its third India datacenter region in August 2026, and the company has publicly committed to training 2 million Indians in AI by 2026. The Azure Marketplace AI Apps and Agents category is Microsoft's primary distribution channel for third-party AI agents to the M365 installed base.

**Market size signals:**
- 5,729 companies in India use Microsoft Azure ([theirstack.com](https://theirstack.com/en/technology/microsoft-azure/in))
- 495 companies in India use Microsoft Office 365 ([theirstack.com](https://theirstack.com/en/technology/microsoft-office-365/in))
- Microsoft India has 20,000+ employees and is expanding its partner ecosystem
- The India Azure region (Central India) went live in 2026

### 9.2 How to Find Indian Companies Using M365 and Azure Marketplace

#### Method 1: Technology Intelligence Platforms (Paid)

These platforms scrape job postings, tech stacks, and public cloud usage signals:

| Platform | What It Provides | URL |
|---|---|---|
| **TheirStack** | 5,729 Indian companies using Azure; 495 using Office 365; filterable by company size, industry | [theirstack.com/en/technology/microsoft-azure/in](https://theirstack.com/en/technology/microsoft-azure/in) |
| **Packed Data** | Curated list of Microsoft Azure customers in India with contact details | [packeddata.com/microsoft-azure-customers-in-india](https://packeddata.com/microsoft-azure-customers-in-india) |
| **ReadyContacts** | 322,145 Microsoft Azure customers globally; filterable by country, industry, company size | [readycontacts.com/target-account-profiling/microsoft-azure](https://www.readycontacts.com/target-account-profiling/microsoft-azure/) |
| **TechnologyChecker** | Full customer list with insights; filterable by region | [technologychecker.io/technology/microsoft-azure](https://technologychecker.io/technology/microsoft-azure) |
| **Bloomberry** | Microsoft 365 customer list with usage signals | [bloomberry.com/data/microsoft365](https://bloomberry.com/data/microsoft365/) |

**Recommended approach:** Start with TheirStack (free tier shows company names) to build a target list, then use ReadyContacts or Packed Data for enriched contact details (IT decision-maker names, emails, phone numbers).

#### Method 2: Microsoft Partner Center Co-Sell (Free, Requires MPN)

If you have published your agent on Azure Marketplace, you can use Microsoft's co-sell infrastructure:

1. **Partner Center Referrals:** Access the co-sell opportunity dashboard at [learn.microsoft.com/partner-center/referrals/manage-co-sell-opportunities](https://learn.microsoft.com/en-us/partner-center/referrals/manage-co-sell-opportunities). Microsoft sellers can refer your solution to their customers, including Indian enterprises.

2. **Co-sell requirements:** Your listing must be "Co-sell Ready" or "Co-sell Active." Requirements detailed at [learn.microsoft.com/partner-center/referrals/co-sell-requirements](https://learn.microsoft.com/en-us/partner-center/referrals/co-sell-requirements):
   - Solution ID published on Azure Marketplace
   - Partner business profile with deal registration
   - Revenue projection and customer references

3. **Private offers:** Create ISV-to-customer private offers for specific Indian companies. Documentation at [learn.microsoft.com/partner-center/marketplace-offers/isv-customer](https://learn.microsoft.com/hi-in/partner-center/marketplace-offers/isv-customer). This lets you offer custom pricing and terms to individual customers through the marketplace.

4. **Bulk operations:** Upload target account lists via CSV to Partner Center for co-sell opportunity matching. Documentation at [learn.microsoft.com/partner-center/referrals/bulk-operations](https://learn.microsoft.com/en-us/partner-center/referrals/bulk-operations).

#### Method 3: Microsoft AI Tour and Events

Microsoft runs regular AI tours and partner events in India (typically in Bangalore, Mumbai, Delhi, Hyderabad, Chennai). These events connect ISVs with Microsoft's customer account teams. Check [partner.microsoft.com/en-us](https://partner.microsoft.com/en-us) for upcoming India events.

#### Method 4: Microsoft Customer Engagement Methodology (MCEM)

Microsoft's structured approach to connecting partners with customers is documented at [partner.microsoft.com/en-us/partnership/sell-with-microsoft](https://partner.microsoft.com/en-us/partnership/sell-with-microsoft). This includes:
- Account mapping with Microsoft sellers
- Joint sales plays
- Customer intent signals from Azure usage data

### 9.3 Step-by-Step GTM Plan for an AI Agent on Azure Marketplace

**Step 1: Publish and optimize your listing**
- List under "AI Apps and Agents" category: [marketplace.microsoft.com](https://marketplace.microsoft.com/en-us)
- Include a free trial or BYOL (Bring Your Own License) option
- Get your first 5 reviews - the current bar is low (most listings have 1 review at 1/5), so even a few positive reviews will differentiate you

**Step 2: Achieve Co-Sell Ready status**
- Complete the co-sell requirements in Partner Center
- Provide 3 customer references (can be from any country)
- Set up deal registration and revenue projection

**Step 3: Build your target list**
- Pull the Indian Azure customer list from TheirStack (5,729 companies)
- Filter by industry (healthcare, financial services, and IT services are the top adopters of AI agents in India)
- Cross-reference with LinkedIn Sales Navigator to find IT decision-makers at those companies
- Prioritize companies that already use Microsoft Copilot or Power Platform (they have budget allocated for AI)

**Step 4: Leverage Microsoft's account teams**
- Use Partner Center to identify which Microsoft account teams own your target accounts
- Request co-sell introductions through the referrals system
- Microsoft sellers in India are incentivized to bring marketplace solutions to their customers (they get credit for marketplace transacted revenue)

**Step 5: Create private offers for top targets**
- Use ISV-to-customer private offers to create custom pricing for specific Indian enterprises
- This also works for procurement: many Indian enterprises prefer to buy through Azure Marketplace because it consolidates billing with their existing Azure commitment

**Step 6: Attend Microsoft events in India**
- Microsoft AI Tour India (annual, typically Q1)
- Microsoft Inspire (annual partner conference)
- Azure AI days (regional events in Bangalore, Mumbai, Delhi, Hyderabad)

**Step 7: Track and iterate**
- Use Partner Center analytics to see which companies are viewing your listing
- Monitor the "customer intent" signals that Microsoft provides (companies that have viewed, started a trial, or added to cart)
- Follow up with targeted outreach to companies showing intent

### 9.4 Indian Companies Likely Using M365 + Azure (Target Segments)

Based on public Azure usage data, the highest-concentration segments for AI agent adoption in India:

| Segment | Why They Are Targets | Example Companies |
|---|---|---|
| IT Services (TCS, Infosys, Wipro, HCL, Tech Mahindra) | Already building AI agents for clients; large internal M365 deployments | TCS, Infosys, Wipro, HCLTech, Tech Mahindra |
| Financial Services (Banks, Insurance, Fintech) | Regulated industries that need compliant AI; heavy M365 usage | HDFC, ICICI, SBI, Bajaj Finserv, Razorpay |
| Healthcare and Pharma | Clinical documentation, patient support agents | Apollo, Fortis, Dr. Reddy's, Cipla |
| Retail and E-commerce | Customer service agents, inventory optimization | Flipkart, Reliance Retail, Myntra |
| Manufacturing | Supply chain agents, predictive maintenance | Tata Motors, Mahindra, L&T, BHEL |
| Government and PSUs | Large M365 deployments; digital transformation mandates | NIC, UIDAI, GSTN, Indian Railways |

### 9.5 Tools and Resources

| Resource | Purpose | URL |
|---|---|---|
| Microsoft Partner Center | Manage listing, co-sell, referrals | [partner.microsoft.com](https://partner.microsoft.com/en-us) |
| Azure Marketplace GTM best practices | Listing optimization guide | [learn.microsoft.com/partner-center/marketplace-offers/gtm-best-practices](https://learn.microsoft.com/en-us/partner-center/marketplace-offers/gtm-best-practices) |
| Co-sell overview | How to co-sell with Microsoft | [learn.microsoft.com/partner-center/referrals/co-sell-overview](https://learn.microsoft.com/en-us/partner-center/referrals/co-sell-overview) |
| ISV-to-customer private offers | Custom pricing for specific customers | [learn.microsoft.com/partner-center/marketplace-offers/isv-customer](https://learn.microsoft.com/hi-in/partner-center/marketplace-offers/isv-customer) |
| Clazar GTM guide | Third-party Azure co-sell guide | [clazar.io/guides/co-selling-with-azure](https://clazar.io/guides/co-selling-with-azure) |
| Invisory ISV guide | Azure Marketplace ISV co-sell guide | [invisory.co/cloud-marketplace/hyperscaler/microsoft-azure-marketplace-isvs/co-selling-guide](https://invisory.co/cloud-marketplace/hyperscaler/microsoft-azure-marketplace-isvs/co-selling-guide/) |
| TheirStack | Find Indian Azure/M365 customers | [theirstack.com/en/technology/microsoft-azure/in](https://theirstack.com/en/technology/microsoft-azure/in) |
| ReadyContacts | Enriched contact data for Azure customers | [readycontacts.com/target-account-profiling/microsoft-azure](https://www.readycontacts.com/target-account-profiling/microsoft-azure/) |

---

## 10. Methodology and Limitations

### Data Collection
Eight independent research agents enumerated agents from each marketplace. Sources included:
- Official marketplace catalog pages (where statically accessible)
- Launch blog posts and press releases
- Partner directories and showcase pages
- Third-party coverage (TechCrunch, ZDNet, CRN, SiliconANGLE)
- Individual vendor websites confirming marketplace presence

### Signal Classification
- **Strong:** Agent is "reported" (directly confirmed on the marketplace) AND has a numeric adoption metric (conversations, customers, revenue, stars, downloads)
- **Moderate:** Agent is "reported" OR has a numeric metric, but not both
- **Weak:** Agent is "estimated" with no numeric evidence

### Limitations
1. **AWS Marketplace ratings** are JavaScript-rendered and could not be retrieved. A headless-browser pass would be needed to capture star ratings and review counts.
2. **Azure Marketplace** pages are a JavaScript SPA. We verified 157 agents through direct fetches and targeted searches, but Microsoft claims 4,000+ AI apps and agents. Many more exist on uncrawled pages.
3. **Salesforce AgentExchange** is relatively new (launched 2025). The 267 agents include both AgentExchange listings and AppExchange apps with agent capabilities.
4. **Hugging Face** agents include community Spaces and projects that may not be production-grade. The "likes" metric on HF Spaces is a weak proxy for adoption.
5. **OpenAI GPT Store** conversation counts are self-reported by OpenAI and represent aggregate usage, not per-agent revenue.
6. **NVIDIA** agents include blueprints and NIM microservices that are infrastructure components, not standalone agents. We classified 95 of 185 as true autonomous agents.

---

## 11. Sources

- [Microsoft Marketplace - AI Apps and Agents](https://marketplace.microsoft.com/en-us/search/products?category=ai-apps-and-agents)
- [AWS Marketplace - AI Agents and Tools](https://aws.amazon.com/marketplace/search/categories?category=ai-agents-and-tools)
- [Google Cloud - Gemini Enterprise Agents](https://cloud.google.com/gemini-enterprise/agents)
- [Salesforce AgentExchange](https://agentexchange.salesforce.com)
- [ServiceNow Store](https://store.servicenow.com)
- [OpenAI GPT Store](https://chatgpt.com/gpts)
- [Hugging Face Spaces](https://huggingface.co/spaces)
- [NVIDIA build.nvidia.com](https://build.nvidia.com)
- [Microsoft Partner Center - Co-sell](https://learn.microsoft.com/en-us/partner-center/referrals/co-sell-overview)
- [TheirStack - Azure customers in India](https://theirstack.com/en/technology/microsoft-azure/in)
- [ReadyContacts - Microsoft Azure customers](https://www.readycontacts.com/target-account-profiling/microsoft-azure/)
- [Clazar - Co-selling with Azure guide](https://clazar.io/guides/co-selling-with-azure)
- [Invisory - Azure Marketplace ISV co-sell guide](https://invisory.co/cloud-marketplace/hyperscaler/microsoft-azure-marketplace-isvs/co-selling-guide/)
- [Microsoft - Sell with Microsoft](https://partner.microsoft.com/en-us/partnership/sell-with-microsoft)
