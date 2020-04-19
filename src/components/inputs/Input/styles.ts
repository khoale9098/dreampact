import styled from 'styled-components';

import { theme } from '../../../constants';

import { InputStyleProps } from './types';

export const InputStyle = styled.input<InputStyleProps>`
  display: block;
  width: 100%;
  height: calc(1.5em + 1.3rem + 2px);
  padding: 0.65rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({
    theme: {
      colors: { dark },
    },
  }: InputStyleProps) => dark};
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid
    ${({
      theme: {
        colors: { light },
      },
    }: InputStyleProps) => light};
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;

  &:disabled {
    cursor: not-allowed;
    background: #f7f8fa;
  }

  &:focus {
    color: ${({
      theme: {
        colors: { dark },
      },
    }) => dark};
    background-color: #fff;
    border-color: ${({
      theme: {
        colors: { primary },
      },
    }: InputStyleProps) => primary};
    outline: 0;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(88, 103, 221, 0.25);
    box-shadow: 0 0 0 0.2rem rgba(88, 103, 221, 0.25);
  }
`;

InputStyle.defaultProps = {
  theme,
};
