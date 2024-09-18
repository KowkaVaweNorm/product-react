import { type Article } from '@/entities/Article';
import { rtkGCLApi } from '@/shared/api/rtkApi';

const articleApi = rtkGCLApi.injectEndpoints({
  endpoints: (build) => ({
    getArticles: build.query<Article[], void>({
      query: (id) => ({
        url: '/',
        body: JSON.stringify({
          query: `
            query MyQuery {
              allArticles {
                id
                subtitle
              }
            }
          `,
          variables: {
            id, // Переменная для GraphQL запроса
          },
        }),
      }),
    }),
  }),
});

export const useGetArticles = articleApi.useGetArticlesQuery;
export const getArticlesQuery = articleApi.endpoints.getArticles.initiate;
