import { HeroesList } from '../components';

export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr />

      <ul>
        <HeroesList publisher={'Marvel Comics'} />
      </ul>
    </>
  );
};
