import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from '../../pages/ProductPage/styles/MainChars.module.scss';
import Favourites from '../../assets/Favourites.svg?react';

import { Product } from '@/types/Product.type';
import { Button } from '@/UI/Button/Button';
import { IconButton } from '@/UI/IconButton/IconButton';

function changeIdPart(input: string, inputLabel: string, inputPart: string) {
  const previousIdPart = input.toLowerCase().split(' ').join('-');
  const newIdPart = inputPart.toLowerCase().split(' ').join('-');
  const newId = inputLabel.replace(previousIdPart, newIdPart);

  return newId;
}

type Props = {
  product: Product;
  location: string;
  techSpecs: [string, string | number | string[] | { title: string; text: string[] }[]][];
};

const ProductMainChars: React.FC<Props> = ({ product, location, techSpecs }) => {
  const [ID, setID] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setID(Math.floor(Math.random() * 1000000));
  }, []);

  return (
    <article className={styles.mainChars}>
      <div className={styles.colorsTop}>
        <span className={styles.smallGreyText}>Available colors</span>
        <span className={styles.id}>{`ID: ${ID}`}</span>
      </div>
      <div className={styles.colors}>
        {product.colorsAvailable.map((color) => (
          <NavLink
            to={changeIdPart(product.color, location, color)}
            className={cn(styles.colorContainer, { [styles.active]: product.color === color })}
            key={color}
          >
            <div
              style={{ backgroundColor: `${color}` }}
              className={styles.color}
            />
          </NavLink>
        ))}
      </div>

      <div className="line" />

      <article className={styles.capacityContainer}>
        <span className={styles.smallGreyText}>Select capacity</span>
        <div className={styles.capacities}>
          {product.capacityAvailable.map((capacity) => (
            <NavLink
              to={changeIdPart(product.capacity, location, capacity)}
              className={cn(styles.capacity, { [styles.currentCapacity]: product.capacity === capacity })}
              key={capacity}
            >
              {capacity}
            </NavLink>
          ))}
        </div>
      </article>

      <div className="line" />

      <div className={styles.prices}>
        {product.priceDiscount ?
          <>
            <span className={styles.discountPrice}>{`$${product.priceDiscount}`}</span>
            <span className={styles.regularPrice}>{`$${product.priceRegular}`}</span>
          </>
        : <span className={styles.discountPrice}>{`$${product.priceRegular}`}</span>}
      </div>

      <div className={styles.buttons}>
        <Button
          label="Add to cart"
          secondaryLabel="Added to cart"
          onClick={() => setIsSelected(isSelected ? false : true)}
          isSelected={isSelected}
        />
        <IconButton
          onClick={() => setIsFavorite(isFavorite ? false : true)}
          hasBorder
        >
          {isFavorite ?
            <Favourites
              fill="red"
              color="red"
            />
          : <Favourites />}
        </IconButton>
      </div>

      {techSpecs.map(
        (specification, index) =>
          index < 4 && (
            <div
              className={styles.specification}
              key={specification[0]}
            >
              <span className={styles.smallGreyText}>{specification[0]}</span>
              <span className={styles.smallBlackText}>
                {typeof specification[1] === 'object' ? specification[1].join('') : specification[1]}
              </span>
            </div>
          ),
      )}
    </article>
  );
};

export default ProductMainChars;
