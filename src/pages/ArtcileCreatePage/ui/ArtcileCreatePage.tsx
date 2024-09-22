/* eslint-disable i18next/no-literal-string */
import {
  DynamicModuleLoader,
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { articleCreateReducer } from '../model/slice/articleCreateSlice';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleMetaInfo } from './ArticleMetaInfo/ArticleMetaInfo';
import { ControlsAddBlock } from './ControlsAddBlock/ControlsAddBlock';
import { Blocks } from './Blocks/Blocks';
const initialReducers: ReducersList = {
  articleCreatePage: articleCreateReducer,
};

const ArtcileCreatePage = (): JSX.Element => {
  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <Page>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<>In process...</>}
          off={
            <>
              <ArticleMetaInfo />
              <Blocks />
              <ControlsAddBlock />
            </>
          }
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArtcileCreatePage;
