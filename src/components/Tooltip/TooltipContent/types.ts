import { DefaultStyleProps, DefaultElementProps, Omit } from '../../../types';

export interface TooltipContentStyleProps extends DefaultStyleProps {
  position?: 'left' | 'top' | 'right' | 'bottom';
}

export interface TooltipContentProps
  extends Omit<TooltipContentStyleProps, 'theme'>,
    DefaultElementProps<HTMLDivElement>,
    React.HTMLAttributes<HTMLDivElement> {}
