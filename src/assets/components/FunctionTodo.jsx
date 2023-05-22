//shows each todo with buttons
//create a separate component
export default function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button
          id="action-btn"
          variant="outline-success"
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
