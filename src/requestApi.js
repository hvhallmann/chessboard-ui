import axios from 'axios';

// neide => network identifier
const neideApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

neideApi.interceptors.response.use(res => (res.data ? res.data : res));

neideApi.defaults.headers.post['Content-Type'] = 'application/json';
neideApi.defaults.headers.patch['Content-Type'] = 'application/json';

export default neideApi;
