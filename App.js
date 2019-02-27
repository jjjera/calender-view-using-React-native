import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import CalendarView from './src/CalenderView';
import AgendaScreen from './src/Agenda/Agenda';
import EventDemo from './src/EventDemo/EventDemo';

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
