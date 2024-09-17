import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {IProducts} from '../../service/product/product.type.ts';
import {noImg} from '../../util/util.ts';

interface IPropsProducts {
  product: IProducts;
  onPress: (id: string) => void;
}

const Product = ({product, onPress}: IPropsProducts) => {
  const {title, image, description, price, id} = product;
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(id)}>
      <Image source={{uri: image ?? noImg}} style={styles.img} />
      <View style={styles.details}>
        <View>
          <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
            {title}
          </Text>
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={styles.description}>
            {description}
          </Text>
        </View>
        <Text style={styles.price}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    height: 200,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  img: {
    width: '50%',
    height: '100%',
    objectFit: 'cover',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },

  title: {
    width: '100%',
    flexWrap: 'wrap',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {fontSize: 16},
  details: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 5,
    gap: 5,
  },
  price: {
    textAlign: 'right',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default Product;
