'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
  Image,
  TouchableHighlight,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  navigation: Object;
};

export default class Welcome extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      weight: 0, // lbs
      height: 0, // cm -> can convert to ft later
      ethnicity: '',
    };
  }

  gotoOptionsPage = () => {
    this.props.navigation.navigate('OptionsPage');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.description}>We just need to ask you a few quick questions so we can calculate your recommended daily calories and help you achieve your fitness goals.</Text>
        <Image source={require('./Resources/fitness.jpg')} style={styles.image}/>
        <Icon.Button style={{marginTop: 15}}
          name="arrow-right"
          backgroundColor="green"
          onPress={this.gotoOptionsPage}
        >
        </Icon.Button>
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
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  image: {
    marginTop: 15,
    width: 217,
    height: 138,
  },
});
