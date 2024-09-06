/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollProps {
  callback?: () => void;
  options?: IntersectionObserverInit;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef?: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = (props: UseInfiniteScrollProps): any => {
  const { callback, options: optionsProp, triggerRef, wrapperRef } = props;
  useEffect(() => {
    const wrapperElement = wrapperRef?.current;
    const triggerElement = triggerRef.current;
    let observer: IntersectionObserver | null = null;

    if (callback) {
      const options: IntersectionObserverInit = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 0.5,
        ...optionsProp,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry?.isIntersecting === true) {
          callback();
        }
      }, options);
      observer.observe(triggerRef.current);
    }
    return () => {
      if (observer !== null && triggerRef !== undefined) {
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, optionsProp, triggerRef, wrapperRef]);
};
