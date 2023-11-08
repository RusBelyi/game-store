import { useRef } from 'react';

export const useDebounce = () => {
  const timerId = useRef<number>();

  return (value: string, timeout: number, fn: (val: string) => void) => {
    if (timerId.current) clearTimeout(timerId.current);

    timerId.current = setTimeout(fn, timeout, value);
  };
};
