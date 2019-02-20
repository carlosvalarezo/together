/**
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import { Avatar, Button } from 'react-native-elements';

import styles from '../styles/profile';

type Props = {};
export default class Profile extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {email: ''}
  }

  render() {
    const parameter = this.props.navigation.getParam('userRegistered') || null;
    const name = parameter ? JSON.parse(parameter._bodyText).name : this.props.navigation.getParam('name');
    const avatar = parameter ? JSON.parse(parameter._bodyText).avatar : this.props.navigation.getParam('avatar');
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button title = "Logout"
              buttonStyle={styles.button}
              onPress={() => {
                navigate('Login');
        }}/>

        <View style={styles.top}>
          <Avatar rounded size="xlarge" source={{uri:avatar}}/>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
    );
  }
}


