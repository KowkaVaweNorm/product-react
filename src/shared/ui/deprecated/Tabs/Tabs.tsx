import { memo, useCallback, useState } from 'react';

import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';

export interface TabItem {
  value?: string;
  content: React.ReactNode;
}

interface ITabsPropsWithValue {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}
interface ITabsPropsWithoutValue {
  className?: string;
  tabs: TabItem[];
  value?: string;
  onTabClick?: (tab: TabItem) => void;
}
type ITabsProps = ITabsPropsWithValue | ITabsPropsWithoutValue;

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Tabs = memo((props: ITabsProps): JSX.Element => {
  const { onTabClick, tabs, value, className } = props;
  const [localValue, setLocalValue] = useState(value ?? tabs[0]?.value);
  const clickHandle = useCallback(
    (tab: TabItem) => {
      return () => {
        if (onTabClick != null) {
          onTabClick(tab);
        } else {
          setLocalValue(tab.value);
        }
      };
    },
    [onTabClick],
  );
  return (
    <div className={classNames(cls.tabs ?? '', {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === (value ?? localValue) ? CardTheme.NORMAL : CardTheme.OUTLINED}
          onClick={clickHandle(tab)}
          className={cls.tab}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
