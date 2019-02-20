/**
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View, Text, NativeModules, Image} from 'react-native';
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
        avatar: this.props.navigation.getParam('avatar', 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'),
    }
  }

  registerUser(avatar){
    const {name, email, password, dateOfBirth, nickName} = this.state;
    const {navigate} = this.props.navigation;
    fetch('http://'+Keys.endpoints.server+'/api/users/registeruser', {
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
            nickName,
            avatar,
        }),
    }).then(userRegistered => {
      navigate('Profile', {userRegistered});
    }).catch(error => console.warn(error));
  }

  render() {
    const avatar = this.props.navigation.getParam('avatar', this.state.avatar);
    const {navigate} = this.props.navigation;
    return (
      <View style={RegisterStyles.container}>
        <Image source={require('../assets/togetherLogo.png')} style={{width: 250, height: 250}}></Image>
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
            secureTextEntry={true}
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
            onChangeText={nickName => this.setState({nickName})}
            value={this.state.nickName}
            inputStyle={RegisterStyles.input}
          />
        <Avatar
            size="large"
            source={{
                uri:avatar,
            }}
            showEditButton
            onEditPress={() => {
              navigate('Camera');
            }}
        />
        <Button title = "Register"
            buttonStyle={RegisterStyles.button}
            onPress={() => {
              this.registerUser(avatar);
            }}/>
      </View>
    );
  }
}


