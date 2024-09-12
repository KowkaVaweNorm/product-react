import { type MutableRefObject, useCallback } from 'react';

type AnyRef =
  | MutableRefObject<HTMLElement | null>
  | ((element: HTMLElement | null) => void)
  | undefined
  | null;

/**
 * Используется для обьединения рефов и коллбек рефов
 * @example
 * const {outerRef} = props;
 * const innerRef = useRef();
 * const combinedRef = useCombinedRef(innerRef, outerRef)
 * ...
 * <Element ref={combinedRef}/>
 */
export const useCombinedRef = (...refs: AnyRef[]) => {
  const combinedRef = useCallback((element: HTMLElement | null) => {
    refs.forEach((ref) => {
      if (ref === null || ref === undefined) return;
      if (typeof ref === 'function') {
        ref(element);
      } else {
        ref.current = element;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
  return combinedRef;
};
