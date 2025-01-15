import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Order } from '@/types/Order.types';

export interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, { payload }: PayloadAction<{ order: Order }>) => {
      state.orders.push({ ...payload.order });
    },
    addOrders: (state, { payload }: PayloadAction<{ orders: Order[] }>) => {
      state.orders = payload.orders;
    },
  },
});

export const { addOrder, addOrders } = orderSlice.actions;

export default orderSlice.reducer;
