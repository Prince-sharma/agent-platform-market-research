# Finance, Accounting, Insurance, and Compliance Agents

## Scope

82 companies profiled in this cluster during Phase 2 (assignment file: data/phase2-assignments/p2-3c-finance.txt). 25 deep profiles, 57 base. Vertical split: 31 finance/accounting, 29 finance, 13 insurance, 7 accounting, 1 compliance, 1 trade compliance. 68 of 82 are YC-backed; the cluster is dominated by 2024-2026 batches.

## Notable companies

- **Basis** — AI agents for accounting close and workflows; $100M Series B at $1.15B valuation (Feb 2026), Mayfield and Khosla. The best-funded of the accounting-agent wave.
- **Norm Ai** — AI agents mapping and monitoring regulatory obligations; $120M Series C at $1.2B (Jul 2026). Defines the "agentic law" wedge inside compliance.
- **Rillet** — AI-native ERP replacing NetSuite for accounting teams; $100M Series C at $1B (Aug 2026), Sequoia and ICONIQ. Attacks the system of record itself.
- **Rogo** — AI agents for investment banking analysis; $160M Series D at $2B (Apr 2026) after a Sequoia-led round. The highest-valued company in the cluster.
- **Xelix** — Agentic AI for accounts payable and finance controls; $160M Series B (2025), Insight. Controls and payment integrity as the wedge into the CFO stack.
- **Federato** — Underwriting workbench with AI copilots for insurers; $100M Series D (Nov 2025), Goldman-led. The elder statesman: copilot-era product moving toward agents.
- **Salient** — Voice AI agents for loan servicing and collections; $60M raised, $500M valuation, $25M ARR (Dec 2025). The strongest reported revenue in the cluster.
- **Numeric** — AI-native accounting platform for close and reconciliation; $51M Series B (Nov 2025), Menlo. Early leader of the continuous-close thesis.
- **Digits** — AI-native accounting software automating bookkeeping; $65M raised, $565M valuation (2022). The pioneer of the category the 2025-26 wave is now refilling.
- **AGI (American Growth Insurance)** — AI-native platform for insurance brokerages; $70M (Jul 2026) from Rockbridge and Atomic to acquire independent agencies and run them as AI-native operations.

## Patterns across the eleven build decisions

- **Build interface:** natural language dominates everywhere it is known (10 of 12); one config-workflow product (close checklists). No canvas or code-first builders.
- **Runtime and tenancy:** vendor multi-tenant SaaS in all 21 known cases. No self-host or on-prem found — notable in a regulated domain that usually demands it.
- **Integrations:** proprietary connector libraries into ERPs (NetSuite, SAP, Oracle, QuickBooks), banks and credit bureaus, carriers, and Excel. No MCP or marketplace strategies surfaced.
- **Knowledge and data:** live sync with systems of record (17) clearly beats built-in RAG (5). The GL and ERP stay the source of truth; agents read and write against them.
- **Autonomy:** approval gates dominate (~20 of 25 known), with human review of agent output; only two or three claim fully autonomous operation.
- **Governance:** audit trails and RBAC recur across deep pages — the domain's license to operate. Agent identity and spend caps barely appear.
- **Pricing:** mostly unknown or custom enterprise pricing; where known, platform fee plus usage. No per-outcome pricing found despite outcome-shaped products.
- **GTM:** sales-led dominates; a few PLG-plus-sales hybrids (Denki's tiered plans); AGI's acquisition-led roll-up is the structural outlier.
- **Moat:** workflow lock-in (~15) and data gravity (~10) are the standard theses; integrations and regulatory coverage (SEC, ASC 606, FDCPA) as supporting moats.
- **Open-source posture:** proprietary in all 25 known cases. Zero OSS in the cluster.
- **Task horizon:** multi-step workflows (minutes) dominate; a handful reach long-horizon or persistent — continuous close, always-on assurance, 24/7 bookkeeping.

The distinctive cluster pattern is the **AI-native firm**: software does not just automate a finance function, it *is* the firm selling the regulated outcome. Agent-native accounting firms (Billow AI, Last Accounting Company, Rational, Cranston AI), a full-stack AI audit firm (Denki), AI-native insurance brokerages (Fernstone, Harper, Panta, AGI's roll-up), and an AI-native investment bank (OffDeal). Most are 2025-26 YC companies with no visible funding — the pattern is early, capital-light, and unproven.

## Consolidation and M&A

- **Midship** (AI for SOX testing, YC S24) was acquired by Optro — the only completed exit in the cluster.
- **AGI** is the buyer-side story: $70M of committed equity to acquire independent insurance agencies and convert them to AI-native operations; a PE-style roll-up where the software is the operating model.
- Harper ($47M), Fernstone, and Panta run the same brokerage pattern organically rather than by acquisition.
- No big-cap acquirer activity is visible in this cohort yet; the unicorns (Basis, Norm Ai, Rillet, Rogo) are all independent and recently funded.

## Traction distribution

- **Unicorns (4):** Rogo ($2B, Apr 2026), Norm Ai ($1.2B, Jul 2026), Basis ($1.15B, Feb 2026), Rillet ($1B, Aug 2026).
- **$100M+ rounds (6):** Xelix ($160M), Rogo ($160M), Norm Ai ($120M), Basis ($100M), Rillet ($100M), Federato ($100M).
- **$30-100M raised (10):** AGI, Klarity, Digits, Salient, Numeric, Harper, Maxima, Delve, Sixfold, Trullion.
- **$10-30M (6):** FurtherAI, Hadrius, Stacks, Fazeshift, Greenlite, Revi.
- **$3-10M (8):** Sapien, Sphinx, Midship, Denki, Zalos, Finto, OmniAI, Arva AI.
- **Seed tail:** roughly 46 of 82 have no visible funding — almost all 2025-26 YC batches, including the entire agent-native-firm cohort.
- **Reported revenue:** Salient $25M ARR (Dec 2025); Klarity ~$7M (low confidence); Harper $6M+ annualized premiums; Numeric single-digit millions (Oct 2024); Trullion $1.3M (Jun 2026).

## Gaps and open ground

- **Audit is nearly empty:** Denki is the only full-stack AI audit firm; PCAOB-regulated audit as software is wide-open ground.
- **Tax is thin:** Magnetic (CPA document prep) and Basis's tax-firm adjacency are the only entries; consumer and mid-market tax agents are unoccupied.
- **No open-source, no self-host, no per-outcome pricing:** enterprise procurement options are narrow; a compliance-grade, self-hostable agent stack would be differentiated.
- **Agent infrastructure is absent:** agent identity, spend caps, and cross-agent audit barely surface in governance decisions — an enabler-layer gap.
- **Emerging markets:** only Kita (credit review for emerging-market lenders).
- **Crowded sub-areas:** month-end close and reconciliation (at least 15 companies), insurance submissions and brokerage (13), AML/KYC compliance (Greenlite, Arva, Sphinx, Rulebase, Shiboleth) — the seed tail here will consolidate or die.
