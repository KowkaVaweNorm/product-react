import { memo, type ReactElement } from 'react';

import cls from './StickyContentLayout.module.scss';

import { classNames } from '@/shared/lib/ClassNames/ClassNames';

interface StickyContentLayoutProps {
  className?: string;
  left?: ReactElement;
  content: ReactElement;
  right?: ReactElement;
}

export const StickyContentLayout = memo((props: StickyContentLayoutProps) => {
  const { className, content, left, right } = props;

  return (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      {left != null && <div className={cls.left}>{left}</div>}
      <div className={cls.content}>{content}</div>
      {right != null && <div className={cls.right}>{right}</div>}
    </div>
  );
});
