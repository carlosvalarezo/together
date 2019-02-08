/**
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Input, Button, Avatar } from 'react-native-elements';

import RegisterStyles from '../styles/register';
import Keys from '../keys/keys';

type Props = {};
export default class Register extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
        name: '',
        email: '',
        password: '',
        dateOfBirth: '',
        nickName: '',
        avatar: ''
    }
  }

  render() {
    return (
      <View style={RegisterStyles.container}>
        <Input
            label='Name'
            placeholder='Enter your name'
            onChangeText={name => this.setState({name})}
            value={this.state.name}
            inputStyle={RegisterStyles.input}
          />
        <Input
            label='Email'
            placeholder='Enter your email'
            onChangeText={email => this.setState({email})}
            value={this.state.email}
            inputStyle={RegisterStyles.input}
          />
        <Input
            label='Password'
            placeholder='Enter a password'
            onChangeText={password => this.setState({password})}
            value={this.state.password}
            inputStyle={RegisterStyles.input}
          />
        <Input
            label='Date of birth'
            placeholder='Enter your date of birth'
            onChangeText={dateOfBirth => this.setState({dateOfBirth})}
            value={this.state.dateOfBirth}
            inputStyle={RegisterStyles.input}
          />
        <Input
            label='Nickname'
            placeholder='Enter a nickname'
            onChangeText={nickname => this.setState({nickname})}
            value={this.state.nickname}
            inputStyle={RegisterStyles.input}
          />
        <Avatar
            source={{
                uri:'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
            showEditButton
        />
        <Button title = "Register"
            buttonStyle={RegisterStyles.button}
            onPress={() => {
                const {name, email, password, dateOfBirth, nickname} = this.state;

                fetch('http://'+Keys.endpoints.localhost+':5000/api/users/registeruser', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                        dateOfBirth,
                        nickname

                    }),
                }).then(value => console.warn(value))
                  .catch(error => console.warn(error));
            }}/>

      </View>
    );
  }
}


