import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NavigationParams, RouterType} from './type.ts';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type NavigationProps = NativeStackNavigationProp<ParamListBase, RouterType>;

export const useRouter = () => {
  const navigation = useNavigation<NavigationProps>();
  const navigate = (path: RouterType, params?: NavigationParams) => {
    navigation.navigate(path, params || {});
  };

  const goBack = () => {
    navigation.goBack();
  };
  return {navigate, goBack};
};
