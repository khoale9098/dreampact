import React from 'react';

import { FlexProps } from './types';
import { FlexStyle } from './styles';

export function Flex(props: FlexProps) {
  const { children, ...otherProps } = props;

  return <FlexStyle {...otherProps}>{children}</FlexStyle>;
}

export * from './styles';
export * from './types';
