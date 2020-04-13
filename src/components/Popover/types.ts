import { DefaultStyleProps, DefaultElementProps, Omit } from './../../types';

export type PopoverStyleProps = DefaultStyleProps;

export interface PopoverProps
  extends Omit<PopoverStyleProps, 'theme'>,
    DefaultElementProps<HTMLDivElement>,
    React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  content?: JSX.Element;
  children: JSX.Element | string;
  delay?: number;
  position?: 'left' | 'top' | 'right' | 'bottom';
}
