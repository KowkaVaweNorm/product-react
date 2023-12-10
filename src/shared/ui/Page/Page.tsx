import cls from './Page.module.scss';
import { classNames } from 'shared/lib/ClassNames/ClassNames';
import { type ReactNode, memo, useRef, type MutableRefObject } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface IPageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = memo((props: IPageProps): JSX.Element => {
  const {
    className,
    children,
    onScrollEnd = undefined
  } = props;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd

  });

  return (
      <section
          ref={wrapperRef}
          className={classNames(cls.page ?? '', {}, [className])}
      >
          {children}
          <div ref={triggerRef} />
      </section>
  );
});
