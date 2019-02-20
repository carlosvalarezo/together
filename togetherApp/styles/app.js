import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    logo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    input: {
      width: 350,
      height: 55,
      margin: 10,
      padding: 8,
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
    },
    button: {
      height: 45,
      width: '100%',
      flexDirection: 'row',
      backgroundColor:'green',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      justifyContent: 'center'
    }
  });

  module.exports = styles;