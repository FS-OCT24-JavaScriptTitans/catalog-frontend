import React from 'react';

import srcImg from '../../../public/img/phones/apple-iphone-11/black/00.webp';
import { Button } from '../Button/Button';
import { Specifications } from '../Specifications/Specifications';

import styles from './ProductCard.module.scss';

// type Props = {
//   image: string;
//   title: string;
//   price: number;
//   fullPrice?: number;
//   screen: string;
//   capacity: string;
//   ram: string;
// }

// export const ProductCard: React.FC<Props> = ({
//   image,
//   title,
//   price,
//   fullPrice?,
//   screen,
//   capacity,
//   ram,
// }) => (
//   <>
//     <h1>ProductCard</h1>
//     <div className={styles.card}>
//       <img
//         src={image}
//         alt="Product image"
//         className={styles.card__image}
//       />
//       <p className={styles.card__title}>Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</p>
//       <div className={styles.card__price}>
//       <span className={styles.card__value}>${price}</span>
//       {fullPrice && (
//         <span className={styles.card__old_value}>${fullPrice}</span>
//       )}
//     </div>
//     <div className={styles.create_line}></div>
//     <div className={styles.specifications}>
//       <div className={styles.spec_item}>
//         <span className={styles.spec_name}>Screen</span>
//         <span className={styles.spec_value}>{screen}</span>
//       </div>
//       <div className={styles.spec_item}>
//         <span className={styles.spec_name}>Capacity</span>
//         <span className={styles.spec_value}>{capacity}</span>
//       </div>
//       <div className={styles.spec_item}>
//         <span className={styles.spec_name}>RAM</span>
//         <span className={styles.spec_value}>{ram}</span>
//       </div>
//     </div>
//       <div className="actions">
//         <Button
//           label="Add to cart"
//           secondaryLabel="Added"
//         />
//       </div>
//     </div>
//   </>
// );
export const ProductCard: React.FC = () => (
  <article className={styles.card}>
    <div className={styles.container}>
      <img
        src={srcImg}
        alt="Product image"
        className={styles.card__image}
      />
      <p className={styles.card__title}>Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</p>
      <div className={styles.card__price}>
        <span className={styles.card__value}>$799</span>
        <span className={styles.card__old_value}>$899</span>
      </div>
      <div className={styles.create_line}></div>
      <Specifications />
      <div className="actions">
        <Button
          label="Add to cart"
          secondaryLabel="Added"
        />
      </div>
    </div>
  </article>
);
