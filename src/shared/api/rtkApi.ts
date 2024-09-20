import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

/**
 * RTK instance for REST queries
 */
export const rtkApi = createApi({
  reducerPath: 'rest_api',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? '';
      if (token.length > 0) {
        headers.set('Authorization', token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});

/**
 * RTK instance for GraphQL queries
 */
export const rtkGCLApi = createApi({
  reducerPath: 'api_graphql',
  baseQuery: fetchBaseQuery({
    baseUrl: __API_GraphQL__,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? '';
      if (token.length > 0) {
        headers.set('Authorization', token);
      }

      return headers;
    },
    method: 'POST',
  }),
  endpoints: (builder) => ({}),
});
