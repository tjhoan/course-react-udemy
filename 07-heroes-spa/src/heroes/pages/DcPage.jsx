import { HeroesList } from '../components';

export const DcPage = () => {
  return (
    <>
      <h1>Dc Comics</h1>
      <hr />

      <ul>
        <HeroesList publisher={'DC Comics'} />
      </ul>
    </>
  );
};
