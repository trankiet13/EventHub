import { appInfo } from '../constants/appinfor';
import axiosClient from './axiosClient';

class AuthAPI {
  HandleAuthentication = async (
    url: string,
    method?: 'get' | 'post' | 'put' | 'delete',
    data?: any,
  ) => {
    return await axiosClient(`${appInfo.BASE_URL}/auth/${url}`, {
      method: method ?? 'get',
      data,
    });
  };
}

const authenticationAPI = new AuthAPI();
export default authenticationAPI;