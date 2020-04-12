import { DefaultElementProps, DefaultStyleProps, Omit } from '../../types';

export interface SvgStyleProps extends DefaultStyleProps {
  error?: string | object;
  paths?: any;
  disabled?: boolean;
  fillAll?: string;
  fill?: string;
}

export interface SvgProps
  extends DefaultElementProps<HTMLOrSVGElement>,
    Omit<SvgStyleProps, 'theme'>,
    React.SVGAttributes<HTMLOrSVGElement> {}

export interface PathProps extends SvgProps {
  d: string;
}
