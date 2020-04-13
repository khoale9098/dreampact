import React, { useState, useLayoutEffect } from 'react';

import { PopoverContentProps } from './types';
import { PopoverContentStyle, PopoverHeaderStyle, PopoverBodyStyle } from './styles';

import { useIsOffScreen } from '../../../hooks';

export function PopoverContent(props: PopoverContentProps) {
  const { title, description, content, position, ...otherProps } = props;

  const initialPosition = position || 'top';
  const [popoverPosition, setPopoverPosition] = useState(initialPosition);

  const [{ details }, reference] = useIsOffScreen<HTMLDivElement>(true);

  useLayoutEffect(() => {
    if (details) {
      const { left, right, bottom, top } = details;
      setPopoverPosition(() => {
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
    <PopoverContentStyle position={popoverPosition} ref={reference} {...otherProps}>
      <PopoverHeaderStyle>{title}</PopoverHeaderStyle>
      <PopoverBodyStyle>{content || description}</PopoverBodyStyle>
    </PopoverContentStyle>
  );
}
