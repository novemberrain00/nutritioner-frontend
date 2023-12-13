
import { configureStore } from '@reduxjs/toolkit';
import overlaySlice from './redux/overlaySlice';
import productModalSlice from './redux/productModalSlice';

export const store = configureStore({
  reducer: {
    overlay: overlaySlice,
    productModal: productModalSlice
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;