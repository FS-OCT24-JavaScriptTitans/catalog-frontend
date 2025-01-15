import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer, { CartState } from './slices/cart/carrt.slice';

const cartConfig = {
  key: 'cart',
  storage,
};

export const persistedCartReducer = persistReducer<CartState>(cartConfig, cartReducer);
