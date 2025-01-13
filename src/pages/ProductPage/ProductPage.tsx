import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './_product.scss';
// import cn from 'classNames';

import phones from '../../../public/api/phones.json';

export const ProductPage: React.FC = () => {
  // const {param} = useParams();
  const phone = phones[0];
  const [chosenImage, setChosenImage] = useState(phone.images[0]);

  return (
    <section className="product-card">
      <Link
        to=".."
        className="product-card__back"
      >
        Back
      </Link>
      <h2 className="product-card__main-title">{phone.name}</h2>

      <article className="product-card__images">
        <div className="item__main">
          <img
            src={chosenImage}
            alt="product image"
            className="product-card__images--main-photo"
          />
        </div>

        {phone.images.map((imagelink, index) => (
          <div
            key={index}
            className={`item__${index}`}
          >
            <img
              src={imagelink}
              alt="product image"
              className="product-card__images--photo"
              onClick={() => setChosenImage(imagelink)}
            />
          </div>
        ))}
      </article>

      <article className="product-card__main-chars">
        <span style={{ color: 'grey' }}>Available colors</span>
        <div className="product-card__main-chars--colors">
          {phone.colorsAvailable.map((color) => (
            <div
              className="product-card__main-chars--color-box"
              key={color}
            >
              <div
                className="product-card__main-chars--color"
                style={{ backgroundColor: `${color}` }}
              />
            </div>
          ))}
        </div>

        <div className="product-card__main-chars--dividing-line"></div>

        <article className="product-card__main-chars--capacity-container">
          <span style={{ color: 'grey' }}>Select capacity</span>
          <div className="product-card__main-chars--capacities">
            {phone.capacityAvailable.map((capacity) => (
              <span
                className="product-card__main-chars--capacity"
                // className={({ isActive }: { isActive: boolean} ) =>
                //   cn('product-card__main-chars--capacity', { 'active-capacity': isActive })
                // }
                key={capacity}
              >
                {capacity}
              </span>
            ))}
          </div>
        </article>

        <div className="product-card__main-chars--dividing-line"></div>

        <h1>{`$${phone.priceDiscount} $${phone.priceRegular}`}</h1>

        <button>Add to cart</button>

        <div className="product-card__main-chars--specification">
          <span style={{ color: 'grey' }}>Screen</span>
          <span>{phone.screen}</span>
        </div>

        <div className="product-card__main-chars--specification">
          <span style={{ color: 'grey' }}>Resolution</span>
          <span>{phone.resolution}</span>
        </div>

        <div className="product-card__main-chars--specification">
          <span style={{ color: 'grey' }}>Processor</span>
          <span>{phone.processor}</span>
        </div>

        <div className="product-card__main-chars--specification">
          <span style={{ color: 'grey' }}>RAM</span>
          <span>{phone.ram}</span>
        </div>
      </article>

      <article className="product-card__description">
        <h3 className="product-card__secondary-titles">About</h3>

        <div className="product-card__main-chars--dividing-line"></div>

        {phone.description.map((description, index) => (
          <div
            className="product-card__description--container"
            key={index}
          >
            <h4 className="product-card__description--title">{description.title}</h4>

            {description.text.map((paragraph, index) => (
              <p
                className="product-card__description--text"
                key={index}
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </article>

      <article className="product-card__tech-specs">
        <h3 className="product-card__secondary-titles">Tech specs</h3>

        <div className="product-card__main-chars--dividing-line"></div>

        <div className="product-card__main-chars--specification product-card__tech-specs--top-specification">
          <span style={{ color: 'grey' }}>Screen</span>
          <span>{phone.screen}</span>
        </div>

        <div className="product-card__main-chars--specification">
          <span style={{ color: 'grey' }}>Resolution</span>
          <span>{phone.resolution}</span>
        </div>

        <div className="product-card__main-chars--specification">
          <span style={{ color: 'grey' }}>Processor</span>
          <span>{phone.processor}</span>
        </div>

        <div className="product-card__main-chars--specification">
          <span style={{ color: 'grey' }}>RAM</span>
          <span>{phone.ram}</span>
        </div>

        <div className="product-card__main-chars--specification">
          <span style={{ color: 'grey' }}>Built in memory</span>
          <span>{phone.capacity}</span>
        </div>

        <div className="product-card__main-chars--specification">
          <span style={{ color: 'grey' }}>Camera</span>
          <span>{phone.camera}</span>
        </div>

        <div className="product-card__main-chars--specification">
          <span style={{ color: 'grey' }}>Zoom</span>
          <span>{phone.zoom}</span>
        </div>

        <div className="product-card__main-chars--specification">
          <span style={{ color: 'grey' }}>Cell</span>
          <span>{phone.cell.join(', ')}</span>
        </div>
      </article>

      <article>
        <h3>You may also like</h3>
      </article>
    </section>
  );
};
