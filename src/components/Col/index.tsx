import React from 'react';
import { ColProps } from './types';
import { ColStyle } from './styles';

export function Col(props: ColProps) {
  const { children, ...styledProps } = props;

  return <ColStyle {...styledProps}>{children}</ColStyle>;
}

export * from './styles';
export * from './types';
