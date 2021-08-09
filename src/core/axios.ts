import Axios from 'axios';
import Cookies from 'js-cookie';
import { API_URL } from '../constants';
import { tokenRefresh } from '../redux/auth/api';

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use((config) => {
  const accessToken = Cookies.get('accessToken');

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return new Promise(async (resolve, reject) => {
      const originalRequest = error.config;
      const refreshToken = Cookies.get('refreshToken');

      if (
        error.response &&
        error.response.status === 401 &&
        error.config &&
        !error.config.__isRetryRequest &&
        refreshToken
      ) {
        originalRequest._retry = true;

        const formData = new FormData();
        formData.append('refresh_token', refreshToken);

        const response = await tokenRefresh(formData);

        if (response.access_token) {
          Cookies.set('accessToken', response.access_token, {
            expires: new Date(response.access_expired_at * 1000),
          });

          Cookies.set('refreshToken', response.refresh_token, {
            expires: new Date(response.refresh_expired_at * 1000),
          });

          resolve(axios(originalRequest));
        } else {
          return reject(error);
        }
      }

      return reject(error);
    });
  },
);
