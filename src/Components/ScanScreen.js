import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Linking,
  Vibration,
  Dimensions
} from 'react-native';

import Camera from 'react-native-camera';

export default class ScanScreen extends Component {
  constructor() {
    super();
    this.state = {
      scanning: true,
      cameraType: Camera.constants.Type.back
    }
  }

  _handleBarCodeRead(e) {
    Vibration.vibrate();
    if(this.state.scanning){
      const tempBook = this.props.navigation.state.params;
      if(tempBook._id === e.data){
        this.props.navigation.navigate('MyBooks', tempBook)
      }else{
        this.props.navigation.navigate('BookCheckOut') //pass error
      }
    }
    this.setState({scanning: false});
    console.log(e.data);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        QRcode Scanner
        </Text>
        { this.state.scanning ?
          <View style={styles.rectangleContainer}>
            <Camera style={styles.camera} type={this.state.cameraType}
                onBarCodeRead={this._handleBarCodeRead.bind(this)}>
            <View style={styles.rectangleContainer}>
            <View style={styles.rectangle}/>
            </View>
            </Camera>
          </View>
        : null }
        <Text style={styles.instructions}>
          Reload,{'\n'}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  camera: {
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      height: Dimensions.get('window').width,
      width: Dimensions.get('window').width,
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  },
  instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
  },
  rectangleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
  },

  rectangle: {
      height: 250,
      width: 250,
      borderWidth: 2,
      borderColor: '#00FF00',
      backgroundColor: 'transparent',
  },
});

AppRegistry.registerComponent('ScanScreen', () => ScanScreen);
