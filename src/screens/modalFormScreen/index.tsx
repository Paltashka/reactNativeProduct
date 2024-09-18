import { Text, TextInput, View } from "react-native";
import { Formik } from "formik";
import Button from "../../components/button";
import { useGetProducts } from "../../service/product";
import { useRouter } from "../../hooks/useRouter/useRouter.ts";
import { IProducts } from "../../service/product/product.type.ts";
import { ProductSchema } from "../../lib/shemes/product.sheme.ts";
import { styles, dynamicInputStyle } from "./styles.ts";
interface FormValues {
  name: string;
  price: string; // Возможно, ты получаешь значение как строку, поэтому можно потом привести к числу
  description: string;
}

const ModalFormScreen = () => {
  const { product } = useGetProducts();
  const navigation = useRouter();

  const generateRandomId = () => {
    const randomNum = Math.floor(Math.random() * 1000000);
    const randomLetter = String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    );
    return `${randomLetter}${randomNum}`;
  };
  const addCard = async (values: FormValues) => {
    const data: IProducts = {
      id: generateRandomId(),
      title: values.name.replaceAll("  ", " "),
      price: Number(values.price),
      description: values.description.replaceAll("  ", " "),
    };
    if (product.allProducts?.length) {
      const updatedProducts = [...product.allProducts, data];
      await product.addProduct(updatedProducts);
      navigation.navigate("Products");
    } else {
      const updatedProducts = [data];
      await product.addProduct(updatedProducts);
      navigation.navigate("Products");
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={ProductSchema}
        initialValues={{ name: "", price: "", description: "" }}
        onSubmit={(values) => addCard(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.card}>
            <Text>Name</Text>
            <TextInput
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name.replaceAll("  ", " ")}
              style={[styles.input, dynamicInputStyle(!!errors.name)]}
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}
            <Text>Price</Text>

            <TextInput
              onChangeText={handleChange("price")}
              onBlur={handleBlur("price")}
              value={values.price}
              style={[styles.input, dynamicInputStyle(!!errors.price)]}
            />
            {errors.price && <Text style={styles.error}>{errors.price}</Text>}
            <Text>Description</Text>
            <TextInput
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              value={values.description.replaceAll("  ", " ")}
              style={[styles.input, dynamicInputStyle(!!errors.description)]}
            />
            {errors.description && (
              <Text style={styles.error}>{errors.description}</Text>
            )}

            <View style={styles.button}>
              <Button title={"Add Card"} onPress={handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
export default ModalFormScreen;
