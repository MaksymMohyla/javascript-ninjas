import { createContext, Dispatch, SetStateAction } from 'react';
import { Superhero } from '../../utils/types/superhero';

type SuperHeroContext = {
  superheroList: Superhero[];
  setSuperheroList: Dispatch<SetStateAction<Superhero[]>>;
  selectedSuperheroId: string;
  setSelectedSuperheroId: Dispatch<SetStateAction<string>>;
};

export const SuperheroContext = createContext<SuperHeroContext>({
  superheroList: [],
  setSuperheroList: () => {},
  selectedSuperheroId: '',
  setSelectedSuperheroId: () => {},
});
