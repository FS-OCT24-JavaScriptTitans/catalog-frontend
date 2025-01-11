import React from 'react';

import styles from './IconButton.module.scss';

// interface IconButtonProps {
//   onClick: () => void;
//   children: React.ReactNode;
// }

export const IconButton: React.FC = () => (
  <button
    className={styles.iconButton}
    type="button"
  ></button>
);
