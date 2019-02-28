import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AgendaScreen from './src/Agenda/Agenda';

export default class App extends Component {
  render() {
    return (
        <AgendaScreen/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
