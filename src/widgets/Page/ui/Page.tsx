import cls from './Page.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { type ReactNode, memo, useRef, type UIEvent, type MutableRefObject } from 'react';
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
import { useCombinedRef } from '@/shared/lib/hooks/useCombinedRef/useCombinedRef';

interface IPageProps extends TestProps {
  className?: string;
  pageRef?: MutableRefObject<HTMLElement | null>;
  children: ReactNode;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: IPageProps): JSX.Element => {
  const { className, children, pageRef } = props;

  const wrapperRef = useRef<HTMLElement | null>(null);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getPageScrollByPath(state, pathname));
  const combinedRef = useCombinedRef(wrapperRef, pageRef);

  useInitialEffect(() => {
    if (wrapperRef.current != null) {
      wrapperRef.current.scrollTop = scrollPosition;
    }
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
      ref={combinedRef}
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
    </main>
  );
});
