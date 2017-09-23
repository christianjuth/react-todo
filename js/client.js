import React from "react";
import ReactDOM from "react-dom";

import Todo from "./components/Todo";

const app = document.getElementById('app');
ReactDOM.render(<Todo title="Todo List"/>, app);