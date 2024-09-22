import { buildSlice } from '@/shared/lib/store';
import { createEntityAdapter, nanoid, type PayloadAction } from '@reduxjs/toolkit';
import { type ArticleBlock } from '@/entities/Article';
import { type ArticleBlockDraft, type IArticleCreateSchema } from '../types/articleCreateSchema';

const blockAdapter = createEntityAdapter<ArticleBlockDraft>({
  selectId: (block: ArticleBlockDraft) => block.draftId,
});
const initialState: IArticleCreateSchema = {
  title: '',
  subtitle: '',
  img: '',
  createdAt: '',
  userId: '',
  type: [],
  blocks: blockAdapter.getInitialState(),
};

const articleCreateSlice = buildSlice({
  name: 'articleCreate',
  initialState,
  reducers: {
    addBlock: (state: IArticleCreateSchema, action: PayloadAction<ArticleBlock>) => {
      blockAdapter.addOne(state.blocks, { draftId: nanoid(), ...action.payload });
    },
    removeBlock: (state: IArticleCreateSchema, action: PayloadAction<string>) => {
      blockAdapter.removeOne(state.blocks, action.payload);
    },
  },
});

export const {
  actions: articleCreateActions,
  reducer: articleCreateReducer,
  useActions: useArticleCreateActions,
} = articleCreateSlice;
