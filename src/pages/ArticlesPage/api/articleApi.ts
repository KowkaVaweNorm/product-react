import { type Article } from '@/entities/Article';
import { rtkGCLApi } from '@/shared/api/rtkApi';

const articleApi = rtkGCLApi.injectEndpoints({
  endpoints: (build) => ({
    getArticles: build.query<Article[], void>({
      query: () => ({
        method: 'POST',
        headers: {
          Accept: 'application/json, multipart/mixed',
        },
        url: '/graphql',
        body: {
          query: `query MyQuery { allArticles {id img} }`,
          operationName: 'MyQuery',
        },
      }),
      transformResponse(response, meta, arg) {
        return response.data.allArticles; // Исходя из запроса выше эти типы будут
      },
    }),
  }),
});

export const useGetArticles = articleApi.useGetArticlesQuery;
export const getArticlesQuery = articleApi.endpoints.getArticles.initiate;
