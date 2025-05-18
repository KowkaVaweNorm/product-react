import { type StateSchema } from '@/app/providers/StoreProvider';

export const getCreateArticleData = (state: StateSchema) => state.articleCreatePage;
