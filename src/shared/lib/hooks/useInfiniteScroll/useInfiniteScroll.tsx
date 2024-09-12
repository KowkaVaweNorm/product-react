import { type MutableRefObject, useEffect, type RefObject, useRef } from 'react';

interface UseInfiniteScrollProps {
  callback?: () => void;
  options?: IntersectionObserverInit;
  retryCondition?: boolean;
  triggerRef: MutableRefObject<HTMLElement | null> | RefObject<HTMLElement | null>;
  wrapperRef?: MutableRefObject<HTMLElement | null> | RefObject<HTMLElement | null>;
}

export const useInfiniteScroll = (props: UseInfiniteScrollProps): void => {
  const { callback, options: optionsProp, triggerRef, wrapperRef } = props;
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isIntersectedRef = useRef(false);
  useEffect(() => {
    const wrapperElement = wrapperRef?.current;
    const triggerElement = triggerRef.current;
    if (callback != null) {
      const options: IntersectionObserverInit = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 0,
        ...optionsProp,
      };

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting === true) {
          isIntersectedRef.current = true;
          callback();
        } else {
          isIntersectedRef.current = false;
        }
      }, options);
      if (triggerElement != null) {
        observerRef.current.observe(triggerElement);
      }
    }
    return () => {
      if (observerRef.current !== null && triggerElement != null) {
        observerRef.current.unobserve(triggerElement);
        observerRef.current = null;
        isIntersectedRef.current = false;
      }
    };
  }, [callback, optionsProp, triggerRef, wrapperRef]);
};
