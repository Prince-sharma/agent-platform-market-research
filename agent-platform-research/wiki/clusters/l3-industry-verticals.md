# Industry Vertical Agents (L3)

## Scope

66 companies profiled in this cluster during Phase 2 (assignment file: data/phase2-assignments/p2-3f-industry.txt). 22 deep profiles, 44 base profiles. Vertical mix: logistics 22, real estate 13, construction 13, manufacturing 5, ecommerce 4, distribution 3, and one each in energy, agriculture, automotive, defense, commodities, and food distribution. 60 of 66 are YC-backed (batches S23 through S26); the six non-YC names are the later-stage funded companies.

## Notable companies

- **EliseAI** — the cluster's anchor: $100M+ ARR, ~10% of US apartment market, $2.2B valuation (2025) and reportedly in talks for $300M at $3.7B (Aug 2026). Leasing and resident agents expanding into healthcare administration.
- **HappyRobot** — voice AI for freight carriers and brokers; $150M Series C at $1.2B (Aug 2026), expanding beyond logistics into insurance, energy, telecoms, and airlines.
- **Dwelly** — $170M Series B (Jul 2026) behind the boldest thesis in the cluster: buy UK lettings agencies and run them with AI ("AI-native service provider" roll-up rather than software vendor).
- **Trunk Tools** — $40M Series B led by Insight (Jul 2025); construction agents that turn drawings, specs, and RFIs into structured, queryable project data; revenue scaled 5x in six months pre-raise.
- **Synera** — $40M Series B (Apr 2026); on-prem agentic platform orchestrating 80+ CAx tools for engineering workflows; 60+ enterprise customers including BMW, Airbus, NASA, Volvo, Stihl.
- **Document Crunch** — $30M raised; AI contract review and compliance for construction; backed strategically by Nemetschek Group and construction operators.
- **Digs** — $25.3M Series A led by Builders FirstSource (Aug 2026); digital-twin platform for homebuilders with a strategic distribution marriage into the largest US LBM dealer.
- **Raft** — $30M Series B (2023) automating freight forwarding back office; the 2023 vintage leader that has gone quiet relative to the 2026 cohort.
- **Cartage** — early "service-as-software" freight coordination ($3.3M raised, $150K ARR in under 4 months per YC); agent "Wilson" runs freight ops end-to-end.
- **Tensr, Forge Robotics, Flywheel AI, Red Barn Robotics** — the embodied edge: autonomous factories, welding robots, retrofit autonomous excavators, and weeding robots; agents that act in the physical world.

## Patterns across the eleven build decisions

- **Build interface:** overwhelmingly unpublished at seed stage. Where visible: voice (HappyRobot, Lanesurf, Avery AI, AutoAce), natural language over documents (Trunk Tools, Cartage), low-code canvases (Synera, Ovlo). Axelrod is the outlier: computer-use agents driving existing hotel PMS/POS/RMS software with no APIs.
- **Runtime and tenancy:** almost entirely unknown/unpublished. The verified exceptions are on-prem deployments where the data is the customer's crown jewels (Synera runs on-prem to keep engineering IP in-house) and robotics companies whose "runtime" is physically at the customer site.
- **Integrations:** deep, proprietary vertical-system integrations are the norm, not MCP or marketplaces: ERPs (Axal, Cartage, Stockline), TMS and load boards (Lanesurf, Lunavo), Yardi/Rent Manager (IronLedger), LOS (Automax.ai), Bluebeam/Revit (Structured AI), 80+ CAx tools (Synera). One company (Axelrod) explicitly bets against integrations.
- **Autonomy:** the cluster tilts hard toward full-autonomy claims (Cartage, Peer, Tensr, Dwelly's "AI should do every operational task"). Approval gates appear only where regulation forces them: licensed broker review of drawback claims (Pax), appraiser sign-off (Automax.ai), one-click AP approvals (IronLedger).
- **Pricing:** universally opaque. The strategic direction is visible anyway: away from seats toward absorbing the work — Cartage's "service-as-software" and Dwelly's agency ownership are per-outcome economics in disguise.
- **GTM:** sales-led for every funded company; the YC tail is too early to show a motion.
- **Moat:** vertical workflow lock-in plus data gravity (lane histories, firm templates, home-build digital twins); robotics companies add hardware moats.
- **Open-source posture:** none. All 66 are proprietary; no OSS-core or fair-code play exists in this cluster.
- **Task horizon:** bimodal — multi-step document workflows (minutes) for back-office agents, persistent always-on operation for voice agents, freight ops, and robots.

## Consolidation and M&A

No company in this cluster has been acquired. The M&A story runs the other way: Dwelly is the acquirer, using its $170M to roll up independent UK lettings agencies and fold them onto its platform — the clearest example of agents enabling services roll-ups rather than SaaS. Digs' Builders FirstSource-led round is a strategic-capital marriage giving distribution into a top US supplier. Surrounding context: proptech consolidation (CoStar's $800M Zonda deal) and incumbent suites (Procore in construction) shipping agent features set up either exit paths or competitive pressure for the seed tail.

## Traction distribution

Extremely barbelled. Two unicorns (EliseAI at $2.2B reportedly rising to $3.7B; HappyRobot at $1.2B) and one mega-round roll-up (Dwelly, $170M) sit atop a thin middle (Trunk Tools and Synera at $40M; Digs, Document Crunch, Raft at $25-30M) and a long seed tail: Brickanta $8M, Structured AI $5M, Pax $4.5M, Cartage $3.3M, IronLedger $2.5M, plus roughly 50 companies with no visible traction — mostly 2025-2026 YC batches. Reported revenue is rare: EliseAI ($100M+ ARR), Cartage ($150K ARR), Trunk Tools (5x scaling), Dwelly (15,000+ properties, £350M rent roll, self-reported).

## Gaps and open ground

- **Verticals with one entrant:** energy (Astro), automotive (AutoAce), defense (Guild AI), commodities (CommodityAI), agriculture (Red Barn) — each is a single seed-stage bet; none has a funded leader.
- **No open-source or self-host posture anywhere** — unusual versus horizontal agent platforms; an opening for a vendor that trusts enterprises to run agents in their own environments (only Synera does, for engineering IP).
- **No MCP adoption visible** — integrations are bespoke connectors; the cluster has not engaged with the emerging agent-interoperability layer.
- **Governance and enterprise controls are almost entirely unknown** below Series B — RBAC, audit trails, and agent identity are unaddressed at seed stage even where autonomy claims are maximal.
- **Construction and logistics remain structurally thin** despite the most entries (22 and 13): Phase 1 noted both verticals support few funded pure-plays, and this census confirms a seed-heavy, exit-light profile.
- **Pricing innovation is claimed but unpublished** — per-outcome and service-as-software models are the stated direction, yet no company publishes unit pricing, leaving the economics of "agents doing the work" unverified.
