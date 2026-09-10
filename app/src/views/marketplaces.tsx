import * as React from 'react'
import { Columns3, Search, X } from 'lucide-react'
import type { LegacyColumnDef } from '@tanstack/react-table/legacy'

import { DataTable, type DataTableApi } from '@/components/data-table'
import { FacetedFilter } from '@/components/faceted-filter'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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
import { navigate, type Route } from '@/lib/router'
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

export function Marketplaces({ route }: { route: Route }) {
  const { data: agents, loading } = useData<MarketplaceAgent[]>(
    'marketplace-agents',
  )
  const { data: companies } = useData<Company[]>('companies')
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

  if (loading || !agents) {
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

  return (
    <div className="flex h-full flex-col">
      <div className="mb-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          Marketplace agents
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {agents.length.toLocaleString()} agents across{' '}
          {byMarketplace.length} cloud marketplaces. Adoption signals are
          reported (vendor-stated) or estimated.
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {byMarketplace.map(([m, count]) => (
            <button key={m} type="button" onClick={() => navigate({ view: 'marketplaces', query: { m } })}>
              <Badge
                variant="outline"
                className={
                  MARKETPLACE_ACCENT[m] ?? 'bg-muted text-foreground'
                }
              >
                {m} · {count}
              </Badge>
            </button>
          ))}
        </div>
      </div>
      <DataTable
        columns={columns}
        data={agents}
        initialColumnFilters={initialColumnFilters}
        initialSorting={[{ id: 'n', desc: false }]}
        toolbar={(api) => (
          <MarketplaceToolbar api={api} agents={agents} options={{
            marketplaceOptions,
            categoryOptions,
            signalOptions,
            bucketOptions,
            managedOptions,
            aiOptions,
          }} />
        )}
      />
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
