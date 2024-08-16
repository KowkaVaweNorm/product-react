import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

type ListBoxProps = Omit<Parameters<typeof ListBox>[0], 'onChange' | 'value'>;

type CurrencySelectProps = {
  readonly?: boolean;
  className?: string;
  value?: Currency;
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
  const { className = '', onChange, value, readonly } = props;
  const { t } = useTranslation('profile');
  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );
  const propsList = {
    className,
    value,
    defaultValue: t('Укажите валюту'),
    label: t('Укажите валюту'),
    items: options,
    onChange: onChangeHandler,
    readonly,
    direction: 'top right' as const,
  };
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ListBox {...propsList} />}
      off={<ListBoxDeprecated {...propsList} />}
    />
  );
});
