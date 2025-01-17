import { shallowEqual } from 'react-redux';

import s from './Favorites.module.scss';

import { useAppSelector } from '@/redux/hooks';
import { selectFavorites } from '@/redux/selectors';
import { ProductCard } from '@/UI/ProductCard/ProductCard';
import EmptyContainer from '@/UI/EmptyContainer/EmptyContainer';

export const Favourites = () => {
  const favorites = useAppSelector(selectFavorites, shallowEqual);
  const favoritesLength = favorites.length;

  return (
    <section className={s.contaiter}>
      {favoritesLength ?
        <>
          <h2 className={s.title}>Favorites</h2>
          <span className={s.contaiter__text}>{favoritesLength} items</span>
          <section className={s.products}>
            {favorites.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </section>
        </>
      : <EmptyContainer
          title="Theris no favoritess"
          pathToImg="/img/empty-fav-page.png"
          alt="empty-favorites"
        />
      }
    </section>
  );
};
