import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface StatCardProps {
  label: string
  value: React.ReactNode
  sub?: React.ReactNode
  className?: string
  onClick?: () => void
}

export function StatCard({ label, value, sub, className, onClick }: StatCardProps) {
  return (
    <Card
      className={cn(
        'py-4',
        onClick && 'cursor-pointer transition-colors hover:border-primary/50',
        className,
      )}
      onClick={onClick}
    >
      <CardContent className="px-4">
        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </div>
        <div className="mt-1 text-2xl font-semibold tabular-nums tracking-tight">
          {value}
        </div>
        {sub && (
          <div className="mt-1 text-xs leading-snug text-muted-foreground">
            {sub}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
