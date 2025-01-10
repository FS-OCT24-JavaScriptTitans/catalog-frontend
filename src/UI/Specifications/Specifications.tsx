import React from 'react';

import styles from './Specifications.module.scss';

export const Specifications: React.FC = () => (
  <div className={styles.specifications}>
    <div className={styles.spec_item}>
      <span className={styles.spec_name}>Screen</span>
      <span className={styles.spec_value}>5.8” OLED</span>
    </div>
    <div className={styles.spec_item}>
      <span className={styles.spec_name}>Capacity</span>
      <span className={styles.spec_value}>64 GB</span>
    </div>
    <div className={styles.spec_item}>
      <span className={styles.spec_name}>RAM</span>
      <span className={styles.spec_value}>4 GB</span>
    </div>
  </div>
);
