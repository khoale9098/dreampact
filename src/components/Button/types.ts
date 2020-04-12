import { DefaultElementProps, DefaultStyleProps, Omit, ThemeColors } from './../../types';

export interface ButtonStyleProps extends DefaultStyleProps {
  variant?: ThemeColors;
  size?: 'small' | 'default' | 'large';
  outline?: boolean;
  square?: boolean;
  block?: boolean;
  pill?: boolean;
  elevate?: boolean;
  onlyIcon?: boolean;
  circle?: boolean;
  disabled?: boolean;
  labeled?: boolean;
}

export interface ButtonProps
  extends DefaultElementProps<HTMLButtonElement>,
    Omit<ButtonStyleProps, 'theme'>,
    React.HTMLAttributes<HTMLButtonElement> {}
