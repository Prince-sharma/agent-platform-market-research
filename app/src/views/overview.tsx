import * as React from 'react'
import { ArrowRight } from 'lucide-react'
import { BarChart } from '@/components/bar-chart'
import { StatCard } from '@/components/stat-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useData } from '@/lib/use-data'
import { navigate } from '@/lib/router'
import { LAYER_LABELS, LAYER_ORDER, type Company } from '@/types'

const CENSUS_INSIGHTS: { title: string; body: string }[] = [
  {
    title: 'Vertical work agents are the center of gravity',
    body: '59% of the universe is L3. Horizontal build platforms are only 10%. The space is an applications market with platforms forming underneath it.',
  },
  {
    title: 'The stack built back-to-front',
    body: 'Infrastructure (L1) barely existed before 2023 and is now 201 companies; the picks-and-shovels arrived two years after the apps.',
  },
  {
    title: 'Healthcare is the deepest vertical',
    body: 'Healthcare (101), then GTM/sales (95) and software engineering (95). Construction (22) and logistics (36) remain thin relative to their workflow volume.',
  },
  {
    title: 'Consolidation has started from the top',
    body: '29+ acquired; ServiceNow took Moveworks ($2.85B), NICE took Cognigy ($955M), Workday took Sana, Zendesk took Forethought, Amazon absorbed Adept.',
  },
  {
    title: 'Every incumbent suite ships the same pattern',
    body: 'Low-code agent studio plus prebuilt role agents, with heavy product churn (Breeze became Agent Hub, Agentspace folded into Gemini Enterprise).',
  },
  {
    title: 'Voice is the best-funded modality',
    body: 'Parloa ($3B), LiveKit and Deepgram ($1B+ each), Vapi ($500M) — and the default interface inside logistics, healthcare, and collections verticals.',
  },
  {
    title: 'Agent security is the most crowded new infrastructure category',
    body: 'Zenity ($125M C), Neo ($100M), AIR ($50M), plus Okta and Microsoft shipping agent identity.',
  },
  {
    title: 'Traction is sharply bimodal',
    body: 'Mega-rounds (Sierra $15B, Cognition reported $48B, Harvey $11B, Abridge $5.3B) versus a long seed tail with no visible follow-on; 11x is the cautionary tale.',
  },
]

export function Overview() {
  const { data: companies, loading } = useData<Company[]>('companies')

  const stats = React.useMemo(() => {
    if (!companies) return null
    const layers = new Map<string, number>()
    const statuses = new Map<string, number>()
    const verticals = new Map<string, number>()
    let yc = 0
    let profiled = 0
    for (const c of companies) {
      layers.set(c.layer, (layers.get(c.layer) ?? 0) + 1)
      statuses.set(c.status, (statuses.get(c.status) ?? 0) + 1)
      if (c.scope === 'vertical' && c.vertical && c.vertical !== 'general') {
        verticals.set(c.vertical, (verticals.get(c.vertical) ?? 0) + 1)
      }
      if (c.yc_batch) yc += 1
      if (c.wiki_slug) profiled += 1
    }
    const active = statuses.get('active') ?? 0
    return {
      total: companies.length,
      layers,
      statuses,
      verticals: [...verticals.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 12),
      activePct: Math.round((active / companies.length) * 100),
      yc,
      profiled,
      l3: layers.get('L3') ?? 0,
    }
  }, [companies])

  if (loading || !stats) {
    return (
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-24" />
          ))}
        </div>
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
      </div>
    )
  }

  const layerData = LAYER_ORDER.map((l) => ({
    label: LAYER_LABELS[l] ?? l,
    value: stats.layers.get(l) ?? 0,
  }))
  const statusData = [...stats.statuses.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([label, value]) => ({ label, value }))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          The work-agent universe
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {stats.total.toLocaleString()} companies building AI agents, classified
          by layer, scope, vertical, and operating status. Click any chart to
          drill into the data.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Agent companies"
          value={stats.total.toLocaleString()}
          sub="census of the agentic software market"
          onClick={() => navigate({ view: 'universe' })}
        />
        <StatCard
          label="Active"
          value={`${stats.activePct}%`}
          sub={`${(stats.statuses.get('active') ?? 0).toLocaleString()} operating · ${stats.total - (stats.statuses.get('active') ?? 0)} acquired, pivoted, or dead`}
          onClick={() => navigate({ view: 'universe', query: { status: 'active' } })}
        />
        <StatCard
          label="Vertical agents (L3)"
          value={stats.l3.toLocaleString()}
          sub={`${Math.round((stats.l3 / stats.total) * 100)}% of the universe — the applications layer dominates`}
          onClick={() => navigate({ view: 'universe', query: { layer: 'L3' } })}
        />
        <StatCard
          label="Wiki profiles"
          value={stats.profiled.toLocaleString()}
          sub="deep company dossiers in the research wiki"
          onClick={() => navigate({ view: 'wiki' })}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Market structure by layer</CardTitle>
            <CardDescription>
              Click a layer to browse its companies.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={layerData}
              onSelect={(label) => {
                const layer = label.split(' ')[0]
                navigate({ view: 'universe', query: { layer } })
              }}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Operating status</CardTitle>
            <CardDescription>
              Consolidation is visible: acquired companies across every layer.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={statusData}
              onSelect={(label) =>
                navigate({ view: 'universe', query: { status: label } })
              }
            />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Top verticals</CardTitle>
          <CardDescription>
            Vertical-scope companies only. Click to open the vertical.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BarChart
            data={stats.verticals.map(([label, value]) => ({ label, value }))}
            onSelect={(label) => navigate({ view: 'verticals', param: label })}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">What the census says</CardTitle>
          <CardDescription>
            Eight structural readings of the data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-3 md:grid-cols-2">
            {CENSUS_INSIGHTS.map((insight) => (
              <li key={insight.title} className="rounded-lg border p-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="text-sm font-medium">{insight.title}</div>
                  <Badge variant="muted" className="shrink-0 text-[10px]">
                    census
                  </Badge>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {insight.body}
                </p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate({ view: 'universe' })}
        >
          Browse all {stats.total.toLocaleString()} companies
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate({ view: 'marketplaces' })}
        >
          Explore 1,261 marketplace agents
          <ArrowRight className="size-3.5" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate({ view: 'yc' })}
        >
          YC cohort evolution
          <ArrowRight className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}
