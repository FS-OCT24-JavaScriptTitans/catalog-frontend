import React, { FC } from 'react';

import s from './Modal.module.scss';

interface IModalProps {
  children: React.ReactNode;
  onClose: () => void;
  style?: object;
}

const Modal: FC<IModalProps> = ({ children, onClose, style = {} }) => {
  const backdropRef: React.RefObject<HTMLInputElement> = React.useRef(null);

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => e.code === 'Escape' && onClose();

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) =>
    backdropRef.current && e.target !== backdropRef.current ? undefined : onClose();

  return (
    <div
      className={s.backdrop}
      onClick={handleBackdropClick}
      ref={backdropRef}
    >
      <div
        className={s.modal}
        style={style}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
