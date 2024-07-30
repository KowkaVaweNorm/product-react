import cls from './Tabs.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo, useCallback } from 'react';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem {
  value?: string
  content: React.ReactNode
}

interface ITabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (tab: TabItem) => void
}

export const Tabs = memo((props: ITabsProps): JSX.Element => {
  const {
    onTabClick,
    tabs,
    value,
    className
  } = props;

  const clickHandle = useCallback((tab: TabItem) => {
    return () => {
      onTabClick(tab);
    };
  }, [onTabClick]);
  return (
      <div
          className={classNames(cls.tabs ?? '', {}, [className])}
      >
          {tabs.map((tab) => (
              <Card
                  theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                  onClick={clickHandle(tab)}
                  className={cls.tab }
                  key={tab.value}>
                  {tab.content}
              </Card>
          ))}
      </div>
  );
});
