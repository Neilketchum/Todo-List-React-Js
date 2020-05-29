import React, { Component } from 'react';
import './Todo.css'
class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing:false,
            task:this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleCompleted = this.handleCompleted.bind(this)
    }
    handleSubmit(e){
        
        this.props.update(this.props.id,this.state.task)
        e.preventDefault()
        this.setState({isEditing:false})
    }
    handleRemove(e){
        this.props.removeTodos(this.props.id)
    }            
    toggleForm(){
        this.setState({isEditing:!this.state.isEditing})
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    handleCompleted(){
            this.props.complete(this.props.id)
    }
    render(){
            let result;
            if(this.state.isEditing){
                result = (
                    <div className ='Todo'>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" onChange = {this.handleChange} name="task"
                             value = {this.state.task}/>
                            <button type="submit" id="action">Submit</button>
                        </form>
                    </div>
                )
            }else{
                result =(
                <div className = "Todo">
                    <li className={this.props.isCompleted?"Todo-task completed":'Todo-task'}>{this.props.task}</li>
                    <button id = "Edit" onClick = {this.toggleForm}>Edit-Todo</button>
                    <button  id = "cancel"  onClick = {this.handleRemove}>Remove Todo</button>
                    <button id ="toggle" onClick = {this.handleCompleted}>Toggle Completion</button>
         
                </div>
                )
            }
            return result
    }
}
export default Todo;   