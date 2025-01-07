import PropTypes from "prop-types";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <li
        className="list-group-item d-flex justify-content-between align-items-center text-warning mt-2"
        style={{ backgroundColor: "#626262", border: "none" }}
      >
        <div className="d-flex align-items-center">
          <input
            type="checkbox"
            className="form-check-input me-2"
            checked={todo.done}
            onChange={() => onToggleTodo(todo.id)}
          />
          <span
            className={`align-self-center ${todo.done ? "text-decoration-line-through" : ""}`}
            onClick={() => onToggleTodo(todo.id)}
            style={{ cursor: "pointer" }}
            aria-label="span"
          >
            {todo.description}
          </span>
        </div>
        <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
          Borrar
        </button>
      </li>
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired
};
