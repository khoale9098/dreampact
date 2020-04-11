import React from 'react';
import { RowProps } from './types';
import { RowStyle } from './styles';

export function Row(props: RowProps) {
  const { children, ...otherProps } = props;

  return <RowStyle {...otherProps}>{children}</RowStyle>;
}

export * from './styles';
export * from './types';
export * from './helpers';
