import PropTypes from "prop-types";
import { memo } from "react";

const HijoComponent = ({ numero, incrementar }) => {
  console.log("Me volví a generar :(");

  return (
    <button className="btn btn-warning mr-3" onClick={() => incrementar(numero)}>
      {numero}
    </button>
  );
};

export const Hijo = memo(HijoComponent);

HijoComponent.propTypes = {
  numero: PropTypes.number.isRequired,
  incrementar: PropTypes.func.isRequired
};
