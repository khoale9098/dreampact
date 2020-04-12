import styled, { css } from 'styled-components';
import { theme } from '../../constants';

import { ContainerStyleProps } from './types';

import { breakpointsCSS } from './../../constants/breakpoints';

export const ContainerStyle = styled.div<ContainerStyleProps>`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  ${({ fluid }: ContainerStyleProps) =>
    !fluid &&
    css`
      @media ${breakpointsCSS.sm} {
        max-width: 540px;
      }

      @media ${breakpointsCSS.md} {
        max-width: 720px;
      }

      @media ${breakpointsCSS.lg} {
        max-width: 960px;
      }

      @media ${breakpointsCSS.xl} {
        max-width: 1140px;
      }
    `}
`;

ContainerStyle.defaultProps = {
  theme,
};
