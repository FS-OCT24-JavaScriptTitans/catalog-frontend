import React from 'react';

import styles from '../Specifications/Specifications.module.scss';

interface Props {
  name: string;
  value: string;
}

export const SpecificationItem: React.FC<Props> = ({ name, value }) => (
  <div className={styles.spec_item}>
    <span className={`${styles.spec_name} small-text`}>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
    <span className={`${styles.spec_value} small-text`}>
      {value.split(' ').slice(0, 2).join(' ') + (value.split(' ').length > 2 ? ' ...' : '')}
    </span>
  </div>
);
