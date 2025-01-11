import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card h-100" style={{ maxWidth: '200px' }}>
        <img
          src={heroImageUrl}
          alt={superhero}
          className="card-img-top"
        />
        <div className="card-body bg-dark text-white">
          <h4 className="card-title mb-3">{superhero}</h4>
          <p className="card-text">{alter_ego}</p>
          <p className="card-text">{publisher}</p>
          <p className="card-text">{first_appearance}</p>
          {alter_ego !== characters && <p className="card-text">{characters}</p>}
          <Link to={`/hero/${id}`} className="btn btn-warning">
            Más Info...
          </Link>
        </div>
      </div>
    </div>
  );
};

HeroeCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired
};
