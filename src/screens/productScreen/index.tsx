import { Image, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import { useGetProducts } from "../../service/product";
import { stylesProduct } from "./styles.ts";
import { noImg } from "../../util/util.ts";
import Button from "../../components/button/index.tsx";
import { useEffect, useState } from "react";
import { useRouter } from "../../hooks/useRouter/useRouter.ts";

const ProductScreen = () => {
  const route = useRoute();
  const { id } = route.params as { id: string };
  const { product: findProduct } = useGetProducts();
  const { goBack } = useRouter();
  const { addProductFavourites, removeProductFavourites } = findProduct;
  const product = findProduct.getProduct(id);

  const [productFavourites, setProductFavourites] = useState<boolean>(false);

  useEffect(() => {
    findProduct.favourites.map((item) => {
      if (item.id === id) {
        setProductFavourites(true);
      }
    });
  }, [findProduct, id]);

  return (
    <View style={stylesProduct.container}>
      {product ? (
        <View style={stylesProduct.card}>
          <Image
            source={{ uri: product.image ?? noImg }}
            style={stylesProduct.img}
          />
          <Text style={stylesProduct.title}>{product.title}</Text>
          <Text style={stylesProduct.description}>{product.description}</Text>
          <View style={stylesProduct.priceInfo}>
            {product?.rating && (
              <View style={stylesProduct.ratingCount}>
                <Text style={stylesProduct.rating}>
                  Rating:{product.rating.rate}
                </Text>
                <Text style={stylesProduct.count}>
                  Count:{product.rating.count}
                </Text>
              </View>
            )}
            <Text style={stylesProduct.price}>Price:${product.price}</Text>
          </View>
          <View style={stylesProduct.button}>
            <Button
              title={
                productFavourites ? "Remove from favorites" : "Add to favorites"
              }
              onPress={
                productFavourites
                  ? () => {
                      removeProductFavourites(id);
                      goBack();
                    }
                  : () => addProductFavourites(product)
              }
            />
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};
export default ProductScreen;
