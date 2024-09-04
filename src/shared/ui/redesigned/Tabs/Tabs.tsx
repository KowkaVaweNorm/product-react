import { memo, type ReactNode, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { Card } from '../Card/Card';
import cls from './Tabs.module.scss';
import { Flex, type FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
  value?: string;
  content: ReactNode;
}
interface TabsPropsWithValue {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
  direction?: FlexDirection;
}
interface TabsPropsWithoutValue {
  className?: string;
  tabs: TabItem[];
  value?: string;
  onTabClick?: (tab: TabItem) => void;
  direction?: FlexDirection;
}
type TabsProps = TabsPropsWithValue | TabsPropsWithoutValue;

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, onTabClick, value, direction = 'row' } = props;
  const [localValue, setLocalValue] = useState(value ?? tabs[0]?.value);
  const clickHandle = useCallback(
    (tab: TabItem) => () => {
      if (onTabClick != null) {
        onTabClick(tab);
      } else {
        setLocalValue(tab.value);
      }
    },
    [onTabClick],
  );

  return (
    <Flex
      direction={direction}
      gap="8"
      align="start"
      className={classNames(cls.Tabs, {}, [className])}
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === (value ?? localValue);
        return (
          <Card
            variant={isSelected ? 'light' : 'normal'}
            className={classNames(cls.tab, {
              [cls.selected ?? '']: isSelected,
            })}
            key={tab.value}
            onClick={clickHandle(tab)}
            border="round"
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
});
