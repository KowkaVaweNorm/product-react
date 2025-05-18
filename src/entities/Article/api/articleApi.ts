import { type Article } from '../model/type/article';

import { rtkApi } from '@/shared/api/rtkApi';

const profileApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    createArticle: build.mutation<void, Partial<Omit<Article, 'id'>>>({
      query: (article) => ({
        url: `/articles`,
        method: 'POST',
        body: {
          ...article,
        },
      }),
    }),
  }),
});
export const { useCreateArticleMutation } = profileApi;
