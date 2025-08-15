import axios from 'axios';
import queryString from 'query-string';
const axiosClient = axios.create({
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config: any) => {
  config.headers = {
    Authorization: '',
    Accept: 'application/json',
    ...config.headers,
  };
  config.data;
  return config;
});

axiosClient.interceptors.response.use(
  res => {
    if (res.data && res.status === 200) {
      return res.data;
    }
    throw new Error(res.data.message || 'Something went wrong');
    return res;
  },
  error => {
    console.log(`Error: ${JSON.stringify(error)}`);
    return Promise.reject(error.response);
  },
);
export default axiosClient;
