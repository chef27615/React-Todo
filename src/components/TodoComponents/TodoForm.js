import React, { Component } from 'react';

class TodoForm extends Component{

    state = {
        name:''
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    };

    handleSubmit=(e)=>{
        e.preventDefault();

        this.props.addTodo({
            task: this.state.name,
            id: Date.now(),
            completed: false

        });

        this.setState({
            name:''

        });
    }




    render(){
        return(
            <div className="formDiv">
                <form onSubmit={this.handleSubmit} >
                    <input 
                        type="text"
                        placeholder="things"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <button>click me</button> 
                </form>
                   
            </div>
        );
    }
}




export default TodoForm;
