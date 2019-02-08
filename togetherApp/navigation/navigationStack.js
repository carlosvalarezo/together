import Login from '../src/login';
import Profile from '../src/profile';
import Register from '../src/register';

import { createStackNavigator } from 'react-navigation';


const NavigationStack = createStackNavigator(
    {
      Login: Login,
      Profile: Profile,
      Register: Register,
    },
    {
      initialRouteName: 'Login',
    }
  );

export default NavigationStack;