import Login from '../src/login';
import Profile from '../src/profile';
import Register from '../src/register';
import Camera from '../src/camera';

import { createStackNavigator } from 'react-navigation';


const NavigationStack = createStackNavigator(
    {
      Login: {
        screen: Login,
        navigationOptions: {
          title: '',
          header: null
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: '',
          header: null
        }
      },
      Register:{
        screen: Register,
        navigationOptions: {
          title: '',
          header: null
        }
      },
      Camera: {
        screen: Camera,
        navigationOptions: {
          title: '',
          header: null
        }
      }
    },
    {
      initialRouteName: 'Login',
    }
  );

export default NavigationStack;