import { Sizes } from './../../types';

export type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children?: React.ReactNode;
  hideCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscapeKeyClick?: boolean;
  size?: Sizes;
  lockBodyScroll?: boolean;
  scrollable?: boolean;
  scrollableOn?: 'modalBody' | 'page';
  title?: string;
  elementId?: string;
  vertical?: 'center' | 'top' | 'bottom';
  horizontal?: 'center' | 'left' | 'right';
};
