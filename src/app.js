import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC-2FSF3zNYzK9j7CUeftBOUgOltcLQ3Hs',
      authDomain: 'auth-ac5d3.firebaseapp.com',
      databaseURL: 'https://auth-ac5d3.firebaseio.com',
      storageBucket: 'auth-ac5d3.appspot.com',
      messagingSenderId: '690096267389',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
      <View>
        <Header headerText="auth" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
