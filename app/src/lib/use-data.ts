import * as React from 'react'

import { loadData } from '@/lib/data'

export function useData<T>(name: string) {
  const [data, setData] = React.useState<T | null>(null)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    let cancelled = false
    loadData<T>(name)
      .then((d) => {
        if (!cancelled) setData(d)
      })
      .catch((e: unknown) => {
        if (!cancelled)
          setError(e instanceof Error ? e.message : 'Failed to load data')
      })
    return () => {
      cancelled = true
    }
  }, [name])

  return { data, error, loading: data === null && error === null }
}
