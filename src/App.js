import React, { Component } from 'react';
import Todolist from './Todolist';
import './App.css'
class App extends Component{
  constructor(props){
    super(props)
    this.state ={todos:[]}
  }
  render(){
    return(
      <div>
           <h1 id="picadilly">
                        Todo List
           </h1>
           
        <Todolist/>
      </div>
    )
  }
}
export default App;