import api from "../api.config.ts";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IProducts } from "./product.type.ts";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { setProduct, setProductFavourites } from "../../store/slice/products";

export const useGetProducts = () => {
  const { product, productFavourites } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const cachedProducts = await AsyncStorage.getItem("products");
        if (cachedProducts) {
          dispatch(setProduct(JSON.parse(cachedProducts)));
          return;
        }
        const response = await api.get<IProducts[]>("/products");
        await AsyncStorage.setItem("products", JSON.stringify(response.data));
        dispatch(setProduct(response.data));
      } catch (err) {
        setError(true);
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
    const getProductsFavourites = async () => {
      try {
        setLoading(true);
        const cachedProducts = await AsyncStorage.getItem("productsFavourites");
        if (cachedProducts) {
          dispatch(setProductFavourites(JSON.parse(cachedProducts)));
          return;
        }
      } catch (err) {
        setError(true);
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    getProductsFavourites();
  }, []);

  const getProduct = (id: string) => {
    return product && (product?.find((item) => item.id === id) as IProducts);
  };

  const getProductFavourites = (id: string) => {
    return (
      productFavourites &&
      (productFavourites?.find((item) => item.id === id) as IProducts)
    );
  };

  const addProduct = async (item: IProducts[]) => {
    AsyncStorage.setItem("products", JSON.stringify(item));
    dispatch(setProduct(item));
  };
  const addProductFavourites = async (item: IProducts) => {
    const cachedProducts = await AsyncStorage.getItem("productsFavourites");
    if (cachedProducts) {
      const products = [...JSON.parse(cachedProducts), item];
      await AsyncStorage.setItem("productsFavourites", JSON.stringify(products));
      dispatch(setProductFavourites(products));
    }else {
      await AsyncStorage.setItem("productsFavourites", JSON.stringify([item]));
      dispatch(setProductFavourites([item]));
    }
  };

  const removeProductFavourites = async (id: string) => {
    const cachedProducts = await AsyncStorage.getItem("productsFavourites");
    if (cachedProducts) {
      const products = JSON.parse(cachedProducts).filter((item: IProducts) => item.id !== id);
      await AsyncStorage.setItem("productsFavourites", JSON.stringify(products));
      dispatch(setProductFavourites(products));
    }
  };


  return {
    loading,
    error,
    product: {
      allProducts: product,
      favourites: productFavourites,
      getProduct,
      addProduct,
      addProductFavourites,
      getProductFavourites,
      removeProductFavourites
    },
  };
};
