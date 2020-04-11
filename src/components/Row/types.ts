import { DefaultElementProps } from './../../types';
import { BreakpointsTypes } from '../../types';
export interface RowProps extends BreakpointsTypes, DefaultElementProps {
  children: React.ReactElement[] | React.ReactElement;
}

export type RowStyleProps = BreakpointsTypes;
