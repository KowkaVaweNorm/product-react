import { EditableTextBlock, EditableImgBlock, EditableCodeBlock } from '@/features/createArticle';

import { VStack } from '@/shared/ui/redesigned/Stack';

export const Blocks = (): JSX.Element => {
  // eslint-disable-next-line i18next/no-literal-string
  return (
    <VStack max gap="8">
      <EditableTextBlock />
      <EditableImgBlock />
      <EditableCodeBlock />
    </VStack>
  );
};