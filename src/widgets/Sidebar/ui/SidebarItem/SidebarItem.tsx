import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import MainIcon from 'shared/assets/icons/home-icon.svg';
import { type SidebarItemType } from 'widgets/Sidebar/model/items';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface SidebarItemProps {
  item?: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps): JSX.Element => {
  const { item = { Icon: MainIcon, path: '/', text: '' }, collapsed } = props;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);
  if ((item.authOnly === true) && (isAuth == null)) {
    return <></>;
  }
  return (
      <div
          className={ classNames(cls.SidebarItem ?? '', {}, [])}
      >
          <AppLink
              to={item?.path ?? '/'}
              theme={AppLinkTheme.SECONDARY}
              className={classNames(cls.item ?? '', { [cls.collapsed ?? '']: collapsed })}
          >
              <item.Icon className={cls.icon} />
              <span
                  className={cls.link}
            >
                  {t(item?.text ?? '')}

              </span>
          </AppLink>
      </div>
  );
}
);
