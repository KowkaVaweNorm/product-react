import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

// const baseUrl = __IS_DEV__ ? 'http://localhost:8000' : '';

export const $api = axios.create({
  baseURL: __API__
});

$api.interceptors.request.use((config) => {
  if (config.headers != null) {
    config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? '';
  }
  return config;
});
