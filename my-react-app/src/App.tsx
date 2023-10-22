import { useState } from 'react'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import './App.css'

function App() {

  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleNewNote = async (note: string) => {
    setLoading(true)
    const res = await fetch("http://localhost:8081/ai/action-points", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(note)
    });
    (await res.json())
    setLoading(false)
    alert("Added todo sucessfully")
  }

  if (loading) {
    return (<p>Adding your todo...</p>)
  }

  return (
    <>
      <div>
        <button onClick={() => setPage(0)}>New Note</button>
        <button onClick={() => setPage(1)}>All Notes</button>
        <hr />
        {page === 0 ? <NewNote handleNewNote={handleNewNote} /> : null}
        {page === 1 ? <Notes /> : null}

      </div>
    </>
  )
}

export default App
