import axios from 'axios';

require('dotenv').config();

const {
  REACT_APP_API_URL,
} = process.env;

export const renderExample = () => axios.create({
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
  json: true,
}).get(`${REACT_APP_API_URL}/example/get`)
  .then((response) => response)
  .catch((err) => {
    throw err;
  });
