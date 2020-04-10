import { useLayoutEffect } from 'react';

export default function useLockBodyScroll(lock = true) {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (lock) {
      // Prevent scrolling on mount
      document.body.style.overflow = 'hidden';
    }
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, [lock]);
}
