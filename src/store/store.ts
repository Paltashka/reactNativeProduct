import {configureStore} from '@reduxjs/toolkit';
import products from './slice/products';

export const store = configureStore({
  reducer: {
    products: products,
  },
});
