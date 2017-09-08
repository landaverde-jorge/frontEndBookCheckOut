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
    return (
      <View style={styles.container}>
        {/* <Text>I'm the MyBooks component</Text>
        {
          this.state.books.map(book => {
            return (<Text key={Math.random()}>{book}</Text>);
          })
        } */}
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
