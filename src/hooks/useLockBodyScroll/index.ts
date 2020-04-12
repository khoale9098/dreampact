import { useLayoutEffect, useCallback } from 'react';

/**
 * ### Hook to lock or unlock body scroll
 * You can pass an optional param in hook call to tell if you want or not to lock scroll in hook call.
 *
 * @param lock lock in hook first call?
 */
export function useLockBodyScroll(lock = true) {
  const lockBodyScroll = useCallback(() => (document.body.style.overflow = 'hidden'), []);
  const unlockBodyScroll = useCallback(() => (document.body.style.overflow = 'auto'), []);

  useLayoutEffect(() => {
    if (lock) {
      lockBodyScroll();
    }

    // Re-enable scrolling when component unmounts
    return () => unlockBodyScroll();
  }, [lock, unlockBodyScroll, lockBodyScroll]);

  return {
    lockBodyScroll,
    unlockBodyScroll,
  };
}
