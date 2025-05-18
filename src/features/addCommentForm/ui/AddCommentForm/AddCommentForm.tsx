import { type FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import cls from './AddCommentForm.module.scss';
import { AddCommentFormDeprecated } from './deprecated/AddCommentForm.deprecated';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import {
  addCommentFormReducer,
  useAddCommentFormActions,
} from '../../model/slice/addCommentFormSlice';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import {
  DynamicModuleLoader,
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';

export interface IAddCommentFormProps {
  className?: string;
  onSendComment: (arg: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: IAddCommentFormProps): JSX.Element => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const { setText } = useAddCommentFormActions();
  const text = useSelector(getAddCommentFormText);

  const onCommentTextChange = useCallback(
    (value: string): void => {
      setText(value);
    },
    [setText],
  );

  const onSendHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSendComment(text ?? '');
      onCommentTextChange('');
    },
    [onCommentTextChange, onSendComment, text],
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card padding="24" border="partial" fullWidth>
            <form onSubmit={onSendHandler}>
              <HStack
                data-testid="AddCommentForm"
                justify="between"
                max
                gap="16"
                className={classNames(cls.AddCommentFormRedesigned, {}, [className])}
              >
                <Input
                  className={cls.input}
                  placeholder={t('Введите текст комментария')}
                  value={text}
                  data-testid="AddCommentForm.Input"
                  onChange={onCommentTextChange}
                />
                <Button type="submit" data-testid="AddCommentForm.Button">
                  {t('Отправить')}
                </Button>
              </HStack>
            </form>
          </Card>
        }
        off={
          <AddCommentFormDeprecated
            onCommentTextChange={onCommentTextChange}
            onSendHandler={onSendHandler}
            text={text}
            className={className}
          />
        }
      />
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
