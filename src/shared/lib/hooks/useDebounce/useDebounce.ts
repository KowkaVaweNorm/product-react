
import { type MutableRefObject, useCallback, useRef } from 'react';

export function useDebounce (
  callback: (...args: any[]) => void, delay: number
): (args?: any) => void {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const timer = useRef() as MutableRefObject<any>;

  return useCallback((...args: any[]) => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      // eslint-disable-next-line n/no-callback-literal
      callback(...args);
    }, delay);
  }, [callback, delay]);
};
