import cls from './AddCommentForm.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo, useCallback } from 'react';
import { Input } from '@/shared/ui/deprecated/Input';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  addCommentFormSliceActions,
  addCommentFormSliceReducer,
} from '../../model/slice/addCommentFormSlice';
import {
  DynamicModuleLoader,
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/redesigned/Stack';

export interface IAddCommentFormProps {
  className?: string;
  onSendComment: (arg: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormSliceReducer,
};

const AddCommentForm = memo((props: IAddCommentFormProps): JSX.Element => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);

  const onCommentTextChange = useCallback(
    (value: string): void => {
      dispatch(addCommentFormSliceActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text ?? '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        justify="between"
        max
        data-testid={'AddCommentForm'}
        className={classNames(cls.add_comment_form ?? '', {}, [className])}
      >
        <Input
          className={cls.input}
          placeholder={t('Введите текст комментария')}
          value={text}
          onChange={onCommentTextChange}
          data-testid={'AddCommentForm.Input'}
        />
        <Button
          data-testid={'AddCommentForm.Button'}
          theme={ButtonTheme.OUTLINE}
          onClick={onSendHandler}
        >
          {t('Отправить')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
