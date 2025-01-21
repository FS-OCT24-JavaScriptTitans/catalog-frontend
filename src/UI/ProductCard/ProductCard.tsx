import React, { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../Button/Button';
import { IconButton } from '../IconButton/IconButton';
import { Specifications } from '../Specifications/Specifications';
import { CustomLink } from '../Link/Link';

import styles from './ProductCard.module.scss';

import Favourites from '@/assets/Favourites.svg?react';
import RedFavourites from '@/assets/RedFavorites.svg?react';
import { Spec } from '@/types/Spec';
import { Product } from '@/types/Product.type';
import { useProductControl } from '@/hooks/useProductControl';
import { getTranslatedCategory } from '@/utils/products/getProductCategory';

type Props = {
  product: Product;
};

const ProductCardComponent: React.FC<Props> = ({ product }) => {
  const specs: Spec = { screen: product.screen, capacity: product.capacity, ram: product.ram };
  const { t } = useTranslation();

  const { handleAddToCart, isFavorite, isProductInCart, hadleToogleFavorite, handleRemoveFromCart } =
    useProductControl(product);

  const path = `/${getTranslatedCategory(product.category)}/${product.id}`;

  const handleToogleToCart = () => {
    if (isProductInCart) {
      handleRemoveFromCart();
    } else {
      handleAddToCart();
    }
  };

  return (
    <article className={styles.card}>
      <div className={styles.container}>
        <CustomLink path={path}>
          <img
            src={`/${product.images[0]}`}
            alt="Product image"
            className={styles.card__image}
          />
        </CustomLink>

        <span>
          <span className={`${styles.card__title} primary-text`}>
            <CustomLink
              path={path}
              label={`${product.name} (iMT9G2FS/A)`}
            />
          </span>
          <div className={styles.card__price}>
            <span className={styles.card__value}>${product.priceDiscount}</span>
            {product.priceRegular && <span className={styles.card__old_value}>${product.priceRegular}</span>}
          </div>

          <div className={styles.create_line}></div>
          <Specifications specs={specs} />
          <div className={styles.actions}>
            <Button
              label={t('product.addToCart')}
              secondaryLabel={t('product.addedToCart')}
              onClick={handleToogleToCart}
              isSelected={isProductInCart}
            />
            <span className={styles.button_favorite}>
              <IconButton
                onClick={hadleToogleFavorite}
                hasBorder
              >
                {isFavorite ?
                  <RedFavourites />
                : <Favourites />}
              </IconButton>
            </span>
          </div>
        </span>
      </div>
    </article>
  );
};

export const ProductCard = memo(ProductCardComponent) as (props: Props) => ReactNode;
