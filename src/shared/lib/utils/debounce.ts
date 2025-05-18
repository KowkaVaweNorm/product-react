type TFn = (...arg: any[]) => any;

/**
 * @param fn (any)=> any
 * @param ms ms for timer
 */
export const debounce = (fn: TFn, ms: number = 100) => {
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    if (timer !== undefined) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, ms);
  };
};
