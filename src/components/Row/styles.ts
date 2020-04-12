import styled, { css } from 'styled-components';
import { theme } from '../../constants';

import { breakpointsCSS } from './../../constants/breakpoints';
import { ColStyle } from './Col';
import { getFlexSize } from './helpers';
import { RowStyleProps } from './types';

export const RowStyle = styled.div<RowStyleProps>`
  display: flex;
  flex-wrap: wrap;

  ${({ alignItems }: RowStyleProps) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `};

  ${ColStyle} {
    @media ${breakpointsCSS.xs} {
      ${({ xs }: RowStyleProps) =>
        xs &&
        css`
          max-width: ${getFlexSize(xs as number)};
          flex: ${getFlexSize(xs as number)};
        `};
    }

    @media ${breakpointsCSS.sm} {
      ${({ sm }: RowStyleProps) =>
        sm &&
        css`
          max-width: ${getFlexSize(sm as number)};
          flex: ${getFlexSize(sm as number)};
        `};
    }

    @media ${breakpointsCSS.md} {
      ${({ md }: RowStyleProps) =>
        md &&
        css`
          max-width: ${getFlexSize(md as number)};
          flex: ${getFlexSize(md as number)};
        `};
    }

    @media ${breakpointsCSS.lg} {
      ${({ lg }: RowStyleProps) =>
        lg &&
        css`
          max-width: ${getFlexSize(lg as number)};
          flex: ${getFlexSize(lg as number)};
        `};
    }

    @media ${breakpointsCSS.xl} {
      ${({ xl }: RowStyleProps) =>
        xl &&
        css`
          max-width: ${getFlexSize(xl as number)};
          flex: ${getFlexSize(xl as number)};
        `};
    }
  }
`;

RowStyle.defaultProps = {
  theme,
};
