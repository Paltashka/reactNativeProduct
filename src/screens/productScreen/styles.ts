import {StyleSheet} from 'react-native';

export const stylesProduct = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#add8e6',
  },
  card: {
    gap: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,

    shadowColor: '#99d0e0',
    shadowOffset: {width: 10, height: 5},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 2,
  },
  img: {
    width: '100%',
    height: 300,
    objectFit: 'scale-down',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color:'black'

  },
  description: {
    textAlign: 'center',
    fontSize: 18,
    color:'black'

  },
  price: {
    fontSize: 24,
    color: 'green',
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
  },
  count: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  priceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingCount: {
    flexDirection: 'column',
  },
});
