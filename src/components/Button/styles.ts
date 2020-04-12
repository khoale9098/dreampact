import styled, { css } from 'styled-components';
import { theme } from './../../constants';

import { getButtonColorConfig } from '../../utils';

import { ButtonStyleProps } from './types';
import {
  getButtonPadding,
  getVariantCss,
  getButtonFontSize,
  getButtonBorderRadius,
  getButtonDisplay,
  getOnlyIconCss,
  iconSize,
} from './helpers';

import { SvgStyle } from '../Svg';

export const ButtonStyle = styled.button<ButtonStyleProps>`
  display: ${({ block, onlyIcon }: ButtonStyleProps) => getButtonDisplay(block, onlyIcon)};
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  font-size: ${({ size }: ButtonStyleProps) => getButtonFontSize(size)};
  line-height: 1.5;
  border-radius: ${({ square, pill, circle, onlyIcon }: ButtonStyleProps) =>
    getButtonBorderRadius(square, pill, circle, onlyIcon)};
  user-select: none;
  padding: ${({ size, onlyIcon }: ButtonStyleProps) => getButtonPadding(size, onlyIcon)};
  text-transform: none;
  margin: 0;
  overflow: visible;
  outline: none;

  ${getVariantCss()};
  ${({ block, onlyIcon }: ButtonStyleProps) =>
    block &&
    !onlyIcon &&
    css`
      width: 100%;
    `};

  ${({ onlyIcon, size }: ButtonStyleProps) => onlyIcon && getOnlyIconCss(size)}

  cursor: ${({ labeled, disabled }: ButtonStyleProps) => (disabled ? 'default' : labeled ? 'text' : 'pointer')};

  ${({ elevate }: ButtonStyleProps) =>
    elevate &&
    css`
      box-shadow: 0 4px 16px 0 rgba(153, 153, 153, 0.19);
      transition: all 0.3s ease 0s;

      &:hover {
        box-shadow: 0 9px 16px 0 rgba(153, 153, 153, 0.29);
      }
    `};

  ${({ disabled }: ButtonStyleProps) =>
    disabled &&
    css`
      opacity: 0.75;
    `}

  ${({ size }: ButtonStyleProps) => css`
    &:hover {
      ${SvgStyle} {
        g {
          fill: ${({ theme, variant, outline }: ButtonStyleProps) =>
            getButtonColorConfig(variant, theme, outline).hover.color};
        }
      }
    }

    ${SvgStyle} {
      width: ${iconSize[size]};
      height: ${iconSize[size]};

      g {
        fill: ${({ theme, variant, outline, labeled }: ButtonStyleProps) =>
          getButtonColorConfig(variant, theme, outline, labeled).color};
      }
    }
  `}
`;

ButtonStyle.defaultProps = {
  variant: 'warning',
  size: 'default',
  theme,
  disabled: false,
  labeled: false,
};
