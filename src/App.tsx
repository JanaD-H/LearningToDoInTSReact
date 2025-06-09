import { useState } from 'react'
//import {ToDo} from './models/ToDo'
//import {Period} from './models/Period'
import './App.css'

function App() {
  //const [todo, setTodo] = useState<ToDo | null>(null);
  const [name, setName] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  return (
    <>
      <h1>ToDos by Wuchtig</h1>
      <div className="card">
        <ToDoField todoName={name} desc={desc} setName={setName} setDesc={setDesc}/>
        <button>Submit</button> 
      </div>
    </>
  )
}

type ToDoFieldProps = {
  todoName: string;
  desc: string;
  setName: (value: string) => void;
  setDesc: (value: string) => void;
}

function ToDoField({todoName, desc, setName, setDesc}: ToDoFieldProps){
  
  return (
    <>
      <input type="text" value={todoName} onChange={(e) => setName(e.target.value)}/>
      <label>Name der Aufgabe</label>
      <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)}/>
      <label>Beschreibung der Aufgabe</label>
    </>
  );
}
/*
function ToDoPanel(todo: ToDo){
  return (
    <div>
      <h4>{todo.name}</h4>
      <p>{todo.description}</p>
      <input type="checkbox" checked={todo.done} />
    </div>
  );
}*/

export default App
