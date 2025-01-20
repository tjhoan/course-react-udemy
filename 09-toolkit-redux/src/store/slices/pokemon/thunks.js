import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons, cachePokemons } from './pokemonSlice';

export const getPokemons = (page = 0, limit = 1) => {
  return async (dispatch, getState) => {
    const { cache } = getState().pokemons;

    const cacheKey = `${page}-${limit}`;
    if (cache[cacheKey]) {
      return dispatch(setPokemons({ ...cache[cacheKey], page, limit }));
    }

    dispatch(startLoadingPokemons());

    const offset = page * limit;
    const { data } = await pokemonApi.get(`/pokemon?limit=${limit}&offset=${offset}`);

    console.log('Se ejecuta la petición');

    const pokemonsDatails = await Promise.all(
      data.results.map(async (pokemon) => {
        const { data } = await pokemonApi.get(pokemon.url);
        return {
          name: data.name,
          image: data.sprites.front_default
        };
      })
    );

    const newCache = { pokemons: pokemonsDatails, page, limit };
    dispatch(setPokemons({ ...newCache }));
    dispatch(cachePokemons({ key: cacheKey, data: newCache }));
  };
};
