import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import Button from '../../components/button';
import * as Yup from 'yup';
import {useGetProducts} from '../../service/product';
import {useRouter} from '../../hooks/useRouter/useRouter.ts';
import {IProducts} from '../../service/product/product.type.ts';
interface FormValues {
  name: string;
  price: string; // Возможно, ты получаешь значение как строку, поэтому можно потом привести к числу
  description: string;
}
const ProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  price: Yup.number()
    .min(1, 'Too Short!')
    .max(100000, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(15, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
const ModalFormScreen = () => {
  const {product} = useGetProducts();
  const navigation = useRouter();

  const generateRandomId = () => {
    const randomNum = Math.floor(Math.random() * 1000000);
    const randomLetter = String.fromCharCode(
      65 + Math.floor(Math.random() * 26),
    );
    return `${randomLetter}${randomNum}`;
  };
  const addCard = async (values: FormValues) => {
    const data: IProducts = {
      id: generateRandomId(),
      title: values.name,
      price: Number(values.price),
      description: values.description,
    };
    if (product.allProducts?.length) {
      const updatedProducts = [...product.allProducts, data];
      await product.addProduct(updatedProducts);
      navigation.navigate('Products');
    } else {
      const updatedProducts = [data];
      await product.addProduct(updatedProducts);
      navigation.navigate('Products');
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={ProductSchema}
        initialValues={{name: '', price: '', description: ''}}
        onSubmit={values => addCard(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={styles.card}>
            <Text>Name</Text>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              style={[styles.input, dynamicInputStyle(!!errors.name)]}
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}
            <Text>Price</Text>

            <TextInput
              onChangeText={handleChange('price')}
              onBlur={handleBlur('price')}
              value={values.price}
              style={[styles.input, dynamicInputStyle(!!errors.price)]}
            />
            {errors.price && <Text style={styles.error}>{errors.price}</Text>}
            <Text>Description</Text>
            <TextInput
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              style={[styles.input, dynamicInputStyle(!!errors.description)]}
            />
            {errors.description && (
              <Text style={styles.error}>{errors.description}</Text>
            )}

            <Button title={'Add Card'} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 35,
    paddingVertical: 25,
    backgroundColor: '#add8e6',
    flex: 1,
  },
  card: {
    borderRadius: 15,
    padding: 15,
    backgroundColor: '#99d0e0',
    gap: 20,
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#e8f4f8',
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});
const dynamicInputStyle = (hasError: boolean) => ({
  borderColor: hasError ? 'red' : '#d4ebf2', // Динамическое изменение цвета границы
});
export default ModalFormScreen;
