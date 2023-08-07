/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IBooks } from '@/types/globalTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICart {
  product: IBooks[];
  total: number;
}

const initialState: ICart = {
  product: [],
  total: 0,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IBooks>) => {
      const exitingBooks = state.product.find(
        (book) => book.id === action.payload.id
      );
      if (exitingBooks) {
        exitingBooks.quantity = exitingBooks.quantity! + 1;
      } else {
        state.product.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeOne: (state, action: PayloadAction<IBooks>) => {
      const existing = state.product.find(
        (product) => product.id === action.payload.id
      );

      if (existing && existing.quantity! > 1) {
        existing.quantity = existing.quantity! - 1;
      } else {
        state.product = state.product.filter(
          (product) => product.id !== action.payload.id
        );
      }

      state.total -= action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<IBooks>) => {
      state.product = state.product.filter(
        (product) => product.id !== action.payload.id
      );

      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});

export const { addToCart, removeFromCart, removeOne } = CartSlice.actions;

export default CartSlice.reducer;
