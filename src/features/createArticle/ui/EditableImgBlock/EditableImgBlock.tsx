import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { useState } from 'react';
import cls from './EditableImgBlock.module.scss';
import { Flex } from '@/shared/ui/redesigned/Stack/Flex/Flex';
import { Input } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/redesigned/Loader';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { useTranslation } from 'react-i18next';
export const EditableImgBlock = () => {
  const [link, setLink] = useState('');
  const { t } = useTranslation('create-article');
  const cb = useDebounce((value) => {
    setLink(value);
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
    </Flex>
  );
};
