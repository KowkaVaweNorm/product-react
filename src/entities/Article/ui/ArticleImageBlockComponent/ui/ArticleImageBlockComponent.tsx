import cls from './ArticleImageBlockComponent.module.scss';
import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { type ArticleImageBlock } from '../../../model/type/article';
import { Text, TextAlign } from '@/shared/ui/deprecated/Text';

interface IProps {
  className?: string;
  block: ArticleImageBlock;
}
export const ArticleImageBlockComponent = memo((props: IProps): JSX.Element => {
  const { className = '', block } = props;
  return (
    <div className={classNames(cls.article_image_block_component ?? '', {}, [className])}>
      <img src={block.src} alt={block.title} className={cls.image} />
      {block.title !== undefined && <Text align={TextAlign.CENTER} text={block.title} />}
    </div>
  );
});
