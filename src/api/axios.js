import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:7188/api/v1', // your API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
