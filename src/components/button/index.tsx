import {TouchableOpacity, StyleSheet, Text} from 'react-native';

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
const styles = StyleSheet.create({
  button: {
    height: 40,
    width: '100%',
    backgroundColor: '#99d0e0',
    justifyContent: 'center',
    borderRadius: 16,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});
export default Button;
