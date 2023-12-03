import { ArticleDetails } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './ArticleDetailsPage.module.scss';
interface IProps {
  className?: string
}

const ArticleDetailsPage = (props: IProps): JSX.Element => {
  const {
    className = ''
  } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();
  if (id === undefined) {
    return (
        <div className={(classNames(cls.article_details_page ?? '', {}, [className]))}>
            {t('Статья не найдена')}
        </div>
    );
  }
  return (
      <div className={(classNames(cls.article_details_page ?? '', {}, [className]))}>
          <ArticleDetails id={id}/>
      </div>
  );
};

export default ArticleDetailsPage;
