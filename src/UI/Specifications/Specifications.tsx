import React from 'react';

import styles from './Specifications.module.scss';

// interface Spec {
//   name: string;
//   value: string;
// }

// interface Props {
//   specs: Spec[];
// }

export const Specifications: React.FC = () => {
  const specs = [
    { name: 'Screen', value: '5.8” OLED' },
    { name: 'Capacity', value: '64 GB' },
    { name: 'RAM', value: '4 GB' },
  ];

  return (
    <div className={styles.specifications}>
      {specs.map((spec, index) => (
        <div
          className={styles.spec_item}
          key={index}
        >
          <span className={`${styles.spec_name} small-text`}>{spec.name}</span>
          <span className={`${styles.spec_value} small-text`}>{spec.value}</span>
        </div>
      ))}
    </div>
  );
};
