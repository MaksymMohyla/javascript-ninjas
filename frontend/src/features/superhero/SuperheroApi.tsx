import { Superhero } from '@/utils/types/superhero';
import { serverConfig } from '../../config/server';
import axios from 'axios';

const baseUrl = `${serverConfig.apiUrl}/superheroes`;

const createSuperhero = async (superhero: Superhero) => {
  const responce = await axios.post(`${baseUrl}/add`, superhero);
  console.log(responce);
};

export default {
  createSuperhero,
};
