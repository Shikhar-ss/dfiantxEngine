import { VaultNote } from '@/types'

interface IdeaRowProps {
  note: VaultNote
}

export function IdeaRow({ note }: IdeaRowProps) {
  return (
    <div className="flex items-center gap-2 py-2 border-b border-[#1a1a1a] last:border-0 hover:bg-[#111] transition-colors cursor-pointer px-1">
      <span className="text-[#444] text-xs shrink-0">—</span>
      <span className="text-xs text-[#e5e5e5] truncate">{note.title}</span>
    </div>
  )
}
