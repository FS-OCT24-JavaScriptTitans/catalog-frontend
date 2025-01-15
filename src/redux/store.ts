import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { persistedCartReducer } from './persistors';
import ordersReducer from './slices/orders/orders.slice';
import userReducer from './slices/user/user.slice';
import favouriteReducer from './slices/favorites/favorites.slice';

const favouritePersistConfig = {
  key: 'favourites',
  storage,
};

const persistedFavouriteReducer = persistReducer(favouritePersistConfig, favouriteReducer);

export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    order: ordersReducer,
    user: userReducer,
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
