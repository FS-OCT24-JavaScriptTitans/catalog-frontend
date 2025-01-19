import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from '../Specifications/Specifications.module.scss';

import { getFormatValue } from '@/utils/format';

interface Props {
  name: string;
  value: string;
}

export const SpecificationItem: React.FC<Props> = ({ name, value }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.spec_item}>
      <span className={`${styles.spec_name} small-text`}>{t(`product.${name}`)}</span>
      <span className={`${styles.spec_value} small-text`}>{getFormatValue(value, 2)}</span>
    </div>
  );
};
