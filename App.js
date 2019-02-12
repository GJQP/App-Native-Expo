import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBxEvnoIePmK-ml8Haww4yvwtCOOkFtnKY",
  authDomain: "proyecto-piloto-3be97.firebaseapp.com",
  databaseURL: "https://proyecto-piloto-3be97.firebaseio.com",
  storageBucket: "proyecto-piloto-3be97.appspot.com",
};
firebase.initializeApp(config);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
