import { cn } from '@/lib/utils'

export interface BarDatum {
  label: string
  value: number
  hint?: string
}

interface BarChartProps {
  data: BarDatum[]
  formatValue?: (v: number) => string
  onSelect?: (label: string) => void
  className?: string
  max?: number
  minBarWidth?: boolean
}

const PALETTE = [
  'bg-indigo-500',
  'bg-violet-500',
  'bg-blue-500',
  'bg-sky-500',
  'bg-cyan-500',
  'bg-teal-500',
  'bg-emerald-500',
  'bg-amber-500',
  'bg-orange-500',
  'bg-rose-500',
]

export function BarChart({
  data,
  formatValue = (v) => v.toLocaleString(),
  onSelect,
  className,
  max,
}: BarChartProps) {
  const maxValue = max ?? Math.max(...data.map((d) => d.value), 1)
  return (
    <div className={cn('space-y-1.5', className)}>
      {data.map((d, i) => (
        <button
          key={d.label}
          type="button"
          className={cn(
            'group grid w-full grid-cols-[minmax(7rem,11rem)_1fr_auto] items-center gap-3 rounded-md px-2 py-1 text-left text-sm',
            onSelect && 'hover:bg-accent',
          )}
          onClick={onSelect ? () => onSelect(d.label) : undefined}
          title={d.hint}
        >
          <span className="truncate text-muted-foreground group-hover:text-foreground">
            {d.label}
          </span>
          <span className="relative h-5 overflow-hidden rounded-sm bg-muted">
            <span
              className={cn(
                'absolute inset-y-0 left-0 rounded-sm transition-all',
                PALETTE[i % PALETTE.length],
              )}
              style={{ width: `${Math.max((d.value / maxValue) * 100, d.value > 0 ? 1.5 : 0)}%` }}
            />
          </span>
          <span className="w-14 text-right font-medium tabular-nums">
            {formatValue(d.value)}
          </span>
        </button>
      ))}
    </div>
  )
}
