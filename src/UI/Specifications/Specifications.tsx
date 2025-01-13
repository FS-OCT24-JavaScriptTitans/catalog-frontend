import React from 'react';

import { SpecificationItem } from '../SpecificationItem/SpecificationItem';

import styles from './Specifications.module.scss';

import { Spec } from '@/types/Spec';

interface Props {
  specs: Spec;
}

export const Specifications: React.FC<Props> = ({ specs }) => (
  <div className={styles.specifications}>
    {Object.entries(specs).map(([name, value], index) => (
      <SpecificationItem
        key={index}
        name={name}
        value={value}
      />
    ))}
  </div>
);
