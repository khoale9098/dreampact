import { useEffect } from 'react';

const useInterval = (fn: () => void, delay: number) => {
  useEffect(() => {
    const id = setInterval(fn, delay);
    return () => clearInterval(id);
  });
};

export default useInterval;
