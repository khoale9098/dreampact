import { Theme } from './theme';
export interface DefaultElementProps<T> {
  children?: React.ReactNode;
  elementRef?: React.MutableRefObject<T>;
}

export type DefaultStyleProps = {
  theme?: Theme;
};
