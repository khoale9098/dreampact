import { DefaultStyleProps, DefaultElementProps, Omit } from './../../types';

export type TooltipStyleProps = DefaultStyleProps;

export interface TooltipProps
  extends Omit<TooltipStyleProps, 'theme'>,
    DefaultElementProps<HTMLDivElement>,
    React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: JSX.Element;
  delay?: number;
  position?: 'left' | 'top' | 'right' | 'bottom';
}
