import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
      flex: 1,
      flexDirection: 'row',
      height: 270,
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
      color:'black'
    },
    description: {fontSize: 16,    color:'black'
    },
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
      color:'black'
  
    },
    button: {
      display: 'flex',
      width: "100%",
      height: 60,
    }
  });