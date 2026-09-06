'use client'

import { useState } from 'react'

interface VaultStatusProps {
  lastSynced?: string
}

export function VaultStatus({ lastSynced }: VaultStatusProps) {
  const [syncing, setSyncing] = useState(false)

  async function handleSync() {
    setSyncing(true)
    await fetch('/api/vault/sync', { method: 'POST' })
    setSyncing(false)
  }

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-[11px] text-[#555]">
          {lastSynced
            ? `synced ${new Date(lastSynced).toLocaleTimeString()}`
            : 'Last synced: never'}
        </p>
      </div>
      <button
        onClick={handleSync}
        disabled={syncing}
        className="text-[10px] font-mono border border-[#333] px-2 py-1 hover:border-[#555] hover:text-white transition-colors text-[#888] disabled:opacity-40"
      >
        {syncing ? '...' : 'Sync'}
      </button>
    </div>
  )
}
