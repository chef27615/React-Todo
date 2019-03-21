// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from './TodoForm'

class TodoList extends React.Component{
    state ={
        todos:[]
    };
  
    addTodo = (todo) => {
        const newTodo = [...this.state.todos, todo];
        this.setState({
            todos: newTodo
        })
    }
  
    render(){
        return(
            <div>
                <TodoForm onSubmit={this.addTodo} />
                {this.state.todos.map(todo => <div key={todo.id}>{todo.text}</div>)}
            </div>
        )
    }
  }

  export default TodoList;