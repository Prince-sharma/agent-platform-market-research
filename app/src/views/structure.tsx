import * as React from 'react'
import { Search, X } from 'lucide-react'
import type { LegacyColumnDef } from '@tanstack/react-table/legacy'

import { BarChart } from '@/components/bar-chart'
import { CompanyDrawer } from '@/components/company-drawer'
import { DataTable, type DataTableApi } from '@/components/data-table'
import { SectionSummary, type SummaryPoint } from '@/components/section-summary'
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
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { reportById, reportUrl } from '@/lib/reports'
import { useData } from '@/lib/use-data'
import { LAYER_LABELS, LAYER_ORDER, type Company } from '@/types'

const STATUS_VARIANT: Record<string, string> = {
  active: 'success',
  acquired: 'default',
  pivoted: 'warning',
  dead: 'danger',
}

const STRUCTURE_POINTS: SummaryPoint[] = [
  {
    title: 'An applications market, not a platform market',
    body: '59% of the universe is L3 vertical agents (787 of 1,328); horizontal build platforms are only 139 (10%). Platforms are forming underneath the apps, not the other way around.',
  },
  {
    title: 'The stack built back-to-front',
    body: 'L1 infrastructure barely existed before 2023 (0% of the W21 YC cohort, 33% of S26). The picks-and-shovels arrived two years after the apps, which is why vertical agents still hand-roll memory, evals, and tool access.',
  },
  {
    title: 'Value pools in vertical agents',
    body: 'L3 captured $20.4B (72%) of the $28.3B visible funding; the platform layer is roughly 2% of enterprise genAI spend ($37B in 2025, Menlo Ventures).',
  },
  {
    title: 'Every incumbent suite ships the same product',
    body: 'A low-code agent studio plus prebuilt role agents, with heavy churn: Breeze became Agent Hub, Agentspace folded into Gemini Enterprise, Bedrock Agents demoted to Classic. None has stable product-market fit; none will be left out.',
  },
  {
    title: 'Traction is sharply bimodal',
    body: 'Mega-rounds (Sierra $15B, Cognition reported $48B, Harvey $11B, Abridge $5.3B) against a long seed tail with no visible follow-on.',
  },
  {
    title: 'Scope splits two to one toward verticals',
    body: '871 vertical-scope companies against 457 horizontal-scope; the census examined roughly 6,300 companies across 16 sweeps to reach this set.',
  },
]

function FilterChip({
  label,
  onClear,
}: {
  label: string
  onClear: () => void
}) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border bg-muted/50 py-0.5 pl-2.5 pr-1 text-xs">
      {label}
      <button
        type="button"
        aria-label={`Clear ${label} filter`}
        className="rounded-full p-0.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        onClick={onClear}
      >
        <X className="size-3" />
      </button>
    </span>
  )
}

function StructureToolbar({
  api,
  rows,
  onReset,
}: {
  api: DataTableApi
  rows: Company[]
  onReset: () => void
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
          placeholder="Search companies..."
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
          onClick={() => {
            setSearch('')
            onReset()
          }}
        >
          Reset
        </Button>
      )}
    </div>
  )
}

export function Structure() {
  const { data: companies, loading } = useData<Company[]>('companies')
  const [layer, setLayer] = React.useState('')
  const [scope, setScope] = React.useState('')
  const [status, setStatus] = React.useState('')
  const [selected, setSelected] = React.useState<Company | null>(null)

  const stats = React.useMemo(() => {
    if (!companies) return null
    const layers = new Map<string, number>()
    const scopes = new Map<string, number>()
    const statuses = new Map<string, number>()
    for (const c of companies) {
      layers.set(c.layer, (layers.get(c.layer) ?? 0) + 1)
      scopes.set(c.scope, (scopes.get(c.scope) ?? 0) + 1)
      statuses.set(c.status, (statuses.get(c.status) ?? 0) + 1)
    }
    return {
      total: companies.length,
      layers,
      scopes,
      statuses,
    }
  }, [companies])

  const rows = React.useMemo(() => {
    if (!companies) return []
    return companies.filter(
      (c) =>
        (!layer || c.layer === layer) &&
        (!scope || c.scope === scope) &&
        (!status || c.status === status),
    )
  }, [companies, layer, scope, status])

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
        accessorKey: 'layer',
        header: 'Layer',
        cell: ({ row }) => (
          <Badge variant="muted" className="font-mono text-[11px]">
            {row.original.layer}
          </Badge>
        ),
      },
      {
        accessorKey: 'scope',
        header: 'Scope',
        cell: ({ row }) => (
          <span className="text-muted-foreground">{row.original.scope}</span>
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
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => (
          <Badge variant={STATUS_VARIANT[row.original.status] as never}>
            {row.original.status}
          </Badge>
        ),
      },
      {
        accessorKey: 'one_liner',
        header: 'One-liner',
        cell: ({ row }) => (
          <span className="block max-w-md truncate text-xs text-muted-foreground">
            {row.original.one_liner}
          </span>
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

  const total = stats.total
  const l3 = stats.layers.get('L3') ?? 0
  const l1 = stats.layers.get('L1') ?? 0
  const l2 = stats.layers.get('L2') ?? 0
  const layerCodeByLabel = new Map(
    LAYER_ORDER.map((l) => [LAYER_LABELS[l] ?? l, l]),
  )
  const layerData = LAYER_ORDER.map((l) => ({
    label: LAYER_LABELS[l] ?? l,
    value: stats.layers.get(l) ?? 0,
  }))
  const scopeData = [...stats.scopes.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([label, value]) => ({ label, value }))
  const statusData = [...stats.statuses.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([label, value]) => ({ label, value }))

  const activeFilters =
    (layer ? 1 : 0) + (scope ? 1 : 0) + (status ? 1 : 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Market structure
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          How the {total.toLocaleString()}-company census divides by layer,
          scope, and operating status. Click a bar to filter the table; click a
          row for the company drawer.
        </p>
      </div>

      <SectionSummary
        points={STRUCTURE_POINTS}
        links={['phase1', 'phase2', 'phase3'].map((id) => {
          const r = reportById(id)!
          return { label: r.title + ' report', href: reportUrl(r) }
        })}
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Census companies"
          value={total.toLocaleString()}
          sub="across 16 research sweeps"
        />
        <StatCard
          label="Vertical agents (L3)"
          value={`${l3.toLocaleString()} · ${Math.round((l3 / total) * 100)}%`}
          sub="the applications layer dominates"
        />
        <StatCard
          label="Infrastructure (L1)"
          value={l1.toLocaleString()}
          sub="arrived two years after the apps"
        />
        <StatCard
          label="Build platforms (L2)"
          value={l2.toLocaleString()}
          sub="the layer that gets the attention, 10% of the universe"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Companies by layer</CardTitle>
            <CardDescription>
              Click a layer to filter the table below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={layerData}
              onSelect={(label) => {
                const code = layerCodeByLabel.get(label) ?? ''
                setLayer((prev) => (prev === code ? '' : code))
              }}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Scope and status</CardTitle>
            <CardDescription>
              Click to filter the table below.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <BarChart
              data={scopeData}
              onSelect={(label) =>
                setScope((prev) => (prev === label ? '' : label))
              }
            />
            <BarChart
              data={statusData}
              onSelect={(label) =>
                setStatus((prev) => (prev === label ? '' : label))
              }
            />
          </CardContent>
        </Card>
      </div>

      <Card className="py-0">
        <CardContent className="px-4 py-4">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium">
              {rows.length.toLocaleString()} of {total.toLocaleString()}{' '}
              companies
            </span>
            {layer && (
              <FilterChip
                label={`Layer ${layer}`}
                onClear={() => setLayer('')}
              />
            )}
            {scope && (
              <FilterChip
                label={`Scope ${scope}`}
                onClear={() => setScope('')}
              />
            )}
            {status && (
              <FilterChip
                label={`Status ${status}`}
                onClear={() => setStatus('')}
              />
            )}
            {activeFilters > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-7"
                onClick={() => {
                  setLayer('')
                  setScope('')
                  setStatus('')
                }}
              >
                Clear all
              </Button>
            )}
          </div>
          <DataTable
            columns={columns}
            data={rows}
            initialSorting={[{ id: 'name', desc: false }]}
            toolbar={(api) => (
              <StructureToolbar
                api={api}
                rows={rows}
                onReset={() => {
                  setLayer('')
                  setScope('')
                  setStatus('')
                }}
              />
            )}
            onRowClick={(row) => setSelected(row)}
          />
        </CardContent>
      </Card>

      <CompanyDrawer company={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
