import { createContext, Dispatch, SetStateAction } from 'react';
import { Superhero } from '../../utils/types/superhero';

type SuperHeroContext = {
  superheroList: Superhero[];
  setSuperheroList: Dispatch<SetStateAction<Superhero[]>>;
  selectedSuperhero: Superhero | null;
  setSelectedSuperhero: Dispatch<SetStateAction<Superhero | null>>;
};

export const SuperheroContext = createContext<SuperHeroContext>({
  superheroList: [],
  setSuperheroList: () => {},
  selectedSuperhero: null,
  setSelectedSuperhero: () => {},
});
