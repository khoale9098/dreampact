import { useEffect, useState, useCallback } from 'react';

import { KeyProps } from './types';

export const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState(false);

  // Setting downHandler and upHandler in use callback because of use effect hook.
  const downHandler = useCallback(
    ({ key }: KeyProps) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    },
    [targetKey],
  );

  const upHandler = useCallback(
    ({ key }: KeyProps) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    },
    [targetKey],
  );

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [downHandler, upHandler]);

  return keyPressed;
};

export * from './types';
