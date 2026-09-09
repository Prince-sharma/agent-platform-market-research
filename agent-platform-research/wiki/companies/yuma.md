---
name: Yuma
layer: L3
scope: vertical
vertical: customer service (ecommerce)
status: active
priority: high
profile_depth: deep
updated: 2026-09-09
sources: ext:L3;YC W23
---

# Yuma

**Thesis (one line):** Autonomous AI agents for Shopify merchants that resolve support tickets end-to-end inside existing helpdesks; outcome-based pricing, expanding beyond support.

## Facts

- Founded: 2023, by Guillaume Luccisano (CEO; 3x YC founder: Socialcam W12, Triplebyte S15)
- HQ: Cambridge, MA, with European office in Barcelona, Spain (company FAQ)
- YC batch: W23
- Backers: Gradient Ventures (Google), Altman Capital Fund, Karman Ventures, AI Grant, Y Combinator (per company blog; no lead disclosed)
- Funding: $5M seed (company announcement 2025-05-27; third-party coverage from Oct 2024)
- Valuation: over $30M as of summer 2024 (per company blog)
- Revenue/ARR: unknown; third-party estimates ~$3.3M ARR (getlatka/sig.ai, 2026, low confidence); automates 60%+ of tickets for top merchants
- ICP: large Shopify and e-commerce brands (customers incl. Glossier, Evryjewels, Clove)
- Pricing model: outcome-based, pay per ticket resolved by AI; Shopify App Store plans from $850/month (Small Merchant) and $1,200/month (Medium Merchant) including ticket bundles with overage fees

## The eleven build decisions

1. **Build interface:** "Ask Yuma" natural-language interface for building automations and generating reports; white-glove setup, a dedicated account manager configures agents (no DIY).
2. **Runtime and tenancy:** Vendor multi-tenant SaaS; EU data residency option.
3. **Tool and integration strategy:** Native e-commerce and helpdesk integrations: Shopify, Gorgias, Zendesk, Kustomer, Salesforce Service Cloud, WooCommerce, Magento; Claude MCP support.
4. **Knowledge and data strategy:** Learns from past tickets, help centers, and brand guidelines; connects to order and commerce systems of record.
5. **Autonomy and human-in-the-loop:** Agents autonomously execute actions (refunds, exchanges, cancellations, address changes, subscription updates) under "hard limits"; escalate to humans.
6. **Governance and enterprise controls:** SOC 2 Type II, GDPR, EU data residency, SSO, RBAC.
7. **Pricing model:** Outcome-based per-resolution; subscription bundles on the Shopify App Store with overage fees.
8. **GTM motion:** Marketplace (Shopify App Store) plus sales-led white-glove onboarding with dedicated account managers.
9. **Moat thesis:** E-commerce action depth (agents that do, not just answer), helpdesk integrations, merchant data gravity, serial-founder distribution.
10. **Open-source posture:** Proprietary; nothing open-source visible.
11. **Task horizon:** Always-on 24/7 ticket resolution with multi-step actions (verify order, apply policy, execute refund).

## Analysis

- **Agent capability depth:** AI Support Agent orchestration platform: agents resolve tickets end-to-end with real actions in commerce systems; Ask Yuma gives merchants conversational control and reporting (e.g., weekly product-defect reports with images as PDF); case studies: Glossier 91% accuracy on complex shipping tickets and 87% faster responses; Evryjewels 70% automation and 63% cost cut over 150K+ tickets.
- **Weaknesses:** Shopify/e-commerce concentration; $5M raised against heavily funded rivals (Sierra, Decagon); white-glove onboarding caps scale.
- **Trajectory:** Expanding from Support AI into Sales AI, Social AI, and Chat AI; MCP adoption signals agentic-ecosystem alignment.
- **M&A:** none visible.

## Sources

- yuma.ai (accessed 2026-09-09)
- yuma.ai/faq (accessed 2026-09-09)
- yuma.ai/pricing (accessed 2026-09-09)
- yuma.ai/ai-support-agent (accessed 2026-09-09)
- yuma.ai/integrations (accessed 2026-09-09)
- yuma.ai/blogs/yuma-ai-raises-5-million-to-transform-e-commerce-customer-support-with-advanced-ai-agents (2025-05-27)
- apps.shopify.com/yuma (accessed 2026-09-09)
- ycombinator.com/companies/yuma-ai (accessed 2026-09-09)
- yuma.ai/case-studies (accessed 2026-09-09)
- getlatka.com/companies/yuma.ai (2026-09-02)
