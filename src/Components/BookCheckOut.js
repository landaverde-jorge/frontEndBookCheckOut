/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class BookCheckOut extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the BookCheckOut component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('BookCheckOut', () => BookCheckOut);
