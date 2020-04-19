import React from 'react';

import { InputStyle } from './styles';

import { InputProps } from './types';

export function Input(props: InputProps) {
  const { elementRef, ...otherProps } = props;
  return <InputStyle ref={elementRef} {...otherProps} />;
}
