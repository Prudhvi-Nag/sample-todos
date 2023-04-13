import React, { useState } from 'react'
import TodoList from './TodoList';

const App = () => {
  const [text , setText]=useState('')
  const [ todo,setTodo]=useState([])
  // const [ state, setState]=useState(false)
  function textChange(e){
    let txt = e.target.value;
    // console.log(txt)
    setText(txt)
}
function forSubmit(e){
  e.preventDefault();
  console.log(text);
  let newTodo = [...todo,text]
  setTodo(newTodo)
  setText("")
}
function forDelete(indexValue){
  console.log("deleting")
  const newTodo = todo.filter((todo,index)=>index!== indexValue)
  setTodo(newTodo)

}
 
  return (
    <>
      <center>
     <div>
     <form onSubmit={forSubmit}>
       <h1>List</h1>
       <input type='text' placeholder='enter ur name' value={text} onChange={textChange}/>{"     "}
       <button type='submit' >Add</button>
       
       </form>
      {/* <div>{text}</div> */}
      <TodoList obj={{name:todo,lname:forDelete}}/>
     </div>
      </center>

    
    </>
  )
}

export default App