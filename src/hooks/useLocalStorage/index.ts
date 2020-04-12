import { useState, useEffect, useCallback } from 'react';

function tryParse<T>(value?: string): T {
  try {
    return JSON.parse(value);
  } catch (err) {
    return (value as unknown) as T;
  }
}

export function writeStorage<T = string>(key: string, value: T) {
  localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : `${value}`);
}

export function removeFromStorage(key: string) {
  localStorage.removeItem(key);
}

export function useLocalStorage<T = string>(key: string, initialValue?: T): [T, (value: T) => void, () => void] {
  const [localState, setLocalState] = useState<T>(
    localStorage.getItem(key) === null ? initialValue : tryParse(localStorage.getItem(key)),
  );

  const changeState = useCallback((value: T) => writeStorage(key, value), [key]);
  const deleteState = useCallback(() => removeFromStorage(key), [key]);

  useEffect(() => {
    setLocalState(localStorage.getItem(key) === null ? initialValue : tryParse(localStorage.getItem(key)));
  }, [key, initialValue]);

  useEffect(() => {
    if (initialValue !== undefined && localStorage.getItem(key) === null) {
      changeState(initialValue);
    }
  }, [key, changeState, initialValue]);

  return [localState === null ? initialValue : localState, changeState, deleteState];
}
