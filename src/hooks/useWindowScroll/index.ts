import { useEffect, useState } from 'react';
import isClient from '../../utils/isClient';

export function useWindowScroll() {
  const [state, setState] = useState({
    x: isClient ? window.pageXOffset : 0,
    y: isClient ? window.pageYOffset : 0,
  });

  useEffect(() => {
    const handler = () => {
      setState({
        x: window.pageXOffset,
        y: window.pageYOffset,
      });
    };

    window.addEventListener('scroll', handler, {
      capture: false,
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return state;
}
