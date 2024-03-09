import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userInfoSlice';
import productDetailsReducer from './slices/productDetailsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    productDetails: productDetailsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;