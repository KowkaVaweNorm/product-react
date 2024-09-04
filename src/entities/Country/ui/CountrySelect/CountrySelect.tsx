import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Country } from '../../model/types/country';
import { ToggleFeatures } from '@/shared/lib/features';
import { type DropdownDirection } from '@/shared/types/ui';

interface CountrySelectProps {
  readonly?: boolean;
  className?: string;
  value?: Country;
  direction?: DropdownDirection;
  onChange?: (value: Country) => void;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Ukraine, content: Country.Ukraine },
];
export const CountrySelect = memo((props: CountrySelectProps): JSX.Element => {
  const { className = '', onChange, value, readonly, direction } = props;
  // TODO: Перенести в общий список
  const { t } = useTranslation('profile');
  const [localValue, setLocalValue] = useState<Country>(Country.Russia);
  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
      setLocalValue(value as Country);
    },
    [onChange],
  );
  const propsList = {
    className,
    value: value ?? localValue,
    defaultValue: t('Укажите страну'),
    label: t('Укажите страну'),
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
