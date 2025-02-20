import { useState } from "react"
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"

function App() {
  const [todos,setTodo]= useState([])
  fetch("http://localhost:3000/showTodo").then(async(res)=>{
    const todoRes=await res.json();
    setTodo(todoRes.todo)
  })
  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App
