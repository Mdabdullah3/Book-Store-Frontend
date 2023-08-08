import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart';
import filterReducer from './features/FilterBooks';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
