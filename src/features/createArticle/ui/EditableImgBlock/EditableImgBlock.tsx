import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './EditableImgBlock.module.scss';

import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { Input } from '@/shared/ui/deprecated/Input';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Loader } from '@/shared/ui/redesigned/Loader';
import { Flex } from '@/shared/ui/redesigned/Stack/Flex/Flex';

interface TProps {
  onChangeLink?: (newLink: string) => void;
  onChangeLinkTitle?: (newLinkTitle: string) => void;
}

export const EditableImgBlock = (props: TProps) => {
  const { onChangeLink, onChangeLinkTitle } = props;
  const [link, setLink] = useState('');
  const { t } = useTranslation('create-article');
  const cb = useDebounce((value) => {
    setLink(value);
    onChangeLink?.(value);
  }, 200);
  return (
    <Flex direction="column" justify="center" gap="8" className={cls.block}>
      <AppImage className={cls.img} src={link} fallback={<Loader />} errorFallback />
      <Flex max wrap="wrap">
        <Flex className={cls.wrap_input}>
          [ <Input className={cls.input} onChange={cb} /> ]
        </Flex>
        - {t('Cсылка')}
      </Flex>
      <Flex max wrap="wrap">
        <Flex className={cls.wrap_input}>
          [ <Input className={cls.input} onChange={onChangeLinkTitle} /> ]
        </Flex>
        - {t('Подпись картинки')}
      </Flex>
    </Flex>
  );
};
