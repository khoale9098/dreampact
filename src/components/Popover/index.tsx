import React, { useState, useEffect } from 'react';

import { PopoverProps } from './types';
import { PopoverStyle } from './styles';
import { PopoverContent } from './PopoverContent';

export function Popover(props: PopoverProps) {
  const { children, elementRef, title, description, content, position, delay = 0, ...otherProps } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsPopoverVisible(isVisible);
    }, delay);

    return () => clearTimeout(id);
  }, [isVisible, delay]);

  return (
    <PopoverStyle
      ref={elementRef}
      {...otherProps}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isPopoverVisible && (
        <PopoverContent title={title} description={description} content={content} position={position}></PopoverContent>
      )}
      {children}
    </PopoverStyle>
  );
}

export * from './styles';
export * from './types';
export * from './PopoverContent';
