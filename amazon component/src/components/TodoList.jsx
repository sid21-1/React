import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  const [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, {task:newTodo, id:uuidv4()}]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <input
        value={newTodo}
        type="text"
        placeholder="add a task"
        onChange={updateTodoValue}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h4>Tasks To Do</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
