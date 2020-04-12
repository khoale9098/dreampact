export type ThemeColors = 'primary' | 'secondary' | 'warning' | 'info' | 'danger' | 'success' | 'dark' | 'light';

export type Theme = {
  colors: { [key in ThemeColors]: string };
  buttons: {
    [key in ThemeColors]: {
      borderColor?: ThemeColors | string;
      color: ThemeColors | string;
      background?: ThemeColors | string;

      hover: {
        color?: ThemeColors | string;
        borderColor?: ThemeColors | string;
        background?: ThemeColors | string;
      };
    };
  };
};
