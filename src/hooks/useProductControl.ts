import { shallowEqual } from 'react-redux';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectCart, selectFavorites } from '@/redux/selectors';
import { addProductToCart } from '@/redux/slices/cart/carrt.slice';
import { Product } from '@/types/Product.type';
import { toggleFavoriteProduct } from '@/redux/slices/favorites/favorites.slice';

export const useProductControl = (product: Product) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart, shallowEqual);
  const favorites = useAppSelector(selectFavorites, shallowEqual);

  const isProductInCart = !!cart.find(({ id }) => id === product.id) || false;
  const isFavorite = !!favorites.find((favorite) => product.id === favorite.id) || false;

  const hadleToogleFavorite = () => dispatch(toggleFavoriteProduct({ product }));
  const handleAddToCart = () => dispatch(addProductToCart({ product }));

  return { isProductInCart, handleAddToCart, isFavorite, hadleToogleFavorite };
};
