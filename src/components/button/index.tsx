import {TouchableOpacity, Text} from 'react-native';
import {styles} from "./styles"

interface IPropsButton {
  onPress?: () => void;
  title: string;
}

const Button = ({onPress, title}: IPropsButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
