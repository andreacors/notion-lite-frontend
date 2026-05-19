'use client'

import Link from 'next/link'
import { logout } from './actions/auth'
import { Button } from '@/components/ui/button'

 
export default function HomePage() {
  return (
    <div className="flex justify-between justify-center gap-5">
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/note">Note</Link>
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  )
}
