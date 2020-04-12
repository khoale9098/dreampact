import { Theme } from './../types';
import { darken, lighten } from '../utils';

const colors = {
  primary: '#5867dd',
  success: '#0abb87',
  secondary: '#e2e5ec',
  warning: '#ffb822',
  info: '#5578eb',
  danger: '#fd397a',
  dark: '#282a3c',
  light: '#e2e5ec',
};

export const theme: Theme = {
  colors,
  buttons: {
    primary: {
      color: '#fff',
      hover: {
        background: darken(colors.primary, 10),
        borderColor: darken(colors.primary, 10),
      },
    },
    success: {
      color: '#fff',
      hover: {
        background: darken(colors.success, 10),
        borderColor: darken(colors.success, 10),
      },
    },
    warning: {
      color: '#fff',
      hover: {
        background: darken(colors.warning, 10),
        borderColor: darken(colors.warning, 10),
      },
    },
    info: {
      color: '#fff',
      hover: {
        background: darken(colors.info, 10),
        borderColor: darken(colors.info, 10),
      },
    },
    danger: {
      color: '#fff',
      hover: {
        background: darken(colors.danger, 10),
        borderColor: darken(colors.danger, 10),
      },
    },
    dark: {
      color: '#fff',
      hover: {
        background: darken(colors.dark, 10),
        borderColor: darken(colors.dark, 10),
      },
    },
    light: {
      color: '#000',
      hover: {
        background: darken(colors.light, 10),
        borderColor: darken(colors.light, 10),
      },
    },
    secondary: {
      borderColor: 'light',
      color: '#000',
      background: 'transparent',
      hover: {
        color: '#fff',
        borderColor: lighten(colors.primary, 10),
        background: lighten(colors.primary, 10),
      },
    },
  },
};
