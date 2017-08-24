import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/Components/Splash';
import Login from './src/Components/Login/Login'
import { DrawerNavigator } from 'react-navigation';

const Navigator = DrawerNavigator({
  Splash: { screen: Splash },
  Login: { screen: Login },
});


export default class App extends React.Component {
  render() {
    return (

      <Navigator />
      // <View style={styles.container}>
      //   <Text>BookCheckOut</Text>
      // </View>
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
