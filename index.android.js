/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import App from './src/Components/App';
import Navigator from './src/Components/Router';


export default class frontEndBookCheckOutV2 extends Component {
      render() {
        return(
          <Navigator/>
        )
      }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //         <App/>
  //     </View>
  //   );
  // }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('frontEndBookCheckOutV2', () => frontEndBookCheckOutV2);
