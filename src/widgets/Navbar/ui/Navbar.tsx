/* eslint-disable i18next/no-literal-string */

import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routerConfig';
interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className = '' }: NavbarProps): JSX.Element => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData != null) {
    return (
        <header className={classNames(cls.Navbar ?? '', {}, [className])}>
            <Text
                theme={TextTheme.INVERTED}
                className={cls.app_name}
                title={t('KowkaVN App')}/>
            <AppLink
                className={cls.create_btn}
                theme={AppLinkTheme.SECONDARY}
                to={RoutePath.article_create}>
                {t('Создать статью')}
            </AppLink>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.link}
                onClick={onLogout}
              >
                {t('Выйти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
              />
        </header>
    );
  } else {
    return (
        <header className={classNames(cls.Navbar ?? '', {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.link}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (<LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
                />
            )}
        </header>

    );
  }
});
