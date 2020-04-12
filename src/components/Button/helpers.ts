import { css } from 'styled-components';
import { ButtonStyleProps } from './types';
import { getButtonColorConfig } from '../../utils';

export function getVariantCss() {
  return css<ButtonStyleProps>`
    ${({ theme, variant, outline, labeled }: ButtonStyleProps) =>
      css`
        color: ${getButtonColorConfig(variant, theme, outline, labeled).color};
        background-color: ${getButtonColorConfig(variant, theme, outline, labeled).background};
        border-color: ${getButtonColorConfig(variant, theme, outline, labeled).borderColor};
      `}

    ${({ disabled, theme, variant, outline, labeled }: ButtonStyleProps) =>
      !disabled &&
      !labeled &&
      css`
        &:hover {
          color: ${getButtonColorConfig(variant, theme, outline).hover.color};
          background-color: ${getButtonColorConfig(variant, theme, outline).hover.background};
          border-color: ${getButtonColorConfig(variant, theme, outline).hover.borderColor};
        }
      `}
  `;
}

export const iconSize: { [key in ButtonStyleProps['size']]: string } = {
  default: '1.0495rem',
  large: '1.359rem',
  small: '0.6735rem',
};

export function getOnlyIconCss(size: ButtonStyleProps['size']) {
  const buttonSize: { [key in ButtonStyleProps['size']]: string } = {
    default: '2.379rem',
    large: '3.118rem',
    small: '1.747rem',
  };

  return css`
    align-items: center;
    justify-content: center;
    width: ${buttonSize[size]};
    height: ${buttonSize[size]};
  `;
}

export function getButtonPadding(size: ButtonStyleProps['size'], onlyIcon = false) {
  const paddings: { [key in ButtonStyleProps['size']]: string } = {
    default: '0.375rem 0.75rem',
    large: '0.446rem 0.892rem',
    small: '0.31rem 0.46rem',
  };

  return onlyIcon ? '0' : paddings[size];
}

export function getButtonBorderRadius(square?: boolean, pill?: boolean, circle?: boolean, onlyIcon?: boolean) {
  return circle && onlyIcon ? '50%' : square ? '0' : pill ? '4rem' : '0.18rem';
}

export function getButtonDisplay(block?: boolean, onlyIcon = false) {
  return onlyIcon ? 'inline-flex' : block ? 'block' : 'inline-block';
}

export function getButtonFontSize(size: ButtonStyleProps['size']) {
  const paddings: { [key in ButtonStyleProps['size']]: string } = {
    default: '1rem',
    large: '1.4rem',
    small: '0.68rem',
  };

  return paddings[size];
}
