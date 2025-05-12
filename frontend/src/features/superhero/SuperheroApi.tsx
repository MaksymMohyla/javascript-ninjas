import axios from 'axios';
import { Superhero } from '@/utils/types/superhero';
import { serverConfig } from '../../config/server';

const baseUrl = `${serverConfig.apiUrl}/superheroes`;

const getAllSuperheroes = async () => {
  try {
    const response = await axios.get(`${baseUrl}`);
    return response.data as Superhero[];
  } catch (error) {
    console.error('Error fetching superheroes:', error);
    alert(`Error fetching superheroes: ${error}`);
  }
};

const getPageWithSuperheroes = async (page: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}/list${page ? `?page=${page}` : ''}`
    );
    return response.data as Superhero[];
  } catch (error) {
    console.error('Error fetching superheroes:', error);
    alert(`Error fetching superheroes: ${error}`);
  }
};

const getTotalPages = async () => {
  try {
    const response = await axios.get(`${baseUrl}/totalPages`);

    return response.data.pages as number;
  } catch (error) {
    console.error('Error fetching total pages count:', error);
    alert(`Error fetching total pages count: ${error}`);
  }
};

const getSuperhero = async (id: Superhero['id']) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data as Superhero;
  } catch (error) {
    console.error('Error fetching superhero:', error);
    alert(`Error fetching superhero: ${error}`);
  }
};

const createSuperhero = async (superhero: Omit<Superhero, 'id'>) => {
  try {
    await axios.post(`${baseUrl}/add`, superhero);
  } catch (error) {
    console.error('Error creating superhero:', error);
    alert(`Error creating superhero: ${error}`);
  }
};

const updateSuperhero = async (
  id: Superhero['id'],
  dto: Partial<Superhero>
) => {
  try {
    const response = await axios.patch(`${baseUrl}/${id}/update`, dto);
    console.log(response);

    return response.data.updatedSuperhero as Superhero;
  } catch (error) {
    console.error('Error updating superhero:', error);
    alert(`Error updating superhero: ${error}`);
  }
};

const deleteSuperhero = async (id: Superhero['id']) => {
  try {
    await axios.delete(`${baseUrl}/${id}/delete`);
  } catch (error) {
    console.error('Error deleting superhero:', error);
    alert(`Error deleting superhero: ${error}`);
  }
};

export default {
  getAllSuperheroes,
  getPageWithSuperheroes,
  getTotalPages,
  getSuperhero,
  createSuperhero,
  updateSuperhero,
  deleteSuperhero,
};
