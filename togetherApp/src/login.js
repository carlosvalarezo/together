/**
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

import styles from '../styles/app';
import loginService from '../src/services/loginService';

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

                return fetch('http://localhost:5000/api/users/login', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }).then(value => console.warn(value))
                  .catch(error => console.warn(error));
            }}/>
      </View>
    );
  }
}


