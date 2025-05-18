import { skipToken } from '@reduxjs/toolkit/query';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { useGetProfileByIdQuery } from '@/entities/Profile';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { getRouteAdmin, getRouteProfile, getRouteSettings } from '@/shared/const/router';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

interface AvatarDropdownProps {
  className?: string;
}
export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);
  const { data: porfileData } = useGetProfileByIdQuery(authData?.id ?? skipToken);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (porfileData === undefined) {
    return null;
  }
  const items = [
    ...(isAdminPanelAvailable
      ? [
          {
            content: t('Админка'),
            href: getRouteAdmin(),
          },
          {
            content: t('Настройки'),
            href: getRouteSettings(),
          },
        ]
      : []),

    {
      content: t('Профиль'),
      href: getRouteProfile(porfileData.id),
    },
    {
      content: t('Выйти'),
      onClick: onLogout,
    },
  ];

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Dropdown
          direction="bottom right"
          className={classNames('', {}, [className])}
          items={items}
          trigger={<Avatar size={40} src={porfileData.avatar} />}
        />
      }
      off={
        <DropdownDeprecated
          direction="bottom right"
          className={classNames('', {}, [className])}
          items={items}
          trigger={<AvatarDeprecated fallbackInverted size={30} src={porfileData.avatar} />}
        />
      }
    />
  );
});
