'use server'

import { getToken } from "../lib/cookies"
import { revalidatePath } from "next/cache"; 

export interface Note {
  id: number,
  text: string,
  isArchived: boolean,
  createdAt: string
}

export interface SharedNote {
  noteId: number,
  userId: number,
  note: Note
}


export default async function CreateNote(formData: FormData): Promise<void> {
  const text = formData.get('text')

  const token = await getToken()

  const req = await fetch('http://localhost:3001/api/note', {
    method: 'POST',
    body: JSON.stringify({text}),
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  const data = await req.json()
  if(!req.ok) {
    throw new Error(`error: ${data.error}`)
  }

  revalidatePath('/note')
}


export async function findAll(): Promise<Note[]> {
  const token = await getToken()

  const req = await fetch('http://localhost:3001/api/note', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  const data = await req.json()
  if(!req.ok) {
    throw new Error(` error: ${req.statusText}`)
  }

  return data;
}

export async function archive(noteId: number): Promise<void> {
  const token = await getToken();

  const req = await fetch(`http://localhost:3001/api/note/${noteId}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  if(!req.ok) {
    throw new Error(`Error: ${req.statusText}`)
  }

  revalidatePath('/note')
}


export async function shareNote(): Promise<SharedNote[]> {
  const token = await getToken();
  
  const req = await fetch('http://localhost:3001/api/note/shared', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }) 

  const data = await req.json()

  if(!req.ok) {
    throw new Error(`Error: ${req.statusText}`)
  }

  return data;
}