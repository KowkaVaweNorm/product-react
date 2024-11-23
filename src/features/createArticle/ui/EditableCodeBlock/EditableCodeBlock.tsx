import { CodeEditor } from '@/shared/ui/redesigned/CodeEditor';
import cls from './EditableCodeBlock.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';
import { CodeLanguageSelect } from '@/entities/CodeLanguage';
import { useState } from 'react';
import { type SupportedLanguage } from '@/shared/ui/redesigned/CodeEditor';

/* eslint-disable i18next/no-literal-string */
export const EditableCodeBlock = () => {
  const { theme } = useTheme();
  const [currentLng, setCurrentLng] = useState<SupportedLanguage>('js');
  return (
    <>
      <CodeLanguageSelect onChange={setCurrentLng} />
      <CodeEditor
        lng={currentLng}
        data-color-mode={theme === Theme.LIGHT || theme === Theme.ORANGE ? 'light' : 'dark'}
        className={cls.EditorBlock}
      />
    </>
  );
};
