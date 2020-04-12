import { MutableRefObject, useRef, useEffect, useCallback } from 'react';

export function useClickAway<T extends Element = HTMLDivElement>(
  onClickAway: (event: KeyboardEvent) => void,
): MutableRefObject<T> {
  const element = useRef<T>();

  const handler = useCallback(
    (event) => {
      const el = element.current;
      if (!el || el.contains(event.target)) {
        return;
      }

      onClickAway(event);
    },
    [onClickAway],
  );

  useEffect(() => {
    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, [handler]);

  return element as MutableRefObject<T>;
}
