/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

import styles from './styles/app';


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {email: '', password: ''}
  }

  render() {
    return (
      <View style={styles.container}>
      <Button
          title="Sign up"
          type="clear"
        />
      <View style={styles.logo}/>        
        <Input
            placeholder='Enter your email'
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='blue'
                style={{marginRight:10}}
              />
            }
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
        <Input
            secureTextEntry={true}
            placeholder='Enter your password'
            leftIcon={
              <Icon
                name='lock'
                size={24}
                color='blue'
                style={{marginRight:10}}
              />
            }
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
        <Button title = "Login" onPress={() => {console.warn(this.state.email, '...', this.state.password)}}/>
      </View>
    );
  }
}


