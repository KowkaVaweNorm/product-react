/* eslint-disable max-len */
import { ArticleList, ArticleVew } from 'entities/Article';

const ArticlesPage = (): JSX.Element => {
  return (
      <div>

          <ArticleList
              articles={[]}
              view={ArticleVew.BIG}/>
      </div>
  );
};

export default ArticlesPage;
