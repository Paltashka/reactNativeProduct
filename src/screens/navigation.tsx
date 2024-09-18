import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AllProductScreen from './allProductsScreen';
import ProductScreen from './productScreen';
import {RootStackParamList} from '../hooks/useRouter/type.ts';
import ModalFormScreen from './modalFormScreen';
import FavoritesProductsScreen from './favoritesProductsScreen/index.tsx';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Products"
            component={AllProductScreen}
            options={{title: 'List of products'}}
          />
          <Stack.Screen
            name="ProductsFavorites"
            component={FavoritesProductsScreen}
            options={{title: 'Products Favorites'}}
          />
          <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="ModalForm"
            component={ModalFormScreen}
            options={{presentation: 'modal', title: 'Add New Product'}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
