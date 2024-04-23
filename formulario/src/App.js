import { useState } from "react";
import NewTask from "./components/NewTask";
import Listitems from "./components/Listintems";
import app from "./app.css"
const App = ()=>{
  const [tasks,setTasks] = useState([])

  const addNewTask=(task) =>{
    const intenscopy = Array.from(tasks)
    intenscopy.push({id: tasks.length, value:task})
    setTasks(intenscopy)
  }
  const updateTask =({target},index)=>{
    const intenscopy = Array.from(tasks)
    intenscopy.splice(index, 1,{id:index, value: target.value})
    setTasks(intenscopy)
  }
  const deleteTask=(index)=>{
    const intenscopy = Array.from(tasks)
    intenscopy.splice(index,1)
    setTasks(intenscopy)
  }
  return (
    <div className="App">
      <div className="App-header">
        <text className="formulario"><strong>FORMULARIO</strong></text>
      <NewTask onSubmit={addNewTask}/>
      {tasks.map(({id,value},index)=>(
        <Listitems
        key={id}
        value={value}
        onDelete={()=>deleteTask(index)}
        onChange={(event)=> updateTask(event,index)}
        />
      ))}
    
      </div>
      <div className="Array-preview">
        <pre>{JSON.stringify(tasks,null,4)}</pre>
      </div>
    </div>
  );
}

export default App;
