import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Agenda} from 'react-native-calendars';
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
        // console.log('showDialog called');
        this.setState({isDialogVisible: isShow,day:day});
      }

      closeDialogBox(){
        // console.log('closeDialogBox called');
        this.setState({isDialogVisible: false});
      }

      sendInput(inputText){
        // console.log('sendInput  called');
        // console.log("sendInput (DialogInput#1): " + inputText);
        // console.log('day is',this.state.day);
        this.loadItems(inputText);
      }

      loadItems(inputText) {
        // console.log('loadItems called',inputText);
        // console.log('day is',this.state.day);
        let timestamp = this.state.day.timestamp;
        // console.log('timestamp is',timestamp);
        const time = timestamp;
        // console.log('time is',time);
        const strTime = this.timeToString(time);
        // console.log('strTime called',strTime);
          this.state.items[strTime] = [];
          // console.log('state items',this.state.items[strTime]);
            this.state.items[strTime].push({
              name: inputText,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
            console.log('state.items',this.state.items[strTime]);
            const newItems = {};
            Object.keys(this.state.items)
              .forEach(key => {newItems[key] = this.state.items[key];});
              this.setState({
                items: newItems
              });
            // console.log('new items',newItems);
              this.closeDialogBox();
            }

            timeToString(time) {
              console.log('timeToString called',time);
              const date = new Date(time);
              return date.toISOString().split('T')[0];
          }

          renderItem(item) {
            console.log('renderItem called',item);
            return (
              <View style={[styles.item, {height: item.height}]}>
                <Text>{item.name}</Text>
              </View>
            );
          }

        rowHasChanged(r1, r2) {
          console.log('rowHasChanged called');
          return r1.name !== r2.name;
        }

  render() {
    // console.log('state is',this.state.day);
    return (
      <View style={{flex:1}}>
      <Agenda
        items={this.state.items}
        renderItem={this.renderItem.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        onDayPress={(day)=>{
        this.showDialog(true,day);
        }}

  onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
      />
        <DialogInput isDialogVisible={this.state.isDialogVisible}
          title={"DialogInput 1"}
          message={"Message for DialogInput #1"}
          hintInput ={"HINT INPUT"}
          submitInput={ (inputText) => {this.sendInput(inputText)} }
          closeDialog={ () => {this.closeDialogBox(false)}}>
        </DialogInput>
      </View>
    );
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
