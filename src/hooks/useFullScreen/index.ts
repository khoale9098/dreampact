import { useState, useEffect, MutableRefObject } from 'react';
import isClient from '../../utils/isClient';

export function isFullScreenElement(el: Element) {
  if (el) {
    return Boolean(
      document.fullscreenElement === el ||
        document.mozFullScreenElement === el ||
        document.webkitFullscreenElement === el ||
        document.msFullscreenElement === el,
    );
  }

  return Boolean(
    document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement ||
      document.fullscreen ||
      document.mozFullScreen ||
      document.webkitIsFullScreen ||
      document.fullScreenMode,
  );
}

function useFullScreen<T extends HTMLElement>(element: MutableRefObject<T>) {
  const initialState = !isClient ? false : isFullScreenElement(element.current);
  const [fullScreen, setFullScreen] = useState(initialState);

  // access various open fullscreen methods
  function openFullScreen() {
    const el = (element && element.current) || document.documentElement;

    if (el.requestFullscreen) return el.requestFullscreen();
    if (el.mozRequestFullScreen) return el.mozRequestFullScreen();
    if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen();
    if (el.msRequestFullscreen) return el.msRequestFullscreen();
  }

  // access various exit fullscreen methods
  function closeFullScreen() {
    if (document.exitFullscreen) return document.exitFullscreen();
    if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
    if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
    if (document.msExitFullscreen) return document.msExitFullscreen();
  }

  useEffect(() => {
    function handleChange() {
      setFullScreen(isFullScreenElement(element.current));
    }

    document.addEventListener('webkitfullscreenchange', handleChange, false);
    document.addEventListener('mozfullscreenchange', handleChange, false);
    document.addEventListener('msfullscreenchange', handleChange, false);
    document.addEventListener('MSFullscreenChange', handleChange, false); // IE11
    document.addEventListener('fullscreenchange', handleChange, false);

    return () => {
      document.removeEventListener('webkitfullscreenchange', handleChange);
      document.removeEventListener('mozfullscreenchange', handleChange);
      document.removeEventListener('msfullscreenchange', handleChange);
      document.removeEventListener('MSFullscreenChange', handleChange);
      document.removeEventListener('fullscreenchange', handleChange);
    };
  }, [element]);

  return {
    fullScreen,
    open: openFullScreen,
    close: closeFullScreen,
    toggle: fullScreen ? closeFullScreen : openFullScreen,
  };
}

export default useFullScreen;
