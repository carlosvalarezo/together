import {StyleSheet} from 'react-native';

const profileStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    top: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 75
    },
    text: {
      marginLeft: 15,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#a334ed',
      fontFamily: 'Cochin'
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

  module.exports = profileStyles;