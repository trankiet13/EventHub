import axios from 'axios';
import queryString from 'query-string';
import { appInfo } from '../constants/appinfor';

const axiosClient = axios.create({
  baseURL: appInfo.BASE_URL,
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
  response => {
    // // Trả về luôn data, không check status thủ công
    // return response.data;
    if (response.data && response.status === 200) {
      return response.data;
    }
  },
  error => {
    console.log('Error API:', error.response?.data || error.message);

    const message =
      error.response?.data?.message || error.message || 'Something went wrong';

    return Promise.reject(message); // Không cần new Error ở đây
  },
);

export default axiosClient;
