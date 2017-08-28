import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, KeyboardAvoidingView, Button, Linking} from 'react-native';
import LoginForm from './LoginForm';

const AUTH_URL = 'https://slack.com/oauth/authorize';
const CLIENT_ID = "232151668245.232194114629";
const CLIENT_SECRET = "6fad7827bff771218d75a1eb2cc4751e";
const SCOPES = 'identity.basic,identity.team,identity.avatar,identity.email';
const ACCESS_URL = "https://slack.com/api/oauth.access";

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {user: {}};
  }
  render() {
    let {user} = this.state;
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
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
        </View>
        <Button
        onPress={() => Linking.openURL(`${AUTH_URL}?scope=${SCOPES}&client_id=${CLIENT_ID}`)}
        title="Open slack"
        />
        <Button
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title="Open DrawerNavigator"
        />
      </KeyboardAvoidingView>
    );
  }

  componentDidMount(){
    Linking.getInitialURL()
      .then(url => {
        if(!url){
          throw new Error("user needs to authenticate");
        }
        const code = url.replace("http://bookcheckout.io/?code=","")
        console.log("==========================================", code);

        return fetch(`${ACCESS_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`)
      })
      .then(res => res.json())
      .then(result => {
        console.log("=========================================", result);
        this.setState({user: result.user})
      }).catch(err => {console.log("ERROR")});
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

AppRegistry.registerComponent('Login', () => Login);
