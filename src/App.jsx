import React, { useState } from "react";
import "./App.css";
//import { Button, Card, Form } from "react bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./FunctionTodo";
// import "./Form";
// import "./Navbar";
//import Navbar from "./Navbar";

//trying to import Navbar
function Navbar() {
  return (
    <div className="navbar">
      <span>
        <img src="./src/images/Logo.png" alt="Purple Logo" id="nav-logo" />
      </span>
      <div className="items">
        <p>Home</p>
        <p>Your Lists</p>
        <p>Logout</p>
      </div>
    </div>
  );
}
// FormTodo handles submission of todos
//create a separate component
function FormTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
    ``;
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* <Form.Group> */}
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
        className="submit-btn col-12 "
        variant="primary mb-3 mt-3"
        type="submit"
      >
        Add
      </Button>
      {/* </Form.Group> */}
    </Form>
  );
}
//create a component for the Todo function
function Todo({ todo, index, markTodo, removeTodo }) {
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
          variant="outline-secondary"
          onClick={() => removeTodo(index)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
//body of the App.jsx
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Made by Marie, Omar and Joram",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {/* {todos.length === 0 && 'No Todos'} if there are no todos it display no todos */}

          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
