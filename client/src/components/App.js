import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatApp from './ChatApp';
import CalendarApp from './CalendarApp';
import Diary from "./diary/diary.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
//this section is for input for the diary
  state = { 
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
         ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <div>
        <CalendarApp />
        <ChatApp />
        <MuiThemeProvider>
          <div className="App">
            <Diary onChange={fields => this.onChange(fields)} />
            <p>
              {JSON.stringify(this.state.fields, null, 2)}
            </p>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
};

export default App;