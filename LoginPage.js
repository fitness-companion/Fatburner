'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';

type Props = {
  navigation: Object;
};

export default class LoginPage extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login</Text>
        <Text style={styles.description}>Login to get started.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    color: 'white',
  },
  welcome: {
    paddingTop: 50,
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    paddingTop: 100,
  },
});
