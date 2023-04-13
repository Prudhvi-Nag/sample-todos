import React from 'react'

const TodoList = (props) => {
    const {name,lname}=props.obj;
    // console.log(lname);
  return (
    <>
    {name.map((todo,index)=>
        <div key={index}>
            
            <p>{todo} {"   "} <button type='submit' onClick={()=>lname(index)}>Delete</button></p>
                
        </div>
    )}
    
    </>
  )
}

export default TodoList