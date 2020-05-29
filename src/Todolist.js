import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm'
import './Todolist.css'
class Todolist extends Component{
    constructor(props){
        super(props)
        this.state  = {todos:[] };
        this.create  = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
        this.complete = this.complete.bind(this)
    }
    create(newTodo){
        this.setState({
            todos: [...this.state.todos,newTodo]
        })
    }
    update(id,updatedTask){
     
        const updatedTodos = this.state.todos.map(todo =>{
            if(todo.id === id){
                return {...todo,task:updatedTask}
            }
            return todo
        });
        console.log(this.state.todos,updatedTodos)
        this.setState({todos:updatedTodos})
    }
    complete(id){
        const updatedTodo = this.state.todos.map(todo=>{
            if(todo.id === id){
                return {...todo,isCompleted:!todo.isCompleted}
            }
            return todo
        });
        this.setState({todos:updatedTodo})
    }
    remove(id){
        console.log("Remove")
        this.setState({
            todos:this.state.todos.filter(t=>t.id !== id)
        })
    }
    render(){
        const todos = this.state.todos.map((todo)=>(
             <Todo key ={todo.id} task = {todo.task} removeTodos = {this.remove} id = {todo.id} update = {this.update} isCompleted={todo.isCompleted} complete = {this.complete}/>
        ));
        return(
            <div className = "TodoList">
                <ul>
                   {todos}
                </ul>
                
                <NewTodoForm createTodo={this.create}/>
                
            </div>
        );
    }
}
export default Todolist;