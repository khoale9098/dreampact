import styled, { css } from 'styled-components';
import { theme } from '../../constants';

import { AccordionStyleProps } from './types';
import { SvgStyle } from './../Svg';

export const AccordionTitleStyle = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

export const AccordionItemStyle = styled.div<AccordionStyleProps>`
  background-color: ${({
    theme: {
      colors: { light },
    },
  }: AccordionStyleProps) => light};
  color: ${({
    theme: {
      colors: { dark },
    },
  }: AccordionStyleProps) => dark};
  cursor: pointer;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AccordionContentStyle = styled.div`
  background-color: white;
  overflow: hidden;
  transition: max-height 0.6s ease;
`;

export const AccordionTextStyle = styled.div`
  padding: 1.25rem;
`;

export const AccordionStyle = styled.div<AccordionStyleProps & { active: boolean }>`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  ${SvgStyle} {
    transition: transform 0.6s ease;
    width: 15px;
    height: 15px;
  }

  ${({
    active,
    theme: {
      colors: { primary },
    },
  }: AccordionStyleProps & { active: boolean }) =>
    active &&
    css`
      ${AccordionTitleStyle} {
        color: ${primary};
      }

      ${SvgStyle} {
        transform: rotate(90deg);
      }
    `}
`;

AccordionStyle.defaultProps = {
  theme,
};

AccordionItemStyle.defaultProps = {
  theme,
};
