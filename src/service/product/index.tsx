import api from '../api.config.ts';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IProducts} from './product.type.ts';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {setProduct} from '../../store/slice/products';

export const useGetProducts = () => {
  const {product} = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const cachedProducts = await AsyncStorage.getItem('products');
        if (cachedProducts) {
          dispatch(setProduct(JSON.parse(cachedProducts)));
          return;
        }
        const response = await api.get<IProducts[]>('/products');
        await AsyncStorage.setItem('products', JSON.stringify(response.data));
        dispatch(setProduct(response.data));
      } catch (err) {
        setError(true);
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const getProduct = (id: string) => {
    return product && (product?.find(item => item.id === id) as IProducts);
  };
  const addProduct = async (item: IProducts[]) => {
    AsyncStorage.setItem('products', JSON.stringify(item));
    dispatch(setProduct(item));
  };

  return {
    loading,
    error,
    product: {
      allProducts: product,
      getProduct,
      addProduct,
    },
  };
};
