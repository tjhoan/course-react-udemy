import PropTypes from "prop-types";
import { memo } from "react";

const SmallComponent = ({ value }) => {
  console.log(`Me he vuelto a generar ${value - 9} veces`);

  return (
    <>
      <small>{value}</small>
    </>
  );
};

SmallComponent.propTypes = {
  value: PropTypes.any.isRequired
};

export const Small = memo(SmallComponent);
