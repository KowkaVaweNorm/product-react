import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from '../../model/consts/articleConsts';

import { ToggleFeatures } from '@/shared/lib/features';
import { type DropdownDirection } from '@/shared/types/ui';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface ArticleTypeSelectProps {
  readonly?: boolean;
  className?: string;
  value?: ArticleType;
  direction?: DropdownDirection;
  onChange?: (value: ArticleType) => void;
}

const options = [
  { value: ArticleType.ALL, content: 'Общая' },
  { value: ArticleType.ECONOMICS, content: 'Экономическая' },
  { value: ArticleType.IT, content: 'IT' },
  { value: ArticleType.SCIENCE, content: 'Научная' },
];
export const ArticleTypeSelect = memo((props: ArticleTypeSelectProps): JSX.Element => {
  const { className = '', onChange, value, readonly, direction } = props;
  // TODO: Перенести в общий список
  const { t } = useTranslation('article-create');
  const [localValue, setLocalValue] = useState<ArticleType>(ArticleType.ALL);
  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as ArticleType);
      setLocalValue(value as ArticleType);
    },
    [onChange],
  );
  const propsList = {
    className,
    value: value ?? localValue,
    defaultValue: t('Укажите тип статьи'),
    label: t('Укажите тип статьи'),
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
