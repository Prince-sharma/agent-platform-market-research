import * as React from 'react'
import { BookOpen, ExternalLink } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

export interface SummaryPoint {
  title: string
  body: string
}

const summaryLinkClass =
  'inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground'

/**
 * The "what this section says" panel shown above a drill-down table: a grid
 * of titled findings distilled from the research reports, plus links to the
 * underlying report or to related in-app analysis.
 */
export function SectionSummary({
  points,
  links,
  children,
}: {
  points: SummaryPoint[]
  links?: { label: string; href: string }[]
  children?: React.ReactNode
}) {
  return (
    <Card className="py-4">
      <CardContent className="px-5">
        <ul className="grid gap-x-6 gap-y-3 md:grid-cols-2">
          {points.map((p) => (
            <li key={p.title} className="rounded-lg border p-3">
              <div className="text-sm font-medium">{p.title}</div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
        {(links?.length ?? 0) > 0 || children ? (
          <div className="mt-3 flex flex-wrap items-center gap-2 border-t pt-3">
            {links?.map((l) => (
              <a
                key={l.href + l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={summaryLinkClass}
              >
                <ExternalLink className="size-3" />
                {l.label}
              </a>
            ))}
            {children}
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}

/** In-app companion to the external report links (e.g. "Moats & M&A theme"). */
export function SummaryLink({
  icon: Icon = BookOpen,
  label,
  onClick,
}: {
  icon?: React.ComponentType<{ className?: string }>
  label: string
  onClick: () => void
}) {
  return (
    <button type="button" onClick={onClick} className={summaryLinkClass}>
      <Icon className="size-3" />
      {label}
    </button>
  )
}
