import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/types/currency';

import { ToggleFeatures } from '@/shared/lib/features';
import { type DropdownDirection } from '@/shared/types/ui';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

type ListBoxProps = Omit<Parameters<typeof ListBox>[0], 'onChange' | 'value'>;

type CurrencySelectProps = {
  readonly?: boolean;
  className?: string;
  value?: Currency;
  direction?: DropdownDirection;
  onChange?: (value: Currency) => void;
} & ListBoxProps;

interface OptionItem {
  value: Currency;
  content: Currency;
}

const options: OptionItem[] = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];
export const CurrencySelect = memo((props: CurrencySelectProps): JSX.Element => {
  const { className = '', onChange, value, readonly, direction } = props;
  const { t } = useTranslation('profile');
  const [localValue, setLocalValue] = useState<Currency>(Currency.RUB);

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
      setLocalValue(value as Currency);
    },
    [onChange],
  );
  const propsList = {
    className,
    value: value ?? localValue,
    defaultValue: t('Укажите валюту'),
    label: t('Укажите валюту'),
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
