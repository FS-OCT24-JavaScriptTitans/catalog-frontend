import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import cn from 'classnames';

import phones from '../../../public/api/phones.json';
// import base from '../../styles/base/_base.scss';
// import typography from '../../styles/base/_typography.scss';

import styles from './ProductPage.module.scss';

import { Product } from '@/types/Product.type';

function capitalLetter(input: string) {
  const letters = input.split('');
  const [first, ...elseLetters] = letters;

  return first.toUpperCase() + elseLetters.join('');
}

function changeIdColor(inputObject: Product, inputColor: string) {
  const wrappedId = inputObject.id.split('-');
  const currentColor = wrappedId.find((word) => {
    let color = '';

    if (inputObject.colorsAvailable.includes(word)) {
      color = word;
    }

    return !!color;
  });

  if (currentColor) {
    const currentColorId = wrappedId.indexOf(currentColor);

    wrappedId.splice(currentColorId, 1, inputColor);
  }

  return wrappedId.join('-');
}

function changeIdCapacity(inputObject: Product, inputCapacity: string) {
  const wrappedId = inputObject.id.split('-');
  const currentCapacity = wrappedId.find((word) => {
    let capacity = '';

    if (inputObject.capacityAvailable.includes(word.toUpperCase())) {
      capacity = word;
    }

    return !!capacity;
  });

  if (currentCapacity) {
    const currentCapacityId = wrappedId.indexOf(currentCapacity);

    wrappedId.splice(currentCapacityId, 1, inputCapacity.toLowerCase());
  }

  return wrappedId.join('-');
}

const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const product = phones.find((phone) => productId === phone.id);
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const [ID, setID] = useState(0);
  const techSpecs = Object.entries({ ...product }).slice(-7);

  useEffect(() => {
    setID(Math.floor(Math.random() * 1000000));
    setSelectedImage(product?.images[0]);
  }, [product]);

  return (
    product && (
      <section className={cn(styles.productCard, 'section')}>
        <Link to="..">Back</Link>
        <h2 className={styles.mainTitle}>{product.name}</h2>

        <div className={styles.mainImageBox}>
          <img
            src={`/${selectedImage}`}
            alt="product image"
            className={styles.mainPhoto}
          />
        </div>

        <div className={styles.imagesContainer}>
          {product.images.map((imageLink, index) => (
            <div
              key={index}
              className={styles.imageBox}
            >
              <img
                src={`/${imageLink}`}
                alt="product image"
                className={cn(styles.photo, { [styles.active]: selectedImage === imageLink })}
                onClick={() => setSelectedImage(imageLink)}
              />
            </div>
          ))}
        </div>

        <article className={styles.mainChars}>
          <div className={styles.colorsTop}>
            <span className={styles.smallGreyText}>Available colors</span>
            <span className={styles.id}>{`ID: ${ID}`}</span>
          </div>
          <div className={styles.colors}>
            {product.colorsAvailable.map((color) => (
              <NavLink
                to={`/phones/${changeIdColor(product, color)}`}
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
                  to={`/phones/${changeIdCapacity(product, capacity)}`}
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

          <button className={styles.button}>Add to cart</button>

          {techSpecs.map(
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

          <div className={cn(styles.description__line, 'line')} />

          {product.description.map((description, index) => (
            <div
              className={styles.description__box}
              key={index}
            >
              <h4 className={styles.description__title}>{description.title}</h4>

              {description.text.map((paragraph, index) => (
                <p
                  className={styles.description__text}
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

          <div className={cn(styles.techSpecLine, 'line')} />

          {techSpecs.map((specification) => (
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
