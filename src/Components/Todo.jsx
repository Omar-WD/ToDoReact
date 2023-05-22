import React from "react";
import Button from "react-bootstrap/Button";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button
          id="action-btn"
          variant="outline-info"
          onClick={() => markTodo(index)}
        >
          Done
        </Button>{" "}
        <Button
          id="action-btn"
          variant="outline-danger"
          onClick={() => removeTodo(index)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Todo;