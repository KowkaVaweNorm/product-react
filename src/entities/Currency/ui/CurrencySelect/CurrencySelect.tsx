import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';

interface CurrencySelectProps {
  readonly?: boolean
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD }
];
export const CurrencySelect = memo((props: CurrencySelectProps): JSX.Element => {
  const {
    className = '',
    onChange,
    value,
    readonly
  } = props;
  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (<>
      <ListBox
          className={className}
          readonly={readonly}
          label={t('Укажите валюту')}
          defaultValue={t('Укажите валюту')}
          items={options}
          value={value}
          onChange={onChangeHandler}
          direction='top right'
         />
  </>
  );
});
