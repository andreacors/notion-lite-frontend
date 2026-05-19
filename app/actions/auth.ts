'use server'

import { deleteToken, setToken, getToken } from "../lib/cookies"
import { redirect } from "next/navigation"

export async function Login(formData: FormData): Promise<void> {
  const email = formData.get('email');
  const password = formData.get('password')

  const req = await fetch('http://localhost:3001/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({email, password}),
    headers: {
      'Content-Type': 'application/json'
    }    
  })

  const data = await req.json()
  console.log(data);

  if(!req.ok) {
    redirect('/login?error=invalid_credentials')
  }

  console.log('Login effettuato con successo')
  await setToken(data.access_token)
}

export async function register(formData: FormData): Promise<void> {
  const email = formData.get('email');
  const password = formData.get('password');

  const req = await fetch('http://localhost:3001/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({email, password}),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await req.json()
  console.log(data)

  if(!req.ok) {
    redirect('/register?error=invalid_credentials')
  }

  await setToken(data.access_token)
}

export async function logout() {
  await deleteToken();
  redirect('/login')
}