import * as React from 'react'
import { Lightbulb, Search, X } from 'lucide-react'
import type { LegacyColumnDef } from '@tanstack/react-table/legacy'

import { CompanyDrawer } from '@/components/company-drawer'
import { DataTable, type DataTableApi } from '@/components/data-table'
import {
  SectionSummary,
  SummaryLink,
  type SummaryPoint,
} from '@/components/section-summary'
import { StatCard } from '@/components/stat-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { navigate, type Route } from '@/lib/router'
import { reportById, reportUrl } from '@/lib/reports'
import { useData } from '@/lib/use-data'
import type { Company } from '@/types'

const ACQUIRED_POINTS: SummaryPoint[] = [
  {
    title: 'Suites buy proven agents rather than build',
    body: 'ServiceNow took Moveworks ($2.85B), NICE took Cognigy (~$955M), Workday took Sana ($1.1B), Zendesk took Forethought, Amazon absorbed Adept. Every buyer already owns the distribution the agent plugs into.',
  },
  {
    title: 'Infrastructure gets bought too',
    body: '9 of the 35 acquired are L1: Arize to Dynatrace ($915M), Langfuse to ClickHouse, Pipedream to Workday, Prompt Security to SentinelOne, Aim Security to Cato Networks. Security incumbents buy agent security; data infrastructure buys observability.',
  },
  {
    title: 'Deals cluster in 2024-2026',
    body: 'An estimated $13-18B of M&A across the period, with $10.4B disclosed across 8 priced deals; 13 of the 35 acquired companies are YC-backed.',
  },
  {
    title: 'The buyers are repeat owners of the customer',
    body: 'Workday has bought three (Sana, Flowise, Pipedream) and Salesforce two (Respell, Moonhub). Consolidation runs through incumbent suites and infrastructure vendors, not through agents buying agents.',
  },
  {
    title: 'What is not acquired pivots or winds down',
    body: 'Against 35 acquired stand 17 pivoted and 11 dead. Consolidation is selective: proven traction gets bought, the seed tail quietly disappears.',
  },
  {
    title: 'Coverage of this view',
    body: '25 of the 35 acquired companies have a verified buyer in the curated acquisition file. The rest carry acquired status with the buyer untracked; their traction notes carry what is known.',
  },
]

const TABS = ['acquired', 'pivoted', 'dead'] as const
type Tab = (typeof TABS)[number]

function AcquiredToolbar({
  api,
  rows,
}: {
  api: DataTableApi
  rows: Company[]
}) {
  const [search, setSearch] = React.useState('')
  const [debounced, setDebounced] = React.useState('')

  React.useEffect(() => {
    const t = setTimeout(() => setDebounced(search), 200)
    return () => clearTimeout(t)
  }, [search])

  React.useEffect(() => {
    api.setGlobalFilter(debounced)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced])

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="relative w-full max-w-72">
        <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search companies, acquirers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-8 pl-8"
        />
        {search && (
          <button
            type="button"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            onClick={() => setSearch('')}
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>
      {api.filteredCount !== rows.length && (
        <Button
          variant="ghost"
          size="sm"
          className="h-8"
          onClick={() => api.setGlobalFilter('')}
        >
          Reset
        </Button>
      )}
    </div>
  )
}

export function Acquired({ route }: { route: Route }) {
  const { data: companies, loading } = useData<Company[]>('companies')
  const [tab, setTab] = React.useState<Tab>(
    (TABS as readonly string[]).includes(route.param)
      ? (route.param as Tab)
      : 'acquired',
  )
  const [selected, setSelected] = React.useState<Company | null>(null)

  const stats = React.useMemo(() => {
    if (!companies) return null
    const acquired = companies.filter((c) => c.status === 'acquired')
    const withBuyer = acquired.filter((c) => c.acquirer)
    const acquirers = new Map<string, number>()
    for (const c of withBuyer) {
      acquirers.set(c.acquirer, (acquirers.get(c.acquirer) ?? 0) + 1)
    }
    return {
      acquired,
      withBuyer,
      acquirers: [...acquirers.entries()].sort(
        (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]),
      ),
      pivoted: companies.filter((c) => c.status === 'pivoted'),
      dead: companies.filter((c) => c.status === 'dead'),
      ycBacked: acquired.filter((c) => c.yc_batch).length,
    }
  }, [companies])

  const rows = React.useMemo(() => {
    if (!companies) return []
    return companies.filter((c) => c.status === tab)
  }, [companies, tab])

  const columns = React.useMemo<LegacyColumnDef<Company>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Company',
        cell: ({ row }) =>
          row.original.website ? (
            <a
              href={row.original.website}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-2 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {row.original.name}
            </a>
          ) : (
            <span className="font-medium">{row.original.name}</span>
          ),
      },
      {
        accessorKey: 'acquirer',
        header: 'Acquirer',
        cell: ({ row }) =>
          row.original.acquirer ? (
            <div className="flex flex-col">
              <span className="font-medium">{row.original.acquirer}</span>
              {row.original.acquire_note && (
                <span className="text-[11px] text-muted-foreground">
                  {row.original.acquire_note}
                </span>
              )}
            </div>
          ) : (
            <span className="text-muted-foreground/60">—</span>
          ),
      },
      {
        accessorKey: 'layer',
        header: 'Layer',
        cell: ({ row }) => (
          <Badge variant="muted" className="font-mono text-[11px]">
            {row.original.layer}
          </Badge>
        ),
      },
      {
        accessorKey: 'vertical',
        header: 'Vertical',
        cell: ({ row }) => (
          <span className="whitespace-nowrap text-muted-foreground">
            {row.original.vertical === 'general'
              ? '—'
              : row.original.vertical}
          </span>
        ),
      },
      {
        accessorKey: 'traction',
        header: 'Traction',
        cell: ({ row }) => (
          <span className="block max-w-64 truncate text-xs text-muted-foreground">
            {row.original.traction}
          </span>
        ),
      },
      {
        accessorKey: 'yc_batch',
        header: 'YC',
        cell: ({ row }) =>
          row.original.yc_batch ? (
            <Badge variant="muted" className="font-mono text-[11px]">
              {row.original.yc_batch}
            </Badge>
          ) : (
            <span className="text-muted-foreground/60">—</span>
          ),
      },
    ],
    [],
  )

  if (loading || !stats) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-48" />
        <Skeleton className="h-96" />
      </div>
    )
  }

  const tabCounts: Record<Tab, number> = {
    acquired: stats.acquired.length,
    pivoted: stats.pivoted.length,
    dead: stats.dead.length,
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Acquired companies
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          The consolidation record of the census: who is buying, what they buy,
          and what happens to the companies nobody buys. Click a row for the
          company drawer.
        </p>
      </div>

      <SectionSummary
        points={ACQUIRED_POINTS}
        links={['phase2', 'phase3'].map((id) => {
          const r = reportById(id)!
          return { label: r.title + ' report', href: reportUrl(r) }
        })}
      >
        <SummaryLink
          icon={Lightbulb}
          label="Moats & M&A theme"
          onClick={() => navigate({ view: 'themes' })}
        />
      </SectionSummary>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Acquired"
          value={stats.acquired.length.toString()}
          sub="of 1,328 census companies"
        />
        <StatCard
          label="Tracked buyers"
          value={`${stats.withBuyer.length} of ${stats.acquired.length}`}
          sub="verified in the acquisition file"
        />
        <StatCard
          label="YC-backed among acquired"
          value={stats.ycBacked.toString()}
          sub="went through YC before exit"
        />
        <StatCard
          label="Largest deal"
          value="Moveworks · $2.85B"
          sub="ServiceNow, announced Mar 2025"
        />
      </div>

      <Card className="py-4">
        <CardContent className="px-5">
          <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Who is buying
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {stats.acquirers.map(([name, count]) => (
              <Badge
                key={name}
                variant={count > 1 ? 'default' : 'muted'}
                className="gap-1"
              >
                {name}
                {count > 1 && (
                  <span className="font-mono text-[10px] opacity-70">
                    ×{count}
                  </span>
                )}
              </Badge>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {stats.acquirers.filter(([, n]) => n > 1).length} repeat buyers
            across {stats.acquirers.length} tracked acquisitions; the rest are
            single-deal acquirers.
          </p>
        </CardContent>
      </Card>

      <div className="flex flex-wrap items-center gap-2">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={
              tab === t
                ? 'rounded-full bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground'
                : 'rounded-full border px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground'
            }
          >
            {t === 'acquired'
              ? `Acquired (${tabCounts.acquired})`
              : t === 'pivoted'
                ? `Pivoted (${tabCounts.pivoted})`
                : `Dead (${tabCounts.dead})`}
          </button>
        ))}
        <span className="ml-1 text-xs text-muted-foreground">
          the full operating-state record, not just the acquisitions
        </span>
      </div>

      <Card className="py-0">
        <CardContent className="px-4 py-4">
          <DataTable
            columns={columns}
            data={rows}
            initialSorting={[{ id: 'name', desc: false }]}
            toolbar={(api) => <AcquiredToolbar api={api} rows={rows} />}
            onRowClick={(row) => setSelected(row)}
          />
        </CardContent>
      </Card>

      <CompanyDrawer company={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
