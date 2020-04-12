import styled from 'styled-components';
import { Sizes } from './../../types';
import { theme } from './../../constants';
import { modalSize } from './props';

import { SvgStyle } from './../Svg';

export const ModalStyle = styled.div<{ size: Sizes }>`
  z-index: 99;
  position: relative;
  width: 100%;
  max-height: 100%;
  margin: 0 auto;

  max-width: ${({ size }) => modalSize[size as Sizes]};
`;

ModalStyle.defaultProps = {
  theme,
};

export const ModalCloseButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border: 0;
  outline: 0;
  -webkit-appearance: none;
  background: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    ${SvgStyle} {
      g {
        fill: ${({
          theme: {
            colors: { primary },
          },
        }) => primary};
      }
    }
  }
`;

ModalCloseButton.defaultProps = {
  theme,
};

export const ModalContent = styled.div`
  border-radius: 4px;
  background-color: white;
  background-clip: padding-box;
  border: 1px solid #ebedf2;
  box-shadow: 0 0 13px 0 rgba(82, 63, 105, 0.1);
`;

ModalContent.defaultProps = {
  theme,
};

export const ModalBody = styled.div`
  padding: 1.25rem;
`;

ModalBody.defaultProps = {
  theme,
};

export const ModalHeader = styled.div`
  padding: 1.25rem;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
  border-bottom: solid 1px #ebedf2;
  font-weight: 500;
  font-size: 1.3rem;
  color: #48465b;
`;

ModalHeader.defaultProps = {
  theme,
};

export const OverlayStyle = styled.div<{ hideOverlay?: boolean }>`
  z-index: ${({ hideOverlay }) => (hideOverlay ? '-1' : '98')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${({ hideOverlay }) => (hideOverlay ? 'transparent' : 'rgba(0, 0, 0, 0.3)')};
`;

OverlayStyle.defaultProps = {
  hideOverlay: false,
  theme,
};
