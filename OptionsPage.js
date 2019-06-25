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

export default class Home extends Component<{}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
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
