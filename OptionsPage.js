'use-strict';

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
import AppIntroSlider from 'react-native-app-intro-slider';

type Props = {
  navigation: Object;
};

export default class OptionsPage extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      show_page: false
    };
  }

  gotoFoodPage = () => {
    this.props.navigation.navigate('FoodPage');
  };

  on_Done_all_slides = () => {
    this.setState({ show_page: true });
  };

  on_Skip_slides = () => {
    this.setState({ show_page: true });
  };

  render() {
    if (this.state.show_page) {
      return (
        <View style={styles.container}>
        <Text style={styles.welcome}>You Are All Set!</Text>
        <Image source={require('./Resources/fitness.jpg')} style={styles.fitimage}/>
        <Icon.Button style={{marginTop: 15}}
          name="arrow-right"
          backgroundColor="green"
          onPress={this.gotoFoodPage}
        >Get started!
        </Icon.Button>
      </View>
      );
    }
    else {
      return (
        <AppIntroSlider
          slides={slides}
          onDone={this.on_Done_all_slides}
          showSkipButton={false}
          showPrevButton={true}
          onSkip={this.on_Skip_slides}
        />
      );
    }
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
  fitimage: {
    marginTop: 15,
    width: 217,
    height: 138,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 80,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
});

const slides = [
  {
    key: 'k1',
    title: 'What is your goal?',
    text: '{Weight Gain, Maintain my curent weight, Weight loss}',
    image: {
      uri:
        'https://images-na.ssl-images-amazon.com/images/I/71%2BNQGHJXDL._SX425_.jpg',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#FF1744',
  },
  {
    key: 'k2',
    title: 'What is your gender?',
    text: '{Male, Female}',
    image: {
      uri:
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/19/18/gender.jpeg',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#D500F9',
  },
  {
    key: 'k3',
    title: 'What is your activity level?',
    text: '{Sedentary, Low Active, Active, Very Active}',
    image: {
      uri: 'https://image.shutterstock.com/image-vector/cartoon-vector-illustration-isolated-on-260nw-169676843.jpg',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#2979FF',
  },
  {
    key: 'k4',
    title: 'What is your current weight?',
    text: 'Input your current weight',
    image: {
      uri: 'https://previews.123rf.com/images/rastudio/rastudio1202/rastudio120200094/12372268-cartoon-home-kitchen-scales.jpg',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#1DE9B6',
  },
  {
    key: 'k5',
    title: 'What is your height?',
    text: 'Input your height',
    image: {
      uri:
        'https://healthbeat.spectrumhealth.org/wp-content/uploads/2016/01/Height-men.jpg',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#FF3D00',
  },
  {
    key: 'k6',
    title: 'What is your date of birth?',
    text: 'Input your date of birth',
    image: {
      uri:
        'https://reactnativecode.com/wp-content/uploads/2019/04/calendar.png',
    },
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: 'green',
  },
];
