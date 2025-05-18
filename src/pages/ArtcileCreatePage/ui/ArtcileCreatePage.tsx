/* eslint-disable i18next/no-literal-string */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ArticleMetaInfo } from './ArticleMetaInfo/ArticleMetaInfo';
import { Blocks } from './Blocks/Blocks';
import { ControlsAddBlock } from './ControlsAddBlock/ControlsAddBlock';
import { CreateArticleButton } from './CreateArticleButton/CreateArticleButton';
import { articleCreateReducer, useArticleCreateActions } from '../model/slice/articleCreateSlice';

import { getUserAuthData } from '@/entities/User';
import {
  DynamicModuleLoader,
  type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Page } from '@/widgets/Page';
const initialReducers: ReducersList = {
  articleCreatePage: articleCreateReducer,
};

const ArtcileCreatePage = (): JSX.Element => {
  const authData = useSelector(getUserAuthData);
  const { setUserId } = useArticleCreateActions();
  useEffect(() => {
    if (authData != null) {
      setUserId(authData?.id);
    }
  }, [authData, setUserId]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <Page>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<>In process...</>}
          off={
            <VStack gap="16">
              <CreateArticleButton />
              <ArticleMetaInfo />
              <Blocks />
              <ControlsAddBlock />
            </VStack>
          }
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArtcileCreatePage;
