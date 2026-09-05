export const dynamic = 'force-dynamic'

import { LoginForm } from '@/components/auth/login-form'

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-sm space-y-6 p-6">
        <div className="space-y-1">
          <h1 className="font-mono text-xl font-semibold tracking-tight">dfiantX</h1>
          <p className="text-sm text-muted-foreground">Sign in to your engine</p>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
