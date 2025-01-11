import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers';
import { HeroeCard } from '../components';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({ searchText: q });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-warning mt-2">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div
            className="alert alert-info animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a hero
          </div>
          <div
            className="alert alert-warning animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}
          >
            There&apos;s no results for <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroeCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
