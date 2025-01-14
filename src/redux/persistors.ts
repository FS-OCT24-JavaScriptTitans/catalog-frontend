import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer, { CartState } from './slices/cart/carrt.slice';
import ordersReducer, { OrderState } from './slices/orders/orders.slice';

const cartConfig = {
  key: 'cart',
  storage,
};

const orderConfig = {
  key: 'orders',
  storage,
};

export const persistedCartReducer = persistReducer<CartState>(cartConfig, cartReducer);
export const persistedOrderReducer = persistReducer<OrderState>(orderConfig, ordersReducer);
