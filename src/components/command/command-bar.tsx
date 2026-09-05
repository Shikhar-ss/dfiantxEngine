'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import {
  LayoutDashboard,
  CheckSquare,
  Lightbulb,
  BookOpen,
  Calendar,
  RefreshCw,
} from 'lucide-react'

const COMMANDS = [
  { id: 'dashboard',  label: 'Go to Dashboard',  icon: LayoutDashboard, href: '/dashboard' },
  { id: 'tasks',      label: 'Go to Tasks',       icon: CheckSquare,     href: '/dashboard/tasks' },
  { id: 'ideas',      label: 'Go to Ideas',       icon: Lightbulb,       href: '/dashboard/ideas' },
  { id: 'journal',    label: 'Go to Journal',     icon: BookOpen,        href: '/dashboard/journal' },
  { id: 'calendar',   label: 'Go to Calendar',    icon: Calendar,        href: '/dashboard/calendar' },
  { id: 'sync',       label: 'Sync Vault',        icon: RefreshCw,       href: '/vault/sync' },
]

export function CommandBar() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey))) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <div className="h-10 border-b border-border flex items-center px-4">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>Search or run a command</span>
          <kbd className="font-mono text-[10px] border border-border rounded px-1 py-0.5">⌘K</kbd>
        </button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigate">
            {COMMANDS.map(({ id, label, icon: Icon, href }) => (
              <CommandItem
                key={id}
                onSelect={() => {
                  router.push(href)
                  setOpen(false)
                }}
              >
                <Icon size={14} className="mr-2" />
                {label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => setOpen(false)}>
              + New Task
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              + New Note
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
