import * as React from 'react'

export interface Route {
  view: string
  param: string
  query: Record<string, string>
}

export function parseHash(hash: string): Route {
  const h = hash.replace(/^#\/?/, '')
  if (!h) return { view: 'overview', param: '', query: {} }
  const [pathPart, queryPart] = h.split('?')
  const [view, ...rest] = pathPart.split('/')
  const param = rest.length ? decodeURIComponent(rest.join('/')) : ''
  const query: Record<string, string> = {}
  if (queryPart) {
    for (const pair of queryPart.split('&')) {
      const [k, v = ''] = pair.split('=')
      if (k) query[decodeURIComponent(k)] = decodeURIComponent(v)
    }
  }
  return { view: view || 'overview', param, query }
}

export function navigate(route: {
  view: string
  param?: string
  query?: Record<string, string>
}) {
  let hash = `#/${route.view}`
  if (route.param) hash += `/${encodeURIComponent(route.param)}`
  const q = route.query ?? {}
  const entries = Object.entries(q).filter(([, v]) => v !== '')
  if (entries.length) {
    hash +=
      '?' +
      entries
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
        .join('&')
  }
  window.location.hash = hash
}

export function useHashRoute(): Route {
  const [route, setRoute] = React.useState<Route>(() =>
    parseHash(window.location.hash),
  )
  React.useEffect(() => {
    const onHash = () => {
      setRoute(parseHash(window.location.hash))
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return route
}
