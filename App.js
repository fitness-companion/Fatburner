"use strict";

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View, Image, ImageBackground} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Container from './ScreenContainer';

const instructions = Platform.select({
  ios: 'Enter your demographic info to get started',
  android:
  'Enter your demographic info to get started',
});

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <Container />
    );
  }
}
