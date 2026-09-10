const REPORT_BASE =
  'https://github.com/Prince-sharma/agent-platform-market-research/blob/main/agent-platform-research/reports'

export interface ReportLink {
  id: string
  title: string
  file: string
  blurb: string
}

/**
 * The campaign's research reports, in reading order. The hub links to these
 * so the app always ties back to the underlying written analysis.
 */
export const REPORTS: ReportLink[] = [
  {
    id: 'plan',
    title: 'Research plan',
    file: 'agent-platform-research-plan.md',
    blurb:
      'The four-phase campaign design: census, profiling, thematic deep-dives, synthesis.',
  },
  {
    id: 'phase1',
    title: 'Phase 1 · Census',
    file: 'agent-platform-phase1-census.md',
    blurb:
      'The 1,328-company census across 16 sweeps, grouped by layer, YC cohort, and VC backer.',
  },
  {
    id: 'phase2',
    title: 'Phase 2 · Landscape',
    file: 'agent-platform-phase2-landscape.md',
    blurb:
      '766 company profiles, the eleven build decisions, and 14 cluster syntheses.',
  },
  {
    id: 'phase3',
    title: 'Phase 3 · Thematic',
    file: 'agent-platform-phase3-thematic.md',
    blurb:
      'Seven thematic deep-dives: long-horizon agents, sizing, build-vs-buy, pricing, moats and M&A, YC cohorts, platform-vs-app structure.',
  },
  {
    id: 'marketplace',
    title: 'Marketplace agents',
    file: 'marketplace-agents-analysis.md',
    blurb:
      '1,261 agents across 8 cloud marketplaces with adoption-signal and category analysis.',
  },
  {
    id: 'azure',
    title: 'Azure deep-dive',
    file: 'azure-marketplace-ai-agents-research.md',
    blurb:
      'The Azure Marketplace agent catalog in detail, plus a GTM playbook for selling into it.',
  },
]

export function reportUrl(r: ReportLink): string {
  return `${REPORT_BASE}/${r.file}`
}

export function reportById(id: string): ReportLink | undefined {
  return REPORTS.find((r) => r.id === id)
}
