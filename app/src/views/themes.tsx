import * as React from 'react'
import { BookOpen, ChevronDown } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { navigate } from '@/lib/router'
import { useData } from '@/lib/use-data'
import type { Theme, ThemesFile } from '@/types'
import { cn } from '@/lib/utils'

function ThemeCard({ theme }: { theme: Theme }) {
  const [expanded, setExpanded] = React.useState(false)

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="font-mono text-[10px]">
                {theme.ref}
              </Badge>
              <span className="text-xs text-muted-foreground">
                {theme.scope}
              </span>
            </div>
            <CardTitle className="mt-1.5 text-lg leading-snug">
              {theme.title}
            </CardTitle>
            <CardDescription className="mt-1 leading-relaxed">
              {theme.headline}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        {theme.stats.length > 0 && (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {theme.stats.slice(0, 4).map((s) => (
              <div key={s.label} className="rounded-lg border p-2.5">
                <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </div>
                <div className="mt-0.5 text-sm font-semibold tabular-nums">
                  {s.value}
                </div>
                {s.note && (
                  <div className="mt-0.5 text-[10px] leading-tight text-muted-foreground">
                    {s.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <button
          type="button"
          className="mt-3 flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-medium text-primary hover:bg-accent"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
        >
          {expanded ? 'Hide full report' : 'Read full report'}
          <ChevronDown
            className={cn(
              'size-4 transition-transform',
              expanded && 'rotate-180',
            )}
          />
        </button>

        {expanded && (
          <div className="mt-2 space-y-6 border-t pt-4">
            <section>
              <h3 className="mb-2 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                Findings
              </h3>
              <ul className="space-y-2">
                {theme.findings.map((f, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
                    <span className="mt-0.5 shrink-0 font-mono text-[11px] text-primary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>

            {theme.implications.length > 0 && (
              <section>
                <h3 className="mb-2 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                  Implications
                </h3>
                <ul className="space-y-2">
                  {theme.implications.map((f, i) => (
                    <li
                      key={i}
                      className="rounded-md border-l-2 border-primary/60 bg-muted/40 px-3 py-2 text-sm leading-relaxed"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {theme.open_questions.length > 0 && (
              <section>
                <h3 className="mb-2 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                  Open questions
                </h3>
                <ul className="space-y-1.5">
                  {theme.open_questions.map((f, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-amber-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {theme.stats.length > 4 && (
              <section>
                <h3 className="mb-2 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                  All stats
                </h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {theme.stats.map((s) => (
                    <div key={s.label} className="flex justify-between gap-3 rounded-md border px-3 py-2 text-sm">
                      <span className="text-muted-foreground">{s.label}</span>
                      <span className="font-medium tabular-nums">{s.value}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                navigate({
                  view: 'wiki',
                  param: theme.file.replace(/^wiki\//, ''),
                })
              }
            >
              <BookOpen className="size-3.5" />
              Full report in wiki
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function Themes() {
  const { data, loading } = useData<ThemesFile>('themes')

  if (loading || !data) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-64" />
        <div className="grid gap-4 lg:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-64" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Phase 3 themes
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {data.themes.length} thematic deep-dives across the census: market
          structure, sizing, pricing, moats, and cohort evolution. Expand any
          theme for findings, implications, and open questions.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {data.themes.map((theme) => (
          <ThemeCard key={theme.ref} theme={theme} />
        ))}
      </div>
    </div>
  )
}
