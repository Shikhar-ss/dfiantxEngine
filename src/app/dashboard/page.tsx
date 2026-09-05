export const dynamic = 'force-dynamic'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-mono text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Dashboard
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2 space-y-3">
          <div className="rounded-md border border-border p-4">
            <p className="text-xs font-mono text-muted-foreground mb-3">TODAY</p>
            <p className="text-sm text-muted-foreground">No tasks due — sync your vault to load tasks.</p>
          </div>
          <div className="rounded-md border border-border p-4">
            <p className="text-xs font-mono text-muted-foreground mb-3">RECENT JOURNAL</p>
            <p className="text-sm text-muted-foreground">No entries — sync your vault to load journal.</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-md border border-border p-4">
            <p className="text-xs font-mono text-muted-foreground mb-3">IDEA INBOX</p>
            <p className="text-sm text-muted-foreground">Empty.</p>
          </div>
          <div className="rounded-md border border-border p-4">
            <p className="text-xs font-mono text-muted-foreground mb-3">VAULT</p>
            <p className="text-sm text-muted-foreground">Not synced.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
