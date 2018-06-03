import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getDishesData = () => {
  const url = `${BASE_URL}/api/dishes`;
  return axios.get(url).then(response => response.data);
};

