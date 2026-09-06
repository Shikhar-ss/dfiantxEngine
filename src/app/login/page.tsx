export const dynamic = 'force-dynamic'

import { LoginForm } from '@/components/auth/login-form'

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ background: '#0a0a0a' }}>
      <div className="w-full max-w-xs space-y-6 p-6">
        <div className="space-y-1 border-b border-[#1f1f1f] pb-4">
          <h1 className="font-mono text-base font-bold tracking-tight text-white">dfiantX</h1>
          <p className="text-[11px] font-mono text-[#555]">personal content engine</p>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
