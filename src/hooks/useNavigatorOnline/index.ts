import { useState, useEffect, useCallback } from 'react';
import { UseNavigatorOnlineProps } from './types';
export const useNavigatorOnline = ({ onOffline, onOnline }: UseNavigatorOnlineProps) => {
  const [online, setOnline] = useState(navigator.onLine);

  const handleOnline = useCallback(() => {
    onOnline && onOnline();
    setOnline(true);
  }, [onOnline]);

  const handleOffline = useCallback(() => {
    onOffline && onOffline();
    setOnline(false);
  }, [onOffline]);

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  });
  return {
    online,
  };
};

export * from './types';
