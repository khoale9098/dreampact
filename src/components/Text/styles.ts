import styled, { css } from 'styled-components';
import { theme } from '../../constants';
import { ThemeColors } from './../../types';

import { TextStyleProps, InternalTextStyleProps } from './types';

type TextProps = TextStyleProps & InternalTextStyleProps;

const colorCss = css<TextStyleProps>`
  color: ${({ textColor, theme: { colors } }: TextStyleProps) =>
    colors[textColor as ThemeColors] ? colors[textColor as ThemeColors] : textColor};
`;

const headingCss = css<TextStyleProps>`
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
`;

const h1Css = css<TextStyleProps>`
  font-size: 2.5rem;
`;

const h2Css = css<TextStyleProps>`
  font-size: 2rem;
`;

const h3Css = css<TextStyleProps>`
  font-size: 1.75rem;
`;

const h4Css = css<TextStyleProps>`
  font-size: 1.5rem;
`;

const h5Css = css<TextStyleProps>`
  font-size: 1.25rem;
`;

const h6Css = css<TextStyleProps>`
  font-size: 1rem;
`;

const smallCss = css<TextStyleProps>`
  font-size: 80%;
  font-weight: 400;
`;

const paragraphCss = css<TextStyleProps>`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const boldCss = css<TextStyleProps>`
  font-weight: bold;
`;

const italicCss = css<TextStyleProps>`
  font-style: italic;
`;

const transformCss = css<TextStyleProps>`
  text-transform: ${({ transform }) => transform};
`;

export const TextStyle = styled.span<TextProps>`
  ${({ textColor }: TextProps) => textColor && colorCss}

  ${({ heading }: TextProps) => heading && headingCss}
  ${({ h1 }: TextProps) => h1 && h1Css}
  ${({ h2 }: TextProps) => h2 && h2Css}
  ${({ h3 }: TextProps) => h3 && h3Css}
  ${({ h4 }: TextProps) => h4 && h4Css}
  ${({ h5 }: TextProps) => h5 && h5Css}
  ${({ h6 }: TextProps) => h6 && h6Css}
  ${({ small }: TextProps) => small && smallCss}
  ${({ paragraph }: TextProps) => paragraph && paragraphCss}
  ${({ bold }: TextProps) => bold && boldCss}
  ${({ italic }: TextProps) => italic && italicCss}
  ${({ transform }: TextProps) => transform && transformCss}
`;

TextStyle.defaultProps = {
  theme,
};
