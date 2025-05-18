import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import cls from './SidebarItem.module.scss';
import { type SidebarItemType } from '../../model/types/sidebar';

import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/home-icon.svg';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarItemProps {
  item?: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps): JSX.Element => {
  const { item = { Icon: MainIcon, path: '/', text: '' }, collapsed } = props;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);
  if (item.authOnly === true && isAuth == null) {
    return <></>;
  }
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <AppLink
          to={item.path}
          className={classNames(cls.itemRedesigned, {
            [cls.collapsedRedesigned ?? '']: collapsed,
          })}
          activeClassName={cls.active}
        >
          <Icon Svg={item.Icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
      }
      off={
        <AppLinkDeprecated
          theme={AppLinkTheme.SECONDARY}
          to={item.path}
          className={classNames(cls.item, {
            [cls.collapsed ?? '']: collapsed,
          })}
        >
          <item.Icon className={cls.icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLinkDeprecated>
      }
    />
  );
});
