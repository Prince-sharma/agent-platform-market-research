import { BookOpen } from 'lucide-react'

import { StatCard } from '@/components/stat-card'
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
import type { SizingData } from '@/types'

export function Sizing() {
  const { data, loading } = useData<SizingData>('sizing')

  if (loading || !data) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-64" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-24" />
          ))}
        </div>
        <Skeleton className="h-64" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Market sizing
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          The work-agent software market through three lenses. Figures are
          estimates with stated confidence unless marked reported.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {data.cards.map((c) => (
          <StatCard key={c.label} label={c.label} value={c.value} sub={c.note} />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {data.lenses.map((lens) => (
          <Card key={lens.name}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{lens.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {lens.body}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">
              Adoption, trust, and execution risk
            </CardTitle>
            <CardDescription>
              The demand-side context around the sizing.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {data.context.map((c) => (
              <div
                key={c.label}
                className="flex items-start justify-between gap-4 rounded-lg border px-3 py-2"
              >
                <div className="text-sm font-medium">{c.label}</div>
                <div className="shrink-0 text-right text-[11px] leading-snug text-muted-foreground">
                  {c.note}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">
              Revenue anchors (2026, as reported)
            </CardTitle>
            <CardDescription>
              Disclosed ARR and valuations that anchor the bottom-up lens.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {data.anchors.map((a) => (
              <div
                key={a.company}
                className="flex items-center justify-between gap-4 rounded-lg border px-3 py-2"
              >
                <div className="text-sm font-medium">{a.company}</div>
                <div className="text-xs text-muted-foreground">{a.note}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">What the sizing means</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2.5">
            {data.takeaways.map((t, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                {t}
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            size="sm"
            className="mt-4"
            onClick={() =>
              navigate({ view: 'wiki', param: data.theme_wiki })
            }
          >
            <BookOpen className="size-3.5" />
            Full analysis: market-sizing.md
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
