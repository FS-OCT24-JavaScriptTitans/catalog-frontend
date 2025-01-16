import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartProduct } from '@/types/Cart.types';
import { decreaseProductQuantity, increaseProductQuantity } from '@/utils/cart/cartQuantity';
import { Product } from '@/types/Product.type';

export interface CartState {
  cart: CartProduct[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, { payload }: PayloadAction<{ product: Product }>) => {
      state.cart.push({ ...payload.product, quantity: 1 });
    },

    increaseQuantity: (state, { payload }: PayloadAction<{ id: string }>) => {
      state.cart = increaseProductQuantity(state.cart, payload.id);
    },

    removeQuantity: (state, { payload }: PayloadAction<{ id: string }>) => {
      state.cart = decreaseProductQuantity(state.cart, payload.id);
    },

    removeCartProduct: (state, { payload }: PayloadAction<{ id: string }>) => {
      state.cart = state.cart.filter(({ id }) => id !== payload.id);
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addProductToCart, increaseQuantity, removeQuantity, clearCart, removeCartProduct } = cartSlice.actions;

export default cartSlice.reducer;
