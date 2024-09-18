import {createSlice} from '@reduxjs/toolkit';
import {IProducts} from '../../../service/product/product.type.ts';

interface initialState {
  product: IProducts[];
  productFavourites: IProducts[];
}
const initialState: initialState = {
  product: [],
  productFavourites: [],
};
const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setProductFavourites: (state, action) => {
      state.productFavourites = action.payload;
    },
  },
});
export const {setProduct, setProductFavourites} = products.actions;

export default products.reducer;
