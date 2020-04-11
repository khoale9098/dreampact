import { BreakpointsTypes } from './../types';

export const breakpoints: BreakpointsTypes = {
  lg: 992,
  md: 768,
  sm: 576,
  xl: 1200,
};

export const breakpointsCSS: BreakpointsTypes = {
  lg: `(min-width: ${breakpoints.lg}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  xs: `(min-width: 0px)`,
};
