import { useState } from 'react'

const NewNote = (props: any) => {
  const [value, setValue] = useState({note: '', title: ''})

  return (

    <div>
      <p>Enter you note:</p>
      <input type="text" value={value.title} onChange={(e)=> setValue((v: any) => ({ ...v, title: e.target.value}))} />
      <br/>
      <textarea name="" id="" cols={30} rows={10} value={value.note} onChange={(e)=> setValue((v: any) => ({ ...v, note: e.target.value}))}></textarea>
      <br />
      <button onClick={() => props.handleNewNote(value)}>Save</button>
    </div>
  )
}

export default NewNote;