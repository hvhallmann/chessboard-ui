import axios from 'axios';

const neideApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

neideApi.interceptors.response.use(res => res.data);

// neideApi.defaults.headers.post['Content-Type'] = 'application/json';

export default neideApi;
