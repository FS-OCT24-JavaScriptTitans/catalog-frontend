import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goods: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
