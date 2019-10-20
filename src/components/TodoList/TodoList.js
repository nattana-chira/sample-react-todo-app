import React from "react";
import TodoItem from "./TodoItem";
import { List, Col, Input, Typography } from "antd";

function TodoList(props) {
  const {
    todos,
    input,
    handleChangeInput,
    handleAddTodo,
    handleDeleteTodo
  } = props;

  return (
    <Col span={12} offset={3}>
      <Typography.Title level={3}>Todo List</Typography.Title>
      <Input.Search
        value={input}
        placeholder="Type your stuff here!"
        enterButton="Add"
        onChange={handleChangeInput}
        onSearch={() => handleAddTodo(input)}
      />
      <List
        bordered
        dataSource={todos}
        renderItem={(todo, key) => (
          <TodoItem
            index={key}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      />
    </Col>
  );
}

export default TodoList;
