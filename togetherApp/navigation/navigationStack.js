import Login from '../src/login';
import Profile from '../src/profile';
import Register from '../src/register';
import Camera from '../src/camera';

import { createStackNavigator } from 'react-navigation';


const NavigationStack = createStackNavigator(
    {
      Login: Login,
      Profile: Profile,
      Register: Register,
      Camera: {
        screen: Camera,
        navigationOptions: {
          title: '',
          header: null //this will hide the header
        },
      }
    },
    {
      initialRouteName: 'Login',
    }
  );

export default NavigationStack;