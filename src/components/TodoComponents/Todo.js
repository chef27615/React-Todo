import React, { Component } from 'react';
import TodoList from './TodoList';



class Todo extends Component{
    
    getStyle =()=>{
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    


    render(){
        return(
            
            <div className="ogTodos" style ={this.getStyle()}>
                <input type='checkbox' onChange={this.props.markComplete.bind(this, this.props.todo.id)} />
                {' '}
                {this.props.todo.task}
                <button style={btnStyle} onClick={this.props.delTodo.bind(this, this.props.todo.id)}>Done</button>
            </div>
        );
    }
}

const btnStyle={
    background: '#ff0000',
    color: '#fff',
    padding: '5px 8px',
    marginLeft: '10px', 
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer'
}



export default Todo;
