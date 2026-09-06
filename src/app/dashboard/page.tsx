export const dynamic = 'force-dynamic'

import { SectionBox } from '@/components/dashboard/section-box'
import { TaskRow } from '@/components/dashboard/task-row'
import { JournalRow } from '@/components/dashboard/journal-row'
import { IdeaRow } from '@/components/dashboard/idea-row'
import { VaultStatus } from '@/components/dashboard/vault-status'
import { VaultTask, VaultNote } from '@/types'

// Sample data — replaced by vault sync in Phase 2
const SAMPLE_TASKS: VaultTask[] = [
  { id: '1', text: 'Update LinkedIn profile', completed: true,  priority: 'high',   dueDate: '2026-09-06', sourcePath: '', sourceLine: 0, tags: [] },
  { id: '2', text: 'Write essay on AI tooling', completed: false, priority: 'high',  dueDate: '2026-09-07', sourcePath: '', sourceLine: 0, tags: [] },
  { id: '3', text: 'Review OpenClaw architecture doc', completed: false, priority: 'medium', dueDate: '2026-09-08', sourcePath: '', sourceLine: 0, tags: [] },
  { id: '4', text: 'Sort knowledge base folders', completed: false, priority: 'low', sourcePath: '', sourceLine: 0, tags: [] },
  { id: '5', text: 'Record voice note on content strategy', completed: false, priority: 'medium', sourcePath: '', sourceLine: 0, tags: [] },
]

const SAMPLE_JOURNAL: VaultNote[] = [
  { id: 'j1', path: '', title: 'AI career reflections', content: 'Been thinking about the intersection of AI and personal branding...', frontmatter: {}, tags: [], createdAt: '2026-09-05', updatedAt: '' },
  { id: 'j2', path: '', title: 'Note taking framework - 1', content: 'A minimal system for capturing ideas without friction...', frontmatter: {}, tags: [], createdAt: '2026-09-04', updatedAt: '' },
  { id: 'j3', path: '', title: 'Bailando — creative process', content: 'On how music influences creative flow...', frontmatter: {}, tags: [], createdAt: '2026-09-03', updatedAt: '' },
]

const SAMPLE_IDEAS: VaultNote[] = [
  { id: 'i1', path: '', title: 'Content engine + agent team', content: '', frontmatter: {}, tags: [], createdAt: '', updatedAt: '' },
  { id: 'i2', path: '', title: 'Spec-driven dev framework for AI', content: '', frontmatter: {}, tags: [], createdAt: '', updatedAt: '' },
  { id: 'i3', path: '', title: 'KV cache deep dive post', content: '', frontmatter: {}, tags: [], createdAt: '', updatedAt: '' },
  { id: 'i4', path: '', title: 'Declutter idea boards — system', content: '', frontmatter: {}, tags: [], createdAt: '', updatedAt: '' },
]

export default function DashboardPage() {
  const today = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
  const pending = SAMPLE_TASKS.filter(t => !t.completed).length

  return (
    <div className="space-y-3 max-w-6xl">
      {/* Header row */}
      <div className="flex items-baseline justify-between mb-4">
        <h1 className="text-[10px] font-mono text-[#555] uppercase tracking-widest">{today}</h1>
        <span className="text-[10px] font-mono text-[#444]">{pending} pending</span>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {/* Left 2/3 */}
        <div className="col-span-2 space-y-3">
          <SectionBox label="Today">
            {SAMPLE_TASKS.length === 0 ? (
              <p className="text-xs text-[#444]">No tasks — sync your vault.</p>
            ) : (
              SAMPLE_TASKS.map(task => <TaskRow key={task.id} task={task} />)
            )}
          </SectionBox>

          <SectionBox label="Recent Journal">
            {SAMPLE_JOURNAL.length === 0 ? (
              <p className="text-xs text-[#444]">No entries — sync your vault.</p>
            ) : (
              SAMPLE_JOURNAL.map(note => <JournalRow key={note.id} note={note} />)
            )}
          </SectionBox>
        </div>

        {/* Right 1/3 */}
        <div className="space-y-3">
          <SectionBox label="Idea Inbox">
            {SAMPLE_IDEAS.length === 0 ? (
              <p className="text-xs text-[#444]">Empty.</p>
            ) : (
              SAMPLE_IDEAS.map(note => <IdeaRow key={note.id} note={note} />)
            )}
          </SectionBox>

          <SectionBox label="Vault">
            <VaultStatus />
          </SectionBox>
        </div>
      </div>
    </div>
  )
}
