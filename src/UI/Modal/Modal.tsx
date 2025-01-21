import React from 'react';

import s from './Modal.module.scss';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  style?: object;
}

const Modal: React.FC<Props> = ({ children, onClose, style = {} }) => {
  const backdropRef: React.RefObject<HTMLDivElement> = React.useRef(null);

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
        <button
          className={s.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
