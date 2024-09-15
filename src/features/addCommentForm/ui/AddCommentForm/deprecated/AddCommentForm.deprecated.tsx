import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { ButtonTheme, Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { t } from 'i18next';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import cls from '../AddCommentForm.module.scss';
import { getHStackStyle } from '@/shared/ui/redesigned/Stack/HStack/HStack';
import { type FormEvent } from 'react';
interface IProps {
  className?: string;
  onCommentTextChange: (value: string) => void;
  onSendHandler: (e: FormEvent<HTMLFormElement>) => void;
  text: string;
}

export const AddCommentFormDeprecated = (props: IProps): JSX.Element => {
  const { onCommentTextChange, onSendHandler, className, text } = props;

  return (
    <form
      data-testid="AddCommentForm"
      onSubmit={onSendHandler}
      {...getHStackStyle({
        justify: 'between',
        max: true,
        className: classNames(cls.AddCommentForm, {}, [className]),
      })}
    >
      <InputDeprecated
        className={cls.input}
        placeholder={t('Введите текст комментария')}
        value={text}
        data-testid="AddCommentForm.Input"
        onChange={onCommentTextChange}
      />
      <ButtonDeprecated
        type="submit"
        data-testid="AddCommentForm.Button"
        theme={ButtonTheme.OUTLINE}
      >
        {t('Отправить')}
      </ButtonDeprecated>
    </form>
  );
};
