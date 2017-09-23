import React from "react";

import TodoList from "./TodoList";

export default class Todo extends React.Component {
  constructor() {
    super();
    this.list = [];
  }
  
  addTodo(e) {
    if (e.key === 'Enter') {
      this.list.push(e.target.value);
      e.target.value = '';
      this.forceUpdate();
      window.checkboxifyDOM();
    }
  }
  
  componentDidMount() {
    window.checkboxifyDOM();
  }
  
  componentDidUpdate() {
    window.checkboxifyDOM();
  }
  
  render() {
    return (
      <div className="todo">
        <h1 className="text-center">{this.props.title}</h1>
        
        <div>
          <div className="todo-list-item-check-all">▼</div>
          <input type="text" className="todo-list-add" placeholder="What needs to be done?" onKeyPress={this.addTodo.bind(this)}/>
        </div>
        <div className="clearfix"></div>
      
        <TodoList list={this.list}/>
      </div>
    )
  }
}