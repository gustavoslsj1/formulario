import React from "react";
import List from "./List.css"
const Listitems = ({onChange,onDelete, value})=>{
    return(
        <div className="Container-item">
            <input value={value} onChange={onChange} className="field-item" placeholder="nome da tarefa"/>
            <input onChange={onchange} className="details" placeholder="detalhes da tarefa"></input>
            <button className="Delete" onClick={onDelete}>X</button> 
            <texto className="checkbox">checkbox</texto>
            <input type="checkbox" className="box"  defaultChecked={false}></input>
        </div>
    )
}

export default Listitems