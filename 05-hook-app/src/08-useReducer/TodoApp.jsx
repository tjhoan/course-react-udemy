import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useState } from "react";

// import { todoReducer } from "./todoReducer";
// import { useReducer } from "react";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la pieda del alma",
    done: false
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar la pieda del tiempo",
    done: false
  }
];

export const TodoApp = () => {
  // const [todos] = useReducer(todoReducer, initialState);
  const [todos, setTodos] = useState(initialState);

  const handleNewTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <div className="text-warning">
        <h1>
          TodoApp 10 <small>Pendientes: 2</small>
        </h1>
        <hr />

        <div className="row">
          <div className="col-6">
            <TodoList todos={todos} />
          </div>
          <div className="col-6">
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd onNewTodo={handleNewTodo} />
          </div>
        </div>
      </div>
    </>
  );
};
