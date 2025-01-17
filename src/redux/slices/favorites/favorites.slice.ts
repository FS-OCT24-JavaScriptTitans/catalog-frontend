import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '@/types/Product.type';

interface Favorites {
  favorites: Product[];
}

const initialState: Favorites = {
  favorites: [],
};

const favorietesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavoriteProduct: (state, { payload }: PayloadAction<{ product: Product }>) => {
      const isProductInList = state.favorites.find((product) => product.id === payload.product.id) || null;

      if (!isProductInList) {
        state.favorites.push(payload.product);
      }

      if (isProductInList) {
        state.favorites = state.favorites.filter((product) => product.id !== payload.product.id);
      }
    },
  },
});

export const { toggleFavoriteProduct } = favorietesSlice.actions;

export default favorietesSlice.reducer;
