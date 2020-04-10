import { useEffect, useState, useCallback } from 'react';

import { Key } from './types';

const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState(false);

  // Setting downHandler and upHandler in use callback because of use effect hook.
  const downHandler = useCallback(
    ({ key }: Key) => {
      console.log(key);
      if (key === targetKey) {
        setKeyPressed(true);
      }
    },
    [targetKey],
  );

  const upHandler = useCallback(
    ({ key }: Key) => {
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
export default useKeyPress;
export * from './types';
