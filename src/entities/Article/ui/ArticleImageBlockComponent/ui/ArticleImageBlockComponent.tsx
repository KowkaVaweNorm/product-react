import { memo } from 'react';

import cls from './ArticleImageBlockComponent.module.scss';
import { type ArticleImageBlock } from '../../../model/type/article';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Text, TextAlign } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';

interface IProps {
  className?: string;
  block: ArticleImageBlock;
}
export const ArticleImageBlockComponent = memo((props: IProps): JSX.Element => {
  const { className = '', block } = props;
  return (
    <div className={classNames(cls.article_image_block_component ?? '', {}, [className])}>
      <AppImage src={block.src} alt={block.title} className={cls.image} />
      {block.title !== undefined && <Text align={TextAlign.CENTER} text={block.title} />}
    </div>
  );
});
