import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import { memo, useCallback, useState } from 'react';
import { ListBox } from '@/shared/ui/ListBox/ListBox';

type ListBoxProps = Omit<Parameters<typeof ListBox>[0], 'onChange' | 'value'>;

type CurrencySelectProps = {
  readonly?: boolean
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
} & ListBoxProps

interface OptionItem {
  value: Currency
  content: Currency
}

const options: OptionItem[] = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD }
];
export const CurrencySelect = memo((props: CurrencySelectProps): JSX.Element => {
  const {
    className = '',
    onChange,
    value,
    readonly,
    ...otherProps
  } = props;
  const { t } = useTranslation('profile');
  const [valueLocal, setValueLocal] = useState<Currency | undefined>(undefined);
  const onChangeHandler = useCallback((value: string) => {
    setValueLocal(value as Currency);
    onChange?.(value as Currency);
  }, [onChange]);

  return (
      <ListBox
          className={className}
          readonly={readonly}
          label={t('Укажите валюту')}
          defaultValue={t('Укажите валюту')}
          items={options}
          value={value ?? valueLocal}
          onChange={onChangeHandler}
          direction='top right'
          {...otherProps}
         />
  );
});
