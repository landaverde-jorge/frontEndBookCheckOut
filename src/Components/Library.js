/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  AppRegistry,
} from 'react-native';

export default class Library extends Component {
  static navigationOptions = {
      drawerLabel: 'Library',
      // drawerIcon: ({ tintColor }) => (
      //   <Image
      //     source={require('./chats-icon.png')}
      //     style={[styles.icon, {tintColor: tintColor}]}
      //   />
      // ),
    };
  constructor(props){
    super(props);
    this.state = {
      "books": [],
      "users": [],
    }
  }
  componentDidMount(){
    fetch('https://protected-cliffs-35997.herokuapp.com/books')
    // fetch('https://localhost:3000/books')
     .then(res => res.json())
     .then(books => this.setState({
       "books" : books
     }))
     fetch('https://protected-cliffs-35997.herokuapp.com/users')
     // fetch('https://localhost:3000/users')
      .then(res => res.json())
      .then(users => this.setState({
        "users" : users
      }))
  }

  render() {
    const {navigate}=this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Library</Text>
        {
          this.state.books.map((book, user) => {
            return (<Text key={book._id}
              onPress={() => navigate('BookCheckOut', book, user)}
              >{book.title}</Text>);
          })
        }
        <Button
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title="Open Drawer Navigator"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    paddingVertical: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  book: {
    fontSize: 15,
    fontStyle: 'italic',
  },
});

AppRegistry.registerComponent('Library', () => Library);
