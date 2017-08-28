/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} >
          <Text style={styles.buttonText}>Sign in using Slack</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 350,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    height: 30,
    width: 300,
    backgroundColor: '#34495e',
    marginBottom: 30,
  },
  buttonText: {
    paddingVertical: 15,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
});
