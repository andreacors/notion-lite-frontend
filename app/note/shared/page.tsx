'use server'

import { shareNote } from "@/app/actions/note"

export default async function FindShared() {
  const note = await shareNote();

  return (
    <div>
      {note.map((n, index) => (
        <div key={index}>
          <p>{n.note.text}</p>
        </div>
      ))}
    </div>
  )
}