import React from 'react';




const Todo = props =>{
    return(
        <div className="ogTodos">
            {props.todo.task}
        </div>
    );
}
    
    

export default Todo;
