import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
      display: 'flex',

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
    button: {
      display: 'flex',
      width: "100%",
      height: 40,
    }
  });
export const dynamicInputStyle = (hasError: boolean) => ({
    borderColor: hasError ? 'red' : '#d4ebf2', // Динамическое изменение цвета границы
  });
  