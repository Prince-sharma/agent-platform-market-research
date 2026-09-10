import * as React from 'react'
import type {
  ColumnVisibilityState,
  RowData,
  SortingState,
} from '@tanstack/react-table'
import {
  type LegacyColumnDef,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useLegacyTable,
} from '@tanstack/react-table/legacy'
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'

export type { SortingState }

interface DataTableProps<TData extends RowData> {
  columns: LegacyColumnDef<TData>[]
  data: TData[]
  /** Column ids that get faceted filter values in the toolbar. */
  initialSorting?: SortingState
  initialPageSize?: number
  /** Initial column filters, e.g. from a deep link. */
  initialColumnFilters?: { id: string; value: unknown }[]
  /** Rendered above the table (toolbar). */
  toolbar?: (table: DataTableApi) => React.ReactNode
  onRowClick?: (row: TData) => void
  stickyFirstColumn?: boolean
  compact?: boolean
}

export interface DataTableApi {
  getColumnFilterValues: (columnId: string) => string[]
  setColumnFilterValues: (columnId: string, values: string[]) => void
  getNumericFilter: (columnId: string) => { min?: number; max?: number }
  setNumericFilter: (
    columnId: string,
    range: { min?: number; max?: number },
  ) => void
  globalFilter: string
  setGlobalFilter: (value: string) => void
  columnVisibility: ColumnVisibilityState
  setColumnVisibility: (value: ColumnVisibilityState) => void
  filteredCount: number
  totalCount: number
}

/**
 * Full-featured data table: sorting, per-column faceted filters, global
 * search (wired by the caller via the toolbar), pagination, and column
 * visibility. Uses TanStack Table's legacy (v8-compatible) API.
 */
export function DataTable<TData extends RowData>({
  columns,
  data,
  initialSorting = [],
  initialPageSize = 25,
  initialColumnFilters = [],
  toolbar,
  onRowClick,
  stickyFirstColumn = true,
  compact = false,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = React.useState<SortingState>(initialSorting)
  const [columnFilters, setColumnFilters] = React.useState<
    { id: string; value: unknown }[]
  >(initialColumnFilters)
  const [globalFilter, setGlobalFilter] = React.useState('')
  const [columnVisibility, setColumnVisibility] =
    React.useState<ColumnVisibilityState>({})

  const table = useLegacyTable({
    data,
    columns,
    state: { sorting, columnFilters, globalFilter, columnVisibility },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    globalFilterFn: 'includesString',
    initialState: { pagination: { pageIndex: 0, pageSize: initialPageSize } },
  })

  const api: DataTableApi = React.useMemo(
    () => ({
      getColumnFilterValues: (columnId) => {
        const v = table.getColumn(columnId)?.getFilterValue()
        return Array.isArray(v) ? (v as string[]) : []
      },
      setColumnFilterValues: (columnId, values) => {
        const col = table.getColumn(columnId)
        if (!col) return
        col.setFilterValue(values.length ? values : undefined)
      },
      getNumericFilter: (columnId) => {
        const v = table.getColumn(columnId)?.getFilterValue() as
          | { min?: number; max?: number }
          | undefined
        return v ?? {}
      },
      setNumericFilter: (columnId, range) => {
        const col = table.getColumn(columnId)
        if (!col) return
        col.setFilterValue(
          range.min === undefined && range.max === undefined
            ? undefined
            : range,
        )
      },
      globalFilter,
      setGlobalFilter,
      columnVisibility,
      setColumnVisibility,
      filteredCount: table.getFilteredRowModel().rows.length,
      totalCount: data.length,
    }),
    [table, globalFilter, columnVisibility, data.length],
  )

  return (
    <div className="flex h-full flex-col gap-3">
      {toolbar?.(api)}
      <div className="overflow-hidden rounded-lg border">
        <div className="max-h-[calc(100vh-16rem)] overflow-auto">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-background">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const canSort = header.column.getCanSort()
                    const sorted = header.column.getIsSorted()
                    return (
                      <TableHead
                        key={header.id}
                        className={cn(
                          'whitespace-nowrap text-xs uppercase tracking-wide',
                          stickyFirstColumn &&
                            header.index === 0 &&
                            'sticky left-0 z-10 bg-background',
                        )}
                      >
                        {header.isPlaceholder ? null : canSort ? (
                          <button
                            type="button"
                            className={cn(
                              'group inline-flex items-center gap-1 hover:text-foreground',
                              sorted && 'text-foreground',
                            )}
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {flexRenderHeader(header)}
                            {sorted === 'asc' ? (
                              <ArrowUp className="size-3" />
                            ) : sorted === 'desc' ? (
                              <ArrowDown className="size-3" />
                            ) : (
                              <ArrowUpDown className="size-3 opacity-0 transition-opacity group-hover:opacity-50" />
                            )}
                          </button>
                        ) : (
                          flexRenderHeader(header)
                        )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className={cn(
                      onRowClick && 'cursor-pointer',
                      compact && '[&>td]:py-1',
                    )}
                    onClick={onRowClick ? () => onRowClick(row.original) : undefined}
                  >
                    {row.getVisibleCells().map((cell, i) => (
                      <TableCell
                        key={cell.id}
                        className={cn(
                          stickyFirstColumn &&
                            i === 0 &&
                            'sticky left-0 z-[5] bg-background',
                        )}
                      >
                        {flexRenderCell(cell)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center text-muted-foreground"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
        <div>
          {api.filteredCount} of {data.length} rows
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline">Rows per page</span>
          <select
            className="h-7 rounded-md border border-input bg-background px-1"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value))
            }}
          >
            {[10, 25, 50, 100, 250].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <span>
            Page {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount() || 1}
          </span>
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronsLeft className="size-3.5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ChevronLeft className="size-3.5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ChevronRight className="size-3.5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <ChevronsRight className="size-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function flexRenderHeader(header: any) {
  const def = header.column.columnDef
  return typeof def.header === 'function' ? def.header(header.getContext()) : def.header
}

function flexRenderCell(cell: any) {
  const def = cell.column.columnDef
  return typeof def.cell === 'function' ? def.cell(cell.getContext()) : null
}
