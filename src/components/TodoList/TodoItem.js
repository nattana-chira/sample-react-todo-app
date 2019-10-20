import React from "react";
import { List, Typography, Icon } from "antd";

function TodoItem({ todo, handleDeleteTodo, index }) {
  return (
    <List.Item
      actions={[
        <Icon
          style={redColor}
          type="delete"
          onClick={() => handleDeleteTodo(index)}
        />
      ]}
    >
      <Typography>
        [{index + 1}] - {todo.text}
      </Typography>
    </List.Item>
  );
}

const redColor = {
  color: "red"
};

export default TodoItem;
