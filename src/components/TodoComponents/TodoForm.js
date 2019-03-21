import React from 'react';

class TodoForm extends React.Component {
    state ={
        text: ""
    };

    handleChanges = ( event )=> {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: Date.now(),
            text: this.state.text,
            complete: false
        });
        this.setState({
            text: ""
        });
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
                <input
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChanges}
                    placeholder="things ..."
                />
                <button onClick={this.handleSubmit}>add</button>
            </form>
        );
    }
}

export default TodoForm;
