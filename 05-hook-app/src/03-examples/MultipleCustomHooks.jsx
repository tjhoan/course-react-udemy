import { useFetch } from '../hooks';

export const MultipleCustomHooks = () => {
  const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/4');

  return (
    <>
      <h1>Información del Pokémon</h1>
      <hr />

      { isLoading && <p>Cargando...</p> } 

      <h1>{ data?.name }</h1>
    </>
  );
};
