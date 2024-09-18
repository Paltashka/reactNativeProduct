import { FlatList, Text, View } from "react-native";
import { useGetProducts } from "../../service/product/index.tsx";
import Product from "../../components/product/index.tsx";
import { useRouter } from "../../hooks/useRouter/useRouter.ts";
import { styleAllProducts } from "../allProductsScreen/styles.ts";

const FavoritesProductsScreen = () => {
  const navigation = useRouter();
  const { product } = useGetProducts();

  const handleAddProduct = () => {
    navigation.navigate("ModalForm");
  };
  const goToProduct = (id: string) => {
    navigation.navigate("Product", { id: id });
  };

  return (
    <View style={styleAllProducts.container}>
      {product.favourites.length ? (
        <FlatList
          data={product.favourites}
          contentContainerStyle={{ flexGrow: 1 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Product product={item} onPress={goToProduct} />
          )}
          keyExtractor={(item, i) => i.toString()}
          ItemSeparatorComponent={() => (
            <View style={styleAllProducts.separator} />
          )}
        />
      ) : (
        <View style={styleAllProducts.empty}><Text style={styleAllProducts.text}>No products</Text></View>
      )}
    </View>
  );
};
export default FavoritesProductsScreen;
