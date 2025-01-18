import { shallowEqual } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { ProductList } from '../ProductList/ProductList';

import s from './Favorites.module.scss';

import { useAppSelector } from '@/redux/hooks';
import { selectFavorites } from '@/redux/selectors';
import EmptyContainer from '@/UI/EmptyContainer/EmptyContainer';
import { Container } from '@/UI/Container/Container';

export const Favourites = () => {
  const favorites = useAppSelector(selectFavorites, shallowEqual);
  const favoritesLength = favorites.length;
  const { t } = useTranslation();

  return (
    <Container>
      {favoritesLength ?
        <Container title={t('favorites')}>
          <p className={s.items}>{favoritesLength} items</p>
          <ProductList products={favorites} />
        </Container>
      : <EmptyContainer
          title="Theris no favoritess"
          pathToImg="/img/empty-fav-page.png"
          alt="empty-favorites"
        />
      }
    </Container>
  );
};
