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
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

type Props = {
  navigation: Object;
};

export default class Home extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false, // spinner thingy
    };
  }

  gotoWelcome = () => {
    this.props.navigation.navigate('Welcome');
  };

  gotoLogin = () => {
    this.props.navigation.navigate('LoginPage');
  }

  render() {
    return (
      <ImageBackground source={require('./Resources/bg.jpg')} style={{position: 'absolute', width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Text style={styles.welcome}>FatBurner</Text>
          <Text style={styles.description}>Your Health and Fitness Companion App</Text>
          <TouchableHighlight
            activeOpacity={0.6}
            style={styles.button}
            onPress={this.gotoLogin}
          >
            <Text style={{color: 'white', fontSize: 20}}>Log In</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            style={styles.button}
            onPress={this.gotoWelcome}
          >
            <Text style={{color: 'white', fontSize: 20}}>Register</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 50,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    margin: 10,
  },
  button: {
    marginTop: 30,
    borderStartColor: 'black',
    borderWidth: 2,
    backgroundColor: 'green',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});
