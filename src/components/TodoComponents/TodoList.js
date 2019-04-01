// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './Todo.css'

class TodoList extends Component {

    state = {
         
        taskTodo:[
            {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
            },
            {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
            }
        ]

    }
    
    markComplete=(id)=>{
        this.setState({
            todos: this.state.taskTodo.map(todo =>{
                if(todo.id === id){
                    
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    }

    delTodo=(id)=>{
        
        
        this.setState({
            taskTodo: this.state.taskTodo.filter(todo=> 
                todo.id !==id
            )
        });
        
    }

    render(){
        return(
            <div className="todoBody">
                <h1>ToDo List</h1>
                {this.state.taskTodo.map((todo, index)=>
                    (<Todo todo={todo} key={index} markComplete={this.markComplete} delTodo={this.delTodo} />)
                    )}
                   
                <TodoForm addTodo={this.addTodo} />
            </div>
            
        );
    }

    addTodo = todo =>{
        this.setState({
            taskTodo: [...this.state.taskTodo, todo]
        });
    };


}

export default TodoList;



// [...this.state.taskTodo.filter(todo => todo.id !== id)]