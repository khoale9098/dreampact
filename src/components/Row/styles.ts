import styled from 'styled-components';
import { breakpointsCSS } from './../../constants/breakpoints';
import { ColStyle } from '../Col';
import { getFlexSize } from './helpers';
import { RowStyleProps } from './types';

export const RowStyle = styled.div<RowStyleProps>`
  display: flex;
  flex-wrap: wrap;

  ${ColStyle} {
    @media ${breakpointsCSS.xs} {
      ${({ xs }: RowStyleProps) => xs && `max-width: ${getFlexSize(xs as number)}`};
      ${({ xs }: RowStyleProps) => xs && `flex: ${getFlexSize(xs as number)}`};
    }

    @media ${breakpointsCSS.sm} {
      ${({ sm }: RowStyleProps) => sm && `max-width: ${getFlexSize(sm as number)}`};
      ${({ sm }: RowStyleProps) => sm && `flex: ${getFlexSize(sm as number)}`};
    }

    @media ${breakpointsCSS.md} {
      ${({ md }: RowStyleProps) => md && `max-width: ${getFlexSize(md as number)}`};
      ${({ md }: RowStyleProps) => md && `flex: ${getFlexSize(md as number)}`};
    }

    @media ${breakpointsCSS.lg} {
      ${({ lg }: RowStyleProps) => lg && `max-width: ${getFlexSize(lg as number)}`};
      ${({ lg }: RowStyleProps) => lg && `flex: ${getFlexSize(lg as number)}`};
    }

    @media ${breakpointsCSS.xl} {
      ${({ xl }: RowStyleProps) => xl && `max-width: ${getFlexSize(xl as number)}`};
      ${({ xl }: RowStyleProps) => xl && `flex: ${getFlexSize(xl as number)}`};
    }
  }
`;
