import { getHeroesByPublisher } from '../helpers';
import PropTypes from 'prop-types';
import { HeroeCard } from './';

export const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <>
      <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-auto g-3 mt-2 mb-5">
        {heroes.map((hero) => (
          <HeroeCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};

HeroesList.propTypes = {
  publisher: PropTypes.string.isRequired
};
