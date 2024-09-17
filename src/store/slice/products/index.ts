import {createSlice} from '@reduxjs/toolkit';
import {IProducts} from '../../../service/product/product.type.ts';

interface initialState {
  product: IProducts[];
}
const initialState: initialState = {
  product: [],
};
const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});
export const {setProduct} = products.actions;

export default products.reducer;
