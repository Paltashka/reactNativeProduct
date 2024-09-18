import {FlatList, View} from 'react-native';
import {useGetProducts} from '../../service/product';
import Product from '../../components/product';
import {styleAllProducts} from './styles.ts';
import Button from '../../components/button';
import {useRouter} from '../../hooks/useRouter/useRouter.ts';

const AllProductsScreen = () => {
  const navigation = useRouter();
  const {product} = useGetProducts();

  const handleAddProduct = () => {
    navigation.navigate('ModalForm');
  };
  const handleFavoritesProduct = () => {
    navigation.navigate('ProductsFavorites');
  };
  const goToProduct = (id: string) => {
    navigation.navigate('Product', {id: id});
  };

  return (
    <View style={styleAllProducts.container}>
      <FlatList
        data={product.allProducts}
        contentContainerStyle={{flexGrow: 1}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Product product={item} onPress={goToProduct} />
        )}
        keyExtractor={(item, i) => i.toString()}
        ItemSeparatorComponent={() => (
          <View style={styleAllProducts.separator} />
        )}
      />
      <View style={styleAllProducts.buttons}>
        <Button title={'Add New Product'} onPress={handleAddProduct} />
        <Button title={'Go to favorites'} onPress={handleFavoritesProduct} />
      </View>
    </View>
  );
};
export default AllProductsScreen;
