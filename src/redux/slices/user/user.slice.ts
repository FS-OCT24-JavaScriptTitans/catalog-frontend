import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { ResponseUser } from '@/types/User.type';

export interface userState {
  user: ResponseUser | null;
}

const initialState: userState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<ResponseUser>) => {
      state.user = payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
