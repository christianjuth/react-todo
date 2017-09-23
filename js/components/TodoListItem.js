import React from "react";

export default class TodoListItem extends React.Component {
  render() {
    console.log(this.props);
    return (
      <li className="todo-list-item">
        <div className="todo-list-item-check">
          <input type="checkbox"/>
        </div>
        <input type="text" className="todo-list-item-title" value={this.props.title} readOnly/>
        <div className="clearfix"></div>
      </li>
    )
  }
}