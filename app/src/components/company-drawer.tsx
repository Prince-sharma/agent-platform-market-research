import * as React from 'react'
import { BookOpen, ExternalLink, X } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { navigate } from '@/lib/router'
import { LAYER_LABELS, type Company } from '@/types'

const STATUS_VARIANT: Record<string, string> = {
  active: 'success',
  acquired: 'default',
  pivoted: 'warning',
  dead: 'danger',
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1">
      <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground/70">
        {label}
      </dt>
      <dd className="text-sm">{children}</dd>
    </div>
  )
}

/**
 * Right-side slide-over with a quick glance at one company: website and
 * wiki links, the classification vector, traction, and backers. Closes on
 * Escape or by clicking the overlay.
 */
export function CompanyDrawer({
  company,
  onClose,
}: {
  company: Company | null
  onClose: () => void
}) {
  React.useEffect(() => {
    if (!company) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [company, onClose])

  if (!company) return null

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close details"
        className="absolute inset-0 animate-in fade-in duration-200 bg-black/40"
        onClick={onClose}
      />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l bg-background shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="flex items-start justify-between gap-3 border-b px-5 py-4">
          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold tracking-tight">
              {company.name}
            </h2>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {company.one_liner}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 shrink-0"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="size-4" />
          </Button>
        </div>

        {(company.website || company.wiki_slug) && (
          <div className="flex flex-wrap gap-2 border-b px-5 py-3">
            {company.website && (
              <Button size="sm" asChild>
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="size-3.5" />
                  Visit website
                </a>
              </Button>
            )}
            {company.wiki_slug && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  onClose()
                  navigate({
                    view: 'wiki',
                    param: `companies/${company.wiki_slug}`,
                  })
                }}
              >
                <BookOpen className="size-3.5" />
                Wiki profile
              </Button>
            )}
          </div>
        )}

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-4">
            <Field label="Layer">
              {LAYER_LABELS[company.layer] ?? company.layer}
            </Field>
            <Field label="Scope">{company.scope || '—'}</Field>
            <Field label="Vertical">
              <button
                type="button"
                className="text-left text-primary underline-offset-2 hover:underline"
                onClick={() => {
                  onClose()
                  navigate({ view: 'verticals', param: company.vertical })
                }}
              >
                {company.vertical}
              </button>
            </Field>
            <Field label="Status">
              <Badge variant={STATUS_VARIANT[company.status] as never}>
                {company.status}
              </Badge>
            </Field>
            <Field label="Task horizon">{company.task_horizon || '—'}</Field>
            <Field label="Pricing model">{company.pricing_model || '—'}</Field>
            <Field label="YC batch">{company.yc_batch || '—'}</Field>
            <Field label="Profile depth">{company.profile_depth || '—'}</Field>
          </dl>

          {company.traction && (
            <>
              <Separator className="my-4" />
              <Field label="Traction">
                <p className="text-sm text-muted-foreground">
                  {company.traction}
                </p>
              </Field>
            </>
          )}

          {company.backers.length > 0 && (
            <>
              <Separator className="my-4" />
              <Field label="VC backers">
                <div className="flex flex-wrap gap-1">
                  {company.backers.map((b) => (
                    <Badge key={b} variant="muted">
                      {b}
                    </Badge>
                  ))}
                </div>
              </Field>
            </>
          )}

          {company.sweeps.length > 0 && (
            <p className="mt-4 text-[11px] text-muted-foreground/60">
              Census sources: {company.sweeps.join(', ')}
            </p>
          )}
        </div>
      </aside>
    </div>
  )
}
