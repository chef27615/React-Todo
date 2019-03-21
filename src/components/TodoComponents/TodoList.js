// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props =>{
    return(
        <div className="things">
            {props.thingsTodo.map(todoItem =>(
                <Todo  todoItem={todoItem} />
            ))}
        </div>    
    );
}



export default TodoList;