import { Theme, ThemeColors } from './../types';
import { opacity } from './../utils';
import { ButtonStyleProps } from './../components/Button/types';

export function getButtonColorConfig(
  variant: ButtonStyleProps['variant'],
  theme: Theme,
  outline = false,
  labeled = false,
) {
  const { colors, buttons } = theme;

  const button = buttons[variant];
  const variantColor = colors[variant];

  const buttonColor = colors[button.color as ThemeColors] ? colors[button.color as ThemeColors] : button.color;

  const backgroundColor = button.background
    ? colors[button.background as ThemeColors]
      ? colors[button.background as ThemeColors]
      : button.background
    : variantColor;

  const border = button.borderColor
    ? colors[button.borderColor as ThemeColors]
      ? colors[button.borderColor as ThemeColors]
      : button.borderColor
    : variantColor;

  const hoverColor = colors[button.hover.color as ThemeColors]
    ? colors[button.hover.color as ThemeColors]
    : button.hover.color;

  const hoverBackgroundColor = button.hover.background
    ? colors[button.hover.background as ThemeColors]
      ? colors[button.hover.background as ThemeColors]
      : button.hover.background
    : variantColor;

  const hoverBorderColor = button.hover.borderColor
    ? colors[button.hover.borderColor as ThemeColors]
      ? colors[button.hover.borderColor as ThemeColors]
      : button.hover.borderColor
    : variantColor;

  const background = outline ? 'transparent' : labeled ? opacity(backgroundColor, 0.15) : backgroundColor;
  const borderColor = labeled ? opacity(border, 0.15) : border;
  const color = labeled ? variantColor : buttonColor;

  const config = {
    background,
    color,
    borderColor,
    hover: {
      background: hoverBackgroundColor,
      color: hoverColor,
      borderColor: hoverBorderColor,
    },
  };

  return config;
}
