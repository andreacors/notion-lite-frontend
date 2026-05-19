import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Login } from '../actions/auth'
import Link from 'next/link'

export default async function LoginPage({ searchParams }: {searchParams:  Promise<{error?: string}> }) {
  
  const params = await searchParams;
  const error = params?.error;
  
  return (
    <Card className="m-10">
      { error && <p className="text-red-500 m-2">Credenziali non valide</p>}
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={Login} className="grid gap-5">
          <Label>Email</Label>
          <Input name="email" type="email" placeholder='email'/>
          <Label>Password</Label>
          <Input name="password" type="password" placeholder="password"/>
          <Button type="submit">Login</Button>
        </form>
      </CardContent>
      <div className="m-5">
        <Link href="/">Home</Link>
      </div>
    </Card>
  )
}