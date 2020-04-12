import { DefaultStyleProps, DefaultElementProps, Omit } from './../../types';

export interface ContainerStyleProps extends DefaultStyleProps {
  fluid?: boolean;
}

export interface ContainerProps
  extends Omit<ContainerStyleProps, 'theme'>,
    DefaultElementProps<HTMLDivElement>,
    React.HTMLAttributes<HTMLDivElement> {}
