import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bymykel.github.io/CSGO-API/api/en/skins.json'
});

export const getPosts = async () => {
  try {
    const response = await api.get('https://bymykel.github.io/CSGO-API/api/en/skins.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};