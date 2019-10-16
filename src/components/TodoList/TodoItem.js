import React from "react";

function TodoItem({ todo, handleDeleteTodo, index }) {
  return (
    <li>
      {index + 1} - {todo.text}
      <button onClick={() => handleDeleteTodo(index)}>X</button>
    </li>
  );
}

export default TodoItem;
