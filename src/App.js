import React, {Component} from 'react';
import TodoList from './components/TodoComponents/TodoList';

import TodoForm from './components/TodoComponents/TodoForm';

const taskTodo = 
  [
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
  ];



class App extends Component {

  constructor(){
    super();
    this.state = {
      taskTodo
    } 
  }
  
  addTodos = (e, item) =>{
    e.preventDefault();
    const newTodo = {
      task: item,
      id: Date.now(),
      completed: false
    }
    
    this.setState({
      taskTodo: [...this.state.taskTodo, newTodo]
    });
  };

  clearTodos = (itemId) => {
    
    // this.setState({
    //   taskTodo: this.state.taskTodo.filter(item => itemId !==item.id)
    // })

    this.setState({
      taskTodo: this.state.taskTodo.map((item)=>{
        itemId !== item.id
        if(itemId === item.id){
          return{...item, completed: !item.completed}
        }
        return item;
      })
    })
  }

  excuted = e =>{
    e.preventDefault();
    this.setState({
      todoTask: this.state.taskTodo.filter()
    })
    
  }





  render(){
    return(
      <div className="wrapper">
        <h1>Todos</h1>
        <TodoForm
         addTodos={this.addTodos}
        />
        <TodoList 
        thingsTodo = {this.state.taskTodo} 
        clearTodos={this.clearTodos}
        />
        <button onClick={this.excuted}>clear task</button>
      </div>
  )};
}


export default App;


// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need 
// to work with your state