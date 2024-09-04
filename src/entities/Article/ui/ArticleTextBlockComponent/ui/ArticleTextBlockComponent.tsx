import cls from './ArticleTextBlockComponent.module.scss';
import { memo } from 'react';
import { type ArticleTextBlock } from '../../../model/type/article';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface IProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: IProps): JSX.Element => {
  const { block, className = '' } = props;
  return (
    <div className={classNames(cls.article_text_block_component ?? '', {}, [className])}>
      {block.title !== undefined && (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text title={block.title} className={cls.title} />}
          off={<TextDeprecated title={block.title} className={cls.title} />}
        />
      )}
      {block.paragraphs?.map((paragraph, index) => (
        <ToggleFeatures
          key={index}
          feature="isAppRedesigned"
          on={<Text key={paragraph} text={paragraph} className={cls.paragraph} />}
          off={<TextDeprecated key={paragraph} text={paragraph} className={cls.paragraph} />}
        />
      ))}
    </div>
  );
});
