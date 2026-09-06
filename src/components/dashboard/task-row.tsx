import { VaultTask } from '@/types'
import { cn } from '@/lib/utils'

interface TaskRowProps {
  task: VaultTask
}

const PRIORITY_DOT: Record<string, string> = {
  high:   'bg-red-500',
  medium: 'bg-yellow-500',
  low:    'bg-zinc-600',
}

export function TaskRow({ task }: TaskRowProps) {
  return (
    <div className={cn(
      'flex items-center gap-3 py-2 px-1 border-b border-[#1a1a1a] last:border-0',
      'hover:bg-[#111] transition-colors group',
    )}>
      {/* Checkbox */}
      <div className={cn(
        'w-3.5 h-3.5 shrink-0 border flex items-center justify-center',
        task.completed
          ? 'border-green-500 bg-green-500/10'
          : 'border-[#333]',
      )}>
        {task.completed && (
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M1 4L3 6L7 2" stroke="#22c55e" strokeWidth="1.5"/>
          </svg>
        )}
      </div>

      {/* Priority dot */}
      <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', PRIORITY_DOT[task.priority ?? 'medium'])} />

      {/* Text */}
      <span className={cn(
        'flex-1 truncate text-xs',
        task.completed ? 'line-through text-[#444]' : 'text-[#e5e5e5]',
      )}>
        {task.text}
      </span>

      {/* Due date */}
      {task.dueDate && (
        <span className="text-[10px] font-mono text-[#444] shrink-0">
          {task.dueDate}
        </span>
      )}
    </div>
  )
}
