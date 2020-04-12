import { DefaultElementProps, DefaultStyleProps, Omit } from '../../types';
import { ThemeColors } from './../../types';

export interface TextStyleProps extends DefaultStyleProps {
  as?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'span'
    | 'i'
    | 'small'
    | 'b'
    | 'p'
    | 'del'
    | 'ins'
    | 'sub'
    | 'sup'
    | 'em'
    | 'strong';

  textColor?: ThemeColors | string;
  transform?: 'capitalize' | 'inherit' | 'initial' | 'lowercase' | 'none' | 'unset' | 'uppercase';
}

export type InternalTextStyleProps = {
  heading: boolean;
  h1: boolean;
  h2: boolean;
  h3: boolean;
  h4: boolean;
  h5: boolean;
  h6: boolean;
  small: boolean;
  paragraph: boolean;
  italic: boolean;
  bold: boolean;
};

export interface TextProps
  extends DefaultElementProps<HTMLSpanElement>,
    Omit<TextStyleProps, 'theme'>,
    React.HTMLAttributes<HTMLSpanElement> {
  text?: string;
  children?: string | React.ReactNode;
  bold?: boolean;
  italic?: boolean;
}
