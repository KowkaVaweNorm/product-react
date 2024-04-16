import { classNames } from 'shared/lib/ClassNames/ClassNames';
import cls from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/ui/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { useSelector } from 'react-redux';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { VStack } from 'shared/ui/Stack/VStack/VStack';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className = '' }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = (): void => {
    setCollapsed((prev: boolean) => !prev);
  };
  const SidebarItemsList = useSelector(getSidebarItems);

  const itemsList = useMemo(() =>
    SidebarItemsList.map((item) => (
        <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
      />
    )), [SidebarItemsList, collapsed]);
  return (
      <menu
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

          <VStack gap='8' className={cls.items}>
              {itemsList}
          </VStack>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher className={cls.lang} short={collapsed} />
          </div>
      </menu>
  );
});
