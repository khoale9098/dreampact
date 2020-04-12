import styled from 'styled-components';
import { theme } from '../../constants';
import { ThemeColors } from '../../types';
import { SvgStyleProps } from './types';

export const SvgStyle = styled.svg<SvgStyleProps>`
  width: auto;
  height: auto;

  ${({ error, theme }: SvgStyleProps) => error && `fill: ${theme.colors.danger};`}
`;

SvgStyle.defaultProps = {
  theme,
};

export const GroupStyle = styled.g`
  ${({ transform }) => transform && `transform: ${transform};`}
  fill: ${({ theme, fill }: SvgStyleProps) =>
    fill ? (theme.colors[fill as ThemeColors] ? theme.colors[fill as ThemeColors] : fill) : theme.colors.light};
`;

GroupStyle.defaultProps = {
  theme,
  fill: theme.colors.light,
};

export const PathStyle = styled.path``;
