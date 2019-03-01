import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import InputBox from '../InputBox/InputBox';
import DialogInput from 'react-native-dialog-input';

class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      isDialogVisible: false,
      day: {timestamp : new Date()}
    };
  }

  showDialog(isShow,day){
    console.log('showDialog called');
    this.setState({isDialogVisible: isShow,day:day});
  }

  closeDialogBox(){
    console.log('closeDialogBox called');
    this.setState({isDialogVisible: false});
  }

  sendInput(inputText){
    // console.log("sendInput (DialogInput#1): " + inputText);
    // console.log('day is',this.state.day);
    this.loadItems(inputText);
      }

  render() {
    console.log('state is',this.state.day);
    return (
      <View style={{flex:1}}>
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={'2019-02-28'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        onDayPress={(day)=>{
          console.log('onDayPress called',day);
          this.showDialog(true,day);
        }}
      />
        <DialogInput isDialogVisible={this.state.isDialogVisible}
          title={"DialogInput 1"}
          message={"Message for DialogInput #1"}
          hintInput ={"HINT INPUT"}
          submitInput={ (inputText) => {this.sendInput(inputText)} }
          closeDialog={ () => {this.closeDialogBox(false)}}>
        </DialogInput>
        <TouchableOpacity onPress={()=>{this.showDialog(true)}} style={{padding:10}}>
          <Text>Show DialogInput #1</Text>
        </TouchableOpacity>
      </View>
    );
  }

  loadItems(inputText) {
    console.log('loadItems called',inputText);
    setTimeout(() => {
      console.log('setTimeout called');
      let timestamp = this.state.day.timestamp;
      const time = timestamp + 60 * 24 * 60 * 60 * 1000;
      console.log('time is',time);
      const strTime = this.timeToString(time);
      console.log('strTime called',strTime);
        this.state.items[strTime] = [];
        console.log('state items',this.state.items[strTime]);
          this.state.items[strTime].push({
            name: 'Event is: ' + inputText,
            height: Math.max(50, Math.floor(Math.random() * 150))
          });
          console.log('state.items',this.state.items);
          const newItems = {};
          Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
          this.setState({
            items: newItems
          });
          console.log('new items',newItems);
    },1000);
    this.closeDialogBox();
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});

export default AgendaScreen;
