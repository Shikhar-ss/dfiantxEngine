import { VaultNote } from '@/types'

interface JournalRowProps {
  note: VaultNote
}

export function JournalRow({ note }: JournalRowProps) {
  const date = note.createdAt
    ? new Date(note.createdAt).toLocaleDateString('en-GB', {
        day: '2-digit', month: 'short', year: '2-digit',
      })
    : '—'

  const excerpt = note.content.replace(/#+\s*/g, '').split('\n').find(l => l.trim()) ?? ''

  return (
    <div className="flex items-start gap-4 py-2.5 border-b border-[#1a1a1a] last:border-0 hover:bg-[#111] transition-colors cursor-pointer px-1">
      <span className="text-[10px] font-mono text-[#444] shrink-0 pt-0.5 w-16">{date}</span>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-[#e5e5e5] truncate">{note.title}</p>
        {excerpt && (
          <p className="text-[11px] text-[#444] truncate mt-0.5">{excerpt}</p>
        )}
      </div>
    </div>
  )
}
