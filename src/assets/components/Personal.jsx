//another todo list tried creating on

import { useState } from "react";
import "./Personal.css";

function Personal() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState([]);

  //adding todo
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    //adding the todo to the setList

    setList([...list, newTodo]);

    //clear input box
    setInput(" ");
  };
  //delete todo
  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };
  return (
    <div>
      <h1>Work ToDo</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Personal;
