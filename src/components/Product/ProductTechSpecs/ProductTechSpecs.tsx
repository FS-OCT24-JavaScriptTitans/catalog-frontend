import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './ProductTechSpecs.module.scss';

type Props = {
  techSpecs: [string, string | number | string[] | { title: string; text: string[] }[]][];
};

const ProductTechSpecs: React.FC<Props> = ({ techSpecs }) => {
  const { t } = useTranslation();

  return (
    <article className={styles.techSpecs}>
      <h3>Tech specs</h3>

      <div className={cn(styles.techSpecLine, 'line')} />

      {techSpecs.map((specification) => (
        <div
          className={styles.specification}
          key={specification[0]}
        >
          <span className={styles.smallGreyText}>{t(`product.${specification[0]}`)}</span>
          <span className={styles.smallBlackText}>
            {typeof specification[1] === 'object' ? specification[1].join(', ') : specification[1]}
          </span>
        </div>
      ))}
    </article>
  );
};

export default ProductTechSpecs;
