// import axios from 'axios';
// import queryString from 'query-string';
// const axiosClient = axios.create({
//   paramsSerializer: params => queryString.stringify(params),
// });

// axiosClient.interceptors.request.use(async (config: any) => {
//   config.headers = {
//     Authorization: '',
//     Accept: 'application/json',
//     ...config.headers,
//   };
//   config.data;
//   return config;
// });

// axiosClient.interceptors.response.use(
//   res => {
//     if (res.data && res.status === 200) {
//       return res.data;
//     }
//     throw new Error(res.data.message || 'Something went wrong');
//     return res;
//   },
//   error => {
//     console.log(`Error: ${JSON.stringify(error)}`);
//     return Promise.reject(error.response);
//   },
// );
// export default axiosClient;
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
  (response) => {
    // // Trả về luôn data, không check status thủ công
    // return response.data;
    if (response.data && response.status === 200) {
      return response.data;
    }
    throw new Error('Error')
  },
  (error) => {
    console.log('Error API:', error.response?.data || error.message);

    const message =
      error.response?.data?.message ||
      error.message ||
      'Something went wrong';

    return Promise.reject(message); // Không cần new Error ở đây
  }
);

export default axiosClient;