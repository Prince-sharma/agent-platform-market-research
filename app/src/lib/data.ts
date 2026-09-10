// Lazy, cached JSON data loader. Data files live in public/data/ and are
// fetched relative to the deployment base so GitHub Pages works unchanged.

const cache = new Map<string, Promise<unknown>>()

export function loadData<T>(name: string): Promise<T> {
  let p = cache.get(name)
  if (!p) {
    const base = import.meta.env.BASE_URL || '/'
    p = fetch(`${base}data/${name}.json`).then((r) => {
      if (!r.ok) throw new Error(`Failed to load ${name}.json: ${r.status}`)
      return r.json()
    })
    cache.set(name, p)
  }
  return p as Promise<T>
}
