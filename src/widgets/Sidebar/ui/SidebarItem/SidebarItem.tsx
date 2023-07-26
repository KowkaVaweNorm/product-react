import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import MainIcon from 'shared/assets/icons/home-icon.svg';
import { type SidebarItemType } from 'widgets/Sidebar/model/items';
import { memo } from 'react';

interface SidebarItemProps {
  item?: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps): JSX.Element => {
  const { item = { Icon: MainIcon, path: '/', text: '' }, collapsed } = props;
  const { t } = useTranslation();

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
