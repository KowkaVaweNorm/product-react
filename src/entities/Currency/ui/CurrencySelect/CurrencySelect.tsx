import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';

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

  const onChangeHandler = useCallback((value) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
      <div
          className={ classNames('', {}, [className]) }
      >
          <Select
              readonly={readonly}
              label={t('Укажите валюту')}
              options={options}
              value={value}
              onChange={onChangeHandler}
              />
      </div>
  );
});
