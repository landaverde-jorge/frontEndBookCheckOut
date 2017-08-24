import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Button} from 'react-native';
import LoginForm from './LoginForm';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Login extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({tintColor}) => {
      return (
        <MaterialIcons
          name="mood"
          size={24}
          style={{color: tintColor}}>
        </MaterialIcons>
      );
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding"  style={styles.container}>
        <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../images/logo.png')}
        />
        <Text style={styles.title}>An app made for TXT using React Native</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm/>
        </View>
        <Button
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title="Open DrawerNavigator"
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logoContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 150,
  },
  title: {
    color: '#FFF',
    opacity: 0.7
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#2c3e50',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});
