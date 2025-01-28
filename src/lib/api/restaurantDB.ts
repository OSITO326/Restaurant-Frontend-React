import axios from 'axios';

const restaurantDB = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default restaurantDB;
