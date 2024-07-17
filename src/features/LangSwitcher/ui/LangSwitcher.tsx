import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import cls from './LangSwitcher.module.scss';
import { memo } from 'react';
interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher =
  memo(({ className = '', short = false }: LangSwitcherProps): JSX.Element => {
    const { t, i18n } = useTranslation();

    const toggle = (): void => {
      const htmlEl = document.getElementsByTagName('html');
      void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
      if (htmlEl.length > 0) {
        htmlEl[0]?.setAttribute('lang', i18n.language);
      }
    };
    return (
        <Button className={classNames(cls.LangSwitcher ?? '', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}>
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
  });
