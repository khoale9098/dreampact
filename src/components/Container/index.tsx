import React from 'react';

import { ContainerProps } from './types';
import { ContainerStyle } from './styles';

export function Container(props: ContainerProps) {
  const { children, elementRef, ...otherProps } = props;

  return (
    <ContainerStyle ref={elementRef} {...otherProps}>
      {children}
    </ContainerStyle>
  );
}

export * from './styles';
export * from './types';
