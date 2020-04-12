import styled, { css } from 'styled-components';
import { theme } from '../../constants';

import { FlexStyleProps } from './types';

export const FlexStyle = styled.div<FlexStyleProps>`
  display: flex;

  ${({ alignItems }: FlexStyleProps) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `};

  ${({ basis }: FlexStyleProps) =>
    basis &&
    css`
      flex-basis: ${basis};
    `};

  ${({ direction }: FlexStyleProps) =>
    direction &&
    css`
      flex-direction: ${direction};
    `};

  ${({ grow }: FlexStyleProps) =>
    grow &&
    css`
      flex-grow: ${grow};
    `};

  ${({ justifyContent }: FlexStyleProps) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `};

  ${({ shrink }: FlexStyleProps) =>
    shrink &&
    css`
      flex-shrink: ${shrink};
    `};

  ${({ wrap }: FlexStyleProps) =>
    wrap &&
    css`
      flex-wrap: ${wrap};
    `};

  ${({ flex }: FlexStyleProps) =>
    flex &&
    css`
      flex: ${flex};
    `};
`;

FlexStyle.defaultProps = {
  theme,
};
