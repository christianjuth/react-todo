import React from "react";

import TodoListItem from "./TodoListItem";

export default class List extends React.Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.list.map((title, i) => {
          return <TodoListItem title={title} key={'todo-'+i}/>;
        })}
      </ul>
    )
  }
}