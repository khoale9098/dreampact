import React from 'react';
import { Svg, SvgProps } from '../../Svg';
import { CloseIconProps } from './props';

export const CloseIcon = (props: SvgProps) => <Svg {...CloseIconProps} {...props} />;
export * from './props';
