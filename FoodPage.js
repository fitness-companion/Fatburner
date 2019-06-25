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

// import Food_ID from "./FoodID.js";

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

  render() {
    return (
      <View style={styles.container}>
      </View>
        /*
        <Button
          title="Start Now"
          accessibilityLabel="Start Achieving your Fitness Goals!"
          onPress={this.gotoWelcome}
          style={styles.button}
        />
        */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    paddingTop: 50,
    fontSize: 50,
    color: 'blue',
    textAlign: 'center',
    margin: 10,
  },
  description: {
    fontSize: 20,
    color: '#656565',
    textAlign: 'center',
    margin: 10,
  },
  button: {
    paddingTop: 100,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 217,
    height: 138,
  },
});
