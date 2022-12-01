import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { StatusCode } from '../const';
import { getUserData } from './user-data';
import { toast } from 'react-toastify';

const StatusCodeMap: Record<number, boolean> = {
  [StatusCode.BadRequest]: true,
  [StatusCode.Unauthorized]: true,
  [StatusCode.NotFound]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMap[response.status];
const BACKEND_URL = 'https://11.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getUserData().token;

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      if (error.response && shouldDisplayError(error.response)) {
        toast.warn(error.response.data.error);
      }

      throw error;
    }
  );

  return api;
};

export { createAPI };
