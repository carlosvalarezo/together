/**
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Image } from 'react-native-elements';

import styles from '../styles/app';
import loginService from '../src/services/loginService';
import Keys from '../keys/keys';


const checkUser = (email, password) => {
    console.warn({email, password});
}

type Props = {};
export default class Login extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {email: '', password: ''}
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <Button
          title="Sign up"
          type="clear"
          onPress = {() => navigate('Register')} 
        />
      <View style={styles.logo}>
      <Image
            source={require('../assets/togetherLogo.png')}
            style={{width: 50, height: 50}}
          />
      </View>        
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
            inputStyle={styles.input}
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
            inputStyle={styles.input}
          />
        <Button title = "Login"
            buttonStyle={styles.button}
            onPress={() => {
                const {email, password} = this.state;
                console.warn({email, password});

                fetch('http://'+Keys.endpoints.server+'/api/users/login', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }).then(value => {
                    console.warn(value.ok);
                    if(value.ok){
                        return navigate('Profile', {email});
                    }
                    Alert.alert(
                        'Data not valid',
                        'Please signup to enjoy together!',
                        [
                          {
                            text: 'Cancel',
                            onPress: () => console.warn('Cancel Pressed'),
                            style: 'cancel',
                          }
                        ],
                        {cancelable: true},
                      );
                }).catch(error => console.warn(error));
            }}/>
      </View>
    );
  }
}


