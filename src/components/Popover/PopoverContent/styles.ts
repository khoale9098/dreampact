import styled, { keyframes, css } from 'styled-components';
import { theme } from '../../../constants';

import { PopoverContentStyleProps } from './types';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const topCss = css`
  bottom: calc(100% + 18px);
  left: 50%;
  transform: translateX(-50%);
`;

const rightCss = css`
  left: calc(100% + 18px);
  top: 50%;
  transform: translateY(-50%);
`;

const leftCss = css`
  right: calc(100% + 18px);
  top: 50%;
  transform: translateY(-50%);
`;

const bottomCss = css`
  top: calc(100% + 18px);
  left: 50%;
  transform: translateX(-50%);
`;

export const PopoverHeaderStyle = styled.div`
  padding: 0.6rem 0.8rem;
  font-size: 15px;
  border-bottom: 1px solid
    ${({
      theme: {
        colors: { light },
      },
    }) => light};
`;

PopoverHeaderStyle.defaultProps = {
  theme,
};

export const PopoverBodyStyle = styled.div`
  padding: 0.8rem;
`;

export const PopoverContentStyle = styled.div<PopoverContentStyleProps>`
  display: inline-flex;
  flex-direction: column;
  font-family: monospace;
  word-wrap: break-word;
  font-size: 12px;
  position: absolute;
  font-weight: bold;
  background-color: #fff;
  color: ${({ theme: { colors } }: PopoverContentStyleProps) => colors.dark};
  border: solid 1px ${({
    theme: {
      colors: { light },
    },
  }: PopoverContentStyleProps) => light};
  border-radius: 4px;
  animation: ${fadeIn} ease-in-out 0.35s;
  cursor: default;
  box-shadow: 0 0 13px 0 rgba(82,63,105,.05);
  max-width: 100vw;
  min-width: 220px;

  ${({ position }) => position === 'top' && topCss}
  ${({ position }) => position === 'bottom' && bottomCss}
  ${({ position }) => position === 'left' && leftCss}
  ${({ position }) => position === 'right' && rightCss}
`;

PopoverContentStyle.defaultProps = {
  theme,
  position: 'top',
};
