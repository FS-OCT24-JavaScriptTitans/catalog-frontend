import React from 'react';

import styles from './IconButton.module.scss';

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
};

export const IconButton: React.FC<Props> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className={styles.iconButton}
    type="button"
  >
    {children}
  </button>
);
