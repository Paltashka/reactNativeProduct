import { Image, Text, View, TouchableOpacity } from "react-native";
import { IProducts } from "../../service/product/product.type.ts";
import { noImg } from "../../util/util.ts";
import { styles } from "./styles.ts";
import Button from "../button/index.tsx";
import { useGetProducts } from "../../service/product";
import { useEffect, useState } from "react";

interface IPropsProducts {
  product: IProducts;
  onPress: (id: string) => void;
}

const Product = ({ product, onPress }: IPropsProducts) => {
  const { title, image, description, price, id } = product;

  const {
    product: { addProductFavourites, favourites, removeProductFavourites },
  } = useGetProducts();

  const [productFavourites, setProductFavourites] = useState<boolean>(false);

  useEffect(() => {
    setProductFavourites(false);
    favourites.map((item) => {
      if (item.id === id) {
        setProductFavourites(true);
      }
    });
  }, [favourites, id]);

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(id)}>
      <Image source={{ uri: image ?? noImg }} style={styles.img} />
      <View style={styles.details}>
        <View>
          <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
            {title}
          </Text>
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={styles.description}
          >
            {description}
          </Text>
        </View>
        <Text style={styles.price}>${price}</Text>
        <View style={styles.button}>
          <Button
            title={
              productFavourites ? "Remove from favorites" : "Add to favorites"
            }
            onPress={
              productFavourites
                ? () => {
                    removeProductFavourites(id);
                  }
                : () => addProductFavourites(product)
            }
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
