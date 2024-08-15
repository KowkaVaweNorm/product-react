import cls from './ArticleCodeBlockComponent.module.scss';
import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { type ArticleCodeBlock } from '../../../model/type/article';
import { Code } from '@/shared/ui/deprecated/Code';

interface IProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: IProps): JSX.Element => {
  const { className = '', block } = props;
  return (
    <div className={classNames(cls.article_code_block_component ?? '', {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});
