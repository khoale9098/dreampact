import { MutableRefObject, useLayoutEffect, useRef, useState, useCallback } from 'react';

export type ElementOffScreen = {
  isOffScreen?: boolean;
  details: {
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
  };
};

export function isElementOffScreen(el: Element, partial = false): ElementOffScreen {
  if (!el) {
    return {
      isOffScreen: null,
      details: null,
    };
  }

  const viewPortWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  const rect = el.getBoundingClientRect();

  const topEdgeInRange = rect.top >= 0 && rect.top <= viewPortHeight;
  const bottomEdgeInRange = rect.bottom >= 0 && rect.bottom <= viewPortHeight;

  const leftEdgeInRange = rect.left >= 0 && rect.left <= viewPortWidth;
  const rightEdgeInRange = rect.right >= 0 && rect.right <= viewPortWidth;

  // Check if element is bigger then window and 'covers' the screen in given axis
  const coverScreenHorizontally = rect.left <= 0 && rect.right >= viewPortWidth;
  const coverScreenVertically = rect.top <= 0 && rect.bottom >= viewPortHeight;

  // Check 2nd axis
  const topEdgeInScreen = topEdgeInRange && (leftEdgeInRange || rightEdgeInRange || coverScreenHorizontally);
  const bottomEdgeInScreen = bottomEdgeInRange && (leftEdgeInRange || rightEdgeInRange || coverScreenHorizontally);

  const leftEdgeInScreen = leftEdgeInRange && (topEdgeInRange || bottomEdgeInRange || coverScreenVertically);
  const rightEdgeInScreen = rightEdgeInRange && (topEdgeInRange || bottomEdgeInRange || coverScreenVertically);

  // Check if element is partially or entirely present on screen
  const isPartiallyOffScreen = !topEdgeInScreen || !bottomEdgeInScreen || !leftEdgeInScreen || !rightEdgeInScreen;
  const isEntirelyOnScreen = topEdgeInScreen && bottomEdgeInScreen && leftEdgeInScreen && rightEdgeInScreen;

  return {
    isOffScreen: partial ? isPartiallyOffScreen : !isEntirelyOnScreen,
    details: {
      top: !topEdgeInScreen,
      left: !leftEdgeInScreen,
      bottom: !bottomEdgeInScreen,
      right: !rightEdgeInScreen,
    },
  };
}

export function useIsOffScreen<T extends Element>(
  partial = false,
): [ElementOffScreen, MutableRefObject<T>, () => void] {
  const element = useRef<T>(null);
  const [isOffScreen, setIsOffScreen] = useState(isElementOffScreen(element.current, partial));

  const recheckVisibility = useCallback(() => {
    const checkIsOffScreen = isElementOffScreen(element.current, partial);

    setIsOffScreen(checkIsOffScreen);
  }, [partial]);

  useLayoutEffect(() => {
    setIsOffScreen(isElementOffScreen(element.current, partial));

    window.addEventListener('resize', recheckVisibility);
    return () => window.removeEventListener('resize', recheckVisibility);
  }, [partial, recheckVisibility]);

  return [isOffScreen, element as MutableRefObject<T>, recheckVisibility];
}
