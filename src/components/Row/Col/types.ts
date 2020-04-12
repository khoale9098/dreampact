import { DefaultElementProps, DefaultStyleProps, Omit } from '../../../types';

export interface ColStyleProps extends DefaultStyleProps {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | 'initial' | 'inherit';
}

export interface ColProps
  extends DefaultElementProps<HTMLDivElement>,
    Omit<ColStyleProps, 'theme'>,
    React.HTMLAttributes<HTMLDivElement> {}
