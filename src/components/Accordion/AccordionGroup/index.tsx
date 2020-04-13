import React from 'react';

import { AccordionGroupProps } from './types';
import { AccordionGroupStyle } from './styles';

export function AccordionGroup(props: AccordionGroupProps) {
  const { children, elementRef, ...otherProps } = props;

  return (
    <AccordionGroupStyle ref={elementRef} {...otherProps}>
      {children}
    </AccordionGroupStyle>
  );
}

export * from './types';
export * from './styles';
