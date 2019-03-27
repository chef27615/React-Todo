// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

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



    render(){
        return(
            <div className="todoBody">
                
                {this.state.taskTodo.map((todo)=>
                    (<Todo todo={todo} />)
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