/**
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
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
    const parameter = this.props.navigation.getParam('value');
    const email = parameter.email;
    const name =  parameter.name;
    const avatar =  parameter.avatar;
    return (
      <View style={styles.container}>
        <Image></Image>
        <Text>{email}</Text>
        <Text>{name}</Text>
        <Text>{avatar}</Text>
      </View>
    );
  }
}


