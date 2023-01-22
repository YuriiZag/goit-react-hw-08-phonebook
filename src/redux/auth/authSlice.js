import { createSlice } from '@reduxjs/toolkit';
import { login, logOut, refreshUser, register } from './operations';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'authentification',
  initialState,
  extraReducers: {
    [login.fulfilled](state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    [register.fulfilled](state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },

    [logOut.fulfilled](state, action) {
      state.isLoggedIn = false;
      state.token = null;
      state.user = { name: null, email: null };
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;

      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
