/**
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View, Text, requireNativeComponent, StyleSheet, NativeModules } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

const TogetherCamera = requireNativeComponent("TogetherCameraView");

type Props = {};
export default class Camera extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {email: '', avatar: ''}
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
          <TogetherCamera style={styles.wrapper} onTakePicture={ event => {
              navigate('Register', {avatar: 'file://' + event.nativeEvent.picture});
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, alignItems: "stretch"
    },
    wrapper: {
      flex: 1, alignItems: "center", justifyContent: "center"
    },
    border: {
      borderColor: "#eee", borderBottomWidth: 1
    },
    button: {
      fontSize: 50, color: "orange"
    }
  });
