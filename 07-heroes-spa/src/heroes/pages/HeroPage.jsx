import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroeById } from '../helpers';

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hero = getHeroeById(id);

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  const onNavigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4 text-center mb-4">
          <img
            src={`/assets/heroes/${id}.jpg`}
            alt={hero.superhero}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '600px' }}
          />
        </div>

        <div className="col-md-8">
          <h2 className="text-warning mb-4">{hero.superhero}</h2>
          <ul className="list-group list-group-flush bg-dark text-light">
            <li className="list-group-item bg-dark text-light">
              <strong>Alter ego:</strong> {hero.alter_ego}
            </li>
            <li className="list-group-item bg-dark text-light">
              <strong>Publisher:</strong> {hero.publisher}
            </li>
            <li className="list-group-item bg-dark text-light">
              <strong>First appearance:</strong> {hero.first_appearance}
            </li>
            {hero.alter_ego !== hero.characters && (
              <li className="list-group-item bg-dark text-light">
                <strong>Characters:</strong> {hero.characters}
              </li>
            )}
          </ul>

          <h3 className="text-warning mt-4">Characters</h3>
          <p className="text-light">{hero.characters}</p>

          <div className="mt-4">
            <button className="btn btn-outline-warning" onClick={onNavigateBack}>
              Regresar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
