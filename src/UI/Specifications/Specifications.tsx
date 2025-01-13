import React from 'react';

import { SpecificationItem } from '../SpecificationItem/SpecificationItem';

import styles from './Specifications.module.scss';

import { Spec } from '@/types/Spec';

interface Props {
  specs: Spec[];
}

export const Specifications: React.FC<Props> = ({ specs }) => (
  <div className={styles.specifications}>
    {specs.map((spec, index) => (
      <SpecificationItem
        key={index}
        name={spec.name}
        value={spec.value}
      />
    ))}
  </div>
);
