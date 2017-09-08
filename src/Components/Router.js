/* @flow */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Splash from './Splash';
import Login from './Login/Login';
import Library from './Library';
import MyBooks from './MyBooks';
import ScanScreen from './ScanScreen';
import BookCheckOut from './BookCheckOut';

import { DrawerNavigator } from 'react-navigation';

const Navigator = DrawerNavigator({
  Login: { screen: Login },
  Home: { screen: Splash },
  Library: {screen: Library},
  MyBooks: {screen: MyBooks},
  ScanScreen: {screen: ScanScreen},
  BookCheckOut: {screen: BookCheckOut},

});

export default Navigator;
