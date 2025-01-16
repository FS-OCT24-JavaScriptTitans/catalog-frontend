import React from 'react';
import { shallowEqual } from 'react-redux';

import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import { Specifications } from '../Specifications/Specifications';

import styles from './ProductCard.module.scss';

import Favourites from '@/assets/Favourites.svg?react';
import { Spec } from '@/types/Spec';
import { Product } from '@/types/Product.type';
import { useAppSelector } from '@/redux/hooks';
import { selectFavorites } from '@/redux/selectors';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const specs: Spec = { screen: product.screen, capacity: product.capacity, ram: product.ram };

  const favorites = useAppSelector(selectFavorites, shallowEqual);
  const isFavorite = favorites.find((favorite) => product.id === favorite.id);

  return (
    <article className={styles.card}>
      <div className={styles.container}>
        <img
          src={product.images[0]}
          alt="Product image"
          className={styles.card__image}
        />
        <a className={`${styles.card__title} primary-text`}>{product.name}</a>
        <div className={styles.card__price}>
          <span className={styles.card__value}>${product.priceDiscount}</span>
          {product.priceRegular && <span className={styles.card__old_value}>${product.priceRegular}</span>}
        </div>
        <div className={styles.create_line}></div>
        <Specifications specs={specs} />
        <div className={styles.actions}>
          <Button
            label="Add to cart"
            secondaryLabel="Added"
          />
          <span className={styles.button_favorite}>
            <IconButton
              onClick={() => {}}
              hasBorder
            >
              {isFavorite ?
                <Favourites
                  fill="red"
                  color="red"
                />
              : <Favourites />}
            </IconButton>
          </span>
        </div>
      </div>
    </article>
  );
};
