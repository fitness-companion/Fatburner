'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  TouchableHighlight,
  Image,
} from 'react-native';

type Props = {
  navigation: Object;
};

export default class Analytics extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  gotoWelcome = () => {
    this.props.navigation.navigate('Welcome');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Analytics</Text>
        <Text style={styles.description}>Track your Progress with our Analytics Report!</Text>
        <Image source={require('./Resources/analytics.jpg')} style={styles.image}/>
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
  image: {
    width: 217,
    height: 138,
  },
});
