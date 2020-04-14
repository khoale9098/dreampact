import { useState, useEffect, useCallback } from 'react';

function tryParse<T>(value?: string): T {
  try {
    return JSON.parse(value);
  } catch (err) {
    return (value as unknown) as T;
  }
}

interface KVP<K, V> {
  key: K;
  value: V;
}

export class LocalStorageChanged<TValue> extends CustomEvent<KVP<string, TValue>> {
  static eventName = 'onLocalStorageChange';

  constructor(payload: KVP<string, TValue>) {
    super(LocalStorageChanged.eventName, { detail: payload });
  }
}

export function isTypeOfLocalStorageChanged<TValue>(evt: any): evt is LocalStorageChanged<TValue> {
  return !!evt && (evt instanceof LocalStorageChanged || (evt.detail && evt.type === LocalStorageChanged.eventName));
}

export function writeStorage<T = string>(key: string, value: T) {
  localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : `${value}`);
  window.dispatchEvent(new LocalStorageChanged({ key, value }));
}

export function removeFromStorage(key: string) {
  localStorage.removeItem(key);
  window.dispatchEvent(new LocalStorageChanged({ key, value: '' }));
}

export function useLocalStorage<T = string>(key: string, initialValue?: T): [T, (value: T) => void, () => void] {
  const [localState, setLocalState] = useState<T>(
    localStorage.getItem(key) === null ? initialValue : tryParse(localStorage.getItem(key)),
  );

  const onLocalStorageChange = (event: LocalStorageChanged<T> | StorageEvent) => {
    if (isTypeOfLocalStorageChanged(event)) {
      if (event.detail.key === key) {
        setLocalState(event.detail.value);
      }
    } else {
      if (event.key === key) {
        if (event.newValue) {
          setLocalState(tryParse(event.newValue));
        }
      }
    }
  };

  useEffect(() => {
    setLocalState(localStorage.getItem(key) === null ? initialValue : tryParse(localStorage.getItem(key)));
  }, [key]);

  const changeState = useCallback((value: T) => writeStorage(key, value), [key]);
  const deleteState = useCallback(() => removeFromStorage(key), [key]);

  useEffect(() => {
    setLocalState(localStorage.getItem(key) === null ? initialValue : tryParse(localStorage.getItem(key)));
  }, [key, initialValue]);

  useEffect(() => {
    // The custom storage event allows us to update our component
    // when a change occurs in localStorage outside of our component
    const listener = (e: Event) => onLocalStorageChange(e as LocalStorageChanged<T>);
    window.addEventListener(LocalStorageChanged.eventName, listener);

    // The storage event only works in the context of other documents (eg. other browser tabs)
    window.addEventListener('storage', listener);

    if (initialValue !== undefined && localStorage.getItem(key) === null) {
      changeState(initialValue);
    }

    return () => {
      window.removeEventListener(LocalStorageChanged.eventName, listener);
      window.removeEventListener('storage', listener);
    };
  }, [key, changeState, initialValue]);

  return [localState === null ? initialValue : localState, changeState, deleteState];
}
