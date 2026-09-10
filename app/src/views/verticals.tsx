import * as React from 'react'
import { ArrowLeft, Layers as LayersIcon, Search, X } from 'lucide-react'
import type { LegacyColumnDef } from '@tanstack/react-table/legacy'

import { CompanyDrawer } from '@/components/company-drawer'
import { DataTable, type DataTableApi } from '@/components/data-table'
import { FacetedFilter } from '@/components/faceted-filter'
import { SectionSummary, type SummaryPoint } from '@/components/section-summary'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { navigate, type Route } from '@/lib/router'
import { reportById, reportUrl } from '@/lib/reports'
import { useData } from '@/lib/use-data'
import { LAYER_ORDER, type Company } from '@/types'

const STATUS_VARIANT: Record<string, string> = {
  active: 'success',
  acquired: 'default',
  pivoted: 'warning',
  dead: 'danger',
}

const VERTICAL_POINTS: SummaryPoint[] = [
  {
    title: 'Vertical-first, infrastructure-second',
    body: 'L3 vertical agents entered the market first (76% of the W21 YC cohort); infrastructure arrived later. That order is why vertical agents still hand-roll their own memory, evals, and tool access.',
  },
  {
    title: 'Healthcare is the deepest vertical',
    body: '101 companies. Clinical documentation leads (Abridge at $5.3B), and buyers gate on audit-grade reliability rather than raw capability.',
  },
  {
    title: 'Finance is large but fragmented',
    body: 'The finance verticals lead on count but split across dozens of seed-stage entrants. Audit (PCAOB-regulated) and mid-market tax remain nearly empty.',
  },
  {
    title: 'The thin frontier',
    body: 'Construction and logistics remain thin relative to their workflow volume: the clearest open ground for new entrants.',
  },
  {
    title: 'Voice is the default interface',
    body: 'Inside logistics, healthcare, and collections verticals, voice is how agents meet the work (Parloa $3B, LiveKit and Deepgram $1B+ each).',
  },
  {
    title: 'What gets adopted',
    body: 'Agents that solve one specific workflow, embed in existing distribution, and price on outcomes. The marketplace catalog shows the same concentration: customer service and productivity lead the categories.',
  },
]

/**
 * Curated per-vertical learnings, keyed by the vertical string used in the
 * census data. Verticals without an entry get a computed fallback line.
 */
const VERTICAL_LEARNINGS: Record<string, string> = {
  healthcare:
    "The deepest vertical. Clinical documentation and revenue-cycle agents lead (Abridge at $5.3B); accuracy claims run from Parahelp's candid 46% to Anterior's KLAS-verified 99.24%, and buyers gate on audit-grade reliability.",
  'software engineering':
    'The best-monetized vertical: Cursor at $500M+ ARR and Cognition at roughly $900M run-rate. The open gap is reliability on long tasks (Devin showed a 15% success rate across 20 real tasks).',
  'gtm/sales':
    'Dense and embedded in CRM distribution; voice AI is the default outbound interface. Consolidation already runs through the suites (Quilt to Rox, Moonhub to Salesforce).',
  finance:
    'A fragmented seed-stage field. Per-outcome pricing claims are strongest here but rarely published; audit (PCAOB-regulated) and mid-market tax remain nearly empty.',
  'finance/accounting':
    'Fragmented across dozens of seed-stage entrants; close automation and accounts payable dominate. Audit and mid-market tax are the open ground.',
  'customer service':
    'The most proven ROI in the census: Ada resolves 83% of inquiries autonomously and Klarna\u2019s assistant handled 2.3M conversations; per-resolution pricing sits at $0.50-$2.00.',
  security:
    'Agent security is the most crowded new infrastructure category (Zenity $125M Series C, Neo $100M launch), while Okta and Microsoft ship agent identity into incumbent installs.',
  legal:
    'Harvey at $11B leads; adoption is gated on citation-grade accuracy and privilege controls rather than capability.',
  logistics:
    'Thin relative to workflow volume; voice is the default interface for dispatch and collections work.',
  construction:
    'The clearest remaining vertical frontier: a workflow-heavy industry with only a handful of agent entrants.',
  hr: 'Recruiting and onboarding agents; consolidation already started (Moonhub acqui-hired by Salesforce).',
  it: 'IT support and ops agents sit closest to the suite buyers (ServiceNow took Moveworks for $2.85B).',
}

function uniqueSorted(values: string[]): string[] {
  return [...new Set(values.filter(Boolean))].sort()
}

function VerticalsPicker({
  companies,
}: {
  companies: Company[]
}) {
  const [query, setQuery] = React.useState('')

  const verticals = React.useMemo(() => {
    const map = new Map<string, { count: number; layers: Map<string, number> }>()
    for (const c of companies) {
      if (c.scope !== 'vertical' || !c.vertical || c.vertical === 'general')
        continue
      let entry = map.get(c.vertical)
      if (!entry) {
        entry = { count: 0, layers: new Map() }
        map.set(c.vertical, entry)
      }
      entry.count += 1
      entry.layers.set(c.layer, (entry.layers.get(c.layer) ?? 0) + 1)
    }
    return [...map.entries()]
      .sort((a, b) => b[1].count - a[1].count)
      .map(([name, info]) => ({ name, ...info }))
  }, [companies])

  const filtered = React.useMemo(() => {
    if (!query.trim()) return verticals
    const q = query.trim().toLowerCase()
    return verticals.filter((v) => v.name.toLowerCase().includes(q))
  }, [verticals, query])

  return (
    <div className="space-y-4">
      <div className="relative w-full max-w-72">
        <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search verticals..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-9 pl-8"
        />
        {query && (
          <button
            type="button"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            onClick={() => setQuery('')}
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((v) => (
          <button
            key={v.name}
            type="button"
            className="group rounded-xl border bg-card p-4 text-left transition-colors hover:border-primary/50"
            onClick={() => navigate({ view: 'verticals', param: v.name })}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="truncate font-medium">{v.name}</span>
              <span className="text-lg font-semibold tabular-nums text-primary">
                {v.count}
              </span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {LAYER_ORDER.map((l) => {
                const n = v.layers.get(l)
                if (!n) return null
                return (
                  <Badge key={l} variant="muted" className="font-mono text-[10px]">
                    {l}·{n}
                  </Badge>
                )
              })}
            </div>
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-8 text-center text-sm text-muted-foreground">
            No verticals match.
          </p>
        )}
      </div>
    </div>
  )
}

function VerticalDetail({
  companies,
  vertical,
}: {
  companies: Company[]
  vertical: string
}) {
  const [selected, setSelected] = React.useState<Company | null>(null)
  const rows = React.useMemo(
    () =>
      companies.filter(
        (c) => c.vertical.toLowerCase() === vertical.toLowerCase(),
      ),
    [companies, vertical],
  )

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
        accessorKey: 'one_liner',
        header: 'One-liner',
        cell: ({ row }) => (
          <span className="block max-w-md truncate text-muted-foreground">
            {row.original.one_liner}
          </span>
        ),
      },
      {
        accessorKey: 'layer',
        header: 'Layer',
        cell: ({ row }) => (
          <Badge variant="outline" className="font-mono">
            {row.original.layer}
          </Badge>
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
          <span className="block max-w-56 truncate text-xs text-muted-foreground">
            {row.original.traction}
          </span>
        ),
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
    ],
    [],
  )

  const layerOptions = uniqueSorted(rows.map((c) => c.layer))
  const statusOptions = uniqueSorted(rows.map((c) => c.status))
  const horizonOptions = uniqueSorted(rows.map((c) => c.task_horizon))
  const pricingOptions = uniqueSorted(rows.map((c) => c.pricing_model))
  const ycOptions = uniqueSorted(rows.map((c) => c.yc_batch).filter(Boolean))

  const curated = VERTICAL_LEARNINGS[vertical.toLowerCase()]
  const l3Count = rows.filter((c) => c.layer === 'L3').length
  const summary =
    curated ??
    `${rows.length} companies build agents for ${vertical.toLowerCase()}, ${l3Count} of them vertical agents (L3). No curated learning yet; the table below and the wiki cluster pages carry the detail.`

  return (
    <div>
      <div className="mb-3 flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate({ view: 'verticals' })}
        >
          <ArrowLeft className="size-4" />
          All verticals
        </Button>
        <LayersIcon className="size-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          {rows.length} companies
        </span>
      </div>
      <p className="mb-3 rounded-lg border border-l-2 border-l-primary/40 px-3 py-2.5 text-xs leading-relaxed text-muted-foreground">
        {summary}
      </p>
      <DataTable
        columns={columns}
        data={rows}
        initialSorting={[{ id: 'name', desc: false }]}
        toolbar={(api) => (
          <VerticalToolbar
            api={api}
            rows={rows}
            options={{
              layerOptions,
              statusOptions,
              horizonOptions,
              pricingOptions,
              ycOptions,
            }}
          />
        )}
        onRowClick={(row) => setSelected(row)}
      />
      <CompanyDrawer company={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

interface ToolbarOptions {
  layerOptions: string[]
  statusOptions: string[]
  horizonOptions: string[]
  pricingOptions: string[]
  ycOptions: string[]
}

function VerticalToolbar({
  api,
  rows,
  options,
}: {
  api: DataTableApi
  rows: Company[]
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
        title="Status"
        options={options.statusOptions}
        selected={api.getColumnFilterValues('status')}
        onChange={(v) => api.setColumnFilterValues('status', v)}
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
      {api.filteredCount !== rows.length && (
        <Button
          variant="ghost"
          size="sm"
          className="h-8"
          onClick={() => {
            api.setGlobalFilter('')
            for (const id of [
              'layer',
              'status',
              'task_horizon',
              'pricing_model',
              'yc_batch',
            ]) {
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

export function Verticals({ route }: { route: Route }) {
  const { data: companies, loading } = useData<Company[]>('companies')
  const selected = route.param || ''

  if (loading || !companies) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-96" />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          {selected ? (
            <span className="capitalize">{selected}</span>
          ) : (
            'Verticals'
          )}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {selected
            ? `Companies building agents for ${selected.toLowerCase()}, with per-column filtering.`
            : 'Pick a vertical to see its agent companies. Counts cover vertical-scope companies only.'}
        </p>
      </div>
      {selected ? (
        <VerticalDetail companies={companies} vertical={selected} />
      ) : (
        <div className="space-y-4">
          <SectionSummary
            points={VERTICAL_POINTS}
            links={['phase1', 'phase3'].map((id) => {
              const r = reportById(id)!
              return { label: r.title + ' report', href: reportUrl(r) }
            })}
          />
          <VerticalsPicker companies={companies} />
        </div>
      )}
    </div>
  )
}
