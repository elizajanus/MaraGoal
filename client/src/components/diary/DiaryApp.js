import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Diary from './diary.js';
import DiaryTable from "./Table.js";
import data from './diaryEntries.json';
//import Header from "../Header";

class DiaryApp extends Component {
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
        <MuiThemeProvider>
          <div className="App">
            <Diary  />
            <br />
            <DiaryTable diaryEntries={this.state.fields}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
};

export default DiaryApp;

