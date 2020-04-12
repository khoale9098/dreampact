import { useState, useCallback } from 'react';

export function useArray<T>(
  initial: T[],
): [T[], React.Dispatch<React.SetStateAction<T[]>>, (a: T) => void, () => void, (index: number) => void] {
  const [value, setValue] = useState(initial);
  return [
    value,
    setValue,
    useCallback((a: T) => setValue((v) => [...v, a]), []),
    useCallback(() => setValue(() => []), []),
    useCallback((index) => setValue((arr) => arr.filter((v, i) => i !== index)), []),
  ];
}
