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
  constructor(props){
    super(props);
    this.state = {
      "books": [],
    }
  }
  componentDidMount(){
    fetch('https://protected-cliffs-35997.herokuapp.com/books')
     .then(res => res.json())
     .then(books => this.setState({
       "books" : books
     }))
  }

  render() {
    const {navigate}=this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Library</Text>
        {
          this.state.books.map(book => {
            return (<Text key={book._id}
              onPress={() => navigate('BookCheckOut', book)}
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
