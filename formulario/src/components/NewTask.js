import React, { useState } from "react";

const NewTask = ({onSubmit}) =>{
    const[ newItem, setNewItem] = useState("")

    const setNewTask =({target}) =>{
        setNewItem(target.value)
    }

    const submit = (event)=>{
        onSubmit(newItem);
        event.preventDefault()
    }

    return(
        <div>
            <form onSubmit={submit}>
                <input
                    className="todo-input"
                    onChange={setNewTask}
                    placeholder="nome da tarefa"
                />
                <button type="submit">criar tarefa </button>
            </form>
        </div>
    )
}

export default NewTask

