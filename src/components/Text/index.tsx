import React from 'react';

import { TextProps, InternalTextStyleProps } from './types';
import { TextStyle } from './styles';

export function Text(props: TextProps) {
  const { text, children, as, elementRef, bold, italic, ...otherProps } = props;

  const internalProps: InternalTextStyleProps = {
    heading: as === 'h1' || as === 'h2' || as === 'h3' || as === 'h4' || as === 'h5' || as === 'h6',
    h1: as === 'h1',
    h2: as === 'h2',
    h3: as === 'h3',
    h4: as === 'h4',
    h5: as === 'h5',
    h6: as === 'h6',
    small: as === 'small',
    paragraph: as === 'p',
    italic: italic || as === 'i' || as === 'em',
    bold: bold || as === 'b' || as === 'strong',
  };

  return (
    <TextStyle as={as} ref={elementRef} {...otherProps} {...internalProps}>
      {text || children}
    </TextStyle>
  );
}

export * from './styles';
export * from './types';
