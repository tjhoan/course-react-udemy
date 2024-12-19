import PropTypes from "prop-types";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  return (
    <div className="card m-3" style={{ width: "100%" }}>
      <div className="card-body text-center">
        <h5 className="card-title" style={{ fontSize: "1.5rem" }}>{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted" style={{ fontSize: "1.2rem" }}>ID: {id}</h6>
        <div className="d-flex flex-wrap justify-content-center">
          {sprites.slice(0, 4).map((sprite, index) => (
            <img
              key={index}
              src={sprite}
              alt={name}
              className="img-fluid m-1"
              style={{ maxWidth: "100px", height: "auto" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sprites: PropTypes.array.isRequired
};
