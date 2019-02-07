import Login from '../src/login';
import Profile from '../src/profile';

import {createStackNavigator} from 'react-navigation';


const NavigationStack = createStackNavigator(
    {
      Login: Login,
      Profile: Profile,
    },
    {
      initialRouteName: 'Login',
    }
  );

export default NavigationStack;