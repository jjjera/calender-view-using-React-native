import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import CalendarView from './src/CalenderView';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CalendarView/>
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
  }
});