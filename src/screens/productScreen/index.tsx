import {Image, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {useGetProducts} from '../../service/product';
import {stylesProduct} from './styles.ts';
import {noImg} from '../../util/util.ts';

const ProductScreen = () => {
  const route = useRoute();
  const {id} = route.params as {id: string};
  const {product: findProduct} = useGetProducts();
  const product = findProduct.getProduct(id);

  return (
    <View style={stylesProduct.container}>
      {product ? (
        <View style={stylesProduct.card}>
          <Image
            source={{uri: product.image ?? noImg}}
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
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};
export default ProductScreen;
