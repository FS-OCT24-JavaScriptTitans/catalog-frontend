import { RootState } from './store';

export const selectUser = (state: RootState) => state.user.user;
export const selectCart = (state: RootState) => state.cart.cart;
export const selectOrders = (state: RootState) => state.order.orders;
export const selectFavorites = (state: RootState) => state.favorites.favorites;
