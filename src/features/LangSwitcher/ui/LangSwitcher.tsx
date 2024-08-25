import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(
  ({ className = '', short = false }: LangSwitcherProps): JSX.Element => {
    const { t, i18n } = useTranslation();

    const toggle = (): void => {
      const htmlEl = document.getElementsByTagName('html');
      void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
      if (htmlEl.length > 0) {
        htmlEl[0]?.setAttribute('lang', i18n.language);
      }
    };
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Button className={classNames('', {}, [className])} onClick={toggle} variant="clear">
            {t(short ? 'Короткий язык' : 'Язык')}
          </Button>
        }
        off={
          <ButtonDeprecated
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
          >
            {t(short ? 'Короткий язык' : 'Язык')}
          </ButtonDeprecated>
        }
      />
    );
  },
);
