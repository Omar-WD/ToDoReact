import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FormTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>
        <b>Add a new list</b>
      </Form.Label>
      <Form.Control
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add new todo"
      />
      <Button
        className="addBtn col-12"
        // variant="danger mb-3 mt-3"
        type="submit"
      >
        Add
      </Button>
    </Form>
  );
}

export default FormTodo;