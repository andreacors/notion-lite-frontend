'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Note } from '../actions/note'
import  create from '../actions/sharedNote'
import { Button } from '@/components/ui/button'

export default function SharedNoteForm({noteId}: {noteId: number}) {
  return (
    <form action={create}>
      <Input type="hidden" name="noteId" value={noteId}/>
      <Label>UserId</Label>
      <Input name="userId" type="userId" placeholder='userId'/>
      <select name="role">
      <option value="READER">Reader</option>
      <option value="EDITOR">Editor</option>
      </select>
      <Button type='submit'>Condividi</Button>
    </form>
  ) 
}