import { useTranslation } from 'react-i18next';
import cls from './ArticleDetails.module.scss';
import {
  DynamicModuleLoader,
  type ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../../model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useCallback } from 'react';
import {
  fetchArticleById
} from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../../model/selectors/articleDetails';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlockType, type ArticleBlock } from '../../../model/type/article';
import {
  ArticleImageBlockComponent
} from '../../ArticleImageBlockComponent/ui/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent';
import {
  ArticleCodeBlockComponent
} from '../../ArticleCodeBlockComponent/ui/ArticleCodeBlockComponent';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
};

interface IProps {
  className?: string
  id: string
}

export const ArticleDetails = memo((props: IProps): JSX.Element => {
  const {
    id,
    className = ''
  } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent className={cls.block} block={block} key={block.id}/>;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent className={cls.block} block={block} key={block.id}/>;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent className={cls.block} block={block} key={block.id}/>;
      default:
        return null;
    }
  }, []);

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  let content;
  if (isLoading === true) {
    content = (
        <div>
            <Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
            <Skeleton className={cls.title} width={300} height={32} />
            <Skeleton className={cls.skeleton} width={600} height={24} />
            <Skeleton className={cls.skeleton} width={'100%'} height={200} />
            <Skeleton className={cls.skeleton} width={'100%'} height={200} />
        </div>
    );
  } else if (error !== undefined) {
    content = (
        <Text
            align={TextAlign.CENTER}
            text={t('Произошла ошибка при загрузке статьи')}
        />
    );
  } else {
    content = (
        <>
            <div className={cls.avatar_wrapper}>
                <Avatar
                    size={200}
                    src={article?.img}
                    className={cls.avatar}
            />
            </div>
            <Text
                className={cls.title}
                title={article?.title}
                text={article?.subtitle}
                size={TextSize.L}
            />
            <div className={cls.article_info}>
                <Icon Svg={EyeIcon} className={cls.icon}/>
                <Text text={String(article?.views)}/>
            </div>
            <div className={cls.article_info}>
                <Icon Svg={CalendarIcon} className={cls.icon}/>
                <Text text={article?.createdAt}/>
            </div>
            {article?.blocks.map(renderBlock)}
        </>
    );
  }
  return (
      <DynamicModuleLoader reducers={reducers}>
          <div className={classNames(cls.article_details ?? '', {}, [className])}>
              {content}
          </div>
      </DynamicModuleLoader>
  );
});
