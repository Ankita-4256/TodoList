
import React, { useState } from "react";
import Todolist from "./Todolist";

const App =()=>{

  const [inputList,setInputList]=useState('');
  const changeData=(event)=>{
    setInputList(event.target.value)
  }
  const [data,addValue]=useState([]);
  const setValue=()=>{
    if(inputList.length>0){
      addValue((oldData)=>{
        return [...oldData,inputList]
      })
    }
    else{
      return alert('Please enter item to add.')
    }
    
    setInputList('')
  }

  const deleteItem=(id)=>{
    console.log('deelete')
    addValue((oldData)=>{
      return oldData.filter((ele,index)=>{
        return index !==id;
      })
    })
  }
  return(
    <>
      <div className="main_div">
        <div className="center_div">
    <br/>
    <h1>ToDo List</h1>
    <br/>
    <div className="input_div">
    <input type="text" placeholder="Add a item" onChange={changeData} value={inputList}></input>
    <button className="add" onClick={setValue}>+</button>
    </div>
    <br/>
    <ul style={{listStyleType:'none'}}>
    {data.map(((val,index)=>{
      return <Todolist id={index} key={index} name={val} onSelect={deleteItem}/>
    }))}
      
    </ul>
        </div>
      </div>
    </>
  )
}
export default App;
