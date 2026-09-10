import * as React from 'react'

import { AppShell } from '@/components/app-shell'
import { TooltipProvider } from '@/components/ui/tooltip'
import { navigate, useHashRoute } from '@/lib/router'
import { Overview } from '@/views/overview'
import { Structure } from '@/views/structure'
import { Acquired } from '@/views/acquired'
import { Universe } from '@/views/universe'
import { Marketplaces } from '@/views/marketplaces'
import { Themes } from '@/views/themes'
import { Wiki } from '@/views/wiki'
import { Sizing } from '@/views/sizing'
import { YcCohort as YcView } from '@/views/yc'
import { VcBackers as VcView } from '@/views/vc'
import { Verticals } from '@/views/verticals'

export default function App() {
  const route = useHashRoute()

  const onNavigate = React.useCallback((id: string) => {
    navigate({ view: id })
  }, [])

  let content: React.ReactNode
  switch (route.view) {
    case 'structure':
      content = <Structure />
      break
    case 'acquired':
      content = <Acquired route={route} />
      break
    case 'universe':
      content = <Universe route={route} />
      break
    case 'marketplaces':
      content = <Marketplaces route={route} />
      break
    case 'themes':
      content = <Themes />
      break
    case 'wiki':
      content = <Wiki route={route} />
      break
    case 'sizing':
      content = <Sizing />
      break
    case 'yc':
      content = <YcView route={route} />
      break
    case 'vc':
      content = <VcView />
      break
    case 'verticals':
      content = <Verticals route={route} />
      break
    case 'overview':
    default:
      content = <Overview />
      break
  }

  return (
    <TooltipProvider delayDuration={200}>
      <AppShell active={route.view} onNavigate={onNavigate}>
        {content}
      </AppShell>
    </TooltipProvider>
  )
}
