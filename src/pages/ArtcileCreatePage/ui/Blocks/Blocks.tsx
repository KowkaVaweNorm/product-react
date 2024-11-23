/* eslint-disable array-callback-return */
import { EditableTextBlock, EditableImgBlock, EditableCodeBlock } from '@/features/createArticle';

import { VStack } from '@/shared/ui/redesigned/Stack';
import { getArticleBlocks } from '../../model/slice/articleCreateSlice';
import { useSelector } from 'react-redux';
import { ArticleBlockType } from '@/entities/Article';

export const Blocks = (): JSX.Element => {
  // eslint-disable-next-line i18next/no-literal-string
  const blocks = useSelector(getArticleBlocks.selectAll);
  return (
    <VStack max gap="8">
      {blocks.map((block) => {
        if (block.type === ArticleBlockType.CODE) {
          return <EditableCodeBlock key={block.draftId} />;
        }
        if (block.type === ArticleBlockType.IMAGE) {
          return <EditableImgBlock key={block.draftId} />;
        }
        if (block.type === ArticleBlockType.TEXT) {
          return <EditableTextBlock key={block.draftId} />;
        }
        return null;
      })}
    </VStack>
  );
};
