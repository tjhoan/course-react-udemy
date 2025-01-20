import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';
import { LoadingMessage } from './ui/LoadingMessage';

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons(0, 1));
  }, [dispatch]);

  const { pokemons, isLoading, page, limit } = useSelector((state) => state.pokemons);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold mb-4">PokemonApp</h2>
        <h2 className="text-2xl font-bold mb-4">Página: {page}</h2>
      </div>
      <hr className="border-gray-400 border-t-2 w-full mb-4" />

      <div className="overflow-y-auto h-[21em] bg-[#222222] rounded-xl p-4">
        {isLoading ? (
          <LoadingMessage />
        ) : (
          <ul className="flex flex-col space-y-4">
            {pokemons.map((pokemon) => (
              <li key={pokemon.name} className="rounded-lg flex items-center bg-zinc-800">
                <img src={pokemon.image} alt={pokemon.name} className="w-16 h-16 mr-4" />
                <span className="text-xl font-medium text-white">{pokemon.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex justify-center space-x-4 mt-3">
        <button
          className="bg-red-500 px-2 py-1 rounded-lg hover:bg-red-600 text-white"
          onClick={() => dispatch(getPokemons(page, Math.max(1, limit - 1)))}
        >
          -1
        </button>
        <span className="text-lg px-3 py-1 bg-gray-700 text-white rounded-lg">{limit}</span>
        <button
          className="bg-green-500 px-2 py-1 rounded-lg hover:bg-green-600 text-white"
          onClick={() => dispatch(getPokemons(page, limit + 1))}
        >
          +1
        </button>
      </div>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          className="bg-slate-300 text-black hover:bg-slate-500 font-medium rounded-lg text-lg px-3 py-1"
          disabled={page === 0 || isLoading}
          onClick={() => dispatch(getPokemons(page - 1, limit))}
        >
          Previous
        </button>
        <button
          type="button"
          className="bg-slate-300 text-black hover:bg-slate-500 font-medium rounded-lg text-lg px-3 py-1"
          disabled={isLoading}
          onClick={() => dispatch(getPokemons(page + 1, limit))}
        >
          Next
        </button>
      </div>
    </div>
  );
};
