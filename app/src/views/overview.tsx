import * as React from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bot,
  GraduationCap,
  Handshake,
  Layers,
  Lightbulb,
  Network,
  PieChart,
  Store,
  Users,
} from 'lucide-react'

import { BarChart } from '@/components/bar-chart'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { navigate } from '@/lib/router'
import { REPORTS, reportUrl } from '@/lib/reports'
import { useData } from '@/lib/use-data'
import {
  LAYER_LABELS,
  LAYER_ORDER,
  type Company,
  type MarketplaceAgent,
} from '@/types'

/** Largest disclosed deals, curated from the acquisition file. */
const TOP_DEALS = [
  { company: 'Moveworks', acquirer: 'ServiceNow', note: '$2.85B' },
  { company: 'Sana', acquirer: 'Workday', note: '$1.1B' },
  { company: 'Cognigy', acquirer: 'NICE', note: '~$955M' },
  { company: 'Arize', acquirer: 'Dynatrace', note: '$915M' },
]

const RESEARCH_LIBRARY = [
  {
    id: 'universe',
    icon: Bot,
    title: 'Agent Universe',
    blurb: 'Browse all census companies with layer, status, and traction filters.',
  },
  {
    id: 'themes',
    icon: Lightbulb,
    title: 'Themes',
    blurb: 'Seven thematic deep-dives with findings, stats, and implications.',
  },
  {
    id: 'wiki',
    icon: BookOpen,
    title: 'Wiki',
    blurb: '788 research pages: company dossiers, clusters, and themes.',
  },
  {
    id: 'sizing',
    icon: PieChart,
    title: 'Sizing',
    blurb: 'The market through three lenses, with anchors and takeaways.',
  },
  {
    id: 'yc',
    icon: GraduationCap,
    title: 'YC Cohort',
    blurb: 'Batch-by-batch evolution from W21 to S26.',
  },
  {
    id: 'vc',
    icon: Users,
    title: 'VC Backers',
    blurb: 'Where the active firms concentrate their agent portfolios.',
  },
]

function Takeaway({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 border-l-2 border-primary/40 pl-2.5 text-xs leading-relaxed text-muted-foreground">
      {children}
    </p>
  )
}

function HubCard({
  icon: Icon,
  title,
  subtitle,
  onClick,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
  onClick: () => void
  children?: React.ReactNode
}) {
  return (
    <Card
      className="group cursor-pointer py-0 transition-colors hover:border-primary/50"
      onClick={onClick}
    >
      <CardContent className="px-5 py-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Icon className="size-4 shrink-0 text-primary" />
            <h3 className="text-base font-semibold tracking-tight">{title}</h3>
          </div>
          <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </div>
        <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>
        {children}
      </CardContent>
    </Card>
  )
}

export function Overview() {
  const { data: companies, loading } = useData<Company[]>('companies')
  const { data: agents, loading: agentsLoading } =
    useData<MarketplaceAgent[]>('marketplace-agents')

  const stats = React.useMemo(() => {
    if (!companies) return null
    const layers = new Map<string, number>()
    const verticals = new Map<string, number>()
    const acquired: Company[] = []
    for (const c of companies) {
      layers.set(c.layer, (layers.get(c.layer) ?? 0) + 1)
      if (c.scope === 'vertical' && c.vertical && c.vertical !== 'general') {
        verticals.set(c.vertical, (verticals.get(c.vertical) ?? 0) + 1)
      }
      if (c.status === 'acquired') acquired.push(c)
    }
    const byMarketplace = new Map<string, number>()
    const censusPublishers = new Map<string, Set<string>>()
    if (agents) {
      const nameSet = new Set(companies.map((c) => c.name.toLowerCase()))
      for (const a of agents) {
        byMarketplace.set(a.m, (byMarketplace.get(a.m) ?? 0) + 1)
        const p = (a.p || '').toLowerCase()
        if (p && nameSet.has(p)) {
          let set = censusPublishers.get(p)
          if (!set) {
            set = new Set()
            censusPublishers.set(p, set)
          }
          set.add(a.m)
        }
      }
    }
    return {
      total: companies.length,
      layers,
      verticals: [...verticals.entries()].sort((a, b) => b[1] - a[1]),
      acquired,
      agents: agents?.length ?? 0,
      byMarketplace: [...byMarketplace.entries()].sort((a, b) => b[1] - a[1]),
      censusPublishers,
    }
  }, [companies, agents])

  if (loading || agentsLoading || !stats) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-72" />
        <div className="grid gap-4 lg:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-72" />
          ))}
        </div>
      </div>
    )
  }

  const layerData = LAYER_ORDER.map((l) => ({
    label: LAYER_LABELS[l] ?? l,
    value: stats.layers.get(l) ?? 0,
  }))
  const l3 = stats.layers.get('L3') ?? 0
  const trackedBuyers = stats.acquired.filter((c) => c.acquirer).length

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Agent market research
        </h1>
        <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
          The work-agent universe in one place: {stats.total.toLocaleString()}{' '}
          census companies, {stats.agents.toLocaleString()} marketplace agents,
          788 wiki pages, and the reports behind them. Every section opens a
          summary of what the research found, followed by its detailed table.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold tracking-tight">Analysis</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          <HubCard
            icon={Network}
            title="Market structure"
            subtitle="How the census divides by layer, scope, and operating status"
            onClick={() => navigate({ view: 'structure' })}
          >
            <div className="mt-3">
              <BarChart data={layerData} />
            </div>
            <Takeaway>
              An applications market with platforms forming underneath:{' '}
              {Math.round((l3 / stats.total) * 100)}% of the universe is
              vertical agents, and the infrastructure arrived two years after
              the apps.
            </Takeaway>
          </HubCard>

          <HubCard
            icon={Handshake}
            title="Acquired companies"
            subtitle={`${stats.acquired.length} acquired · ${trackedBuyers} with tracked buyers · consolidation as a signal to dig into`}
            onClick={() => navigate({ view: 'acquired' })}
          >
            <ul className="mt-3 space-y-1.5">
              {TOP_DEALS.map((d) => (
                <li
                  key={d.company}
                  className="flex items-center justify-between gap-2 text-xs"
                >
                  <span className="truncate">
                    {d.company}{' '}
                    <span className="text-muted-foreground">
                      to {d.acquirer}
                    </span>
                  </span>
                  <span className="shrink-0 font-medium tabular-nums text-muted-foreground">
                    {d.note}
                  </span>
                </li>
              ))}
            </ul>
            <Takeaway>
              Suites buy proven agents rather than build: ServiceNow, Workday,
              Salesforce, and NICE lead, with $10.4B disclosed across 8 priced
              deals.
            </Takeaway>
          </HubCard>

          <HubCard
            icon={Layers}
            title="Verticals"
            subtitle="Where vertical agents concentrate, and which verticals stay thin"
            onClick={() => navigate({ view: 'verticals' })}
          >
            <div className="mt-3">
              <BarChart
                data={stats.verticals
                  .slice(0, 6)
                  .map(([label, value]) => ({ label, value }))}
              />
            </div>
            <Takeaway>
              Healthcare is the deepest vertical; construction and logistics
              remain thin relative to their workflow volume.
            </Takeaway>
          </HubCard>

          <HubCard
            icon={Store}
            title="Marketplaces"
            subtitle={`${stats.byMarketplace.length} platforms · ${stats.agents.toLocaleString()} agents · ${stats.censusPublishers.size} census companies publishing`}
            onClick={() => navigate({ view: 'marketplaces' })}
          >
            <div className="mt-3">
              <BarChart
                data={stats.byMarketplace
                  .slice(0, 5)
                  .map(([label, value]) => ({ label, value }))}
              />
            </div>
            <Takeaway>
              Only 12% of listings show strong adoption signals, and half the
              catalog is tooling rather than agents; publishers on 3+ platforms
              show about 3x the adoption.
            </Takeaway>
          </HubCard>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold tracking-tight">
          Research library
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {RESEARCH_LIBRARY.map((item) => (
            <Card
              key={item.id}
              className="group cursor-pointer py-0 transition-colors hover:border-primary/50"
              onClick={() => navigate({ view: item.id })}
            >
              <CardContent className="flex items-start gap-3 px-4 py-3.5">
                <item.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                <div className="min-w-0">
                  <div className="flex items-center gap-1 text-sm font-medium">
                    {item.title}
                    <ArrowRight className="size-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {item.blurb}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold tracking-tight">Reports</h2>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {REPORTS.map((r) => (
            <a
              key={r.id}
              href={reportUrl(r)}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border bg-card p-4 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium">{r.title}</span>
                <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {r.blurb}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
