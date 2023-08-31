import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  readonly?: boolean
  className?: string
  value?: Country
  onChange?: (value: Country) => void
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan }
];
export const CountrySelect = memo((props: CountrySelectProps): JSX.Element => {
  const {
    className = '',
    onChange,
    value,
    readonly
  } = props;
  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback((value) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
      <div
          className={ classNames('', {}, [className]) }
      >
          <Select
              readonly={readonly}
              label={t('Укажите страну')}
              options={options}
              value={value}
              onChange={onChangeHandler}
              />
      </div>
  );
});
