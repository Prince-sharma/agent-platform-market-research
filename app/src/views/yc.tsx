import * as React from 'react'
import { Search, X } from 'lucide-react'
import type { LegacyColumnDef } from '@tanstack/react-table/legacy'

import { BarChart } from '@/components/bar-chart'
import { DataTable, type DataTableApi } from '@/components/data-table'
import { FacetedFilter, NumericRangeFilter } from '@/components/faceted-filter'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { navigate, type Route } from '@/lib/router'
import { useData } from '@/lib/use-data'
import type { YcBatch, YcCohort } from '@/types'

interface YcRow {
  batch: string
  count: number
  l1: number
  l2: number
  l3: number
  l4: number
  l5: number
  x: number
  active: number
  acquired: number
  dead: number
  pivoted: number
  deep: number
  long_horizon: number
  top_verticals: string[]
}

function toRows(cohort: YcCohort): YcRow[] {
  return Object.entries(cohort.batches)
    .sort(([a], [b]) => (a < b ? -1 : 1))
    .map(([batch, b]: [string, YcBatch]) => ({
      batch,
      count: b.count,
      l1: b.layers.L1 ?? 0,
      l2: b.layers.L2 ?? 0,
      l3: b.layers.L3 ?? 0,
      l4: b.layers.L4 ?? 0,
      l5: b.layers.L5 ?? 0,
      x: b.layers.X ?? 0,
      active: b.status.active ?? 0,
      acquired: b.status.acquired ?? 0,
      dead: b.status.dead ?? 0,
      pivoted: b.status.pivoted ?? 0,
      deep: b.deep,
      long_horizon: b.long_horizon,
      top_verticals: b.top_verticals.map(([v]) => v),
    }))
}

const numFilterFn = (row: { getValue: (id: string) => unknown }, id: string, value: unknown) => {
  const range = value as { min?: number; max?: number }
  const v = Number(row.getValue(id))
  if (range.min !== undefined && v < range.min) return false
  if (range.max !== undefined && v > range.max) return false
  return true
}

const NUM_COLS: { id: keyof YcRow & string; label: string }[] = [
  { id: 'count', label: 'Companies' },
  { id: 'l1', label: 'L1' },
  { id: 'l2', label: 'L2' },
  { id: 'l3', label: 'L3' },
  { id: 'l4', label: 'L4' },
  { id: 'l5', label: 'L5' },
  { id: 'x', label: 'X' },
  { id: 'active', label: 'Active' },
  { id: 'acquired', label: 'Acquired' },
  { id: 'dead', label: 'Dead' },
  { id: 'pivoted', label: 'Pivoted' },
  { id: 'deep', label: 'Deep profiles' },
  { id: 'long_horizon', label: 'Long-horizon' },
]

export function YcCohort({ route }: { route: Route }) {
  const { data: cohort, loading } = useData<YcCohort>('yc-cohort')

  const rows = React.useMemo(() => (cohort ? toRows(cohort) : []), [cohort])

  const initialColumnFilters = React.useMemo(() => {
    const filters: { id: string; value: unknown }[] = []
    if (route.query.batch) {
      filters.push({ id: 'batch', value: route.query.batch.split(',') })
    }
    return filters
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const columns = React.useMemo<LegacyColumnDef<YcRow>[]>(
    () => [
      {
        accessorKey: 'batch',
        header: 'Batch',
        cell: ({ row }) => (
          <Badge variant="secondary" className="font-mono">
            {row.original.batch}
          </Badge>
        ),
        filterFn: (row, id, value) =>
          (value as string[]).includes(row.getValue(id)),
      },
      ...NUM_COLS.map((col) => ({
        accessorKey: col.id,
        header: col.label,
        cell: ({ row }: { row: { original: YcRow } }) => {
          const v = row.original[col.id as keyof YcRow] as number
          return (
            <span
              className={
                v === 0 ? 'text-muted-foreground/40' : 'tabular-nums'
              }
            >
              {v}
            </span>
          )
        },
        filterFn: numFilterFn,
      })),
      {
        accessorKey: 'top_verticals',
        header: 'Top verticals',
        cell: ({ row }) => (
          <div className="flex max-w-72 flex-wrap gap-1">
            {row.original.top_verticals.slice(0, 3).map((v) => (
              <Badge key={v} variant="muted" className="text-[10px]">
                {v}
              </Badge>
            ))}
          </div>
        ),
        filterFn: (row, _id, value) => {
          const selected = value as string[]
          const list = row.original.top_verticals
          return selected.some((v) => list.includes(v))
        },
      },
    ],
    [],
  )

  if (loading || !cohort) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-48" />
        <Skeleton className="h-96" />
      </div>
    )
  }

  const chartData = rows.map((r) => ({ label: r.batch, value: r.count }))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">YC cohort</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {cohort.yc_total} YC-backed agent companies across{' '}
          {rows.length} batches (W21-S26). The agentic share of YC batches
          roughly quadrupled from 2021-22 (~9%) to 2025 (~39%). F23 never ran;
          the first Fall batch was F24.
        </p>
      </div>

      <BarChart
        data={chartData}
        className="rounded-xl border bg-card/50 p-3"
        onSelect={(batch) =>
          navigate({ view: 'universe', query: { yc_batch: batch } })
        }
      />

      <div>
        <h2 className="mb-2 text-base font-semibold">Per-batch stats</h2>
        <p className="mb-3 text-xs text-muted-foreground">
          Every column is filterable: batch and top verticals via facets, all
          counts via ranges. Click a batch bar above to open the universe
          filtered to that batch.
        </p>
        <DataTable
          columns={columns}
          data={rows}
          initialColumnFilters={initialColumnFilters}
          initialSorting={[{ id: 'batch', desc: false }]}
          initialPageSize={25}
          toolbar={(api) => <YcToolbar api={api} rows={rows} />}
        />
      </div>
    </div>
  )
}

function YcToolbar({ api, rows }: { api: DataTableApi; rows: YcRow[] }) {
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

  const batchOptions = rows.map((r) => r.batch)
  const verticalOptions = [
    ...new Set(rows.flatMap((r) => r.top_verticals)),
  ].sort()

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="relative w-full max-w-60">
        <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search batch..."
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
        title="Batch"
        options={batchOptions}
        selected={api.getColumnFilterValues('batch')}
        onChange={(v) => api.setColumnFilterValues('batch', v)}
      />
      <FacetedFilter
        title="Top verticals"
        options={verticalOptions}
        selected={api.getColumnFilterValues('top_verticals')}
        onChange={(v) => api.setColumnFilterValues('top_verticals', v)}
      />
      {NUM_COLS.map((col) => (
        <NumericRangeFilter
          key={col.id}
          title={col.label}
          min={api.getNumericFilter(col.id).min}
          max={api.getNumericFilter(col.id).max}
          onChange={(range) => api.setNumericFilter(col.id, range)}
        />
      ))}
      <Button
        variant="ghost"
        size="sm"
        className="h-8"
        onClick={() => {
          api.setGlobalFilter('')
          api.setColumnFilterValues('batch', [])
          api.setColumnFilterValues('top_verticals', [])
          for (const col of NUM_COLS) api.setNumericFilter(col.id, {})
        }}
      >
        Reset
      </Button>
    </div>
  )
}
