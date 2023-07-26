import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ButtonSize } from 'shared/ui/Button/ui/Button';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className = '' }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = (): void => {
    setCollapsed((prev: boolean) => !prev);
  };

  const itemsList = useMemo(() =>
    SidebarItemsList.map((item) => (
        <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
      />
    )), [collapsed]);
  return (
      <div
          data-testid="sidebar"
          className={classNames(cls.Sidebar ?? '', { [cls.collapsed ?? '']: collapsed },
            [className])}
    >
          <Button
              data-testid="sidebar-toggle"
              onClick={onToggle}
              className={cls.collapsedBtn}
              theme={ButtonTheme.BACKGROUND_INVERTED}
              square={true}
              size={ButtonSize.L}
      >
              {collapsed ? '>' : '<'}
          </Button>

          <div className={cls.items}>
              {itemsList}
          </div>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} short={collapsed} />
          </div>
      </div>
  );
})
