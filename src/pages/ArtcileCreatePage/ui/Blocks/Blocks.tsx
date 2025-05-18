/* eslint-disable array-callback-return */
import { useSelector } from 'react-redux';

import { getArticleBlocks, useArticleCreateActions } from '../../model/slice/articleCreateSlice';

import { ArticleBlockType } from '@/entities/Article';
import { EditableTextBlock, EditableImgBlock, EditableCodeBlock } from '@/features/createArticle';
import { VStack } from '@/shared/ui/redesigned/Stack';

export const Blocks = (): JSX.Element => {
  // eslint-disable-next-line i18next/no-literal-string
  const blocks = useSelector(getArticleBlocks.selectAll);
  const { updateBlock } = useArticleCreateActions();
  return (
    <VStack max gap="8">
      {blocks.map((block) => {
        if (block.type === ArticleBlockType.CODE) {
          return (
            <EditableCodeBlock
              key={block.draftId}
              onChangeText={(newText) => {
                updateBlock({
                  blockDraftId: block.draftId,
                  data: { code: newText },
                });
              }}
            />
          );
        }
        if (block.type === ArticleBlockType.IMAGE) {
          return (
            <EditableImgBlock
              key={block.draftId}
              onChangeLink={(newLink) => {
                updateBlock({
                  blockDraftId: block.draftId,
                  data: { src: newLink },
                });
              }}
              onChangeLinkTitle={(newLinkTitle) => {
                updateBlock({
                  blockDraftId: block.draftId,
                  data: { title: newLinkTitle },
                });
              }}
            />
          );
        }
        if (block.type === ArticleBlockType.TEXT) {
          return (
            <EditableTextBlock
              key={block.draftId}
              onChangeTitle={(newTitle) => {
                updateBlock({
                  blockDraftId: block.draftId,
                  data: { title: newTitle },
                });
              }}
              onChangeBodyText={(newText) => {
                updateBlock({
                  blockDraftId: block.draftId,
                  data: { paragraphs: [newText] },
                });
              }}
            />
          );
        }
        return null;
      })}
    </VStack>
  );
};
