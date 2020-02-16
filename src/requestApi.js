import axios from 'axios';

const requestApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

requestApi.interceptors.response.use(res => (res.data ? res.data : res));

requestApi.defaults.headers.post['Content-Type'] = 'application/json';
requestApi.defaults.headers.patch['Content-Type'] = 'application/json';

export default requestApi;
