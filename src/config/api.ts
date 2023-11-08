import axios from 'axios';

export const SERVER_URL = 'https://game-store-29io.onrender.com';

export const $api = axios.create({
  baseURL: `${SERVER_URL}/api`,
});

$api.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');

  if (token) req.headers.Authorization = token;

  return req;
});
