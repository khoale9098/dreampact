import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalStyle, OverlayStyle, ModalCloseButton, ModalContent, ModalBody, ModalHeader } from './styles';
import { ModalProps } from './types';

import { useKeyPress, useLockBodyScroll } from '../../hooks';

import { CloseIcon } from '../icons';

export function Modal(props: ModalProps) {
  const {
    isOpen,
    setIsOpen,
    children,
    hideCloseButton = false,
    closeOnOverlayClick = true,
    closeOnEscapeKeyClick = true,
    size = 'md',
    lockScroll = false,
    title,
    elementId = 'root',
  } = props;

  const isEscapeKeyPressed = useKeyPress('Escape');

  const { lockBodyScroll, unlockBodyScroll } = useLockBodyScroll(lockScroll);

  useEffect(() => {
    if (!isOpen && lockScroll) {
      unlockBodyScroll();
    } else if (isOpen && lockScroll) {
      lockBodyScroll();
    }
  }, [isOpen, lockBodyScroll, unlockBodyScroll, lockScroll]);

  const handleEscapeKeyPressed = useCallback(() => {
    if (closeOnEscapeKeyClick) {
      setIsOpen(false);
    }
  }, [setIsOpen, closeOnEscapeKeyClick]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      if (e.currentTarget === e.target && closeOnOverlayClick) {
        setIsOpen(false);
      }
    },
    [setIsOpen, closeOnOverlayClick],
  );

  const handleCloseButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      setIsOpen(false);
    },
    [setIsOpen],
  );

  useEffect(() => {
    if (isEscapeKeyPressed) {
      handleEscapeKeyPressed();
    }
  }, [handleEscapeKeyPressed, isEscapeKeyPressed]);

  const modalContent = isOpen && (
    <OverlayStyle onClick={handleOverlayClick}>
      <ModalStyle size={size}>
        {!hideCloseButton && (
          <ModalCloseButton onClick={handleCloseButtonClick}>
            <CloseIcon />
          </ModalCloseButton>
        )}
        <ModalContent>
          {title && <ModalHeader>{title}</ModalHeader>}
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </ModalStyle>
    </OverlayStyle>
  );

  return createPortal(modalContent, document.getElementById(elementId));
}
