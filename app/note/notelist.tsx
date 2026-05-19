'use client'

import { Button } from '@/components/ui/button'
import { archive, Note } from '../actions/note'
import SharedNoteForm from '../note/SharedNoteForm'
import { useState } from 'react'

export default function NoteList({notes}:{notes: Note[]}) {
  
  const [isShared, setIsShared] = useState<number | null>(null);
  
  return (
    <div>
      { notes.map((n, index) => (
        <div key={index}>
          <p>{n.text}</p>
          <Button onClick={() => setIsShared(isShared === n.id ? null : n.id)}>Condividi</Button>
          { isShared === n.id && (
          <div>
            <SharedNoteForm noteId={n.id}/>
          </div>
          )}
          <Button onClick={() => archive(n.id)}>Archivia nota</Button>
        </div>
      ))}
    </div>
  )
}