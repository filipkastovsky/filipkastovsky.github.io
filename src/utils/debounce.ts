import type { AnyFn } from "./types";

export const debounce = <T extends AnyFn>(fn: T, wait: number) => {
  let timeoutId: number;
  return (...args: Parameters<T>) => {
    window.clearTimeout(timeoutId);

    timeoutId = window.setTimeout(() => {
      fn.apply(null, args);
    }, wait);
  };
};
