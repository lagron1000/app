import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, AppRegistry } from 'react-native';
import Routes from './Routes.js'

class projectApp extends Component {
  render() {
    return (
      <Routes />
    )
  }
}
export default projectApp
AppRegistry.registerComponent('projectApp', () => projectApp)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  text: {
  },
  defaultFontFamily: {
    fontFamily: 'lucida grande',
  }
});   
  