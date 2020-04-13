import { DefaultElementProps, DefaultStyleProps, Omit } from '../../types';

import { BreakpointsTypes } from '../../types';

export interface RowStyleProps extends BreakpointsTypes, DefaultStyleProps {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | 'initial' | 'inherit';
}

export interface RowProps
  extends DefaultElementProps<HTMLDivElement>,
    Omit<RowStyleProps, 'theme'>,
    React.HTMLAttributes<HTMLDivElement> {
  children?: never;
}
