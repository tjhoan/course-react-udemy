import { useCounter, useFetch } from "../hooks";
import { PokemonCard, LoadingMessage } from "../03-examples";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <h1>Información del Pokémon</h1>
      <hr />

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={data.id}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny
          ]}
        />
      )}

      <button onClick={() => (counter > 1 ? decrement() : null)} className="btn btn-primary mt-3">
        Anterior
      </button>
      <button onClick={() => increment()} className="btn btn-primary mt-3">
        Siguiente
      </button>
    </>
  );
};
