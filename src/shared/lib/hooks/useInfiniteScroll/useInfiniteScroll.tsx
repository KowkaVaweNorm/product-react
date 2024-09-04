/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollProps {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef?: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = (props: UseInfiniteScrollProps): any => {
  const { callback, triggerRef, wrapperRef } = props;
  useEffect(() => {
    const wrapperElement = wrapperRef?.current;
    const triggerElement = triggerRef.current;
    let observer: IntersectionObserver | null = null;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
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
  }, [callback, triggerRef, wrapperRef]);
};
