import cls from './Page.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { type ReactNode, memo, useRef, type MutableRefObject, type UIEvent } from 'react';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { type TestProps } from '@/shared/types/tests';
import { toggleFeatures } from '@/shared/lib/features';
import { getPageScrollByPath } from '../model/selectors/getPageScroll/getPageScroll';
import { pageActions } from '../model/slices/pageSlice';

interface OnScrollEndProps {
  callback?: () => void;
  options?: IntersectionObserverInit;
}

interface IPageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: OnScrollEndProps;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: IPageProps): JSX.Element => {
  const { className, children, onScrollEnd } = props;

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getPageScrollByPath(state, pathname));
  useInfiniteScroll({
    triggerRef,
    wrapperRef: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => undefined,
      off: () => wrapperRef,
    }),
    callback: onScrollEnd?.callback,
    options: onScrollEnd?.options,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      pageActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      }),
    );
  }, 500);

  return (
    <main
      ref={wrapperRef}
      className={classNames(
        toggleFeatures({
          name: 'isAppRedesigned',
          on: () => cls.PageRedesigned,
          off: () => cls.Page,
        }),
        {},
        [className],
      )}
      onScroll={onScroll}
      id={PAGE_ID}
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}
      {onScrollEnd != null ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </main>
  );
});
