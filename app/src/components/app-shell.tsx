import * as React from 'react'
import {
  BookOpen,
  Bot,
  GitBranch,
  GraduationCap,
  LayoutDashboard,
  Layers,
  Lightbulb,
  Menu,
  Moon,
  PieChart,
  Store,
  Sun,
  Users,
  X,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

export interface NavItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  hint?: string
}

export const NAV_GROUPS: { title: string; items: NavItem[] }[] = [
  {
    title: 'Analysis',
    items: [
      { id: 'overview', label: 'Overview', icon: LayoutDashboard },
      { id: 'universe', label: 'Agent Universe', icon: Bot },
      { id: 'marketplaces', label: 'Marketplaces', icon: Store },
      { id: 'verticals', label: 'Verticals', icon: Layers },
    ],
  },
  {
    title: 'Research',
    items: [
      { id: 'themes', label: 'Themes', icon: Lightbulb },
      { id: 'wiki', label: 'Wiki', icon: BookOpen },
      { id: 'sizing', label: 'Sizing', icon: PieChart },
    ],
  },
  {
    title: 'Cohorts',
    items: [
      { id: 'yc', label: 'YC Cohort', icon: GraduationCap },
      { id: 'vc', label: 'VC Backers', icon: Users },
    ],
  },
]

function useTheme() {
  const [dark, setDark] = React.useState(() =>
    document.documentElement.classList.contains('dark'),
  )
  const toggle = React.useCallback(() => {
    setDark((d) => {
      const next = !d
      document.documentElement.classList.toggle('dark', next)
      try {
        localStorage.setItem('vite-ui-theme', next ? 'dark' : 'light')
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])
  return { dark, toggle }
}

function NavList({
  active,
  onSelect,
}: {
  active: string
  onSelect: (id: string) => void
}) {
  return (
    <nav className="flex-1 space-y-5 overflow-y-auto px-3 py-4">
      {NAV_GROUPS.map((group) => (
        <div key={group.title}>
          <p className="mb-1.5 px-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">
            {group.title}
          </p>
          <ul className="space-y-0.5">
            {group.items.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={cn(
                    'flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-sm font-medium transition-colors',
                    active === item.id
                      ? 'bg-primary/15 text-primary'
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                  )}
                  onClick={() => onSelect(item.id)}
                >
                  <item.icon className="size-4 shrink-0" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

function SidebarFooter() {
  return (
    <div className="px-3 pb-4">
      <Separator className="mb-3" />
      <a
        href="https://github.com/Prince-sharma/agent-platform-market-research"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      >
        <GitBranch className="size-3.5" />
        prince-sharma / market-research
      </a>
    </div>
  )
}

export function AppShell({
  active,
  onNavigate,
  children,
}: {
  active: string
  onNavigate: (id: string) => void
  children: React.ReactNode
}) {
  const { dark, toggle } = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const select = (id: string) => {
    onNavigate(id)
    setMobileOpen(false)
  }

  return (
    <div className="flex h-dvh overflow-hidden">
      {/* Desktop sidebar */}
      <aside className="hidden w-60 shrink-0 flex-col border-r bg-card/50 md:flex">
        <div className="flex items-center gap-2 px-4 py-4">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Bot className="size-5" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Agent Market</div>
            <div className="text-[11px] text-muted-foreground">
              Research App
            </div>
          </div>
        </div>
        <NavList active={active} onSelect={select} />
        <SidebarFooter />
      </aside>

      {/* Mobile drawer */}
      <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
        <DialogContent className="left-0 top-0 h-dvh max-w-64 translate-x-0 translate-y-0 rounded-none border-r p-0 sm:max-w-64 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left">
          <DialogTitle className="sr-only">Navigation</DialogTitle>
          <DialogDescription className="sr-only">
            App navigation
          </DialogDescription>
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-4 py-4">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Bot className="size-5" />
                </div>
                <div className="text-sm font-semibold">Agent Market</div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="size-8"
                onClick={() => setMobileOpen(false)}
              >
                <X className="size-4" />
              </Button>
            </div>
            <NavList active={active} onSelect={select} />
            <SidebarFooter />
          </div>
        </DialogContent>
      </Dialog>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-13 shrink-0 items-center justify-between gap-2 border-b px-4 py-2.5">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="size-8 md:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="size-4" />
            </Button>
            <div className="text-sm text-muted-foreground">
              1,328 agent companies · 8 marketplaces · 788 wiki pages
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="size-8"
            onClick={toggle}
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
        </header>
        <main className="min-h-0 flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mx-auto max-w-7xl animate-fade-in">{children}</div>
        </main>
      </div>
    </div>
  )
}
