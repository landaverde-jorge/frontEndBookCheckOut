/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AppRegistry,
  Button,
} from 'react-native';

export default class BookCheckOut extends Component {
  render() {
    const tempBook = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text>{tempBook.title}</Text>
        <View style={styles.buttons}>
          <Button
          onPress={() => this.props.navigation.navigate('ScanScreen', tempBook)}
          title="Check Out"
          />
          <Button
          onPress={() => this.props.navigation.navigate('Library')}
          title="Cancel"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

AppRegistry.registerComponent('BookCheckOut', () => BookCheckOut);
