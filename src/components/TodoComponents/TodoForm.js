import React, { Component }from 'react';

class TodoForm extends Component{
    constructor(props){
        
        super(props)
        this.state = {
            item:''
        }

    }
    
    handleChanges = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitNewItem = e => {
        this.setState({item:''})
        this.props.addTodos( e, this.state.item)
    }

    render() {
       return(
        <form onSubmit= {this.submitNewItem}>
            <input 
             type="text"
             name="item" 
             value={this.state.item} 
             onChange={this.handleChanges} 
            />
            <button>add</button>
            
        </form>
        ); 
    }
    
}

export default TodoForm;

