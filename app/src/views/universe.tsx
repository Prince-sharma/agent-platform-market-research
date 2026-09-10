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
import { type Company } from '@/types'

const STATUS_VARIANT: Record<string, string> = {
  active: 'success',
  acquired: 'default',
  pivoted: 'warning',
  dead: 'danger',
}

function uniqueSorted(values: string[]): string[] {
  return [...new Set(values.filter(Boolean))].sort()
}

export function Universe({ route }: { route: Route }) {
  const { data: companies, loading } = useData<Company[]>('companies')

  const columns = React.useMemo<LegacyColumnDef<Company>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Company',
        cell: ({ row }) => (
          <div className="flex flex-col gap-0.5">
            <span className="font-medium">{row.original.name}</span>
            {row.original.wiki_slug && (
              <button
                type="button"
                className="w-fit text-[11px] text-primary underline-offset-2 hover:underline"
                onClick={(e) => {
                  e.stopPropagation()
                  navigate({ view: 'wiki', param: `companies/${row.original.wiki_slug}` })
                }}
              >
                wiki profile
              </button>
            )}
          </div>
        ),
      },
      {
        accessorKey: 'one_liner',
        header: 'One-liner',
        cell: ({ row }) => (
          <span className="text-muted-foreground">
            {row.original.one_liner}
          </span>
        ),
      },
      {
        accessorKey: 'layer',
        header: 'Layer',
        cell: ({ row }) => (
          <Badge variant="outline" className="whitespace-nowrap">
            {row.original.layer}
          </Badge>
        ),
        filterFn: (row, id, value) => {
          return (value as string[]).includes(row.getValue(id))
        },
      },
      {
        accessorKey: 'scope',
        header: 'Scope',
        filterFn: (row, id, value) =>
          (value as string[]).includes(row.getValue(id)),
      },
      {
        accessorKey: 'vertical',
        header: 'Vertical',
        cell: ({ row }) => (
          <button
            type="button"
            className="text-left hover:text-primary hover:underline"
            onClick={(e) => {
              e.stopPropagation()
              navigate({ view: 'verticals', param: row.original.vertical })
            }}
          >
            {row.original.vertical}
          </button>
        ),
        filterFn: (row, id, value) =>
          (value as string[]).includes(row.getValue(id)),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
          <Badge variant={STATUS_VARIANT[row.original.status] as never}>
            {row.original.status}
          </Badge>
        ),
        filterFn: (row, id, value) =>
          (value as string[]).includes(row.getValue(id)),
      },
      {
        accessorKey: 'traction',
        header: 'Traction',
        cell: ({ row }) => (
          <span className="max-w-56 block truncate text-xs text-muted-foreground">
            {row.original.traction}
          </span>
        ),
      },
      {
        accessorKey: 'priority',
        header: 'Priority',
        filterFn: (row, id, value) =>
          (value as string[]).includes(row.getValue(id)),
      },
      {
        accessorKey: 'task_horizon',
        header: 'Task horizon',
        filterFn: (row, id, value) =>
          (value as string[]).includes(row.getValue(id)),
      },
      {
        accessorKey: 'pricing_model',
        header: 'Pricing',
        filterFn: (row, id, value) =>
          (value as string[]).includes(row.getValue(id)),
      },
      {
        accessorKey: 'yc_batch',
        header: 'YC',
        filterFn: (row, id, value) =>
          (value as string[]).includes(row.getValue(id)),
      },
      {
        accessorKey: 'backers',
        header: 'VC backers',
        cell: ({ row }) =>
          row.original.backers.length ? (
            <span className="text-xs text-muted-foreground">
              {row.original.backers.join(', ')}
            </span>
          ) : (
            <span className="text-xs text-muted-foreground/50">—</span>
          ),
        filterFn: (row, _id, value) => {
          const selected = value as string[]
          return selected.some((b) => row.original.backers.includes(b))
        },
      },
    ],
    [],
  )

  const initialColumnFilters = React.useMemo(() => {
    const filters: { id: string; value: unknown }[] = []
    const q = route.query
    for (const key of [
      'layer',
      'scope',
      'vertical',
      'status',
      'priority',
      'task_horizon',
      'pricing_model',
      'yc_batch',
    ]) {
      if (q[key]) filters.push({ id: key, value: q[key].split(',') })
    }
    return filters
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading || !companies) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-96 w-full" />
      </div>
    )
  }

  const layerOptions = uniqueSorted(companies.map((c) => c.layer))
  const scopeOptions = uniqueSorted(companies.map((c) => c.scope))
  const verticalOptions = uniqueSorted(companies.map((c) => c.vertical))
  const statusOptions = uniqueSorted(companies.map((c) => c.status))
  const priorityOptions = uniqueSorted(companies.map((c) => c.priority))
  const horizonOptions = uniqueSorted(companies.map((c) => c.task_horizon))
  const pricingOptions = uniqueSorted(companies.map((c) => c.pricing_model))
  const ycOptions = uniqueSorted(
    companies.map((c) => c.yc_batch).filter(Boolean),
  )
  const backerOptions = uniqueSorted(
    companies.flatMap((c) => c.backers),
  ).sort((a, b) => a.localeCompare(b))

  return (
    <div className="flex h-full flex-col">
      <div className="mb-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          Agent Universe
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          All {companies.length.toLocaleString()} census companies. Sort, search,
          and filter by any column.
        </p>
      </div>
      <DataTable
        columns={columns}
        data={companies}
        initialColumnFilters={initialColumnFilters}
        initialSorting={[{ id: 'name', desc: false }]}
        toolbar={(api) => (
          <UniverseToolbar api={api} companies={companies} options={{
            layerOptions,
            scopeOptions,
            verticalOptions,
            statusOptions,
            priorityOptions,
            horizonOptions,
            pricingOptions,
            ycOptions,
            backerOptions,
          }} />
        )}
        onRowClick={(row) => {
          if (row.wiki_slug) {
            navigate({ view: 'wiki', param: `companies/${row.wiki_slug}` })
          }
        }}
      />
    </div>
  )
}

interface ToolbarOptions {
  layerOptions: string[]
  scopeOptions: string[]
  verticalOptions: string[]
  statusOptions: string[]
  priorityOptions: string[]
  horizonOptions: string[]
  pricingOptions: string[]
  ycOptions: string[]
  backerOptions: string[]
}

function UniverseToolbar({
  api,
  companies,
  options,
}: {
  api: DataTableApi
  companies: Company[]
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
    api.filteredCount !== companies.length || api.globalFilter !== ''

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative w-full max-w-72">
          <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search companies..."
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
          title="Layer"
          options={options.layerOptions}
          selected={api.getColumnFilterValues('layer')}
          onChange={(v) => api.setColumnFilterValues('layer', v)}
        />
        <FacetedFilter
          title="Scope"
          options={options.scopeOptions}
          selected={api.getColumnFilterValues('scope')}
          onChange={(v) => api.setColumnFilterValues('scope', v)}
        />
        <FacetedFilter
          title="Vertical"
          options={options.verticalOptions}
          selected={api.getColumnFilterValues('vertical')}
          onChange={(v) => api.setColumnFilterValues('vertical', v)}
        />
        <FacetedFilter
          title="Status"
          options={options.statusOptions}
          selected={api.getColumnFilterValues('status')}
          onChange={(v) => api.setColumnFilterValues('status', v)}
        />
        <FacetedFilter
          title="Priority"
          options={options.priorityOptions}
          selected={api.getColumnFilterValues('priority')}
          onChange={(v) => api.setColumnFilterValues('priority', v)}
        />
        <FacetedFilter
          title="Task horizon"
          options={options.horizonOptions}
          selected={api.getColumnFilterValues('task_horizon')}
          onChange={(v) => api.setColumnFilterValues('task_horizon', v)}
        />
        <FacetedFilter
          title="Pricing"
          options={options.pricingOptions}
          selected={api.getColumnFilterValues('pricing_model')}
          onChange={(v) => api.setColumnFilterValues('pricing_model', v)}
        />
        <FacetedFilter
          title="YC batch"
          options={options.ycOptions}
          selected={api.getColumnFilterValues('yc_batch')}
          onChange={(v) => api.setColumnFilterValues('yc_batch', v)}
        />
        <FacetedFilter
          title="VC backer"
          options={options.backerOptions}
          selected={api.getColumnFilterValues('backers')}
          onChange={(v) => api.setColumnFilterValues('backers', v)}
        />
        <ColumnsDropdown api={api} />
        {hasFilters && (
          <Button
            variant="ghost"
            size="sm"
            className="h-8"
            onClick={() => {
              api.setGlobalFilter('')
              for (const id of [
                'layer',
                'scope',
                'vertical',
                'status',
                'priority',
                'task_horizon',
                'pricing_model',
                'yc_batch',
                'backers',
              ]) {
                api.setColumnFilterValues(id, [])
              }
            }}
          >
            Reset
          </Button>
        )}
      </div>
    </div>
  )
}

function ColumnsDropdown({ api }: { api: DataTableApi }) {
  const allColumns: { id: string; label: string }[] = [
    { id: 'name', label: 'Company' },
    { id: 'one_liner', label: 'One-liner' },
    { id: 'layer', label: 'Layer' },
    { id: 'scope', label: 'Scope' },
    { id: 'vertical', label: 'Vertical' },
    { id: 'status', label: 'Status' },
    { id: 'traction', label: 'Traction' },
    { id: 'priority', label: 'Priority' },
    { id: 'task_horizon', label: 'Task horizon' },
    { id: 'pricing_model', label: 'Pricing' },
    { id: 'yc_batch', label: 'YC' },
    { id: 'backers', label: 'VC backers' },
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
