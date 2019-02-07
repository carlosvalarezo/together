/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import NavigationStack from './navigation/navigationStack';


const AppContainer = createAppContainer(NavigationStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}