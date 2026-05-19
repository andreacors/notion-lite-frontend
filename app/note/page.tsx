import CreateNote, { findAll } from "../actions/note";
import NoteList from './notelist'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default async function Note() {

  const note = await findAll()

  return (
    <div>
      <form action={CreateNote}>
        <Input name="text" placeholder="Scrivi una nota..." />
        <Button type="submit">Crea nota</Button>
      </form>
      <NoteList notes={note}/>
    </div>
  )
}
