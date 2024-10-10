import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Input } from '@/shared/ui/deprecated/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import cls from './EditableTextBlock.module.scss';
import { InputArea } from '@/shared/ui/deprecated/InputArea';
interface IProps {
  className?: string;
}

export const EditableTextBlock = (props: IProps): JSX.Element => {
  const { className } = props;
  return (
    <VStack className={classNames(cls.block)} gap="8">
      <HStack>
        [<Input />]
        {
          // eslint-disable-next-line i18next/no-literal-string
          '<- Заголовок'
        }
      </HStack>
      <HStack className={cls.TextArea_block}>
        [ <InputArea maxLength={5000} className={cls.TextArea} /> ]
        {
          // eslint-disable-next-line i18next/no-literal-string
          '<- Текст'
        }
      </HStack>
    </VStack>
  );
};
