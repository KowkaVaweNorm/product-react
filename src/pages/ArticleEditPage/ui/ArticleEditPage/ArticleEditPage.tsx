import cls from './ArticleEditPage.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { useParams } from 'react-router-dom';

interface IArticleEditPageProps {
  className?: string
}

const ArticleEditPage = memo((props: IArticleEditPageProps): JSX.Element => {
  const {
    className
  } = props;
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  return (
      <Page
          className={classNames(cls.article_edit_page ?? '', {}, [className])}
      >
          {isEdit ? 'Edit page with id:' + String(id) : 'create page'}
      </Page>
  );
});
export default ArticleEditPage;
