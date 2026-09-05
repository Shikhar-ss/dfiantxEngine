'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'

export function LoginForm() {
  const [loading, setLoading] = useState(false)

  async function signInWithGitHub() {
    setLoading(true)
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    })
    setLoading(false)
  }

  async function signInWithGoogle() {
    setLoading(true)
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    })
    setLoading(false)
  }

  return (
    <div className="space-y-3">
      <Button
        variant="outline"
        className="w-full font-mono text-sm"
        onClick={signInWithGitHub}
        disabled={loading}
      >
        Continue with GitHub
      </Button>
      <Button
        variant="outline"
        className="w-full font-mono text-sm"
        onClick={signInWithGoogle}
        disabled={loading}
      >
        Continue with Google
      </Button>
    </div>
  )
}
