import styled, { css } from 'styled-components';
import { theme } from '../../../constants';

import { ColStyleProps } from './types';

export const ColStyle = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${({ alignItems }: ColStyleProps) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `};
`;

ColStyle.defaultProps = {
  theme,
};
