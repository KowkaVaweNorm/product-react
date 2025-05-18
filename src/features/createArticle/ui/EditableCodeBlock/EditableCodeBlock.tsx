import { useState } from 'react';

import cls from './EditableCodeBlock.module.scss';

import { CodeLanguageSelect } from '@/entities/CodeLanguage';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { CodeEditor } from '@/shared/ui/redesigned/CodeEditor';
import { type SupportedLanguage } from '@/shared/ui/redesigned/CodeEditor';

interface TProps {
  onChangeText?: (newCode: string) => void;
}
export const EditableCodeBlock = (props: TProps) => {
  const { onChangeText } = props;
  const { theme } = useTheme();
  const [currentLng, setCurrentLng] = useState<SupportedLanguage>('js');
  return (
    <>
      <CodeLanguageSelect onChange={setCurrentLng} />
      <CodeEditor
        onChange={onChangeText}
        lng={currentLng}
        data-color-mode={theme === Theme.LIGHT || theme === Theme.ORANGE ? 'light' : 'dark'}
        className={cls.EditorBlock}
      />
    </>
  );
};
