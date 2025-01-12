import React from 'react';

import styles from '../Specifications/Specifications.module.scss';

interface Props {
  name: string;
  value: string;
}

export const SpecificationItem: React.FC<Props> = ({ name, value }) => (
  <div className={styles.spec_item}>
    <span className={`${styles.spec_name} small-text`}>{name}</span>
    <span className={`${styles.spec_value} small-text`}>{value}</span>
  </div>
);
