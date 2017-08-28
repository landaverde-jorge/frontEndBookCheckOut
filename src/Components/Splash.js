import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Button } from 'react-native';

export default class Splash extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Hello, </Text>
        <Text style={styles.subtitle}>Welcome to BookCheckOut</Text>
        <Button
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title="Open DrawerNavigator"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2980b9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 300,
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'white',
    fontWeight: '200',
    fontSize: 17,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

AppRegistry.registerComponent('Splash', () => Splash);
