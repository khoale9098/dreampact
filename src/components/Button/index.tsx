import React from 'react';

import { ButtonStyle } from './styles';
import { ButtonProps } from './types';

export function Button(props: ButtonProps) {
  const { children, elementRef, ...otherProps } = props;

  return (
    <ButtonStyle ref={elementRef} {...otherProps}>
      {children}
    </ButtonStyle>
  );
}

export * from './types';
export * from './styles';
