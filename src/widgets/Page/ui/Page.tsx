import cls from './Page.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import {
  type ReactNode,
  memo,
  useRef,
  type MutableRefObject,
  type UIEvent
} from 'react';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { pageActions } from '../model/slices/pageSlice';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { getPageScrollByPath } from '../model/selectors/getPageScroll/getPageScroll';
import { type StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';

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
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector(
    (state: StateSchema) => getPageScrollByPath(state, pathname)
  );
  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>): void => {
    // console.log('scroll', e.currentTarget.scrollTop);

    dispatch(pageActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname
    }));
  }, 200);

  return (
      <main
          ref={wrapperRef}
          className={classNames(cls.page ?? '', {}, [className])}
          onScroll={onScroll}
      >
          {children}
          {onScrollEnd !== undefined ? <div className={cls.trigger} ref={triggerRef} /> : null}
      </main>
  );
});
