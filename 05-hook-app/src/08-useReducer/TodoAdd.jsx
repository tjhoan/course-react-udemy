import { useForm } from "../hooks/useForm";
import PropTypes from "prop-types";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: ""
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="¿Qué hay que hacer?"
          className="form-control custom-input"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <button className="btn btn-outline-warning mt-3" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired
};
