import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { ButtonTheme, Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { t } from 'i18next';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import cls from '../AddCommentForm.module.scss';
interface IProps {
  className?: string;
  onCommentTextChange: (value: string) => void;
  onSendHandler: () => void;
  text: string;
}

export const AddCommentFormDeprecated = (props: IProps): JSX.Element => {
  const { onCommentTextChange, onSendHandler, className, text } = props;
  return (
    <HStack
      data-testid="AddCommentForm"
      justify="between"
      max
      className={classNames(cls.AddCommentForm, {}, [className])}
    >
      <InputDeprecated
        className={cls.input}
        placeholder={t('Введите текст комментария')}
        value={text}
        data-testid="AddCommentForm.Input"
        onChange={onCommentTextChange}
      />
      <ButtonDeprecated
        data-testid="AddCommentForm.Button"
        theme={ButtonTheme.OUTLINE}
        onClick={onSendHandler}
      >
        {t('Отправить')}
      </ButtonDeprecated>
    </HStack>
  );
};
