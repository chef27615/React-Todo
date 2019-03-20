import React from 'react';

const TodoForm = props => {
    console.log(props)
    return(
        <form>
            <h1>{props.title}</h1>
            <input
            type="text"
            value={props.task}
            task="task"
            placeholder="things"
            onChange={props.handleChanges}
            />
            <button onClick={props.addToDo()}>add</button>
            <button onClick={props.deletTask()}>clear task</button>
        </form>    
    );
};


export default TodoForm;