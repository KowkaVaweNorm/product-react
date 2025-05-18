import { type Profile } from '../model/types/profile';

import { rtkApi } from '@/shared/api/rtkApi';

const profileApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileById: build.query<Profile, string>({
      query: (profileId) => ({
        url: `/profile/${profileId}`,
        method: 'GET',
      }),
      keepUnusedDataFor: 0,
    }),
  }),
});
export const { useGetProfileByIdQuery } = profileApi;
