import React, { useState, useEffect } from 'react';

import { TooltipProps } from './types';
import { TooltipStyle } from './styles';
import { TooltipContent } from './TooltipContent';

export function Tooltip(props: TooltipProps) {
  const { children, elementRef, title, position, delay = 0, ...otherProps } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsTooltipVisible(isVisible);
    }, delay);

    return () => clearTimeout(id);
  }, [isVisible, delay]);

  return (
    <TooltipStyle
      ref={elementRef}
      {...otherProps}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isTooltipVisible && <TooltipContent position={position}>{title}</TooltipContent>}
      {children}
    </TooltipStyle>
  );
}

export * from './styles';
export * from './types';
export * from './TooltipContent';
