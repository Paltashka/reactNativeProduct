import axios from 'axios';

let baseURL = 'https://fakestoreapi.com';

const api = axios.create({
  baseURL: baseURL,
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      return Promise.reject(error.response.data.message);
    }
  },
);
export default api;
