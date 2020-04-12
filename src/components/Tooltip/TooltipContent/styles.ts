import styled, { keyframes, css } from 'styled-components';
import { theme } from '../../../constants';

import { TooltipContentStyleProps } from './types';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const ArrowStyle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
`;

const topCss = css`
  bottom: calc(100% + 18px);
  left: 50%;
  transform: translateX(-50%);

  ${ArrowStyle} {
    bottom: -8px;
    left: calc(50% - 10px);
    border-right: 10px solid transparent;
    border-top: 10px solid ${({ theme: { colors } }: TooltipContentStyleProps) => colors.dark};
    border-left: 10px solid transparent;
  }
`;

const rightCss = css`
  left: calc(100% + 18px);
  top: 50%;
  transform: translateY(-50%);

  ${ArrowStyle} {
    top: calc(50% - 10px);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    left: -8px;
    border-right: 10px solid ${({ theme: { colors } }: TooltipContentStyleProps) => colors.dark};
  }
`;

const leftCss = css`
  right: calc(100% + 18px);
  top: 50%;
  transform: translateY(-50%);

  ${ArrowStyle} {
    top: calc(50% - 10px);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    right: -8px;
    border-left: 10px solid ${({ theme: { colors } }: TooltipContentStyleProps) => colors.dark};
  }
`;

const bottomCss = css`
  top: calc(100% + 18px);
  left: 50%;
  transform: translateX(-50%);

  ${ArrowStyle} {
    top: -8px;
    left: calc(50% - 10px);
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${({ theme: { colors } }: TooltipContentStyleProps) => colors.dark};
    border-left: 10px solid transparent;
  }
`;

export const TooltipContentStyle = styled.div<TooltipContentStyleProps>`
  display: inline-flex;
  white-space: nowrap;
  font-family: monospace;
  font-size: 12px;
  position: absolute;
  font-weight: bold;
  background-color: ${({ theme: { colors } }: TooltipContentStyleProps) => colors.dark};
  color: ${({ theme: { colors } }: TooltipContentStyleProps) => colors.light};
  padding: 0.33rem 0.56rem;
  border-radius: 4px;
  animation: ${fadeIn} ease-in-out 0.35s;
  cursor: default;
  box-shadow: 0 0 13px 0 rgba(82,63,105,.05);

  ${({ position }) => position === 'top' && topCss}
  ${({ position }) => position === 'bottom' && bottomCss}
  ${({ position }) => position === 'left' && leftCss}
  ${({ position }) => position === 'right' && rightCss}
`;

TooltipContentStyle.defaultProps = {
  theme,
  position: 'top',
};
