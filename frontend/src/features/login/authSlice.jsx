import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: null,
  },
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
