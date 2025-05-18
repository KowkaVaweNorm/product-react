import cls from './EditableTextBlock.module.scss';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Input } from '@/shared/ui/deprecated/Input';
import { InputArea } from '@/shared/ui/deprecated/InputArea';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
interface IProps {
  className?: string;
  onChangeTitle?: (newTitle: string) => void;
  onChangeBodyText?: (bodyText: string) => void;
}

export const EditableTextBlock = (props: IProps): JSX.Element => {
  const { className, onChangeBodyText, onChangeTitle } = props;
  return (
    <VStack className={classNames(cls.block, {}, [className])} gap="8">
      <HStack>
        [
        <Input
          onChange={(value) => {
            onChangeTitle?.(value);
          }}
        />
        ]
        {
          // eslint-disable-next-line i18next/no-literal-string
          '<- Заголовок'
        }
      </HStack>
      <HStack className={cls.TextArea_block}>
        [{' '}
        <InputArea
          maxLength={5000}
          className={cls.TextArea}
          onChange={(e) => {
            onChangeBodyText?.(e.target.value);
          }}
        />{' '}
        ]
        {
          // eslint-disable-next-line i18next/no-literal-string
          '<- Текст'
        }
      </HStack>
    </VStack>
  );
};
