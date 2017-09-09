/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  AppRegistry
} from 'react-native';



export default class MyBooks extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     "books": ["Hustle N' Code", "chiecken", "Mad chicken"],
  //   }
  // }

  render() {
    const refTitle = this.props.navigation.state.params.title;

    return (
      <View style={styles.container}>
        <Text>I'm the MyBooks component</Text>
        <Text>{refTitle}</Text>
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
  },
});

AppRegistry.registerComponent('MyBooks', () => MyBooks);
