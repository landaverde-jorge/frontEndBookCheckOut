import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/Components/Splash';
import Login from './src/Components/Login/Login';
import Library from './src/Components/Library';
import MyBooks from './src/Components/MyBooks';

import { DrawerNavigator } from 'react-navigation';

const Navigator = DrawerNavigator({
  Login: { screen: Login },
  Home: { screen: Splash },
  Library: {screen: Library},
  MyBooks: {screen: MyBooks},

});
export default class App extends React.Component {
  render() {
    return (
      <Navigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
