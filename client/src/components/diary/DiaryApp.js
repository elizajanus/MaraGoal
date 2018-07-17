import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Diary from './diary.js';
import DiaryTable from "./Table.js";
import data from './diaryEntries.json';
import "./diary.css";
// import Nav from "diaryHeader/diaryHeader.js"

class DiaryApp extends Component {
  //this section is for input for the diary
  constructor(props) {
    super(props);
  }
  state = { 
    diaryEntries: []
  };
  componentDidMount() {
    axios.get("/api/diary")
      .then(res => {
        // console.log(res.data);
        const diaryEntries = res.data;
        const filteredDiaryEntries = diaryEntries.filter(entry => {
          // console.log(entry.username);
          return sessionStorage.getItem('username') === entry.username
        });
        this.setState({ diaryEntries: filteredDiaryEntries });
      });
  }
  
  addEntry(newEntry) {
    // console.log('state?', this.state.diaryEntries);
    let updatedDiaryEntries = this.state.diaryEntries;
    updatedDiaryEntries.push(newEntry);
    this.setState({ diaryEntries: updatedDiaryEntries });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="App">
            <Diary onAddEntry={this.addEntry.bind(this)} />
            <br />
            <DiaryTable diaryEntries={this.state.diaryEntries} />
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
};

export default DiaryApp;