import { DefaultElementProps, DefaultStyleProps, Omit } from '../../types';

export type AccordionStyleProps = DefaultStyleProps;

export interface AccordionProps
  extends DefaultElementProps<HTMLDivElement>,
    Omit<AccordionStyleProps, 'theme'>,
    React.HTMLAttributes<HTMLDivElement> {
  title: string;
  content: string | JSX.Element;
}
