import * as React from 'react'
import { Search, X } from 'lucide-react'
import type { LegacyColumnDef } from '@tanstack/react-table/legacy'

import { DataTable, type DataTableApi } from '@/components/data-table'
import { FacetedFilter, NumericRangeFilter } from '@/components/faceted-filter'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { navigate } from '@/lib/router'
import { useData } from '@/lib/use-data'
import { LAYER_ORDER, type VcBacker } from '@/types'

const numFilterFn = (row: { getValue: (id: string) => unknown }, id: string, value: unknown) => {
  const range = value as { min?: number; max?: number }
  const v = Number(row.getValue(id))
  if (range.min !== undefined && v < range.min) return false
  if (range.max !== undefined && v > range.max) return false
  return true
}

const NUM_COLS: { id: keyof VcBacker & string; label: string }[] = [
  { id: 'count', label: 'Portfolio' },
  { id: 'active', label: 'Active' },
  { id: 'acquired', label: 'Acquired' },
  { id: 'dead', label: 'Dead/pivoted' },
]

export function VcBackers() {
  const { data: backers, loading } = useData<VcBacker[]>('vc-backers')
  const [detail, setDetail] = React.useState<VcBacker | null>(null)

  const columns = React.useMemo<LegacyColumnDef<VcBacker>[]>(
    () => [
      {
        accessorKey: 'backer',
        header: 'Backer',
        cell: ({ row }) => (
          <span className="font-medium">{row.original.backer}</span>
        ),
      },
      ...NUM_COLS.map((col) => ({
        accessorKey: col.id,
        header: col.label,
        cell: ({ row }: { row: { original: VcBacker } }) => {
          const v = row.original[col.id as keyof VcBacker] as number
          return (
            <span className={v === 0 ? 'text-muted-foreground/40' : 'tabular-nums'}>
              {v}
            </span>
          )
        },
        filterFn: numFilterFn,
      })),
      {
        accessorKey: 'layers',
        header: 'Layers',
        cell: ({ row }) => (
          <div className="flex gap-1">
            {LAYER_ORDER.map((l) => {
              const v = row.original.layers[l]
              if (!v) return null
              return (
                <Badge key={l} variant="outline" className="font-mono text-[10px]">
                  {l}·{v}
                </Badge>
              )
            })}
          </div>
        ),
        filterFn: (row, _id, value) => {
          const selected = value as string[]
          const layers = row.original.layers
          return selected.some((l) => layers[l])
        },
      },
      {
        accessorKey: 'top_verticals',
        header: 'Top verticals',
        cell: ({ row }) => (
          <div className="flex max-w-64 flex-wrap gap-1">
            {row.original.top_verticals.map((v) => (
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

  if (loading || !backers) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-96" />
      </div>
    )
  }

  const verticalOptions = [
    ...new Set(backers.flatMap((b) => b.top_verticals)),
  ].sort()

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">VC backers</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {backers.length} firms surfaced by the six VC portfolio sweeps, with
          {backers.reduce((n, b) => n + b.count, 0)} portfolio links into the
          census. Coverage is asymmetric: only some firms publish crawlable
          portfolios, so absence here is not absence of backing. Click a row
          for the portfolio.
        </p>
      </div>

      <DataTable
        columns={columns}
        data={backers}
        initialSorting={[{ id: 'count', desc: true }]}
        toolbar={(api) => <VcToolbar api={api} verticalOptions={verticalOptions} />}
        onRowClick={(row) => setDetail(row)}
      />

      <Dialog open={!!detail} onOpenChange={(o) => !o && setDetail(null)}>
        <DialogContent className="max-h-[85dvh] max-w-3xl overflow-y-auto">
          {detail && (
            <>
              <DialogHeader>
                <DialogTitle>{detail.backer}</DialogTitle>
                <DialogDescription>
                  {detail.count} agent companies in the census · {detail.active}{' '}
                  active · {detail.acquired} acquired · {detail.dead}{' '}
                  dead/pivoted
                </DialogDescription>
              </DialogHeader>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Layer</TableHead>
                    <TableHead>Vertical</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="min-w-48">One-liner</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {detail.companies.map((c) => (
                    <TableRow key={c.name}>
                      <TableCell>
                        {c.wiki_slug ? (
                          <button
                            type="button"
                            className="font-medium text-primary underline-offset-2 hover:underline"
                            onClick={() => {
                              setDetail(null)
                              navigate({
                                view: 'wiki',
                                param: `companies/${c.wiki_slug}`,
                              })
                            }}
                          >
                            {c.name}
                          </button>
                        ) : (
                          <span className="font-medium">{c.name}</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="font-mono text-[10px]">
                          {c.layer}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {c.vertical}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            c.status === 'active'
                              ? 'success'
                              : c.status === 'dead'
                                ? 'danger'
                                : 'muted'
                          }
                        >
                          {c.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground">
                        {c.one_liner}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

function VcToolbar({
  api,
  verticalOptions,
}: {
  api: DataTableApi
  verticalOptions: string[]
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
      <div className="relative w-full max-w-60">
        <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search backer..."
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
      {NUM_COLS.map((col) => (
        <NumericRangeFilter
          key={col.id}
          title={col.label}
          min={api.getNumericFilter(col.id).min}
          max={api.getNumericFilter(col.id).max}
          onChange={(range) => api.setNumericFilter(col.id, range)}
        />
      ))}
      <FacetedFilter
        title="Layers"
        options={LAYER_ORDER}
        selected={api.getColumnFilterValues('layers')}
        onChange={(v) => api.setColumnFilterValues('layers', v)}
      />
      <FacetedFilter
        title="Top verticals"
        options={verticalOptions}
        selected={api.getColumnFilterValues('top_verticals')}
        onChange={(v) => api.setColumnFilterValues('top_verticals', v)}
      />
      <Button
        variant="ghost"
        size="sm"
        className="h-8"
        onClick={() => {
          api.setGlobalFilter('')
          api.setColumnFilterValues('layers', [])
          api.setColumnFilterValues('top_verticals', [])
          for (const col of NUM_COLS) api.setNumericFilter(col.id, {})
        }}
      >
        Reset
      </Button>
    </div>
  )
}
