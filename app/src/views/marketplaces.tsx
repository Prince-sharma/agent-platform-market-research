import * as React from 'react'
import { Columns3, Search, X } from 'lucide-react'
import type { LegacyColumnDef } from '@tanstack/react-table/legacy'

import { CompanyDrawer } from '@/components/company-drawer'
import { DataTable, type DataTableApi } from '@/components/data-table'
import { FacetedFilter } from '@/components/faceted-filter'
import { SectionSummary, type SummaryPoint } from '@/components/section-summary'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { type Route } from '@/lib/router'
import { reportById, reportUrl } from '@/lib/reports'
import { useData } from '@/lib/use-data'
import type { Company, MarketplaceAgent } from '@/types'

function uniqueSorted(values: string[]): string[] {
  return [...new Set(values.filter(Boolean))].sort()
}

const MARKETPLACE_ACCENT: Record<string, string> = {
  AWS: 'bg-orange-500/15 text-orange-700 dark:text-orange-400',
  Azure: 'bg-blue-500/15 text-blue-700 dark:text-blue-400',
  Google: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400',
  'Hugging Face': 'bg-yellow-500/15 text-yellow-700 dark:text-yellow-400',
  NVIDIA: 'bg-lime-500/15 text-lime-700 dark:text-lime-400',
  OpenAI: 'bg-teal-500/15 text-teal-700 dark:text-teal-400',
  Salesforce: 'bg-sky-500/15 text-sky-700 dark:text-sky-400',
  ServiceNow: 'bg-green-500/15 text-green-700 dark:text-green-400',
}

const MARKETPLACE_POINTS: SummaryPoint[] = [
  {
    title: 'Adoption is concentrated; listings are not',
    body: 'Only 156 of 1,261 listings (12%) carry strong adoption signals with verifiable numbers; another 291 (23%) are estimated-only long tail with a listing but no evidence of usage.',
  },
  {
    title: 'Half the catalog is not agents',
    body: '601 of 1,261 (48%) are true autonomous agents; 660 are tools or infrastructure. AWS lists 100% true agents, while Azure and Hugging Face list mostly tooling.',
  },
  {
    title: 'Cross-listing is the leading adoption indicator',
    body: '55 publishers appear on two or more marketplaces, and publishers on 3+ show roughly 3x the average adoption-signal strength. Salesforce, ServiceNow, and Accenture lead distribution.',
  },
  {
    title: 'MCP is becoming the standard substrate',
    body: '320 listings (25%) support MCP. Salesforce AgentExchange carries the most concentrated MCP ecosystem (30 servers); Hugging Face exposes 60+ MCP-capable spaces.',
  },
  {
    title: 'Azure has the richest metadata and the worst ratings',
    body: 'The modal Azure listing is 1 star with a single review. Enterprise marketplace reviews skew negative because only frustrated buyers write them.',
  },
  {
    title: 'Top categories',
    body: 'Agent Platforms (102), Productivity (96), Customer Service (95), and Data/Analytics (93) lead the catalog.',
  },
]

export function Marketplaces({ route }: { route: Route }) {
  const { data: agents, loading } = useData<MarketplaceAgent[]>(
    'marketplace-agents',
  )
  const { data: companies, loading: companiesLoading } =
    useData<Company[]>('companies')
  const [selected, setSelected] = React.useState<Company | null>(null)
  const apiRef = React.useRef<DataTableApi | null>(null)
  const websiteByName = React.useMemo(() => {
    const m = new Map<string, string>()
    for (const c of companies ?? []) {
      if (c.website) m.set(c.name.toLowerCase(), c.website)
    }
    return m
  }, [companies])

  const columns = React.useMemo<LegacyColumnDef<MarketplaceAgent>[]>(
    () => [
      {
        accessorKey: 'n',
        header: 'Agent',
        cell: ({ row }) => {
          const site = websiteByName.get(row.original.p.toLowerCase())
          return (
            <div className="flex flex-col">
              {row.original.u ? (
                <a
                  href={row.original.u}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit font-medium text-primary underline-offset-2 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {row.original.n}
                </a>
              ) : (
                <span className="font-medium">{row.original.n}</span>
              )}
              {site ? (
                <a
                  href={site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-[11px] text-primary underline-offset-2 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {row.original.p}
                </a>
              ) : (
                <span className="text-[11px] text-muted-foreground">
                  {row.original.p}
                </span>
              )}
            </div>
          )
        },
      },
      {
        accessorKey: 'm',
        header: 'Marketplace',
        cell: ({ row }) => (
          <Badge
            variant="outline"
            className={
              MARKETPLACE_ACCENT[row.original.m] ??
              'bg-muted text-foreground'
            }
          >
            {row.original.m}
          </Badge>
        ),
        filterFn: (row, id, value) =>
          (value as string[]).includes(row.getValue(id)),
      },
      {
        accessorKey: 'c',
        header: 'Category',
        cell: ({ row }) => (
          <span className="whitespace-nowrap text-muted-foreground">
            {row.original.c}
          </span>
        ),
        filterFn: (row, id, value) =>
          (value as string[]).includes(row.getValue(id)),
      },
      {
        accessorKey: 'a',
        header: 'Description',
        cell: ({ row }) => (
          <span className="block max-w-md truncate text-xs text-muted-foreground">
            {row.original.a}
          </span>
        ),
      },
      {
        accessorKey: 's',
        header: 'Signal',
        cell: ({ row }) => (
          <Badge
            variant={row.original.s === 'reported' ? 'success' : 'warning'}
            className="whitespace-nowrap"
          >
            {row.original.s}
          </Badge>
        ),
        filterFn: (row, id, value) =>
          (value as string[]).includes(row.getValue(id)),
      },
      {
        accessorKey: 'pr',
        header: 'Pricing',
        cell: ({ row }) => (
          <span className="block max-w-56 truncate text-xs text-muted-foreground">
            {row.original.pr}
          </span>
        ),
      },
      {
        accessorKey: 'pricing_bucket',
        header: 'Pricing model',
        cell: ({ row }) => (
          <Badge variant="muted" className="whitespace-nowrap">
            {row.original.pricing_bucket}
          </Badge>
        ),
        filterFn: (row, id, value) =>
          (value as string[]).includes(row.getValue(id)),
      },
      {
        accessorKey: 'r',
        header: 'Rating',
        cell: ({ row }) =>
          row.original.r ? (
            <span className="tabular-nums">{row.original.r}</span>
          ) : (
            <span className="text-muted-foreground/50">—</span>
          ),
      },
      {
        accessorKey: 'mc',
        header: 'Managed',
        filterFn: (row, id, value) =>
          (value as string[]).includes(row.getValue(id)),
      },
      {
        accessorKey: 'aa',
        header: 'AI agent',
        filterFn: (row, id, value) =>
          (value as string[]).includes(row.getValue(id)),
      },
    ],
    [websiteByName],
  )

  const initialColumnFilters = React.useMemo(() => {
    const filters: { id: string; value: unknown }[] = []
    const q = route.query
    for (const key of ['m', 'c', 's', 'pricing_bucket', 'mc', 'aa']) {
      if (q[key]) filters.push({ id: key, value: q[key].split(',') })
    }
    return filters
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const byMarketplace = React.useMemo(() => {
    if (!agents) return []
    const counts = new Map<string, number>()
    for (const a of agents) counts.set(a.m, (counts.get(a.m) ?? 0) + 1)
    return [...counts.entries()].sort((a, b) => b[1] - a[1])
  }, [agents])

  const platforms = React.useMemo(() => {
    if (!agents) return []
    const map = new Map<
      string,
      { name: string; count: number; trueAgents: number; reported: number; mcp: number }
    >()
    for (const a of agents) {
      let p = map.get(a.m)
      if (!p) {
        p = { name: a.m, count: 0, trueAgents: 0, reported: 0, mcp: 0 }
        map.set(a.m, p)
      }
      p.count += 1
      if (a.aa === 'Yes') p.trueAgents += 1
      if (a.s === 'reported') p.reported += 1
      if (a.mc === 'Yes') p.mcp += 1
    }
    return [...map.values()].sort((a, b) => b.count - a.count)
  }, [agents])

  const censusPublishers = React.useMemo(() => {
    if (!agents || !companies) return []
    const byName = new Map(companies.map((c) => [c.name.toLowerCase(), c]))
    const map = new Map<
      string,
      { company: Company; marketplaces: Set<string> }
    >()
    for (const a of agents) {
      const p = (a.p || '').toLowerCase()
      const company = byName.get(p)
      if (!company) continue
      let entry = map.get(p)
      if (!entry) {
        entry = { company, marketplaces: new Set() }
        map.set(p, entry)
      }
      entry.marketplaces.add(a.m)
    }
    return [...map.values()].sort(
      (a, b) =>
        b.marketplaces.size - a.marketplaces.size ||
        a.company.name.localeCompare(b.company.name),
    )
  }, [agents, companies])

  const layerBreakdown = React.useMemo(() => {
    const counts = new Map<string, number>()
    for (const { company } of censusPublishers) {
      counts.set(company.layer, (counts.get(company.layer) ?? 0) + 1)
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1])
  }, [censusPublishers])

  const toggleMarketplace = (name: string) => {
    const api = apiRef.current
    if (!api) return
    const current = api.getColumnFilterValues('m')
    api.setColumnFilterValues('m', current.includes(name) ? [] : [name])
  }

  if (loading || companiesLoading || !agents || !companies) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-96 w-full" />
      </div>
    )
  }

  const marketplaceOptions = uniqueSorted(agents.map((a) => a.m))
  const categoryOptions = uniqueSorted(agents.map((a) => a.c))
  const signalOptions = uniqueSorted(agents.map((a) => a.s))
  const bucketOptions = uniqueSorted(agents.map((a) => a.pricing_bucket))
  const managedOptions = uniqueSorted(agents.map((a) => a.mc))
  const aiOptions = uniqueSorted(agents.map((a) => a.aa))

  const multiPlatform = censusPublishers.filter(
    (p) => p.marketplaces.size > 1,
  ).length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Marketplace agents
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {agents.length.toLocaleString()} agents across{' '}
          {byMarketplace.length} cloud marketplaces. Click a platform to filter
          the table; every agent name links to its listing.
        </p>
      </div>

      <SectionSummary
        points={MARKETPLACE_POINTS}
        links={['marketplace', 'azure'].map((id) => {
          const r = reportById(id)!
          return { label: r.title + ' report', href: reportUrl(r) }
        })}
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {platforms.map((p) => (
          <button
            key={p.name}
            type="button"
            onClick={() => toggleMarketplace(p.name)}
            className="rounded-xl border bg-card p-4 text-left transition-colors hover:border-primary/50"
          >
            <div className="flex items-center justify-between gap-2">
              <Badge
                variant="outline"
                className={
                  MARKETPLACE_ACCENT[p.name] ?? 'bg-muted text-foreground'
                }
              >
                {p.name}
              </Badge>
              <span className="text-lg font-semibold tabular-nums">
                {p.count}
              </span>
            </div>
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
              <span>{p.trueAgents} true agents</span>
              <span>{p.reported} reported</span>
              <span>{p.mcp} MCP</span>
            </div>
          </button>
        ))}
      </div>

      <Card className="py-4">
        <CardContent className="px-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div className="text-sm font-medium">
              Census companies publishing on marketplaces
            </div>
            <div className="text-xs text-muted-foreground">
              {censusPublishers.length} of {companies.length.toLocaleString()}{' '}
              census companies sell agents here
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {layerBreakdown.map(([layer, count]) => (
              <Badge
                key={layer}
                variant="muted"
                className="font-mono text-[11px]"
              >
                {layer} · {count}
              </Badge>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {censusPublishers.map(({ company, marketplaces: ms }) => (
              <button
                key={company.name}
                type="button"
                onClick={() => setSelected(company)}
                className="rounded-full border px-2.5 py-1 text-xs transition-colors hover:border-primary/50 hover:text-foreground"
              >
                {company.name}
                <span className="text-muted-foreground">
                  {' '}
                  {[...ms].sort().join(', ')}
                </span>
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            {multiPlatform} of them list on more than one marketplace;
            cross-listing correlates with adoption. Click a company for its
            drawer.
          </p>
        </CardContent>
      </Card>

      <Card className="py-0">
        <CardContent className="px-4 py-4">
          <DataTable
            columns={columns}
            data={agents}
            initialColumnFilters={initialColumnFilters}
            initialSorting={[{ id: 'n', desc: false }]}
            toolbar={(api) => {
              apiRef.current = api
              return (
                <MarketplaceToolbar
                  api={api}
                  agents={agents}
                  options={{
                    marketplaceOptions,
                    categoryOptions,
                    signalOptions,
                    bucketOptions,
                    managedOptions,
                    aiOptions,
                  }}
                />
              )
            }}
          />
        </CardContent>
      </Card>

      <CompanyDrawer company={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

interface ToolbarOptions {
  marketplaceOptions: string[]
  categoryOptions: string[]
  signalOptions: string[]
  bucketOptions: string[]
  managedOptions: string[]
  aiOptions: string[]
}

function MarketplaceToolbar({
  api,
  agents,
  options,
}: {
  api: DataTableApi
  agents: MarketplaceAgent[]
  options: ToolbarOptions
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

  const hasFilters =
    api.filteredCount !== agents.length || api.globalFilter !== ''

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="relative w-full max-w-72">
        <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search agents, publishers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-8 pl-8"
        />
        {search && (
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            onClick={() => setSearch('')}
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>
      <FacetedFilter
        title="Marketplace"
        options={options.marketplaceOptions}
        selected={api.getColumnFilterValues('m')}
        onChange={(v) => api.setColumnFilterValues('m', v)}
      />
      <FacetedFilter
        title="Category"
        options={options.categoryOptions}
        selected={api.getColumnFilterValues('c')}
        onChange={(v) => api.setColumnFilterValues('c', v)}
      />
      <FacetedFilter
        title="Signal"
        options={options.signalOptions}
        selected={api.getColumnFilterValues('s')}
        onChange={(v) => api.setColumnFilterValues('s', v)}
      />
      <FacetedFilter
        title="Pricing model"
        options={options.bucketOptions}
        selected={api.getColumnFilterValues('pricing_bucket')}
        onChange={(v) => api.setColumnFilterValues('pricing_bucket', v)}
      />
      <FacetedFilter
        title="Managed"
        options={options.managedOptions}
        selected={api.getColumnFilterValues('mc')}
        onChange={(v) => api.setColumnFilterValues('mc', v)}
      />
      <FacetedFilter
        title="AI agent"
        options={options.aiOptions}
        selected={api.getColumnFilterValues('aa')}
        onChange={(v) => api.setColumnFilterValues('aa', v)}
      />
      <ColumnsDropdown api={api} />
      {hasFilters && (
        <Button
          variant="ghost"
          size="sm"
          className="h-8"
          onClick={() => {
            api.setGlobalFilter('')
            for (const id of ['m', 'c', 's', 'pricing_bucket', 'mc', 'aa']) {
              api.setColumnFilterValues(id, [])
            }
          }}
        >
          Reset
        </Button>
      )}
    </div>
  )
}

function ColumnsDropdown({ api }: { api: DataTableApi }) {
  const allColumns: { id: string; label: string }[] = [
    { id: 'n', label: 'Agent' },
    { id: 'm', label: 'Marketplace' },
    { id: 'c', label: 'Category' },
    { id: 'a', label: 'Description' },
    { id: 's', label: 'Signal' },
    { id: 'pr', label: 'Pricing' },
    { id: 'pricing_bucket', label: 'Pricing model' },
    { id: 'r', label: 'Rating' },
    { id: 'mc', label: 'Managed' },
    { id: 'aa', label: 'AI agent' },
  ]
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8">
          <Columns3 className="size-3.5" />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {allColumns.map((col) => (
          <DropdownMenuCheckboxItem
            key={col.id}
            checked={api.columnVisibility[col.id] !== false}
            onCheckedChange={(v) =>
              api.setColumnVisibility({ ...api.columnVisibility, [col.id]: !!v })
            }
            onSelect={(e) => e.preventDefault()}
          >
            {col.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
