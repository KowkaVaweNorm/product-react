import { type StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentFormText =
(state: StateSchema): string | undefined => state.addCommentForm?.text;
export const getAddCommentFormError =
(state: StateSchema): string | undefined => state.addCommentForm?.error;
