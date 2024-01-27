import React from "react";

const Todolist=(prop)=>{
    return (
        <>
            <div className="todo_style">
            <button className="delete" onClick={()=>{
                prop.onSelect(prop.id)
            }}>❌</button>
            <li style={{marginLeft:'30px'}}>{prop.name}</li>
            </div>
        </>
    )
}

export default Todolist;