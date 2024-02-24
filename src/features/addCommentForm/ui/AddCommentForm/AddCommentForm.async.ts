import { type FC, lazy } from 'react';
import { type IAddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<IAddCommentFormProps>>(
  async () => await (import('./AddCommentForm'))
);
