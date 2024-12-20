import PropTypes from "prop-types";
import { memo } from "react";

const ShowIncrementComponent = ({ increment }) => {
  console.log("Me volví a generar :(");

  return (
    <button
      className="btn btn-warning"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
};

ShowIncrementComponent.propTypes = {
  increment: PropTypes.func.isRequired
};

export const ShowIncrement = memo(ShowIncrementComponent);
