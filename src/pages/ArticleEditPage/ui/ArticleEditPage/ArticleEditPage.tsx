import { memo } from 'react';
import { useParams } from 'react-router-dom';

import cls from './ArticleEditPage.module.scss';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Page } from '@/widgets/Page';

interface IArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo((props: IArticleEditPageProps): JSX.Element => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  return (
    <Page className={classNames(cls.article_edit_page ?? '', {}, [className])}>
      {isEdit ? 'Edit page with id:' + String(id) : 'create page'}
    </Page>
  );
});
export default ArticleEditPage;
