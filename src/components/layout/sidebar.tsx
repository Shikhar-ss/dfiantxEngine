'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  CheckSquare,
  Lightbulb,
  BookOpen,
  Calendar,
  RefreshCw,
  Settings,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '/dashboard',          icon: LayoutDashboard, label: 'Dashboard', shortcut: 'G D' },
  { href: '/dashboard/tasks',    icon: CheckSquare,     label: 'Tasks',     shortcut: 'G T' },
  { href: '/dashboard/ideas',    icon: Lightbulb,       label: 'Ideas',     shortcut: 'G I' },
  { href: '/dashboard/journal',  icon: BookOpen,        label: 'Journal',   shortcut: 'G J' },
  { href: '/dashboard/calendar', icon: Calendar,        label: 'Calendar',  shortcut: 'G C' },
  { href: '/vault/sync',         icon: RefreshCw,       label: 'Sync',      shortcut: 'G S' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-52 shrink-0 border-r border-border flex flex-col py-3 gap-0.5">
      <div className="px-3 pb-3 mb-1 border-b border-border">
        <span className="font-mono text-sm font-semibold tracking-tight">dfiantX</span>
      </div>

      <nav className="flex-1 px-2 space-y-0.5">
        {NAV.map(({ href, icon: Icon, label, shortcut }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex items-center justify-between gap-2 rounded px-2 py-1.5 text-sm transition-colors',
              pathname === href
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent/50',
            )}
          >
            <span className="flex items-center gap-2">
              <Icon size={14} />
              {label}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground/50">{shortcut}</span>
          </Link>
        ))}
      </nav>

      <div className="px-2 mt-auto">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-2 rounded px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
        >
          <Settings size={14} />
          Settings
        </Link>
      </div>
    </aside>
  )
}
