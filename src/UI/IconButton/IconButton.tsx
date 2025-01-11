import { FC, ReactNode } from 'react';

import styles from './IconButton.module.scss';

interface Props {
  onClick: () => void;
  children: ReactNode;
}

export const IconButton: FC<Props> = ({ onClick, children }) => (
  <button
    className={styles.iconButton}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);
