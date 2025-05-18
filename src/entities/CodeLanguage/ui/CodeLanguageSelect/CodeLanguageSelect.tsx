import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { type DropdownDirection } from '@/shared/types/ui';
import {
  ListBox as ListBoxDeprecated,
  type ListBoxItem as ListBoxItemDeprecated,
} from '@/shared/ui/deprecated/Popups';
import { type SupportedLanguage } from '@/shared/ui/redesigned/CodeEditor';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CodeLanguageSelectProps {
  readonly?: boolean;
  className?: string;
  value?: SupportedLanguage;
  direction?: DropdownDirection;
  onChange?: (value: SupportedLanguage) => void;
}

const supportedLanguages: SupportedLanguage[] = [
  'arduino',
  'ino',
  'bash',
  'sh',
  'shell',
  'basic',
  'c',
  'clike',
  'cpp',
  'csharp',
  'cs',
  'dotnet',
  'css',
  'diff',
  'go',
  'ini',
  'java',
  'javascript',
  'js',
  'json',
  'webmanifest',
  'kotlin',
  'kt',
  'kts',
  'less',
  'lua',
  'makefile',
  'markdown',
  'md',
  'markup',
  'atom',
  'html',
  'mathml',
  'rss',
  'ssml',
  'svg',
  'xml',
  'markup-templating',
];

// 2. Создаем `options` для ListBox
const options: Array<ListBoxItemDeprecated<SupportedLanguage>> = supportedLanguages.map((lang) => ({
  value: lang,
  content: lang,
}));
export const CodeLanguageSelect = memo((props: CodeLanguageSelectProps): JSX.Element => {
  const { className = '', onChange, value, readonly, direction } = props;
  // TODO: Перенести в общий список
  const { t } = useTranslation('article-create');
  const [localValue, setLocalValue] = useState<SupportedLanguage>('js');
  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as SupportedLanguage);
      setLocalValue(value as SupportedLanguage);
    },
    [onChange],
  );
  const propsList = {
    className,
    value: value ?? localValue,
    defaultValue: t('Выберите язык программирования'),
    label: t('Выберите язык программирования'),
    items: options,
    onChange: onChangeHandler,
    readonly,
    direction: direction ?? ('bottom right' as const),
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ListBox {...propsList} />}
      off={<ListBoxDeprecated {...propsList} />}
    />
  );
});
