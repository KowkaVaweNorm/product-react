import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Country } from '../../model/types/country';
import { ListBox } from '@/shared/ui/Popups';

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
  const [localValue, setLocalValue] = useState<Country | undefined>(undefined);
  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
    setLocalValue(value as Country);
  }, [onChange]);

  return (
      <div
          className={ classNames('', {}, [className]) }
      >
          <ListBox
              readonly={readonly}
              label={t('Укажите страну')}
              defaultValue={t('Укажите страну')}
              items={options}
              value={value ?? localValue}
              onChange={onChangeHandler}
              direction='top right'
              />
      </div>
  );
});
