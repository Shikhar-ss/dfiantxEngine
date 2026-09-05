import matter from 'gray-matter'
import { VaultNote, VaultTask } from '@/types'

// ── Markdown → Note ────────────────────────────────────────────────────────
export function parseNote(path: string, raw: string): VaultNote {
  const { data, content } = matter(raw)
  const title =
    (data.title as string) ??
    path.split('/').pop()?.replace('.md', '') ??
    'Untitled'

  const tags: string[] = data.tags
    ? Array.isArray(data.tags)
      ? (data.tags as string[])
      : [data.tags as string]
    : extractInlineTags(content)

  return {
    id: slugify(path),
    path,
    title,
    content,
    frontmatter: data,
    tags,
    createdAt: (data.created ?? data.date ?? '') as string,
    updatedAt: (data.updated ?? data.modified ?? '') as string,
  }
}

// ── Markdown → Tasks ───────────────────────────────────────────────────────
export function parseTasks(note: VaultNote): VaultTask[] {
  const lines = note.content.split('\n')
  const tasks: VaultTask[] = []

  lines.forEach((line, i) => {
    const match = line.match(/^\s*-\s+\[([ xX])\]\s+(.+)$/)
    if (!match) return

    const [, checkmark, text] = match
    const completed = checkmark.toLowerCase() === 'x'

    const dueMatch = text.match(/(?:📅|due::)\s*(\d{4}-\d{2}-\d{2})/)
    const priorityMatch = text.match(/!!(high|medium|low)/i)
    const tags = extractInlineTags(text)

    tasks.push({
      id: `${note.id}-L${i}`,
      text: cleanTaskText(text),
      completed,
      dueDate: dueMatch?.[1],
      priority: (priorityMatch?.[1]?.toLowerCase() as VaultTask['priority']) ?? 'medium',
      project: note.frontmatter.project as string | undefined,
      sourcePath: note.path,
      sourceLine: i,
      tags,
    })
  })

  return tasks
}

// ── Helpers ────────────────────────────────────────────────────────────────
function extractInlineTags(text: string): string[] {
  return [...text.matchAll(/#([a-zA-Z0-9_/-]+)/g)].map((m) => m[1])
}

function cleanTaskText(text: string): string {
  return text
    .replace(/(?:📅|due::)\s*\d{4}-\d{2}-\d{2}/, '')
    .replace(/!!(high|medium|low)/gi, '')
    .replace(/#[a-zA-Z0-9_/-]+/g, '')
    .trim()
}

function slugify(path: string): string {
  return path
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
}
