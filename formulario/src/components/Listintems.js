import React from "react";

const Listitems = ({onChange,onDelete, value})=>{
    return(
        <div className="Container-item">
            <input value={value} onChange={onChange} className="field-item"/>
            <button onClick={onDelete}>Deletar</button>
        </div>
    )
}

export default Listitems