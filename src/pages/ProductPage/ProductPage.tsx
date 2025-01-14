import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import cn from 'classnames';

import phones from '../../../public/api/phones.json';

import styles from './ProductPage.module.scss';

function capitalLetter(input: string) {
  const letters = input.split('');
  const [first, ...elseLetters] = letters;

  return first.toUpperCase() + elseLetters.join('');
}

const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const product = phones.find((phone) => productId === phone.id);
  const [chosenImage, setChosenImage] = useState(product?.images[0]);
  const [ID, setID] = useState(0);
  const techSpecsArray = Object.entries({ ...product }).slice(-7);

  useEffect(() => {
    setID(Math.floor(Math.random() * 1000000));
  }, []);

  return (
    product && (
      <section className={styles.productCard}>
        <Link
          to=".."
          className="product-card__back"
        >
          Back
        </Link>
        <h2 className={styles.mainTitle}>{product.name}</h2>

        <article className={styles.images}>
          <div className={styles.mainImageBox}>
            <img
              src={`/${chosenImage}`}
              alt="product image"
              className={styles.mainPhoto}
            />
          </div>

          {product.images.map((imageLink, index) => (
            <div
              key={index}
              className={styles.imageBox}
            >
              <img
                src={`/${imageLink}`}
                alt="product image"
                className={cn(styles.photo, { [styles.active]: chosenImage === imageLink })}
                onClick={() => setChosenImage(imageLink)}
              />
            </div>
          ))}
        </article>

        <article className={styles.mainChars}>
          <div className={styles.colorsTop}>
            <span className={styles.smallGreyText}>Available colors</span>
            <span className={styles.id}>{`ID: ${ID}`}</span>
          </div>
          <div className={styles.colors}>
            {product.colorsAvailable.map((color) => (
              <NavLink
                to=""
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

          <div className={styles.dividingLine} />

          <article className={styles.capacityContainer}>
            <span className={styles.smallText}>Select capacity</span>
            <div className={styles.capacities}>
              {product.capacityAvailable.map((capacity) => (
                <NavLink
                  to=""
                  className={cn(styles.capacity, { [styles.currentCapacity]: product.capacity === capacity })}
                  key={capacity}
                >
                  {capacity}
                </NavLink>
              ))}
            </div>
          </article>

          <div className={styles.dividingLine}></div>

          <div className={styles.prices}>
            {product.priceDiscount ?
              <>
                <span className={styles.discountPrice}>{`$${product.priceDiscount}`}</span>
                <span className={styles.regularPrice}>{`$${product.priceRegular}`}</span>
              </>
            : <span className={styles.discountPrice}>{`$${product.priceRegular}`}</span>}
          </div>

          <button className={styles.button}>Add to cart</button>

          {techSpecsArray.map(
            (specification, index) =>
              index < 4 && (
                <div
                  className={styles.specification}
                  key={specification[0]}
                >
                  <span className={styles.smallGreyText}>{capitalLetter(specification[0])}</span>
                  <span className={styles.smallBlackText}>
                    {typeof specification[1] === 'object' ? specification[1].join('') : specification[1]}
                  </span>
                </div>
              ),
          )}
        </article>

        <article className={styles.description}>
          <h3 className={styles.secondaryTitles}>About</h3>

          <div className={styles.dividingLine}></div>

          {product.description.map((description, index) => (
            <div
              className={styles.descriptionBox}
              key={index}
            >
              <h4 className={styles.descriptionTitle}>{description.title}</h4>

              {description.text.map((paragraph, index) => (
                <p
                  className={styles.descriptionText}
                  key={index}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </article>

        <article className={styles.techSpecs}>
          <h3 className={styles.secondaryTitles}>Tech specs</h3>

          <div className={styles.dividingLine}></div>

          {techSpecsArray.map((specification) => (
            <div
              className={styles.specification}
              key={specification[0]}
            >
              <span className={styles.smallGreyText}>{capitalLetter(specification[0])}</span>
              <span className={styles.smallBlackText}>
                {typeof specification[1] === 'object' ? specification[1].join(', ') : specification[1]}
              </span>
            </div>
          ))}
        </article>

        <article className={styles.recommended}>
          <h3>You may also like</h3>
        </article>
      </section>
    )
  );
};

export default ProductPage;
