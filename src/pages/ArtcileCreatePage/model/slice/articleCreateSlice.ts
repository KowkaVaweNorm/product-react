import { createEntityAdapter, nanoid, type PayloadAction } from '@reduxjs/toolkit';

import { type ArticleBlockDraft, type IArticleCreateSchema } from '../types/articleCreateSchema';

import { type StateSchema } from '@/app/providers/StoreProvider';
import { ArticleBlockType, ArticleType } from '@/entities/Article';
import { buildSlice } from '@/shared/lib/store';

const blockAdapter = createEntityAdapter<ArticleBlockDraft>({
  selectId: (block: ArticleBlockDraft) => block.draftId,
});
export const getArticleBlocks = blockAdapter.getSelectors<StateSchema>(
  (state) => state.articleCreatePage?.blocks ?? blockAdapter.getInitialState(),
);
const initialState: IArticleCreateSchema = {
  title: '',
  subtitle: '',
  img: '',
  createdAt: '',
  userId: '',
  type: [ArticleType.ALL],
  blocks: blockAdapter.getInitialState(),
};

const articleCreateSlice = buildSlice({
  name: 'articleCreate',
  initialState,
  reducers: {
    setUserId: (state: IArticleCreateSchema, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setTitle: (state: IArticleCreateSchema, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setSubTitle: (state: IArticleCreateSchema, action: PayloadAction<string>) => {
      state.subtitle = action.payload;
    },
    setImg: (state: IArticleCreateSchema, action: PayloadAction<string>) => {
      state.img = action.payload;
    },
    setType: (state: IArticleCreateSchema, action: PayloadAction<ArticleType[]>) => {
      state.type = action.payload;
    },
    setTitleParagraph: (
      state: IArticleCreateSchema,
      action: PayloadAction<{ draftId: string; newTitle: string }>,
    ) => {
      const { draftId, newTitle } = action.payload;
      blockAdapter.updateOne(state.blocks, {
        id: draftId,
        changes: { title: newTitle },
      });
    },
    addBlock: (state: IArticleCreateSchema, action: PayloadAction<ArticleBlockType>) => {
      const blockType = action.payload;
      if (blockType === ArticleBlockType.CODE) {
        blockAdapter.addOne(state.blocks, {
          draftId: nanoid(),
          type: ArticleBlockType.CODE,
          code: `function add(a, b) {\n  return a + b;\n}`,
          id: nanoid(),
        });
      }
      if (blockType === ArticleBlockType.IMAGE) {
        blockAdapter.addOne(state.blocks, {
          draftId: nanoid(),
          type: ArticleBlockType.IMAGE,
          src: '',
          title: '',
          id: nanoid(),
        });
      }
      if (blockType === ArticleBlockType.TEXT) {
        blockAdapter.addOne(state.blocks, {
          draftId: nanoid(),
          type: ArticleBlockType.TEXT,
          title: '',
          paragraphs: [''],
          id: nanoid(),
        });
      }
    },
    removeBlock: (state: IArticleCreateSchema, action: PayloadAction<string>) => {
      blockAdapter.removeOne(state.blocks, action.payload);
    },

    updateBlock: (
      state: IArticleCreateSchema,
      action: PayloadAction<{ blockDraftId: string; data: Partial<ArticleBlockDraft> }>,
    ) => {
      blockAdapter.updateOne(state.blocks, {
        id: action.payload.blockDraftId,
        changes: action.payload.data,
      });
    },
  },
});

export const {
  actions: articleCreateActions,
  reducer: articleCreateReducer,
  useActions: useArticleCreateActions,
} = articleCreateSlice;
