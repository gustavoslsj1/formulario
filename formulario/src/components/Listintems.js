import React from "react";
import List from "./List.css"
const Listitems = ({onChange,onDelete, value})=>{
    return(
        <div className="Container-item">
            <input value={value} onChange={onChange} className="field-item"/>
            <button className="Delete" onClick={onDelete}>Deletar</button>
        </div>
    )
}

export default Listitems