import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import CovidNews from './screens/CovidNews';
import InternationalNews from './screens/InterNationalNews';
import NationalNews from './screens/NationalNews';
import SportsNews from './screens/SportsNews';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  CovidNews: CovidNews,
  InternationalNews: InternationalNews,
  NationalNews: NationalNews,
  SportsNews: SportsNews,
});

const AppContainer = createAppContainer(AppNavigator);