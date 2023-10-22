import { useEffect, useState } from "react"

import Markdown from "react-markdown";

const Notes = (props: any) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const cb = async () => {
      const res = await fetch("http://localhost:8081/ai/todos", { method: "GET"});
      const todos = (await res.json()).result
      setTodos(todos)
    }
    cb()
  }, [])
  return (
    <>
        {todos.map((todo: any) => (
          <div>
            <p><b>Title:</b> {todo.title}</p>

            <p>Original:</p>
            <Markdown>{todo.content}</Markdown>

            <p>AI Generated:</p>
            <Markdown>{todo.action_items}</Markdown>
            <hr/>
          </div>
        ))}
    </>
  )
}

export default Notes