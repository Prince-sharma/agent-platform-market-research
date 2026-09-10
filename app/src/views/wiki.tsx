import * as React from 'react'
import {
  BookOpen,
  Building2,
  FileStack,
  Folder,
  FolderOpen,
  Lightbulb,
  Search,
  X,
} from 'lucide-react'

import { Markdown } from '@/components/markdown'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'
import { navigate, type Route } from '@/lib/router'
import { useData } from '@/lib/use-data'
import { LAYER_LABELS, LAYER_ORDER, type WikiFile, type WikiPage } from '@/types'
import { cn } from '@/lib/utils'

const KIND_ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  company: Building2,
  theme: Lightbulb,
  cluster: FileStack,
}

function TreePageButton({
  page,
  active,
  onSelect,
}: {
  page: WikiPage
  active: boolean
  onSelect: (slug: string) => void
}) {
  const Icon = KIND_ICON[page.kind] ?? BookOpen
  return (
    <button
      type="button"
      className={cn(
        'flex w-full items-center gap-2 rounded-md px-2 py-1 pr-1 text-left text-[13px] transition-colors',
        active
          ? 'bg-primary/15 font-medium text-primary'
          : 'text-muted-foreground hover:bg-accent hover:text-foreground',
      )}
      onClick={() => onSelect(page.slug)}
    >
      <Icon className="size-3.5 shrink-0 opacity-70" />
      <span className="truncate">{page.title}</span>
    </button>
  )
}

function TreeGroup({
  label,
  count,
  open,
  onToggle,
  children,
}: {
  label: string
  count: number
  open: boolean
  onToggle: (open: boolean) => void
  children: React.ReactNode
}) {
  return (
    <div>
      <button
        type="button"
        className="flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground/80 hover:bg-accent hover:text-foreground"
        onClick={() => onToggle(!open)}
        aria-expanded={open}
      >
        {open ? (
          <FolderOpen className="size-3.5" />
        ) : (
          <Folder className="size-3.5" />
        )}
        {label}
        <span className="ml-auto font-mono text-[10px] normal-case tracking-normal opacity-60">
          {count}
        </span>
      </button>
      {open && <div className="mt-0.5 space-y-0.5">{children}</div>}
    </div>
  )
}

function WikiTree({
  pages,
  selected,
  onSelect,
}: {
  pages: WikiPage[]
  selected: string
  onSelect: (slug: string) => void
}) {
  const [query, setQuery] = React.useState('')
  const [debounced, setDebounced] = React.useState('')
  const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>({
    'themes': true,
    'clusters': true,
  })

  React.useEffect(() => {
    const t = setTimeout(() => setDebounced(query), 200)
    return () => clearTimeout(t)
  }, [query])

  const themes = React.useMemo(
    () => pages.filter((p) => p.kind === 'theme'),
    [pages],
  )
  const clusters = React.useMemo(
    () => pages.filter((p) => p.kind === 'cluster'),
    [pages],
  )
  const companiesByLayer = React.useMemo(() => {
    const map = new Map<string, WikiPage[]>()
    for (const p of pages) {
      if (p.kind !== 'company') continue
      const layer = p.layer || 'X'
      if (!map.has(layer)) map.set(layer, [])
      map.get(layer)!.push(p)
    }
    for (const list of map.values()) {
      list.sort((a, b) => a.title.localeCompare(b.title))
    }
    return map
  }, [pages])

  const searchResults = React.useMemo(() => {
    if (!debounced.trim()) return null
    const q = debounced.trim().toLowerCase()
    return pages
      .filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.markdown.toLowerCase().includes(q),
      )
      .slice(0, 100)
  }, [debounced, pages])

  const select = (slug: string) => {
    onSelect(slug)
  }

  const groupOpen = (id: string, def = false) => openGroups[id] ?? def
  const setGroupOpen = (id: string, open: boolean) =>
    setOpenGroups((g) => ({ ...g, [id]: open }))

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="relative p-2">
        <Search className="absolute left-4 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search the wiki..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-8 pl-8 pr-8"
        />
        {query && (
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            onClick={() => setQuery('')}
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>
      <ScrollArea className="min-h-0 flex-1">
        <div className="space-y-0.5 px-2 pb-4">
          {searchResults ? (
            <>
              <p className="px-2 py-1 text-[11px] text-muted-foreground">
                {searchResults.length} page
                {searchResults.length === 1 ? '' : 's'} match
              </p>
              {searchResults.map((p) => (
                <TreePageButton
                  key={p.slug}
                  page={p}
                  active={selected === p.slug}
                  onSelect={select}
                />
              ))}
            </>
          ) : (
            <>
              <TreeGroup
                label="Themes"
                count={themes.length}
                open={groupOpen('themes', true)}
                onToggle={(o) => setGroupOpen('themes', o)}
              >
                {themes.map((p) => (
                  <TreePageButton
                    key={p.slug}
                    page={p}
                    active={selected === p.slug}
                    onSelect={select}
                  />
                ))}
              </TreeGroup>
              <TreeGroup
                label="Clusters"
                count={clusters.length}
                open={groupOpen('clusters', true)}
                onToggle={(o) => setGroupOpen('clusters', o)}
              >
                {clusters.map((p) => (
                  <TreePageButton
                    key={p.slug}
                    page={p}
                    active={selected === p.slug}
                    onSelect={select}
                  />
                ))}
              </TreeGroup>
              {LAYER_ORDER.map((layer) => {
                const list = companiesByLayer.get(layer) ?? []
                if (!list.length) return null
                return (
                  <TreeGroup
                    key={layer}
                    label={LAYER_LABELS[layer] ?? layer}
                    count={list.length}
                    open={groupOpen(`layer-${layer}`)}
                    onToggle={(o) => setGroupOpen(`layer-${layer}`, o)}
                  >
                    {list.map((p) => (
                      <TreePageButton
                        key={p.slug}
                        page={p}
                        active={selected === p.slug}
                        onSelect={select}
                      />
                    ))}
                  </TreeGroup>
                )
              })}
            </>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}

function PageMeta({ page }: { page: WikiPage }) {
  const badges: { label: string; variant?: string }[] = []
  if (page.layer)
    badges.push({ label: page.layer, variant: 'outline' })
  if (page.vertical && page.vertical !== 'general')
    badges.push({ label: page.vertical })
  if (page.status)
    badges.push({
      label: page.status,
      variant:
        page.status === 'active'
          ? 'success'
          : page.status === 'dead'
            ? 'danger'
            : page.status === 'acquired'
              ? 'default'
              : 'muted',
    })
  if (page.profile_depth === 'deep')
    badges.push({ label: 'deep profile', variant: 'secondary' })
  if (page.updated) badges.push({ label: `updated ${page.updated}`, variant: 'muted' })
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {badges.map((b, i) => (
        <Badge key={i} variant={(b.variant as never) ?? 'muted'}>
          {b.label}
        </Badge>
      ))}
    </div>
  )
}

export function Wiki({ route }: { route: Route }) {
  const { data, loading } = useData<WikiFile>('wiki')
  // The route is the source of truth: onSelect navigates, and the hash
  // change re-renders this component with the new param.
  const selected = route.param

  const page = React.useMemo(() => {
    if (!data) return null
    return data.pages.find((p) => p.slug === selected) ?? null
  }, [data, selected])

  const onSelect = React.useCallback((slug: string) => {
    navigate({ view: 'wiki', param: slug })
  }, [])

  if (loading || !data) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-64" />
        <div className="grid gap-4 lg:grid-cols-[18rem_1fr]">
          <Skeleton className="h-96" />
          <Skeleton className="h-96" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-[calc(100dvh-7.5rem)] flex-col">
      <div className="mb-3">
        <h1 className="text-2xl font-semibold tracking-tight">Research wiki</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {data.pages.length} pages: 766 company dossiers, 8 theme reports, 14
          cluster syntheses.
        </p>
      </div>
      <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[18rem_1fr]">
        <div className="min-h-0 rounded-xl border bg-card/50">
          <WikiTree pages={data.pages} selected={selected} onSelect={onSelect} />
        </div>
        <div className="min-h-0 overflow-y-auto rounded-xl border bg-card p-6 md:p-8">
          {page ? (
            <article className="mx-auto max-w-3xl">
              <div className="mb-4">
                <PageMeta page={page} />
              </div>
              <Markdown onWikiLink={onSelect}>{page.markdown}</Markdown>
            </article>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <BookOpen className="size-10 text-muted-foreground/40" />
              <div>
                <p className="font-medium">Select a page</p>
                <p className="text-sm text-muted-foreground">
                  Browse the tree or search the wiki.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
