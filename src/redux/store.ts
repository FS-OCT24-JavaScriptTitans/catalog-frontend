import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userSlice from './slices/user/userSlice';
import cartReducer, { CartState } from './slices/cart/carrt.slice';
import favouriteReducer from './slices/favorites/favorites.slice';

const persistConfig = {
  key: 'cart',
  storage,
};

const favouritePersistConfig = {
  key: 'favourites',
  storage,
};

const persistedCartReducer = persistReducer<CartState>(persistConfig, cartReducer);
const persistedFavouriteReducer = persistReducer(favouritePersistConfig, favouriteReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    user: userSlice,
    favorites: persistedFavouriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export const persistor = persistStore(store);
