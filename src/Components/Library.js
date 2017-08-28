/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  AppRegistry,
} from 'react-native';

export default class Library extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Library</Text>
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
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    paddingVertical: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('Library', () => Library);
