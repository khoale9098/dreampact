import React from 'react';
import { ColProps } from './types';
import { ColStyle } from './styles';

export function Col(props: ColProps) {
  const { children, ...otherProps } = props;

  return <ColStyle {...otherProps}>{children}</ColStyle>;
}

export * from './styles';
export * from './types';
