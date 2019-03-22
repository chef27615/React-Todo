import React from 'react';




const Todo = props =>{
    
    return (
     <div className={`item ${props.todoItem.completed ? 'completed': null}`} onClick={()=>props.clearTodos(props.todoItem.id)}>
        <p>{props.todoItem.task}</p>
    </div>
)}

export default Todo;
