import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks";

export const TodoApp = () => {
  const { todos, todosCount, pendingTodos, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo();

  return (
    <>
      <div className="text-warning">
        <h1>
          TodoApp {todosCount} <small>Pendientes: {pendingTodos}</small>
        </h1>
        <hr />

        <div className="row">
          <div className="col-6">
            <TodoList
              todos={todos}
              onDeleteTodo={handleDeleteTodo}
              onToggleTodo={handleToggleTodo}
            />
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
