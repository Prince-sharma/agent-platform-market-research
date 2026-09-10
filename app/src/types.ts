export interface Company {
  name: string
  one_liner: string
  layer: string
  scope: string
  vertical: string
  status: string
  traction: string
  priority: string
  profile_depth: string
  wiki_slug: string
  task_horizon: string
  pricing_model: string
  sources: string
  yc_batch: string
  backers: string[]
  sweeps: string[]
  website: string
}

export interface MarketplaceAgent {
  n: string
  m: string
  p: string
  c: string
  a: string
  s: string
  pr: string
  r: string
  mc: string
  aa: string
  pricing_bucket: string
}

export interface ThemeStat {
  label: string
  value: string
  note: string
}

export interface Theme {
  file: string
  ref: string
  title: string
  scope: string
  headline: string
  findings: string[]
  stats: ThemeStat[]
  implications: string[]
  open_questions: string[]
}

export interface ThemesFile {
  generated: string
  themes: Theme[]
}

export interface YcBatch {
  count: number
  layers: Record<string, number>
  status: Record<string, number>
  deep: number
  top_verticals: [string, number][]
  long_horizon: number
}

export interface YcCohort {
  batches: Record<string, YcBatch>
  census_total: number
  yc_total: number
  note: string
}

export type WikiKind = 'company' | 'theme' | 'cluster'

export interface WikiPage {
  slug: string
  kind: WikiKind
  title: string
  markdown: string
  layer: string
  scope: string
  vertical: string
  status: string
  priority: string
  profile_depth: string
  updated: string
}

export interface WikiFile {
  pages: WikiPage[]
}

export interface VcCompany {
  name: string
  layer: string
  vertical: string
  status: string
  one_liner: string
  wiki_slug: string
}

export interface VcBacker {
  backer: string
  count: number
  active: number
  acquired: number
  dead: number
  layers: Record<string, number>
  top_verticals: string[]
  companies: VcCompany[]
}

export interface SizingData {
  cards: { label: string; value: string; note: string }[]
  lenses: { name: string; body: string }[]
  context: { label: string; note: string }[]
  anchors: { company: string; note: string }[]
  takeaways: string[]
  theme_ref: string
  theme_wiki: string
}

export const LAYER_LABELS: Record<string, string> = {
  L1: 'L1 · Infrastructure',
  L2: 'L2 · Build platform',
  L3: 'L3 · Vertical agent',
  L4: 'L4 · Services',
  L5: 'L5 · Suite product',
  X: 'X · Modality',
}

export const LAYER_ORDER = ['L1', 'L2', 'L3', 'L4', 'L5', 'X']
