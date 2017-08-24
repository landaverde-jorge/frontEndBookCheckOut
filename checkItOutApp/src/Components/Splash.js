import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Splash extends Component{
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({tintColor}) => {
      return (
        <MaterialIcons
          name="toc"
          size={24}
          style={{color: tintColor}>
        </MaterialIcons>
      );
    }
  };
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
