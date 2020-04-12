import React, { useState, useLayoutEffect } from 'react';

import { TooltipContentProps } from './types';
import { TooltipContentStyle, ArrowStyle } from './styles';

import { useIsOffScreen } from '../../../hooks';

export function TooltipContent(props: TooltipContentProps) {
  const { children, position, ...otherProps } = props;

  const initialPosition = position || 'top';
  const [tooltipPosition, setTooltipPosition] = useState(initialPosition);

  const [{ details }, reference] = useIsOffScreen<HTMLDivElement>(true);

  useLayoutEffect(() => {
    if (details) {
      const { left, right, bottom, top } = details;
      setTooltipPosition(() => {
        if (left && right && top && bottom) {
          return initialPosition;
        }

        if (left && right) {
          if (!top) {
            return 'top';
          } else {
            return 'bottom';
          }
        }

        if (top && bottom) {
          if (!left) {
            return 'left';
          } else {
            return 'right';
          }
        }

        if (left) {
          return 'right';
        }
        if (right) {
          return 'left';
        }
        if (bottom) {
          return 'top';
        }
        if (top) {
          return 'bottom';
        }

        // If is not offscreen in any point, return initial position
        return initialPosition;
      });
    }
  }, [details, initialPosition]);

  return (
    <TooltipContentStyle position={tooltipPosition} ref={reference} {...otherProps}>
      <ArrowStyle />
      {children}
    </TooltipContentStyle>
  );
}
