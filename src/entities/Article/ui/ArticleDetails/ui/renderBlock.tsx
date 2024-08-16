import { type ArticleBlock, ArticleBlockType } from '../../../model/type/article';
import cls from './ArticleDetails.module.scss';
import { ArticleCodeBlockComponent } from '../../ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../../ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent';

export const renderArticleBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent key={block.id} block={block} className={cls.block} />;
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
    default:
      return null;
  }
};
