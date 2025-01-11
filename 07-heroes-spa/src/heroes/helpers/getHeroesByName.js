import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {
  name = name.trim().toLowerCase();

  if (name.length <= 1) {
    return [];
  }

  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
