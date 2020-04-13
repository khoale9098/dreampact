import { DefaultElementProps, DefaultStyleProps } from './../../types/elements';

export interface FlexStyleProps extends DefaultStyleProps {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | 'initial' | 'inherit';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
  grow?: number | 'initial' | 'inherit';
  shrink?: number | 'initial' | 'inherit';
  basis?: string | number | 'initial' | 'inherit';
  flex?: string | 'initial' | 'inherit';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';
  padding?: string;
}

export interface FlexProps
  extends DefaultElementProps<HTMLDivElement>,
    Omit<FlexStyleProps, 'theme'>,
    React.HTMLAttributes<HTMLDivElement> {}
