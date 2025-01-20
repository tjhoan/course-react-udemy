import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
    limit: 1,
    cache: {}
  },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
      state.limit = action.payload.limit;
    }, 
    cachePokemons: (state, action) => {
      state.cache[action.payload.key] = action.payload.data;
    }
  }
});

export const { startLoadingPokemons, setPokemons, cachePokemons } = pokemonSlice.actions;
