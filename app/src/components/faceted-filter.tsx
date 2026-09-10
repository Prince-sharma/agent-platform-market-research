import * as React from 'react'
import { CheckSquare, Filter, Search, X } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

interface FacetedFilterProps {
  title: string
  options: string[]
  selected: string[]
  onChange: (values: string[]) => void
  className?: string
}

export function FacetedFilter({
  title,
  options,
  selected,
  onChange,
  className,
}: FacetedFilterProps) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState('')

  const selectedSet = React.useMemo(
    () => new Set(selected),
    [selected],
  )

  const filteredOptions = React.useMemo(() => {
    if (!query) return options
    const q = query.toLowerCase()
    return options.filter((o) => o.toLowerCase().includes(q))
  }, [options, query])

  const toggle = (value: string) => {
    const next = new Set(selectedSet)
    if (next.has(value)) {
      next.delete(value)
    } else {
      next.add(value)
    }
    onChange([...next])
  }

  return (
    <Popover open={open} onOpenChange={(o) => { setOpen(o); if (!o) setQuery('') }}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn('h-8 border-dashed', className)}
        >
          <Filter className="size-3.5" />
          {title}
          {selected.length > 0 && (
            <>
              <span className="mx-1 h-4 w-px bg-border" aria-hidden />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal leading-none"
              >
                {selected.length}
              </Badge>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60 p-0" align="start">
        <div className="flex items-center border-b px-2">
          <Search className="mr-1 size-3.5 shrink-0 text-muted-foreground" />
          <Input
            placeholder={`Search ${title.toLowerCase()}...`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-8 w-full border-0 bg-transparent px-1 shadow-none focus-visible:ring-0"
          />
        </div>
        <div className="max-h-64 overflow-y-auto p-1">
          {filteredOptions.length === 0 && (
            <p className="p-2 text-center text-xs text-muted-foreground">
              No match.
            </p>
          )}
          {filteredOptions.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-accent"
            >
              <Checkbox
                checked={selectedSet.has(option)}
                onCheckedChange={() => toggle(option)}
              />
              <span className="flex-1 truncate">{option}</span>
            </label>
          ))}
        </div>
        {selected.length > 0 && (
          <div className="border-t p-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 w-full justify-start px-2 text-xs"
              onClick={() => onChange([])}
            >
              <X className="mr-1 size-3" />
              Clear
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}

interface NumericRangeFilterProps {
  title: string
  min: number | undefined
  max: number | undefined
  onChange: (range: { min?: number; max?: number }) => void
  className?: string
}

export function NumericRangeFilter({
  title,
  min,
  max,
  onChange,
  className,
}: NumericRangeFilterProps) {
  const [open, setOpen] = React.useState(false)
  const active = min !== undefined || max !== undefined

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn('h-8 border-dashed', className)}
        >
          <CheckSquare className="size-3.5" />
          {title}
          {active && (
            <>
              <span className="mx-1 h-4 w-px bg-border" aria-hidden />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal leading-none"
              >
                {min ?? '−∞'}–{max ?? '∞'}
              </Badge>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-3" align="start">
        <p className="mb-2 text-xs font-medium text-muted-foreground">
          {title} range
        </p>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            placeholder="min"
            value={min ?? ''}
            onChange={(e) =>
              onChange({
                min: e.target.value === '' ? undefined : Number(e.target.value),
                max,
              })
            }
            className="h-8"
          />
          <span className="text-xs text-muted-foreground">to</span>
          <Input
            type="number"
            placeholder="max"
            value={max ?? ''}
            onChange={(e) =>
              onChange({
                min,
                max: e.target.value === '' ? undefined : Number(e.target.value),
              })
            }
            className="h-8"
          />
        </div>
        {active && (
          <Button
            variant="ghost"
            size="sm"
            className="mt-2 h-7 w-full text-xs"
            onClick={() => onChange({})}
          >
            Clear
          </Button>
        )}
      </PopoverContent>
    </Popover>
  )
}
