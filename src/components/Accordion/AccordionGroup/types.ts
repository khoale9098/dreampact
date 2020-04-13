import { DefaultElementProps, DefaultStyleProps, Omit } from '../../../types';

export type AccordionGroupStyleProps = DefaultStyleProps;

export interface AccordionGroupProps
  extends DefaultElementProps<HTMLDivElement>,
    Omit<AccordionGroupStyleProps, 'theme'>,
    React.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
}
