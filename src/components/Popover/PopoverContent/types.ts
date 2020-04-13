import { DefaultStyleProps, DefaultElementProps, Omit } from '../../../types';

export interface PopoverContentStyleProps extends DefaultStyleProps {
  position?: 'left' | 'top' | 'right' | 'bottom';
}

export interface PopoverContentProps
  extends Omit<PopoverContentStyleProps, 'theme'>,
    DefaultElementProps<HTMLDivElement>,
    React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  content?: JSX.Element;
}
