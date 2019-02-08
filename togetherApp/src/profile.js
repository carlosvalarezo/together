/**
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

import styles from '../styles/app';

type Props = {};
export default class Profile extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {email: ''}
  }

  render() {
    const {navigate} = this.props.navigation;
    const email = this.props.navigation.getParam('email', '');
    return (
      <View style={styles.container}>
        <Text>{email}</Text>
      </View>
    );
  }
}


