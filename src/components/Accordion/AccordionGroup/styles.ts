import styled from 'styled-components';
import { theme } from '../../../constants';
import { darken } from '../../../utils';
import { AccordionGroupStyleProps } from './types';

import { AccordionStyle } from './../styles';

export const AccordionGroupStyle = styled.div<AccordionGroupStyleProps>`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  ${AccordionStyle} {
    border: 1px solid
      ${({
        theme: {
          colors: { light },
        },
      }: AccordionGroupStyleProps) => darken(light, 10)};

    &:first-child {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }

    &:last-child {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

AccordionGroupStyle.defaultProps = {
  theme,
};
