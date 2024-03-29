// /* eslint-disable @typescript-eslint/no-invalid-void-type */
// import {
//   fetchCommentsByArticleId
// } from 'pages/ArticleDetailsPage';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getUserAuthData } from 'entities/User';
// import { type ThunkConfig } from 'app/providers/StoreProvider';
// import { type Comment } from 'entities/Comment';
// import { getArtilceDetailsData } from 'entities/Article';

// export const sendComment = createAsyncThunk<
// Comment,
// string | undefined,
// ThunkConfig<string>
// >('addCommentForm/sendComment', async (text, thunkApi) => {
//   const { extra, dispatch, rejectWithValue, getState } = thunkApi;

//   const userData = getUserAuthData(getState());
//   const article = getArtilceDetailsData(getState());

//   if ((userData === undefined) || (article === undefined) || (text === undefined)) {
//     return rejectWithValue('no data');
//   }

//   try {
//     const response = await extra.api.get<Comment>('/comments', {
//       data: {
//         articleId: article?.id,
//         userId: userData.id,
//         text
//       }
//     });

//     if (response.data !== undefined) {
//       throw new Error();
//     }

//     void dispatch(fetchCommentsByArticleId(article.id));

//     return response.data;
//   } catch (e) {
//     return rejectWithValue('error');
//   }
// });
