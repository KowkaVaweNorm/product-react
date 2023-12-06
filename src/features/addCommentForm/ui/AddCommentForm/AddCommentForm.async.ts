import { lazy } from 'react';
import { type IAddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync =
// @ts-expect-error тип указан верно
lazy<FC<IAddCommentFormProps>>(async () => await new Promise(resolve => {
  setTimeout(() => { resolve(import('./AddCommentForm')); }, 1500);
}));
