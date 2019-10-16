import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const {
    todos,
    input,
    handleChangeInput,
    handleAddTodo,
    handleDeleteTodo
  } = props;

  return (
    <div>
      <h4>Todo List</h4>
      <input onChange={handleChangeInput} value={input} />
      <button onClick={() => handleAddTodo(input)}>add</button>
      {todos.map((todo, key) => (
        <TodoItem
          key={key}
          index={key}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
