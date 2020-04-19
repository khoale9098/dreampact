import { DefaultElementProps, DefaultStyleProps, Omit } from '../../../types';

export type InputStyleProps = DefaultStyleProps;

export interface InputProps
  extends Omit<DefaultElementProps<HTMLInputElement>, 'children'>,
    Omit<InputStyleProps, 'theme'>,
    React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  content: string | JSX.Element;
}
