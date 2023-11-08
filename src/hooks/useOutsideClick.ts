import { useEffect, useRef } from 'react';

export const useOutsideClick = <T extends HTMLElement>(cb: () => void) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const click = (e: MouseEvent) => {
      if (ref.current && !e.composedPath().includes(ref.current)) cb();
    };

    document.body.addEventListener('click', click, true);

    return () => document.body.removeEventListener('click', click, true);
  }, [cb]);

  return ref;
};
