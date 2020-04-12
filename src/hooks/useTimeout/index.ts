import { useEffect } from 'react';

export const useTimeout = (fn: () => void, delay: number) => {
  useEffect(() => {
    const id = setTimeout(fn, delay);
    return () => clearTimeout(id);
  });
};
