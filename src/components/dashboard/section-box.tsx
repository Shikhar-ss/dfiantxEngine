import { cn } from '@/lib/utils'

interface SectionBoxProps {
  label: string
  children: React.ReactNode
  className?: string
  action?: React.ReactNode
}

export function SectionBox({ label, children, className, action }: SectionBoxProps) {
  return (
    <div className={cn('border border-[#1f1f1f] bg-[#0d0d0d]', className)}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#1f1f1f]">
        <span className="text-[10px] font-mono text-[#555] uppercase tracking-widest">
          {label}
        </span>
        {action}
      </div>
      <div className="px-4 py-3">
        {children}
      </div>
    </div>
  )
}
