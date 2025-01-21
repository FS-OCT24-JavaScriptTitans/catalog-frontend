import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer, { CartState } from './slices/cart/carrt.slice';
import favouriteReducer, { FavoritesState } from './slices/favorites/favorites.slice';

const cartConfig = {
  key: 'cart',
  storage,
};

export const persistedCartReducer = persistReducer<CartState>(cartConfig, cartReducer);

const favouritePersistConfig = {
  key: 'favourites',
  storage,
};

export const persistedFavouriteReducer = persistReducer<FavoritesState>(favouritePersistConfig, favouriteReducer);
