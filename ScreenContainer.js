'use strict';

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './Home';
import Welcome from './Welcome';
import OptionsPage from './OptionsPage';
import FoodPage from './FoodPage';
import ExercisePage from './ExercisePage';
import Analytics from './Analytics';
import UserProfile from './UserProfile';
import LoginPage from './LoginPage';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home"
      }
    },
    LoginPage: {
      screen: LoginPage,
      navigationOptions: {
        title: "Login"
      }
    },
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        title: "Welcome"
      }
    },
    OptionsPage: {
      screen: OptionsPage,
      navigationOptions: {
        title: "Dashboard"
      }
    },
    FoodPage: {
      screen: FoodPage,
      navigationOptions: {
        title: "Food"
      }
    },
    ExercisePage: {
      screen: ExercisePage,
      navigationOptions: {
        title: "Exercise"
      }
    },
    Analytics: {
      screen: Analytics,
      navigationOptions: {
        title: "Progress Tracker"
      }
    },
    UserProfile: {
      screen: UserProfile,
      navigationOptions: {
        title: "User Profile"
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

const Container = createAppContainer(RootStack);

export default Container;
