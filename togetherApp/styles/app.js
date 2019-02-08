import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    logo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'green',
        width:100,
        height:100
    },
    input: {
      height: 50,
      padding: 4,
      marginRight: 5,
      fontSize: 23,
      // borderWidth: 1,
      // borderColor: 'red',
      // borderTopColor: 'red',
      // borderLeftColor: 'transparent',
      // borderRadius: 8,
      color: 'green'
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