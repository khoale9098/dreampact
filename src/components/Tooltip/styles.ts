import styled from 'styled-components';
import { theme } from '../../constants';

import { TooltipStyleProps } from './types';

export const TooltipStyle = styled.div<TooltipStyleProps>`
  display: inline-flex;
  position: relative;
`;

TooltipStyle.defaultProps = {
  theme,
};
