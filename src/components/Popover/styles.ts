import styled from 'styled-components';
import { theme } from '../../constants';

import { PopoverStyleProps } from './types';

export const PopoverStyle = styled.div<PopoverStyleProps>`
  display: inline-flex;
  position: relative;
`;

PopoverStyle.defaultProps = {
  theme,
};
