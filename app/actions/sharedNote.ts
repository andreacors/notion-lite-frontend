'use server'
import { getToken } from "../lib/cookies";


export default async function create(formData: FormData): Promise<void> {
  const token = await getToken();

  const userId = Number(formData.get('userId'))
  const noteId = Number(formData.get('noteId'))
  const role = formData.get('role')

  console.log({userId, noteId, role})

  const req = await fetch('http://localhost:3001/api/shared-note', {
    method: 'POST',
    body: JSON.stringify({userId, noteId, role}),
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  const data = await req.json()
  console.log('backend response:', data)
  if(!req.ok) {
    throw new Error(`Error: ${req.statusText}`)
  }
}