import cls from './ArticleTextBlockComponent.module.scss';
import { memo } from 'react';
import { type ArticleTextBlock } from '../../../model/type/article';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Text } from '@/shared/ui/Text';

interface IProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: IProps): JSX.Element => {
  const {
    block,
    className = ''
  } = props;
  return (
      <div
          className={classNames(cls.article_text_block_component ?? '', {}, [className])}
      >
          {block.title !== undefined && (
          <Text
              title={block.title}
              className={cls.title}
          />
          )}
          {block.paragraphs?.map((paragraph, index) => (
              <Text
                  key={paragraph}
                  text={paragraph}
                  className={cls.paragraph}
            />
          ))}
      </div>
  );
});
