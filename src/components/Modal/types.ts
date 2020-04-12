import { Sizes } from './../../types';

export type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children?: React.ReactNode;
  hideCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscapeKeyClick?: boolean;
  size?: Sizes;
  lockScroll?: boolean;
  title?: string;
  elementId?: string;
};
