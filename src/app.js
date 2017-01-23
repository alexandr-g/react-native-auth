import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

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

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="auth" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
