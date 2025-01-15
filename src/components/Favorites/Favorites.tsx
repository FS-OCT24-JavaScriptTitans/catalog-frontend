import { shallowEqual } from 'react-redux';

import s from './Favorites.module.scss';

import { useAppSelector } from '@/redux/hooks';
import { selectFavorites } from '@/redux/selectors';
import { ProductCard } from '@/UI/ProductCard/ProductCard';
import EmptyCart from '@/UI/EmptyCart/EmptyCart';

export const Favourites = () => {
  const favorites = useAppSelector(selectFavorites, shallowEqual);
  const favoritesLength = favorites.length;

  return (
    <section className={s.contaiter}>
      <h2 className={s.title}>Favorites</h2>
      {favoritesLength ?
        <>
          <span className={s.contaiter__text}>{favoritesLength} items</span>
          <section className={s.products}>
            {favorites.map((product) => (
              <span
                key={product.id}
                className={s.product}
              >
                <ProductCard
                  key={product.id}
                  product={product}
                />
              </span>
            ))}
          </section>
        </>
      : <EmptyCart />}
    </section>
  );
};
