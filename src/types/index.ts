// ── Vault ──────────────────────────────────────────────────────────────────
export interface VaultNote {
  id: string
  path: string
  title: string
  content: string
  frontmatter: Record<string, unknown>
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface VaultTask {
  id: string
  text: string
  completed: boolean
  dueDate?: string
  priority?: 'low' | 'medium' | 'high'
  project?: string
  sourcePath: string
  sourceLine: number
  tags: string[]
}

export interface VaultProject {
  id: string
  name: string
  path: string
  status: 'active' | 'paused' | 'completed' | 'idea'
  tasks: VaultTask[]
  notes: VaultNote[]
  lastUpdated: string
}

// ── Content ────────────────────────────────────────────────────────────────
export type ContentStatus = 'draft' | 'review' | 'scheduled' | 'published'
export type ContentPlatform = 'blog' | 'linkedin' | 'twitter' | 'reddit' | 'instagram' | 'substack'

export interface ContentItem {
  id: string
  title: string
  body: string
  status: ContentStatus
  platforms: ContentPlatform[]
  sourceNoteId?: string
  scheduledAt?: string
  publishedAt?: string
  createdAt: string
  updatedAt: string
}

// ── User ───────────────────────────────────────────────────────────────────
export interface UserProfile {
  id: string
  email: string
  name: string
  avatarUrl?: string
  vaultRepoUrl?: string
  lastSyncedAt?: string
}
