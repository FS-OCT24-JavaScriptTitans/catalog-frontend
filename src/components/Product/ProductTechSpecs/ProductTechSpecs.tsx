import { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './ProductTechSpecs.module.scss';

import { Product } from '@/types/Product.type';
import { getProductSpecs } from '@/utils/products/getProductSpecs';

type Props = {
  product: Product;
};

const ProductTechSpecs: FC<Props> = ({ product }) => {
  const { t } = useTranslation();

  const specs = Object.entries(getProductSpecs(product));

  return (
    <article
      className={styles.techSpecs}
      data-aos="fade-left"
      data-aos-anchor-placement="top-center"
      data-aos-duration="1000"
      data-aos-once="false"
    >
      <h3>{t('product.techSpecs')}</h3>

      <div className={cn(styles.techSpecLine, 'line')} />

      {specs.map((specification) => (
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
